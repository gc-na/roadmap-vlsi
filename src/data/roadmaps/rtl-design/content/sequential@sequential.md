# Sequential Logic

Sequential logic introduces memory: outputs depend on both current inputs and stored state, updated relative to a clock signal. The fundamental storage elements are flip-flops (edge-triggered, typically D flip-flops in RTL) and latches (level-sensitive). In synthesizable RTL, sequential behavior is described with `always @(posedge clk)` (Verilog) or `always_ff @(posedge clk)` (SystemVerilog) blocks, where signals assigned inside become registers synchronized to the clock edge.

A core distinction every RTL designer must internalize is blocking (`=`) versus non-blocking (`<=`) assignments. For sequential logic, non-blocking assignments are standard because they model simultaneous clock-edge-triggered updates correctly: all right-hand-side values are sampled at the clock edge before any left-hand-side updates, matching real hardware. Using blocking assignments in clocked `always` blocks creates simulation/synthesis mismatches and race conditions, especially when registers depend on each other.

Sequential circuits form the basis for counters, shift registers, accumulators, and pipeline stages. Design requires reasoning about setup and hold margins, clock-to-Q delay, and maximum operating frequency determined by the slowest register-to-register path. Synchronous design—where all storage elements are clocked by the same or phase-aligned clock—dominates because it makes timing analysis tractable. Asynchronous feedback or gated clocks introduce hazards that complicate STA and verification, requiring careful CDC and reset analysis.

Registers act as timing boundaries that break long combinational paths into pipeline stages. Understanding this register-combinational relationship bridges to pipelining, retiming, and clock domain crossing topics. A well-structured sequential design separates state update (sequential block) from next-state/output computation (combinational block), enabling reusability and maintainability.

## Key Concepts
- Edge-triggered vs. level-sensitive storage
- Blocking vs. non-blocking assignment semantics
- Setup and hold time margins
- Register-to-register timing paths
- Synchronous design and clock relationships

## Resume Tips
- Highlight experience writing correct non-blocking assignments and avoiding race conditions
- Discuss timing-driven register insertion for closure (pipelining decisions)
- Show understanding of setup/hold analysis and path slack calculation
- Mention clock gating or domain crossing challenges you've resolved

Visit the following resources to learn more:

- [Book] Digital Design and Computer Architecture by Harris and Harris(https://www.amazon.com/s?k=Digital+Design+and+Computer+Architecture+Harris+Harris)
- [Coursera] verilog sequential logic flip flops(https://www.udemy.com/courses/search/?q=verilog+sequential+logic+flip+flops)
- [YouTube] blocking vs non-blocking assignments verilog(https://www.youtube.com/results?search_query=blocking+vs+non-blocking+assignments+verilog)
