# Power Grid and Power Delivery Network

The power grid (or power delivery network, PDN) is the network of metal structures that distributes VDD and VSS from the chip's power pads to every standard cell, macro, and I/O across the die. It is typically built as a hierarchical mesh: rings around the core and around macros on upper metal layers (M9–M10), vertical and horizontal straps running across the die at regular intervals on the topmost routable layers (where resistance and inductance are lowest), and finally the standard cell rail layer (usually M1–M2) that directly powers each cell row. Vias stitch these layers together at every intersection; via stacking (multiple vias in parallel) on power nets significantly reduces parasitic resistance, forming a low-impedance mesh rather than a single current path.

Power grid design is fundamentally a trade-off between IR drop, electromigration (EM), and routing resource consumption. Wider or more frequent straps lower resistance (reducing both static and dynamic IR drop) and increase the current each segment can carry without violating EM limits, but they consume routing tracks that would otherwise be available for signal nets, increasing congestion. The grid must be designed for worst-case switching activity (peak di/dt during clock edges or datapath bursts) — dynamic IR drop during high-activity periods can be 2–3× worse than static drop — and tools like PrimeTime or Voltus perform dynamic power analysis to verify the grid meets voltage drop budgets (typically 2–5% of VDD) across all corners and workpoints. Signoff power analysis includes EM verification to ensure current density on each metal segment stays within process limits (typically 1–5 mA/µm² depending on metal layer and node).

Power grid implementation also includes power straps for macros (which need ring or strap connections matching the macro's pin locations), decoupling capacitor (decap) cells placed near switching-heavy regions to dampen voltage transients during peak current injection, and special considerations for multi-voltage designs with level shifters and power switches at domain boundaries that require isolation and separate power distribution. Straps on upper layers run at larger pitch (typically 30–100 µm at 7nm) and must account for the multiple voltage domains and their switching patterns. The power grid is typically planned early in floorplanning since it consumes metal resources on every layer and must be locked before detailed placement and routing; any changes late in the flow (e.g., adding straps to fix an IR drop violation in signoff) can require re-routing, making conservative planning and iterative IR/EM sign-off the standard practice.

Modern designs also employ on-die voltage regulators (OVRs) or switch capacitor power delivery; understanding how these special structures interact with the traditional power grid (including supply sequencing, power domain isolation, and bulk capacity) is increasingly important at 5nm and below. Decap placement strategies evolve too — distributed caps reduce peak transient voltage better than centralized placement, but require careful selection and placement to avoid creating DRC violations or routing congestion.

## Key Concepts

- **Hierarchical Power Mesh**: Upper metal layers carry global power straps; intermediate layers carry regional distribution; M1 rail connects directly to cell rows, forming multi-level hierarchy with decreasing via resistance.
- **IR Drop Budgeting**: Static and dynamic IR drop must stay within budget (typically 2–5% of VDD); dynamic IR drop during peak switching dominates and is verified using power sign-off tools like Voltus or PrimeTime.
- **Electromigration (EM) Constraints**: Current density on each metal segment must stay below process limits (1–5 mA/µm²); exceeded during high-power workpoints and requires strap sizing or re-routing.
- **Via Stitching**: Multiple parallel vias on power nets reduce parasitic resistance; via patterns, spacing, and stacking follow design rules and impact grid effectiveness.
- **Decap Placement & Strategy**: Decoupling capacitors dampen voltage transients; distributed placement near high-activity regions is more effective than centralized, but requires area and DRC management.

## Resume Tips

- **Quantify PDN Design**: Describe specific IR drop and EM closure (e.g., "Designed hierarchical power grid with 95 µm-pitch straps on M9/M10, achieving 3.2% peak dynamic IR drop and zero EM violations across all workpoints").
- **Show Trade-off Decisions**: Explain how you balanced power grid metal consumption against signal routing congestion (e.g., "Reduced strap pitch from 120 to 95 µm in high-activity region, accepting 2% congestion increase to meet IR drop budget").
- **Demonstrate Signoff Integration**: Describe how you used power analysis tools (Voltus, PrimeTime) to verify grid performance and identify IR drop hotspots requiring additional straps or decap placement.

Visit the following resources to learn more:

- [Book] Power Integrity Analysis and Management for Integrated Circuits(https://www.amazon.com/s?k=Power+Integrity+Analysis+and+Management+Integrated+Circuits)
- [Book] Fundamentals of Power Integrity for Power Delivery Networks(https://www.amazon.com/s?k=Fundamentals+Power+Integrity+PDN)
- [Coursera] Advanced Power Grid Design and Analysis(https://www.udemy.com/courses/search/?q=power+grid+design+ASIC+PDN)
- [YouTube] Power delivery network PDN design and optimization(https://www.youtube.com/results?search_query=power+delivery+network+PDN+design+optimization)
