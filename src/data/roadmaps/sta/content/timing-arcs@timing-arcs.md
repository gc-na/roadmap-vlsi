# Timing Arcs

A timing arc describes the delay relationship between an input pin (or clock pin) and an output pin of a cell, as characterized in the standard cell library (Liberty .lib format). Each arc is indexed by the input transition time (slew) and the output load (capacitance), and the resulting delay and output slew are stored in lookup tables generated through SPICE-level characterization, typically called NLDM (Non-Linear Delay Model) tables. The NLDM model is the industry standard for most cell libraries and captures delay as a 2D function of input slew and output load, enabling accurate delay computation without full SPICE simulation during STA.

For higher accuracy at advanced nodes where waveform shape effects become significant, libraries may use CCS (Composite Current Source) or ECSM (Effective Current Source Model) delay models instead of or in addition to NLDM. These models capture not just the delay value but also the shape of the output waveform, allowing more accurate propagation of slew through cascaded gates. The tradeoff is that CCS/ECSM require more complex characterization and have higher memory/compute overhead during STA, so they are typically used selectively for critical or high-sensitivity paths rather than universally across the entire design.

Timing arcs are classified by type: combinational arcs (e.g., input A to output Z of a NAND gate) describe propagation delay; setup and hold arcs are constraint arcs that define the timing relationship between a clock pin and a data pin of a sequential element; and recovery/removal arcs apply to asynchronous set/reset pins relative to the clock. Each arc also specifies a sense — positive unate, negative unate, or non-unate — describing whether a rising input causes a rising or falling output (or both). A positive-unate arc propagates edge transitions directly (rising input → rising output), while a negative-unate arc inverts them (rising input → falling output). Non-unate arcs (like a multiplexer with both rising and falling outputs for a single input) require more complex handling during graph traversal.

During STA, the tool walks through the netlist computing arc delays for every cell and interconnect segment along a path, summing them to get the total path delay. The arc delay is looked up from the library table based on the input slew and output load values at each cell, and the output slew is also computed for use as the input slew for downstream cells. Interconnect delay is computed separately using RC extraction and a delay model (such as the Elmore delay approximation or full RC network analysis via AWE/SPICE-based reduction). The accuracy of these arc-based delay calculations directly determines the accuracy of the entire STA run, which is why library characterization quality and the choice of delay model (NLDM vs. CCS/ECSM) matter significantly at advanced process nodes where waveform shape effects become non-negligible.

## Key Concepts

- Timing arcs: input → output delay relationships indexed by slew and load
- NLDM (2D lookup tables) vs. CCS/ECSM (waveform-aware models) for delay calculation
- Combinational arcs (propagation) vs. constraint arcs (setup, hold, recovery, removal)
- Unate sense (positive, negative, non-unate) determines edge transition propagation
- Arc accuracy directly impacts STA validity; library characterization quality is critical

## Resume Tips

- On your resume: demonstrate library work understanding — "analyzed timing arc characterization across 40+ cell types in 5nm PDK; validated NLDM tables against SPICE corner cases and identified 12% delay headroom opportunity through CCS model evaluation on 50 critical paths."
- In interviews: explain the difference between NLDM and CCS models, when you would use each, and the tradeoff between accuracy and compute cost.
- Be ready to discuss unate behavior: explain why cell library characterization must capture rise/fall asymmetry and how it affects path computation.

Visit the following resources to learn more:

- [Book] Static Timing Analysis for Nanometer Designs(https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [Coursera] Standard Cell Library and Liberty Format(https://www.coursera.org/search?query=Liberty+standard+cell+library+characterization)
- [YouTube] Liberty Timing Arcs - NLDM and CCS(https://www.youtube.com/results?search_query=Liberty+timing+arcs+NLDM+CCS+explained)
- [Article] Delay Modeling in Digital IC Design(https://www.amazon.com/s?k=delay+modeling+VLSI+design)
