# Power Grid

The power grid (or power delivery network, PDN) is the network of metal structures that distributes VDD and VSS from the chip's power pads to every standard cell, macro, and I/O across the die. It is typically built as a hierarchical mesh: rings around the core and around macros on upper metal layers, vertical and horizontal straps running across the die at regular intervals on the topmost routable layers (where resistance is lowest), and finally the standard cell rail layer (usually M1) that directly powers each cell row. Vias stitch these layers together at every intersection, so the grid forms a low-resistance mesh rather than a single path, reducing the effective resistance seen by any given cell.

Power grid design is fundamentally a trade-off between IR drop, electromigration (EM), and routing resource consumption. Wider or more frequent straps lower resistance (reducing both static and dynamic IR drop) and increase the current each segment can carry without violating EM limits, but they consume routing tracks that would otherwise be available for signal nets, increasing congestion. The grid must be designed for worst-case switching activity — dynamic IR drop during high-activity clock edges can be significantly worse than static IR drop — and tools typically perform vectorless or vector-based dynamic power analysis to verify the grid meets voltage drop budgets (often a few percent of VDD) across the chip.

Power grid implementation also includes power straps for macros (which need their own ring or strap connections matching the macro's pin locations), decoupling capacitor (decap) cells placed near switching-heavy regions to dampen voltage transients, and special considerations for multi-voltage designs with level shifters and power switches at domain boundaries. The power grid is typically planned early in floorplanning since it consumes routing resources on every layer it touches and must be in place before detailed placement and routing proceed; any later changes to the grid (e.g., adding straps to fix an IR drop violation found in signoff) can require re-routing in affected regions, making early, conservative power grid planning combined with iterative IR drop/EM signoff checks the standard practice.

Visit the following resources to learn more:

- [@book@Power Integrity Analysis and Management for Integrated Circuits](https://www.amazon.com/s?k=Power+Integrity+Analysis+and+Management+for+Integrated+Circuits)
- [@course@power grid design ASIC](https://www.udemy.com/courses/search/?q=power+grid+design+ASIC)
- [@video@power delivery network PDN chip design](https://www.youtube.com/results?search_query=power+delivery+network+PDN+chip+design)
- [@article@power grid PDN](https://vlsi.kr/?s=power+grid)
