# Extraction

Parasitic extraction (PEX) generates a netlist of resistances and capacitances (and, for high-frequency designs, inductances) introduced by the actual layout geometry — interconnect, vias, and device-level routing — that are absent from the pre-layout schematic. For analog circuits, these parasitics are not second-order effects to be ignored; a few femtofarads of extra capacitance on a high-impedance node in an op-amp can shift a pole enough to degrade phase margin, and resistance in a current mirror's source connection can introduce systematic offset.

RC extraction tools (such as Calibre xRC, StarRC) read the layout (GDS) along with the parasitic technology file and produce a SPICE-compatible netlist annotated with extracted parasitic elements, which can be back-annotated onto the original schematic netlist for post-layout simulation. Extraction accuracy depends on the level of detail requested: "RC" extraction captures resistance and capacitance, while full "RCC" or coupled-capacitance extraction also captures cross-coupling between adjacent nets — important for noise-sensitive nodes near switching digital signals or clock lines, where coupling capacitance can inject substantial noise.

For analog designers, the most critical parasitics to scrutinize are those on high-impedance, high-gain, or matching-critical nodes: gate nodes of differential pairs (extra capacitance affects bandwidth and noise), drain nodes in cascode stages (affects pole locations and stability), and the routing between matched devices (asymmetric parasitic capacitance/resistance breaks matching that was carefully achieved in layout). Reviewing the extracted netlist for unexpectedly large parasitic values on these nodes — and tracing them back to specific layout geometry — is a standard step before committing to post-layout simulation, since extraction runs can be time-consuming and iterating on layout late in the flow is costly.

Visit the following resources to learn more:

- [@book@CMOS Mixed-Signal Circuit Design](https://www.amazon.com/s?k=CMOS+Mixed-Signal+Circuit+Design+Baker+parasitic+extraction)
- [@course@parasitic extraction analog IC layout](https://www.udemy.com/courses/search/?q=parasitic+extraction+analog+IC+layout)
- [@video@RC parasitic extraction analog layout](https://www.youtube.com/results?search_query=RC+parasitic+extraction+analog+layout)
- [@article@parasitic extraction analog](https://vlsi.kr/?s=parasitic+extraction+analog)
