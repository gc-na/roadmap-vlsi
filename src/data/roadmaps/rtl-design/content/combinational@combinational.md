# Combinational

Combinational logic describes circuits whose outputs depend only on the current values of their inputs, with no memory of past states. In RTL, combinational behavior is described using `assign` statements for continuous assignments, or `always @(*)` (Verilog) / `always_comb` (SystemVerilog) blocks for procedural combinational logic. Typical examples include multiplexers, decoders, adders, comparators, and ALUs — building blocks that show up repeatedly in datapath design.

A critical coding discipline is avoiding unintentional latches. In an `always` block describing combinational logic, every output signal must be assigned a value on every possible path through the code; if a `case` statement is missing a default branch, or an `if` has no `else`, the synthesizer infers a latch to hold the previous value when that path is taken. SystemVerilog's `always_comb` and tools' lint checks help catch this class of bug early, but understanding why it happens — incomplete sensitivity coverage in the Boolean function — is essential.

Combinational logic also defines the propagation delay between sequential elements: the longest combinational path between a launching flip-flop and a capturing flip-flop is the critical path that limits the clock frequency. Writing RTL with awareness of logic depth (e.g., avoiding excessively long chains of nested conditionals or arithmetic operations in one cycle) directly impacts whether synthesis can meet timing. Common patterns worth mastering include priority encoders via `if-else if` chains versus parallel `case` statements, ternary operators for simple muxes, and structural composition of combinational blocks via module instantiation.

Finally, combinational circuits must be free of unintended feedback loops; any path from an output back to an input of the same combinational cloud without passing through a register creates a combinational loop, which simulators and synthesis tools handle poorly and which almost always indicates a design error.

Visit the following resources to learn more:

- [@book@Digital Design and Computer Architecture by Harris and Harris](https://www.amazon.com/s?k=Digital+Design+and+Computer+Architecture+Harris+Harris)
- [@course@verilog combinational logic design](https://www.udemy.com/courses/search/?q=verilog+combinational+logic+design)
- [@video@combinational logic verilog always block](https://www.youtube.com/results?search_query=combinational+logic+verilog+always+block)
- [@article@combinational logic](https://vlsi.kr/?s=combinational+logic)
