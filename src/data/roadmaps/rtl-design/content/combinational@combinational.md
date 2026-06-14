# Combinational Logic

Combinational logic describes circuits whose outputs depend only on current input values, with no memory of past states. In RTL, combinational behavior is described using `assign` statements or `always @(*)` (Verilog) / `always_comb` (SystemVerilog) blocks. Examples include multiplexers, decoders, adders, comparators, and ALUs—building blocks that appear repeatedly in datapath design. Each combinational path's propagation delay directly limits clock frequency; the longest path is the critical path.

A critical discipline is avoiding unintentional latches. In an `always` block, every output must be assigned on every possible path; if a `case` statement lacks a `default` or an `if` has no `else`, the synthesizer infers a latch to hold the previous value. This happens because of incomplete Boolean function coverage. SystemVerilog's `always_comb` and lint rules help catch this early, but understanding the root cause—incomplete sensitivity coverage—is essential for writing correct RTL.

Logic depth directly impacts timing closure. Excessively long chains of conditionals or arithmetic operations in one cycle prevent synthesis from meeting timing. Smart RTL design keeps combinational paths shallow through careful structuring. Priority encoders via `if-else if` chains differ from parallel `case` statements in logic depth and area trade-offs. Ternary operators efficiently implement simple multiplexers. Structural composition of combinational blocks via module instantiation balances readability with optimization opportunities.

Combinational circuits must be free of unintended feedback loops. Any path from an output back to an input without passing through a register creates a combinational loop—a design error that simulators and synthesis tools handle poorly. Detecting loops requires careful architectural review.

## Key Concepts
- Combinational vs. sequential behavior and synthesis rules
- Unintentional latch inference and complete assignment discipline
- Logic depth and critical path timing
- Combinational loop detection
- Priority encoding and multiplexer trade-offs

## Resume Tips
- Show experience detecting and fixing unintentional latch bugs
- Highlight timing-driven RTL restructuring (depth reduction, pipelining decisions)
- Discuss architectural choices for combinational blocks (synthesis quality impact)
- Mention lint rule enforcement and peer-review practices for combinational correctness

Visit the following resources to learn more:

- [Book] Digital Design and Computer Architecture by Harris and Harris(https://www.amazon.com/s?k=Digital+Design+and+Computer+Architecture+Harris+Harris)
- [Coursera] verilog combinational logic design(https://www.udemy.com/courses/search/?q=verilog+combinational+logic+design)
- [YouTube] combinational logic verilog always block(https://www.youtube.com/results?search_query=combinational+logic+verilog+always+block)
