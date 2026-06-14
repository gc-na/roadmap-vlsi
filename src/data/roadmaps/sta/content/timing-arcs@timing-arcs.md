# Timing Arcs

A timing arc describes the delay relationship between an input pin (or clock pin) and an output pin of a cell, as characterized in the standard cell library (Liberty .lib format). Each arc is indexed by the input transition time (slew) and the output load (capacitance), and the resulting delay and output slew are stored in lookup tables generated through SPICE-level characterization, typically called NLDM (Non-Linear Delay Model) tables, or as current-source models such as CCS (Composite Current Source) or ECSM (Effective Current Source Model) for higher accuracy at advanced nodes.

Timing arcs are classified by type: combinational arcs (e.g., input A to output Z of a NAND gate) describe propagation delay; setup and hold arcs are constraint arcs that define the timing relationship between a clock pin and a data pin of a sequential element; and recovery/removal arcs apply to asynchronous set/reset pins relative to the clock. Each arc also specifies a sense — positive unate, negative unate, or non-unate — describing whether a rising input causes a rising or falling output, which determines how the tool propagates rising and falling edges through the path.

During STA, the tool walks through the netlist computing arc delays for every cell and interconnect segment along a path, summing them to get the total path delay. Interconnect delay is computed separately using RC extraction and a delay model (such as the Elmore delay approximation or full RC network analysis via AWE/SPICE-based reduction). The accuracy of these arc-based delay calculations directly determines the accuracy of the entire STA run, which is why library characterization quality and the choice of delay model (NLDM vs. CCS/ECSM) matter significantly at advanced process nodes where waveform shape effects become non-negligible.

Visit the following resources to learn more:

- [@book@Static Timing Analysis for Nanometer Designs](https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [@course@standard cell library characterization](https://www.udemy.com/courses/search/?q=standard+cell+library+liberty+timing)
- [@video@Liberty timing arcs NLDM CCS](https://www.youtube.com/results?search_query=Liberty+timing+arcs+NLDM+CCS+explained)
- [@article@timing arcs liberty](https://vlsi.kr/?s=timing+arcs)
