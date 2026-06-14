# Layers

Modern digital ICs are built from a stack of physical layers fabricated sequentially: an active/diffusion layer where transistors are formed, a polysilicon (or gate) layer defining transistor gates, contact layers connecting devices to the first metal, and then a series of metal interconnect layers (M1 through M10+ in advanced nodes) separated by vias. Lower metal layers (M1, M2) are typically thinner and finer-pitched, used for local cell-internal routing and standard cell pin connections, while upper layers (M6 and above) are thicker, wider-pitched, and used for global signal routing, clock distribution, and power delivery because their lower resistance better suits long-distance, high-current connections.

Each metal layer has a preferred routing direction — alternating horizontal and vertical — enforced by the technology's design rules to simplify via placement and reduce cross-layer DRC complexity. Layer-specific design rules govern minimum width, minimum spacing, minimum area, and via enclosure requirements, and these rules tighten significantly at advanced nodes, often requiring double-patterning or self-aligned multi-patterning techniques that further constrain allowed shapes and spacings on the most congested layers. Physical design tools must track which layers are available for routing, their resistance/capacitance per unit length (used for RC extraction and timing), and any layer-specific antenna or density rules that signoff checks will enforce.

For a PD engineer, layer stack decisions ripple through the entire flow: power grid straps are typically placed on upper metal layers for low resistance (affecting IR drop), clock trees often use dedicated layers to control skew and shielding, and signal routing congestion is managed by balancing layer usage across the stack. Understanding which layers a particular technology reserves for redistribution layers (RDL), bump connections, or special purposes (like local interconnect or buried power rails in newer nodes) is essential when planning floorplans, pin assignments, and routing strategies, since the layer stack ultimately constrains achievable density, performance, and power integrity.

Visit the following resources to learn more:

- [@book@CMOS VLSI Design: A Circuits and Systems Perspective](https://www.amazon.com/s?k=CMOS+VLSI+Design+A+Circuits+and+Systems+Perspective+Weste+Harris)
- [@course@IC layout and metal stack basics](https://www.udemy.com/courses/search/?q=IC+layout+metal+stack+basics)
- [@video@metal layer stack in chip design explained](https://www.youtube.com/results?search_query=metal+layer+stack+in+chip+design+explained)
- [@article@metal layers VLSI](https://vlsi.kr/?s=metal+layers)
