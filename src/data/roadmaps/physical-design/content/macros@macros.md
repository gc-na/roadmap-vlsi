# Macro Placement and Integration

Macros are large, pre-designed blocks placed into the floorplan as fixed-size, fixed-shape objects — most commonly SRAM/register-file memory compilers, analog/mixed-signal IP, PLLs, I/O cells, or hardened sub-blocks from a previous design. Unlike standard cells, macros cannot be resized or reshaped by the PD tool; instead, the engineer must decide where to place them, how to orient them (including mirroring/rotation), and how much "halo" or keep-out margin to reserve around them for routing channels, power straps, and blockages. Macro placement is one of the highest-leverage decisions in floorplanning because it shapes the entire layout: it determines where standard cell rows can exist, where routing congestion will concentrate, and how long the wires connecting macros to logic will be — a poor placement can add 20–30% wirelength compared to an optimized layout.

Good macro placement considers several factors together: minimizing wirelength to the logic that connects most heavily to each macro (especially for timing-critical interfaces like memory address buses or output data paths), aligning macro pins with convenient metal layers and orientations to ease routing (e.g., placing macros so their M1 pins face into the standard cell area), grouping related macros (e.g., multiple identical memory banks) into regular, tiled patterns that simplify power grid design and reduce fragmentation, and leaving enough spacing between macros and die edge for routing channels and power straps without creating unroutable slivers or isolated cell islands. Floorplanning tools like Innovus and ICC2 include macro placement guidance based on wirelength and congestion prediction, but final placement often requires manual refinement to handle design-specific constraints.

Macros interact heavily with the power grid: each macro has its own power/ground pins that must be independently verified against EM/IR constraints, and they require either localized power rings or connection to main power straps through via fields. Macro blockage (defining which metal layers are blocked by the macro footprint and which are allowed for routing over the macro) is critical — under-specifying blockage can lead to DRC violations when the router attempts to place metal over the macro, while over-specifying wastes routing resources. In hierarchical designs with multiple macro instances, placement decisions are made early and typically locked, since moving a macro late in the flow ripples through floorplanning, power grid, CTS, and routing. Macro keep-out zones or halos (typically 5–50 µm buffers around the macro boundary) are often enforced to ensure routing has adequate channels and to prevent signal integrity issues from aggressor nets routed too close.

Physical verification around macros requires special attention: LVS checks must verify macro pin connectivity, DRC checks must handle any macro blockage or custom design rule modules, and parasitic extraction must correctly model coupling between routed signals and the macro's internal structure. Macro power planning (local decoupling, strap connections) can dominate the power grid area budget; at 5nm and below, designs may dedicate 20–30% of core area to macros (memories and IP), leaving only 50–70% for logic, making macro placement and routing around them critical for achievable density.

## Key Concepts

- **Fixed-Size Blocks**: Macros (SRAMs, analog IP, PLLs) cannot be resized; placement strategy determines layout quality and routability.
- **Wirelength Minimization**: Macro placement significantly affects total wirelength; poor placement can add 20%+ wirelength versus optimized layout, degrading timing and congestion.
- **Macro Halos and Keep-Out**: Buffers (5–50 µm) around macros reserve routing space and prevent signal integrity issues; defined in floorplanning and enforced during placement.
- **Power Ring/Strap Integration**: Each macro requires dedicated power/ground pins connected to chip-level power grid; local rings or straps add significant area overhead.
- **Blockage Definition**: Metal-layer blockage prevents routing over macro footprint; must be accurately specified to enable routing without DRC violations.

## Resume Tips

- **Quantify Placement Quality**: Describe a macro placement decision that improved metrics (e.g., "Reorganized memory placement to reduce average wirelength by 18% and improve routing completion from 88% to 96%").
- **Show Floorplan Exploration**: Explain multiple candidate floorplans you evaluated for a design with many macros, discussing trade-offs (congestion vs. area vs. power distribution).
- **Detail Power Integration**: Describe how you connected macro power pins to chip-level power grid, mentioning via stitching, EM analysis, or local decap placement around macros.

Visit the following resources to learn more:

- [Book] Physical Design Essentials: An ASIC Design Implementation Perspective by Sait & Youssef(https://www.amazon.com/s?k=Physical+Design+Essentials+ASIC+Design+Implementation)
- [Book] Floorplanning for Physical Design by Dutta & Gaikwad(https://www.amazon.com/s?k=floorplanning+physical+design)
- [Coursera] Chip Floorplanning and Macro Placement Strategy(https://www.udemy.com/courses/search/?q=chip+floorplanning+macro+placement)
- [YouTube] Macro placement and floorplan optimization in ASIC design(https://www.youtube.com/results?search_query=macro+placement+floorplan+optimization+ASIC)
