# Timing Paths

A timing path is a route through the design from a startpoint to an endpoint along which data propagates and is evaluated for timing correctness. STA classifies paths into four categories based on their startpoint and endpoint types: register-to-register (reg2reg) paths start and end at clocked sequential elements and are the most common; input-to-register (in2reg) paths start at a primary input port and end at a flop, requiring input arrival time constraints via `set_input_delay`; register-to-output (reg2out) paths start at a flop and end at a primary output port, requiring output delay constraints via `set_output_delay`; and input-to-output (in2out) paths are purely combinational, passing straight through the design from input to output. Each category has distinct slack calculation rules and fixing strategies.

Each path consists of a launch point (the register or input where data originates), a sequence of cells and nets (the data path), and an endpoint (the target register or output), paired with a clock path that determines when the launching and capturing edges occur. The tool computes the arrival time by accumulating cell delays and net delays from the startpoint, and compares it against the required time derived from the clock period, clock latency, and the endpoint's setup/hold constraints. For reg2reg paths, the required time equals the capture clock arrival time minus the setup time (for setup checks) or plus the hold time (for hold checks). The difference between required and arrival times is slack.

The path with the least slack (most critical) is reported first in a `report_timing` output, commonly called the critical path. However, multiple critical paths often exist with the same or nearly identical slack values, and addressing the most deeply rooted cause (e.g., a common buffer that appears in many critical paths) is often more effective than optimizing a single path in isolation. Common-path pessimism removal (CPPR) is a technique used by STA tools to avoid double-counting shared delays between the data path and clock path.

Reading a timing report means understanding each line: the instance name, pin, cell delay, incremental delay, and cumulative arrival time at each stage, alongside the slew (transition time) at each pin. Large incremental delays often point to high-fanout nets, long wires, or undersized drivers. Multi-fanout paths can branch, and STA reports the worst path through each branch independently. Being able to trace a path end-to-end — identifying where delay accumulates and why — is the core diagnostic skill for timing closure work. Senior engineers often write Tcl scripts to automatically extract and summarize delay components by stage or by cell type to identify systemic optimization opportunities.

## Key Concepts

- Four path types: reg2reg, in2reg, reg2out, in2out; each with distinct constraints
- Path slack calculation and critical path identification
- Data path vs. clock path and their contributions to required time
- Common-path pessimism removal (CPPR) to avoid double-counting delays
- Reading timing reports: incremental delays, slew propagation, delay attribution per stage

## Resume Tips

- On your resume: quantify path analysis and optimization work — "analyzed 200+ timing-critical paths on a 2M-gate design, identified common bottleneck (high-fanout reset), applied targeted buffering to fix 35 paths simultaneously, improving worst slack by 220ps with minimal area impact."
- In interviews: demonstrate ability to read and interpret a timing report — describe how you would trace a critical path, identify the worst segment, and propose fixes.
- Show knowledge of path types: explain differences between reg2reg and in2out paths in terms of constraint setup and how you would approach debugging each.

Visit the following resources to learn more:

- [Book] Static Timing Analysis for Nanometer Designs(https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [Coursera] STA Timing Path Analysis(https://www.coursera.org/search?query=static+timing+analysis+timing+paths)
- [YouTube] How to Read a Timing Report - STA(https://www.youtube.com/results?search_query=how+to+read+a+timing+report+STA)
- [Article] Timing Path Slack and Optimization(https://www.amazon.com/s?k=timing+optimization+VLSI+design)
