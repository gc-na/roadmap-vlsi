# Pipelining

Pipelining inserts registers into long combinational datapaths to break them into shorter stages, allowing different data to operate on different stages simultaneously—like an assembly line. The goal is to increase throughput and clock frequency by reducing critical path delay per stage, at the cost of increased latency (time for data to traverse all stages) and additional register area. This is a fundamental trade-off in high-performance RTL design.

In RTL, pipelining means identifying long combinational chains (multiply-accumulate, multi-stage adders, address decode + memory access) and inserting flip-flops at intermediate points. Each pipeline register carries not just data but also control signals (valid bits, opcodes, destination tags), so downstream stages interpret arriving values correctly. A "valid" or "enable" signal typically travels with data through all stages, implementing flow control.

Pipeline hazards are the central challenge: structural hazards (resource conflicts), data hazards (later instruction needs unprovided earlier result), and control hazards (unknown branch outcomes) all require handling via stalling, forwarding/bypassing, or flushing. Even non-CPU datapaths encounter similar issues when pipelines have feedback or shared resources. Hazard detection and resolution significantly complicate pipelined designs.

Retiming is a synthesis-level optimization where tools automatically move register boundaries across combinational logic to balance stage delays without changing behavior. However, RTL architects must design the pipeline structure (number of stages, state placement) because retiming cannot change latency or restructure algorithms. Pipeline depth trade-offs against target clock frequency (Fmax) are recurring in timing closure discussions. Smart architectural choices drive synthesis efficiency.

## Key Concepts
- Pipeline stages and throughput vs. latency trade-offs
- Control signal propagation (valid bits, tags)
- Structural, data, and control hazards
- Hazard resolution (stalling, forwarding, flushing)
- Register balancing and retiming

## Resume Tips
- Highlight experience pipelining long datapaths for timing closure
- Discuss hazard analysis and handling in control-heavy designs
- Show understanding of latency/throughput trade-offs in architectural decisions
- Mention cross-functional collaboration on architecture/verification for pipelined designs

Visit the following resources to learn more:

- [Book] Computer Organization and Design by Patterson and Hennessy(https://www.amazon.com/s?k=Computer+Organization+and+Design+Patterson+Hennessy)
- [Coursera] rtl pipeline design verilog(https://www.udemy.com/courses/search/?q=rtl+pipeline+design+verilog)
- [YouTube] pipelining digital design hazards(https://www.youtube.com/results?search_query=pipelining+digital+design+hazards)
