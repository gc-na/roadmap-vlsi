# Synthesis

Logic synthesis translates RTL (Verilog/SystemVerilog/VHDL) into a gate-level netlist mapped to a target technology library, optimized for area, timing, and power under designer-specified constraints. Tools like Synopsys Design Compiler, Fusion Compiler, or Cadence Genus elaborate RTL into a generic, technology-independent representation, apply Boolean optimizations, and map the result onto standard cells from the target library. Synthesis bridges design intent and physical implementation.

Understanding synthesis means understanding how RTL constructs map to hardware. An `always_ff` block infers flip-flops; an `always_comb` block with complete branches infers combinational logic; incomplete branches infer latches. Arithmetic operators (`+`, `*`) infer adders or multipliers; the synthesizer chooses implementation (ripple-carry vs. carry-lookahead) based on constraints and library availability. Resource sharing, retiming, and register balancing are automatic optimizations that significantly restructure netlists compared to literal RTL.

Constraints drive synthesis results. An SDC file specifies clock definitions, I/O delays, and timing exceptions (false paths, multicycle paths). Synthesis attempts to meet constraints through gate sizing, technology mapping, and logic restructuring. The QoR (quality of results) report—timing slack, area, power—is the primary feedback loop. Negative slack indicates RTL needs restructuring (e.g., pipelining), not just tool optimization. RTL architectural decisions directly determine what the tool can optimize.

RTL coding style profoundly impacts synthesis QoR—often underappreciated by junior designers. A wide priority `if-else if` chain creates deeper logic than a balanced `case` statement. Improperly reset registers prevent downstream DFT or low-power insertion. Understanding how to write synthesis-friendly RTL is a critical skill that separates good designers from mediocre ones.

## Key Concepts
- RTL-to-netlist mapping and standard cell selection
- SDC constraints and timing closure
- Boolean optimization and technology mapping
- Retiming and register balancing
- QoR metrics (slack, area, power)

## Resume Tips
- Discuss experience optimizing RTL for timing/area/power closure
- Show understanding of synthesis QoR reports and how to interpret them
- Highlight architectural decisions that improve synthesis results
- Mention cross-team collaboration with synthesis/physical design engineers

Visit the following resources to learn more:

- [Book] Logic Synthesis and Verification by Hassoun and Sasao(https://www.amazon.com/s?k=Logic+Synthesis+and+Verification+Hassoun+Sasao)
- [Coursera] digital logic synthesis asic flow(https://www.udemy.com/courses/search/?q=digital+logic+synthesis+asic+flow)
- [YouTube] RTL to gate level synthesis flow(https://www.youtube.com/results?search_query=RTL+to+gate+level+synthesis+flow)
