# Verilog

Verilog is the most widely used hardware description language for RTL design and remains the syntactic foundation that SystemVerilog extends. As an RTL designer, Verilog provides core constructs for describing hardware structurally and behaviorally: modules with ports, `wire` and `reg` data types, continuous assignments (`assign`), and procedural blocks (`always`, `initial`) that model combinational and sequential logic. Mastering Verilog is essential for reading legacy designs and understanding synthesis foundations.

Writing synthesizable Verilog requires strict discipline about which constructs map to hardware. `initial` blocks, `#delay` statements, and system tasks (`$display`, `$monitor`) are testbench-only. Within `always` blocks, the choice between blocking and non-blocking assignments, sensitivity list completeness (or `@*`), and `case`/`if-else` structure directly determine the synthesizer's gate-level netlist. Incomplete assignments create latches; wrong assignment types cause race conditions. "Synthesizable Verilog" is a restricted subset with predictable semantics.

Parameters for configurable widths and `generate`/`for` blocks for replicating structures (e.g., parameterized register arrays or ripple-carry adders) enable reusable, scalable RTL. Port connection rules (named vs. positional), bit-width matching, and signed/unsigned arithmetic semantics are critical. Sign extension errors and width mismatches create bugs that simulate "correctly" but synthesize differently—a common source of post-silicon failures.

Verilog (IEEE 1364) lacks safety features added in SystemVerilog, requiring stricter lint disciplines to catch implicit declarations, ambiguous constructs, and latch inference. Most production RTL today uses SystemVerilog but within a synthesizable Verilog-like subset. Understanding Verilog's limitations drives modern HDL choices.

## Key Concepts
- Synthesizable vs. simulation-only constructs
- Module hierarchies and parametrization
- `generate` blocks for structural replication
- Blocking vs. non-blocking assignment semantics
- Bit-width, sign extension, and arithmetic semantics

## Resume Tips
- Highlight experience writing clean, lintable Verilog for synthesis
- Show mastery of parameter/generate for scalable, reusable modules
- Discuss bit-width analysis and sign-extension bug fixes
- Mention lint rule enforcement and design review practices

Visit the following resources to learn more:

- [Book] Verilog HDL by Samir Palnitkar(https://www.amazon.com/s?k=Verilog+HDL+Samir+Palnitkar)
- [Coursera] verilog hdl for beginners(https://www.udemy.com/courses/search/?q=verilog+hdl+for+beginners)
- [YouTube] verilog tutorial for rtl design(https://www.youtube.com/results?search_query=verilog+tutorial+for+rtl+design)
