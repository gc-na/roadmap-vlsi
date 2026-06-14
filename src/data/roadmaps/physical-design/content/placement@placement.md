# Placement

Placement is the stage where every standard cell from the synthesized netlist is assigned a legal location within the core area, aligned to standard cell rows and sites so that power rails, well structures, and routing tracks line up correctly. Placement happens in phases: global placement uses analytical or partitioning-based algorithms (often force-directed or quadratic/nonlinear optimization methods) to find an approximate, roughly legal arrangement that minimizes a cost function combining wirelength, timing, and congestion; legalization then snaps cells onto the row grid, resolves overlaps, and respects fixed objects like macros and blockages; and detailed placement performs local swaps and shifts to further reduce wirelength and fix remaining DRC/congestion issues.

Modern placement is timing-driven and congestion-aware: the tool runs incremental timing analysis during placement to identify critical paths and pulls cells on those paths closer together, while simultaneously estimating routing congestion (based on pin density and net counts per region) to avoid creating areas where the router cannot fit all required wires. Placement also accounts for power — grouping cells by power domain for multi-voltage designs, respecting voltage area boundaries, and considering switching activity to avoid hotspots that worsen dynamic IR drop. Cell-level decisions made during placement, such as which drive strength or Vt flavor variant of a cell to use, directly affect both the placement's timing quality and the area/power trade-off.

Placement quality has an outsized effect on everything downstream: a placement with poor timing correlation leads to difficult CTS and routing closure, excessive local congestion forces the router into longer detours that add parasitic capacitance and degrade timing further, and uneven cell density can create hold-time issues or hotspots. Engineers typically evaluate placement using metrics like total wirelength, congestion maps (overflow per routing grid cell), timing QoR (worst negative slack, total negative slack), and cell density histograms, iterating on floorplan, pin assignment, or placement constraints (such as keepout regions, fences, or guides) before committing to clock tree synthesis and routing.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Physical Design Essentials: An ASIC Design Implementation Perspective(https://www.amazon.com/s?k=Physical+Design+Essentials+An+ASIC+Design+Implementation+Perspective+Sait+Youssef)
- [Coursera] ASIC placement and routing(https://www.udemy.com/courses/search/?q=ASIC+placement+and+routing)
- [YouTube] standard cell placement algorithm VLSI(https://www.youtube.com/results?search_query=standard+cell+placement+algorithm+VLSI)
