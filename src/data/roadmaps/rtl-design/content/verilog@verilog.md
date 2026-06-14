# Verilog

Verilog is the original hardware description language most widely used for RTL design and remains the syntactic foundation that SystemVerilog extends. As an RTL designer, Verilog gives you the core constructs for describing hardware structurally and behaviorally: modules with ports, `wire` and `reg` data types, continuous assignments (`assign`), and procedural blocks (`always`, `initial`) that model combinational and sequential logic.

Writing synthesizable Verilog requires understanding which constructs map cleanly to hardware and which are simulation-only. `initial` blocks, `#delay` statements, and certain system tasks (`$display`, `$monitor`) are useful in testbenches but are ignored or illegal in synthesis. Within `always` blocks, the choice between blocking and non-blocking assignments, the completeness of sensitivity lists (or use of `@*`), and the structure of `case`/`if-else` statements all directly determine the gate-level netlist a synthesizer produces — writing Verilog "for synthesis" means writing a subset of the language with predictable hardware semantics.

Module-level constructs — parameters for generating configurable widths, `generate`/`for` blocks for replicating hardware structures (e.g., a parameterized array of registers or a ripple-carry adder built from full-adder instances), and hierarchical instantiation — are the basis for building reusable, scalable RTL. Understanding port connection rules (named vs. positional), bit-width matching, and signed/unsigned arithmetic semantics (`integer` vs. `reg`, sign extension rules) prevents a large class of subtle bugs that simulate "correctly" in one tool but synthesize differently, or vice versa.

Because Verilog (IEEE 1364) predates many safety features later added in SystemVerilog, RTL written in Verilog often requires more discipline and stricter lint rule sets to avoid ambiguous constructs, implicit wire declarations, and unintended latch inference. Most production RTL today is written in SystemVerilog but constrained to a synthesizable Verilog-like subset for the design portion.

Visit the following resources to learn more:

- [@book@Verilog HDL by Samir Palnitkar](https://www.amazon.com/s?k=Verilog+HDL+Samir+Palnitkar)
- [@course@verilog hdl for beginners](https://www.udemy.com/courses/search/?q=verilog+hdl+for+beginners)
- [@video@verilog tutorial for rtl design](https://www.youtube.com/results?search_query=verilog+tutorial+for+rtl+design)
- [@article@verilog](https://vlsi.kr/?s=verilog)
