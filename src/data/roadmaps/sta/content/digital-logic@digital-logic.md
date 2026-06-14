# Digital Logic

Static timing analysis is built on top of digital logic fundamentals, so a solid grasp of combinational and sequential circuit behavior is essential before tackling STA-specific concepts. Combinational logic (AND, OR, NAND, XOR, multiplexers, etc.) produces outputs that are a pure function of current inputs, with a propagation delay determined by gate sizing, output load (fanout), and input transition (slew). Sequential elements — flip-flops and latches — store state and sample data relative to a clock edge, which is the basis for synchronous design.

In synchronous digital design, data moves between sequential elements through combinational logic clouds, and the clock defines discrete time steps at which data is captured. STA evaluates whether data launched from one flip-flop arrives at the next flip-flop's input early enough (setup) and stays stable long enough (hold) relative to the clock edge. Understanding gate-level delay models — including cell delay (intrinsic delay plus load-dependent delay) and net delay (RC-based interconnect delay) — is foundational to interpreting any timing report.

Boolean algebra, truth tables, and Karnaugh maps underpin logic synthesis, which converts RTL descriptions into gate-level netlists that STA tools actually analyze. Concepts like fanout, logic depth, and critical path identification all trace back to how digital logic gates are interconnected and how signals propagate through them. A working knowledge of CMOS gate structures (NAND/NOR-based standard cells, inverters, buffers) also helps explain why certain transitions are faster or slower, which directly affects timing arc delays used in STA calculations.

Visit the following resources to learn more:

- [@book@CMOS VLSI Design: A Circuits and Systems Perspective](https://www.amazon.com/s?k=CMOS+VLSI+Design+A+Circuits+and+Systems+Perspective+Weste+Harris)
- [@course@digital logic design](https://www.udemy.com/courses/search/?q=digital+logic+design)
- [@video@digital logic design fundamentals](https://www.youtube.com/results?search_query=digital+logic+design+fundamentals)
- [@article@digital logic](https://vlsi.kr/?s=digital+logic)
