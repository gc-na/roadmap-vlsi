# Pins

Pin assignment in floorplanning determines where each top-level I/O signal (and, for hierarchical designs, each block-level port) is located along the die or block boundary, and on which metal layer it is accessible for routing. For a top-level chip, pin placement is heavily influenced by the package — wire-bond designs need pads arranged around the periphery matching bond-finger locations, while flip-chip/bump designs distribute pins across the die area in an array matching the bump map. For hierarchical blocks within a larger chip, pin placement on the block boundary determines how easily the parent-level floorplan can route to and from that block, making pin placement a key interface contract between hierarchical levels.

Good pin placement minimizes wirelength and congestion by locating each pin near the logic that uses it most heavily — for example, placing a memory interface's pins on the side of the block closest to the memory macro, or clustering a high-fanout bus's pins together so they can be routed as a coherent group. Pins are also assigned to specific metal layers and tracks aligned with the routing grid so that the router can connect to them without requiring awkward layer changes; mismatched pin layers between adjacent blocks force extra vias and can create local congestion at the boundary. Clock pins in particular deserve special attention, since their placement affects the starting point of the clock tree and can influence overall skew.

Pin order and spacing also matter for downstream steps: evenly distributed pins reduce the chance of routing bottlenecks near densely packed pin clusters, and reserving blockages or keep-out areas near pins prevents the placer from putting cells where they would block pin access. In flows with multiple hierarchical blocks integrated at a top level, pin placement is often iterated — an initial pin assignment is used for early floorplanning and timing budgeting, then refined based on actual connectivity and congestion seen after a first placement pass, since poor pin placement discovered late can require significant rework of both the block and its parent floorplan.

Visit the following resources to learn more:

- [@book@Physical Design Essentials: An ASIC Design Implementation Perspective](https://www.amazon.com/s?k=Physical+Design+Essentials+An+ASIC+Design+Implementation+Perspective+Sait+Youssef)
- [@course@ASIC floorplanning pin placement](https://www.udemy.com/courses/search/?q=ASIC+floorplanning+pin+placement)
- [@video@chip I/O pin placement floorplan](https://www.youtube.com/results?search_query=chip+IO+pin+placement+floorplan)
- [@article@pin placement floorplan](https://vlsi.kr/?s=pin+placement)
