# CMOS Basics

Every step of the physical design flow ultimately manipulates CMOS transistors, so understanding how NMOS and PMOS devices combine into logic gates is foundational. A CMOS inverter pairs a PMOS pull-up transistor (connected to VDD) with an NMOS pull-down transistor (connected to VSS), driven by the same gate signal so that exactly one of the two conducts for any steady input, giving CMOS its characteristic low static power consumption. Stacking and combining these transistor pairs forms NAND, NOR, and more complex gates, and the relative sizing (W/L ratios) of PMOS versus NMOS devices determines drive strength, rise/fall time symmetry, and ultimately the timing characteristics that physical design tools optimize against.

For a PD engineer, CMOS fundamentals translate directly into practical decisions: transistor threshold voltage (Vt) flavors (low-Vt, regular-Vt, high-Vt) trade off speed against leakage power, and PD tools select among these flavors during optimization to meet timing while controlling power. Gate capacitance, drain capacitance, and channel resistance determine cell delay and the slew rate seen at each net, which is why placement and routing decisions (which affect wire length and load capacitance) feed back into timing closure. Short-channel effects, velocity saturation, and subthreshold leakage become increasingly significant at advanced nodes, influencing why modern designs rely heavily on multi-Vt libraries and why static and dynamic power analysis are integral parts of signoff.

Beyond individual gates, CMOS technology defines the physical layers a PD engineer works with daily: diffusion (active) regions, polysilicon gates, contacts, and the multiple layers of metal interconnect stacked above the transistors. Understanding the n-well/p-well structure and how standard cells are built on a common height grid (with VDD and VSS rails at the top and bottom) explains why standard cell rows abut the way they do, and why power grid design must align with these cell-level rails. A solid grasp of CMOS device physics also clarifies why scaling brings benefits (smaller, faster, lower-power gates) alongside challenges (increased variability, leakage, and routing congestion) that physical design must manage.

Visit the following resources to learn more:

- [@book@CMOS VLSI Design: A Circuits and Systems Perspective](https://www.amazon.com/s?k=CMOS+VLSI+Design+A+Circuits+and+Systems+Perspective+Weste+Harris)
- [@course@CMOS VLSI design fundamentals](https://www.udemy.com/courses/search/?q=CMOS+VLSI+design+fundamentals)
- [@video@CMOS inverter and logic gates explained](https://www.youtube.com/results?search_query=CMOS+inverter+and+logic+gates+explained)
- [@article@CMOS basics](https://vlsi.kr/?s=CMOS+basics)
