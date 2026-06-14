# Timing Paths

A timing path is a route through the design from a startpoint to an endpoint along which data propagates and is evaluated for timing correctness. STA classifies paths into four categories based on their startpoint and endpoint types: register-to-register (reg2reg) paths start and end at clocked sequential elements and are the most common; input-to-register (in2reg) paths start at a primary input port and end at a flop, requiring input arrival time constraints (`set_input_delay`); register-to-output (reg2out) paths start at a flop and end at a primary output port, requiring output delay constraints (`set_output_delay`); and input-to-output (in2out) paths are purely combinational, passing straight through the design from input to output.

Each path consists of a launch point, a sequence of cells and nets (the data path), and an endpoint, paired with a clock path that determines when the launching and capturing edges occur. The tool computes the arrival time by accumulating cell delays and net delays from the startpoint, and compares it against the required time derived from the clock period, clock latency, and the endpoint's setup/hold constraints. The path with the least slack (most critical) is reported first in a `report_timing` output, commonly called the critical path.

Reading a timing report means understanding each line: the instance name, pin, cell delay, incremental delay, and cumulative arrival time at each stage, alongside the slew (transition time) at each pin. Large incremental delays often point to high-fanout nets, long wires, or undersized drivers. Multi-fanout paths can branch, and STA reports the worst path through each branch independently. Being able to trace a path end-to-end — identifying where delay accumulates and why — is the core diagnostic skill for timing closure work.

Visit the following resources to learn more:

- [@book@Static Timing Analysis for Nanometer Designs](https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [@course@STA timing path analysis](https://www.udemy.com/courses/search/?q=static+timing+analysis+timing+paths)
- [@video@how to read a timing report STA](https://www.youtube.com/results?search_query=how+to+read+a+timing+report+STA)
- [@article@timing paths report_timing](https://vlsi.kr/?s=timing+paths)
