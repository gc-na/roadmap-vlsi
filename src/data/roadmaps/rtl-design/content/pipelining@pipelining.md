# Pipelining

Pipelining is the technique of inserting registers into a long combinational datapath to break it into shorter stages, allowing each stage to operate on different data in the same clock cycle, much like an assembly line. The goal is to increase throughput and maximum clock frequency by reducing the critical path delay per stage, at the cost of increased latency (the time for one piece of data to traverse all stages) and additional area for the pipeline registers themselves.

In RTL, pipelining means identifying a long combinational chain — for example, a multiply-accumulate, a multi-stage adder tree, or a complex address decode and memory access — and inserting flip-flop stages at intermediate points. Each pipeline register must carry forward not just the data being transformed but also any control signals (valid bits, opcode, destination tags) associated with that data, so that downstream stages can correctly interpret what arrives. This is often implemented with a "valid" or "enable" signal that travels alongside the data through each stage.

Pipeline hazards are the central challenge: structural hazards (resource conflicts), data hazards (a later instruction needs a result not yet produced by an earlier one still in the pipeline), and control hazards (branch outcomes not yet known) all require handling — via stalling (bubble insertion), forwarding/bypassing logic, or flushing. Even in non-CPU datapaths, similar issues arise whenever a pipelined block has feedback or shared resources between stages.

Retiming is a related synthesis-level optimization where the tool automatically moves register boundaries across combinational logic to balance stage delays, without changing functional behavior — but RTL designers still need to architect the pipeline structure (number of stages, where state needs to live) since retiming cannot change a design's latency or fundamentally restructure algorithms. Understanding pipeline depth trade-offs against target clock frequency (Fmax) is a recurring theme in RTL-to-timing closure discussions.

Visit the following resources to learn more:

- [@book@Computer Organization and Design by Patterson and Hennessy](https://www.amazon.com/s?k=Computer+Organization+and+Design+Patterson+Hennessy)
- [@course@rtl pipeline design verilog](https://www.udemy.com/courses/search/?q=rtl+pipeline+design+verilog)
- [@video@pipelining digital design hazards](https://www.youtube.com/results?search_query=pipelining+digital+design+hazards)
- [@article@pipelining](https://vlsi.kr/?s=pipelining)
