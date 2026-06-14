# SystemVerilog

SystemVerilog (IEEE 1800) extends Verilog with a large set of features for both design and verification, but for RTL design specifically, the most impactful additions are stricter typing and clearer intent-expressing constructs. The `logic` type replaces `reg`/`wire` ambiguity for most signals (it can be driven by either continuous assignments or procedural blocks, though it cannot have multiple drivers), reducing a common class of declaration errors.

The `always_comb`, `always_ff`, and `always_latch` blocks replace the generic `always` block with synthesis-intent-specific variants. `always_comb` automatically infers its sensitivity list and triggers tools to flag incomplete assignments (latch inference) as warnings; `always_ff` is reserved for edge-triggered sequential logic and helps both human readers and lint tools immediately recognize register boundaries. This makes RTL self-documenting and catches a category of bugs — accidental latches, incomplete sensitivity lists — at compile or lint time rather than during simulation debug.

SystemVerilog also adds `enum` types for FSM state encoding (improving readability over raw parameter constants), packed and unpacked arrays/structs for organizing related signals (e.g., bundling a valid bit, opcode, and data fields into one struct), `interface` constructs for grouping related signals between modules, and `package` for sharing type definitions and parameters across a design hierarchy. The ternary operator, `unique`/`priority` case statement qualifiers (which also serve as assertions about case completeness and mutual exclusivity), and improved generate/parameter syntax round out the design-side feature set.

While SystemVerilog includes extensive verification features (classes, randomization, constrained-random, functional coverage), RTL designers typically use a synthesizable subset focused on these design-side improvements, while leaving the OOP/testbench features to the verification side — though understanding both is increasingly expected as design and verification roles converge.

Visit the following resources to learn more:

- [@book@SystemVerilog for Design by Stuart Sutherland](https://www.amazon.com/s?k=SystemVerilog+for+Design+Stuart+Sutherland)
- [@course@systemverilog for rtl design](https://www.udemy.com/courses/search/?q=systemverilog+for+rtl+design)
- [@video@systemverilog always_comb always_ff tutorial](https://www.youtube.com/results?search_query=systemverilog+always_comb+always_ff+tutorial)
- [@article@systemverilog](https://vlsi.kr/?s=systemverilog)
