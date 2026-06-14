# Metal Layers and Design Rules

Modern digital ICs are built from a stack of physical layers fabricated sequentially: an active/diffusion layer where transistors are formed, a polysilicon (or gate) layer defining transistor gates, contact layers connecting devices to the first metal, and then a series of metal interconnect layers (M1 through M12+ in advanced nodes) separated by vias. Lower metal layers (M1, M2) are typically thinner and finer-pitched, used for local cell-internal routing and standard cell pin connections, while upper layers (M9, M10) are thicker, wider-pitched, and used for global signal routing, clock distribution, and power delivery because their lower resistance better suits long-distance, high-current connections.

Each metal layer has a preferred routing direction — alternating horizontal and vertical — enforced by the technology's design rules to simplify via placement and reduce cross-layer DRC complexity. Layer-specific design rules govern minimum width, minimum spacing, minimum area, and via enclosure requirements, and these rules tighten significantly at advanced nodes, often requiring double-patterning or self-aligned multi-patterning (SAMP) techniques that further constrain allowed shapes and spacings on the most congested layers. At 7nm and below, rules also include cut-spacing constraints for via arrays and metal density gradients to ensure uniform CMP behavior across the wafer. Physical design tools must track which layers are available for routing, their resistance/capacitance per unit length (used for RC extraction and timing), and any layer-specific antenna or density rules that signoff checks will enforce.

For a PD engineer, layer stack decisions ripple through the entire flow: power grid straps are typically placed on upper metal layers (M9–M10) for low resistance and improved IR drop distribution, clock trees often use dedicated layers or multiple parallel runs to control skew and enable shielding, and signal routing congestion is managed by balancing layer usage across the stack. Understanding which layers a particular technology reserves for redistribution layers (RDL), bump connections, local interconnect (LI), or special purposes like buried power rails in newer nodes is essential when planning floorplans, pin assignments, and routing strategies.

Via sizing and stacking strategies directly impact power integrity and manufacturability. A single via may have a resistance in the 1–10 mΩ range (depending on node and via size), so high-current nets like VDD and VSS require multiple parallel vias (stacked vias) to maintain acceptable IR drop. Violating via stacking rules (e.g., placing vias too close together or in forbidden patterns) will be caught by DRC tools like Calibre or ICV. The interplay between metal pitch, track pitch, and via size determines routability: tighter pitches allow denser designs but make meeting DRC constraints more challenging, particularly during global and detailed routing phases in tools like Innovus or ICC.

## Key Concepts

- **Metal Stack Hierarchy**: Lower metals (M1–M3) handle local, fine-pitch routing; upper metals (M9+) carry global signals and power with low resistance for long-distance distribution.
- **Design Rules by Layer**: Each layer has minimum width, spacing, area, and via enclosure rules; double-patterning and density requirements tighten at advanced nodes.
- **Preferred Direction**: Alternating horizontal/vertical routing directions reduce DRC complexity and enable efficient via placement; violations prevent clean signoff.
- **Via Stacking**: Multiple vias in parallel on high-current nets reduce parasitic resistance; patterns and spacing must follow technology design rules.
- **RC Parasitic Extraction**: Layer-specific resistance and capacitance per unit length determine net delay and coupling noise; used in STA and sign-off.

## Resume Tips

- **Quantify DRC Closure**: Mention the number and type of violations fixed (e.g., "Resolved 5,000+ via spacing violations and 300+ density gradient violations using Calibre fix scripts in a 5nm design").
- **Describe Layer Optimization**: Explain how you assigned routing layers to manage congestion (e.g., "Reserved M3–M4 for local signals, M5–M8 for intermediate routing, and M9–M10 for power to achieve 92% routing completion").
- **Show Parametric Understanding**: Demonstrate that you understand resistance, capacitance, and DRC trade-offs — e.g., "Widened M1 power rails by 10% to reduce local IR drop by 15% while monitoring area impact."

Visit the following resources to learn more:

- [Book] CMOS VLSI Design: A Circuits and Systems Perspective by Harris & Weste(https://www.amazon.com/s?k=CMOS+VLSI+Design+A+Circuits+and+Systems+Perspective+Weste+Harris)
- [Book] Physical Design Essentials(https://www.amazon.com/s?k=physical+design+essentials+VLSI)
- [Coursera] IC Layout and Metal Stack Design(https://www.udemy.com/courses/search/?q=IC+layout+metal+stack+design)
- [YouTube] Metal layer stack and via design in VLSI(https://www.youtube.com/results?search_query=metal+layer+stack+via+design+VLSI)
