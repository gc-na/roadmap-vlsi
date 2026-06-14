# Digital Logic

Static timing analysis is built on top of digital logic fundamentals, so a solid grasp of combinational and sequential circuit behavior is essential before tackling STA-specific concepts. Combinational logic (AND, OR, NAND, XOR, multiplexers, etc.) produces outputs that are a pure function of current inputs, with a propagation delay determined by gate sizing, output load (fanout), and input transition (slew). Sequential elements — flip-flops and latches — store state and sample data relative to a clock edge, which is the basis for synchronous design. In standard-cell-based designs, the timing of combinational paths and sequential element setup/hold windows determine whether a design is functionally correct at the target clock frequency.

In synchronous digital design, data moves between sequential elements through combinational logic clouds, and the clock defines discrete time steps at which data is captured. STA evaluates whether data launched from one flip-flop arrives at the next flip-flop's input early enough (setup) and stays stable long enough (hold) relative to the clock edge. Understanding gate-level delay models — including cell delay (intrinsic delay plus load-dependent delay) and net delay (RC-based interconnect delay) — is foundational to interpreting any timing report. Gate delay in modern standard cells is primarily a function of the input slew and output load capacitance, captured in lookup tables during library characterization.

Boolean algebra, truth tables, and Karnaugh maps underpin logic synthesis, which converts RTL descriptions into gate-level netlists that STA tools actually analyze. Concepts like fanout, logic depth, and critical path identification all trace back to how digital logic gates are interconnected and how signals propagate through them. A high-fanout node — such as a widely distributed reset signal — experiences greater delay due to the cumulative capacitance of all downstream gates, making fanout analysis and buffer insertion key optimization techniques during synthesis.

A working knowledge of CMOS gate structures (NAND/NOR-based standard cells, inverters, buffers) also helps explain why certain transitions are faster or slower, which directly affects timing arc delays used in STA calculations. For instance, NAND gates typically have asymmetric delays for rising versus falling transitions due to the series pull-down network structure, and this rise/fall difference must be correctly represented in the timing library for accurate STA. Understanding how these gates are implemented at the transistor level provides intuition for why cell delay is monotonically increasing in load and slew.

## Key Concepts

- Combinational versus sequential logic and their timing implications
- Gate delay as a function of input slew and output load capacitance
- Fanout, logic depth, and critical path propagation through gate networks
- Standard-cell CMOS gate structures and rise/fall asymmetry
- Boolean decomposition and logic synthesis's role in creating STA-analyzable netlists

## Resume Tips

- On your resume: highlight any synthesis experience where you optimized for timing by citing specific techniques — "optimized 40-gate critical path through buffer insertion and cell upsizing, improving setup margin by 180ps on a 400K-gate block."
- In interviews: be prepared to explain why fanout matters for delay, and how you would approach fixing a path where the driver cell is optimally sized but the interconnect is causing violations.
- Demonstrate understanding of CMOS gate behavior: explain the difference in rise vs. fall delays for a NAND gate and how this affects timing analysis at advanced nodes.

Visit the following resources to learn more:

- [Book] CMOS VLSI Design: A Circuits and Systems Perspective(https://www.amazon.com/s?k=CMOS+VLSI+Design+A+Circuits+and+Systems+Perspective+Weste+Harris)
- [Coursera] Digital Logic Design Fundamentals(https://www.coursera.org/search?query=digital+logic+design)
- [YouTube] Digital Logic Design Fundamentals(https://www.youtube.com/results?search_query=digital+logic+design+fundamentals)
- [Article] Logic Synthesis and Gate Delay Models(https://www.amazon.com/s?k=logic+synthesis+VLSI+design)
