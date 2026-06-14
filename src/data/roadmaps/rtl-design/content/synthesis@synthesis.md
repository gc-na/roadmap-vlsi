# Synthesis

Logic synthesis is the process of translating RTL (Verilog/SystemVerilog/VHDL) into a gate-level netlist mapped to a target technology library, optimized for area, timing, and power under designer-specified constraints. Tools such as Synopsys Design Compiler, Fusion Compiler, or Cadence Genus read the RTL, elaborate it into a generic technology-independent representation (GTECH), apply Boolean optimizations, and then map the result onto the standard cells available in the target library.

Understanding synthesis as an RTL designer means understanding how RTL constructs map to hardware primitives. An `always_ff` block with a non-blocking assignment infers a flip-flop; an `always_comb` block with complete branch coverage infers combinational logic, while incomplete coverage infers a latch. Arithmetic operators (`+`, `*`) infer adders or multipliers whose implementation (ripple-carry vs. carry-lookahead, array vs. Booth multiplier) the synthesizer chooses based on timing constraints and library cell availability. Resource sharing, retiming, and register balancing are automatic optimizations that can restructure the netlist significantly from the RTL's literal structure.

Constraints drive synthesis: an SDC (Synopsys Design Constraints) file specifies clock definitions, input/output delays, and timing exceptions (false paths, multicycle paths), and synthesis attempts to meet these constraints through technology mapping, gate sizing, and logic restructuring. The synthesis QoR (quality of results) report — timing slack, area, and power summaries — is the primary feedback loop for an RTL designer: a negative slack on a path often means the RTL needs restructuring (e.g., breaking a long combinational chain with an extra pipeline stage) rather than relying on the tool to "fix" it through optimization alone.

RTL coding style has a direct, often underappreciated impact on synthesis QoR — for example, writing a wide priority `if-else if` chain creates a deep logic structure compared to a balanced `case` statement, and uninferred or improperly reset registers can prevent DFT or low-power structures from being inserted correctly downstream.

Visit the following resources to learn more:

- [@book@Logic Synthesis and Verification by Hassoun and Sasao](https://www.amazon.com/s?k=Logic+Synthesis+and+Verification+Hassoun+Sasao)
- [@course@digital logic synthesis asic flow](https://www.udemy.com/courses/search/?q=digital+logic+synthesis+asic+flow)
- [@video@RTL to gate level synthesis flow](https://www.youtube.com/results?search_query=RTL+to+gate+level+synthesis+flow)
- [@article@logic synthesis](https://vlsi.kr/?s=logic+synthesis)
