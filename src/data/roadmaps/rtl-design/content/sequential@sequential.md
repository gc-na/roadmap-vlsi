# Sequential

Sequential logic introduces memory: outputs depend not only on current inputs but also on stored state, updated relative to a clock signal. The fundamental storage elements are flip-flops (edge-triggered, typically D flip-flops in RTL design) and latches (level-sensitive). In synthesizable RTL, sequential behavior is described with `always @(posedge clk)` (Verilog) or `always_ff @(posedge clk)` (SystemVerilog) blocks, where every signal assigned inside becomes a register.

A core distinction every RTL designer must internalize is blocking (`=`) versus non-blocking (`<=`) assignments. For sequential logic, non-blocking assignments are the standard because they model the simultaneous, clock-edge-triggered update of all flip-flops correctly — all right-hand-side values are sampled at the clock edge before any left-hand-side updates occur, matching real hardware behavior. Using blocking assignments inside a clocked `always` block can create simulation/synthesis mismatches and race conditions, especially when multiple registers depend on each other.

Sequential circuits are the basis for counters, shift registers, accumulators, and pipeline stages. Designing them requires reasoning about setup and hold time margins, clock-to-Q delay, and the maximum operating frequency determined by the slowest register-to-register path. Synchronous design — where all storage elements are clocked by the same (or related, phase-aligned) clock — is the dominant paradigm because it makes timing analysis tractable; asynchronous feedback or gated clocks introduce hazards that complicate STA and verification.

Finally, understanding the relationship between sequential elements and combinational logic — registers act as timing boundaries that break long combinational paths into pipeline stages — is the conceptual bridge to pipelining, retiming, and clock domain crossing topics covered later in RTL design.

Visit the following resources to learn more:

- [@book@Digital Design and Computer Architecture by Harris and Harris](https://www.amazon.com/s?k=Digital+Design+and+Computer+Architecture+Harris+Harris)
- [@course@verilog sequential logic flip flops](https://www.udemy.com/courses/search/?q=verilog+sequential+logic+flip+flops)
- [@video@blocking vs non-blocking assignments verilog](https://www.youtube.com/results?search_query=blocking+vs+non-blocking+assignments+verilog)
- [@article@sequential logic](https://vlsi.kr/?s=sequential+logic)
