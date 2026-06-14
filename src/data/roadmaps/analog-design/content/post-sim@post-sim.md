# Post-Sim

Post-layout simulation re-runs the same simulation suite used for schematic-level verification (DC operating point, AC/stability, transient, noise, Monte Carlo) but with the parasitic-extracted netlist, revealing how layout-induced resistance and capacitance shift performance specs from their pre-layout values. A common workflow is to compare key metrics — gain, bandwidth, phase margin, offset, noise, settling time, PSRR — pre- and post-layout, and to flag any spec that degrades beyond an acceptable margin or violates the target altogether, since the schematic-level design typically must leave headroom for exactly this degradation.

The most common post-layout surprises are bandwidth and phase margin reductions from added node capacitance (especially on high-impedance nodes), increased offset and reduced CMRR/PSRR from layout-induced mismatch (asymmetric routing, unequal parasitic loading between matched branches), and IR drop in power/ground/bias routing that shifts operating points away from their schematic values. Monte Carlo simulation combined with post-layout extraction is particularly important, since random mismatch (from device matching) interacts with systematic layout asymmetries to determine the real-world offset and yield distribution.

Post-layout simulation should also include corner analysis (process corners combined with temperature and supply voltage extremes) on the extracted netlist, since layout parasitics can shift which corner is actually worst-case for a given spec compared to schematic-level predictions. When a post-layout simulation reveals a violation, the designer must trace the discrepancy back to specific parasitic elements (using the extraction tool's cross-probing to layout) and decide between a layout fix (rerouting, resizing, re-floorplanning) or a schematic-level adjustment (adding margin, changing bias conditions) — making fast iteration between extraction, simulation, and layout edit a key productivity factor in analog design closure.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Design of Analog CMOS Integrated Circuits(https://www.amazon.com/s?k=Design+of+Analog+CMOS+Integrated+Circuits+Razavi+post+layout+simulation)
- [Coursera] post layout simulation analog IC verification(https://www.udemy.com/courses/search/?q=post+layout+simulation+analog+IC+verification)
- [YouTube] post layout simulation analog IC design(https://www.youtube.com/results?search_query=post+layout+simulation+analog+IC+design)
