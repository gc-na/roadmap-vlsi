# Standard Cells

Standard cells are the pre-designed, pre-characterized building blocks that physical design tools place and connect to implement a synthesized netlist. Each cell — an inverter, buffer, NAND, NOR, XOR, multiplexer, flip-flop, latch, or more complex combinational function — is laid out at a fixed height matching the technology's standard cell row height, with VDD and VSS rails running along the top and bottom edges so that abutting cells in a row automatically connect to the power grid. Cell widths vary based on transistor count and drive strength, but all cells in a library share consistent pin locations on specific metal layers (typically metal 1 or metal 2) and a common pitch grid that aligns with the routing tracks, enabling automated placement and routing.

A standard cell library provides multiple versions of each logic function at different drive strengths (e.g., INV_X1, INV_X2, INV_X4, INV_X8) so synthesis and optimization tools can size gates appropriately for the load they drive. Libraries are also offered across multiple threshold-voltage flavors (LVT, RVT, HVT) and sometimes multiple channel lengths, giving the tool a trade space between speed and leakage during timing and power optimization. Each cell comes with a Liberty (.lib) timing/power model describing delay, transition, and power as functions of input slew and output load, plus a physical abstract (LEF) describing pin shapes, blockages, and cell boundary geometry used by placement and routing tools.

During placement, cells are arranged into rows separated by routing channels, and legalization snaps them to the row grid while respecting spacing and well-proximity rules. Choices made at the library level — cell height (affecting row utilization and track count), pin access patterns, and the availability of multi-height cells for things like scan flops or special I/O — directly affect routability and achievable density. Engineers working on physical design need to understand cell characterization (NLDM or CCS timing models), how cell selection during synthesis and ECO affects area/power/timing trade-offs, and how filler cells, decap cells, and tap cells fit into the rows alongside functional logic.

Visit the following resources to learn more:

- [@book@Digital Integrated Circuits: A Design Perspective](https://www.amazon.com/s?k=Digital+Integrated+Circuits+A+Design+Perspective+Rabaey)
- [@course@standard cell library design](https://www.udemy.com/courses/search/?q=standard+cell+library+design)
- [@video@standard cell layout and library basics](https://www.youtube.com/results?search_query=standard+cell+layout+and+library+basics)
- [@article@standard cells](https://vlsi.kr/?s=standard+cells)
