# Routing

Routing connects every net in the placed and clock-tree-synthesized design with actual metal wires and vias across the available metal layer stack, while obeying design rules for width, spacing, and via enclosure on each layer. Routing happens in two main phases: global routing assigns each net a coarse path through a grid of routing regions (often called global routing cells or GCells), estimating which layers and tracks will be used and balancing congestion across the chip; detailed routing then converts these coarse paths into exact, DRC-clean geometry on specific tracks and layers, including via selection and any required jogs to avoid obstacles or other nets.

Routing must satisfy multiple objectives simultaneously: timing (minimizing delay on critical nets, sometimes by routing them on wider/upper layers with lower resistance, or by adding non-default rules like wider spacing for crosstalk-sensitive nets), DRC cleanliness (no shorts, spacing violations, or minimum-area violations), and signal integrity (managing crosstalk between adjacent parallel wires, especially on long nets, through shielding or spacing). Congestion — regions where more wiring demand exists than available tracks — is the primary failure mode; if global routing reports overflow in certain GCells, the design may need to go back to placement to spread cells apart, or routing blockages/guides may need adjustment. Antenna effects (charge accumulation on long metal segments during fabrication that can damage thin gate oxides before the structure is fully connected) are also checked and fixed during or after routing, typically by inserting antenna diodes or by jumper/layer-hopping techniques.

After detailed routing, the design undergoes routing-based extraction (RC extraction) to get accurate parasitics for signoff STA, and any remaining DRC violations or timing issues are fixed through post-route ECO — small, localized changes like cell resizing, buffer insertion, or net re-routing that avoid disturbing the bulk of the completed layout. Routing quality directly determines final timing closure, since the actual wire RC (not the estimated RC used during placement) is what signoff timing analysis uses, making routing one of the most consequential stages for whether a design meets its performance targets.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Physical Design Essentials: An ASIC Design Implementation Perspective(https://www.amazon.com/s?k=Physical+Design+Essentials+An+ASIC+Design+Implementation+Perspective+Sait+Youssef)
- [Coursera] ASIC routing detailed routing VLSI(https://www.udemy.com/courses/search/?q=ASIC+routing+detailed+routing+VLSI)
- [YouTube] global and detailed routing VLSI(https://www.youtube.com/results?search_query=global+and+detailed+routing+VLSI)
