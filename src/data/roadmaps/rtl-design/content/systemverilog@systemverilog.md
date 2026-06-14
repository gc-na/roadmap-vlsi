# SystemVerilog

SystemVerilog (IEEE 1800) extends Verilog with design and verification features, but for RTL, the most impactful are stricter typing and intent-expressing constructs. The `logic` type replaces `reg`/`wire` ambiguity for most signals—it can be driven by either assignments or procedural blocks (but not multiple drivers), eliminating a common class of declaration errors. `logic` is the modern, preferred type for RTL design.

The `always_comb`, `always_ff`, and `always_latch` blocks replace generic `always` with synthesis-intent-specific variants. `always_comb` automatically infers sensitivity lists and flags incomplete assignments as warnings; `always_ff` reserves edge-triggered logic and helps readers and tools immediately recognize registers. `always_latch` explicitly marks latch inference. This makes RTL self-documenting and catches accidental latches and sensitivity list errors at compile/lint time rather than simulation debug.

`enum` types improve FSM state encoding readability over raw constants. Packed/unpacked arrays and structs organize related signals (e.g., bundling valid, opcode, data). `interface` constructs group related signals between modules. `package` shares type definitions and parameters across hierarchies. `unique`/`priority` case qualifiers assert completeness and exclusivity. These features elevate RTL clarity and maintainability.

SystemVerilog includes verification features (classes, randomization, coverage), but RTL designers use a synthesizable design-side subset while verification engineers use OOP/testbench features. As roles converge, understanding both design and verification constructs is increasingly expected. A synthesis-focused coding style bridges both worlds without requiring testbench complexity.

## Key Concepts
- `logic`, `always_comb`, `always_ff` declarations
- `enum` for FSM state machines
- Packed/unpacked structures and arrays
- `interface` for bundled signal groups
- `unique`/`priority` case assertions

## Resume Tips
- Show fluency in modern synthesizable SystemVerilog (not legacy Verilog)
- Highlight use of `enum` and structures for readable, maintainable RTL
- Discuss interface design for complex protocols (bundling, self-documentation)
- Mention cross-team collaboration between design and verification using SV

Visit the following resources to learn more:

- [Book] SystemVerilog for Design by Stuart Sutherland(https://www.amazon.com/s?k=SystemVerilog+for+Design+Stuart+Sutherland)
- [Coursera] systemverilog for rtl design(https://www.udemy.com/courses/search/?q=systemverilog+for+rtl+design)
- [YouTube] systemverilog always_comb always_ff tutorial(https://www.youtube.com/results?search_query=systemverilog+always_comb+always_ff+tutorial)
