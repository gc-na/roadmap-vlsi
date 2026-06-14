# DFT Flow

The DFT flow is the sequence of steps that transforms a functional RTL design into a testable netlist with scan chains, test logic, and patterns ready for tester use. It begins early in the design cycle with testability planning: defining test clocks, test modes, scan architecture (number of chains, compression ratio), and BIST insertion points, often captured in a test protocol or DFT specification. RTL is then checked with lint and design-rule checks (DRC) for testability violations such as combinational feedback loops, gated clocks without bypass, asynchronous reset domains, and tristate buses that could cause contention during scan shift.

The core insertion step is scan synthesis, where the synthesis tool (e.g., DFT Compiler, Tessent, or Genus-based flows) replaces or augments flip-flops with scan-enabled equivalents and stitches them into one or more scan chains, typically integrated with test compression logic (EDT/decompressor and compactor) at this stage. After scan insertion, ATPG tools generate patterns targeting the chosen fault models (stuck-at, transition) using algorithms based on the netlist topology, producing pattern sets along with fault coverage reports. Memory BIST and logic BIST controllers are inserted and connected via the test access mechanism, and a JTAG TAP controller is added to provide the standard external interface for boundary scan, BIST activation, and pattern loading.

Downstream, the flow continues through physical design with DFT-aware placement and routing (scan chain reordering for routability, X-propagation checks), followed by post-layout timing-aware ATPG re-targeting to account for actual delays in at-speed patterns. Pattern formats are translated to ATE-specific formats (e.g., STIL, WGL) for production test program generation. Throughout, fault coverage, pattern count, test time, and area overhead are tracked against sign-off targets, with iterations between DFT, synthesis, and physical design teams whenever DRC violations or coverage gaps are found.

Visit the following resources to learn more:

- [@book@Essentials of Electronic Testing for Digital, Memory and Mixed-Signal VLSI Circuits](https://www.amazon.com/s?k=Essentials+of+Electronic+Testing+for+Digital+Memory+and+Mixed-Signal+VLSI+Circuits+Bushnell+Agrawal)
- [@course@DFT flow scan ATPG SoC](https://www.udemy.com/courses/search/?q=DFT+flow+scan+ATPG+SoC)
- [@video@DFT flow scan insertion ATPG tutorial](https://www.youtube.com/results?search_query=DFT+flow+scan+insertion+ATPG+tutorial)
- [@article@DFT flow](https://vlsi.kr/?s=DFT+flow)
