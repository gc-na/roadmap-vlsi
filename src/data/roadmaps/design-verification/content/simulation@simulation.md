# Simulation

Simulation is the primary engine of functional verification: an **event-driven simulator** (such as Synopsys VCS, Cadence Xcelium, or Siemens Questa) executes a compiled model of the RTL design alongside the testbench, processing signal changes ("events") in time order and updating downstream logic accordingly. Understanding the event-driven simulation algorithm — the scheduling regions of the SystemVerilog stratified event queue (active, inactive, NBA, observed, reactive, postponed) — is essential for explaining why race conditions occur and why nonblocking assignments (`<=`) are used for sequential logic while blocking assignments (`=`) and `always_comb` are used for combinational logic.

A typical simulation flow has three stages: **compile** (parsing and elaborating the HDL source into an internal model), **elaborate** (building the design hierarchy, resolving parameters and generate blocks), and **run/simulate** (executing the time-stepped simulation, producing logs, waveforms, and coverage data). Most flows use a regression manager to compile once and run many tests against the same snapshot, since recompilation for every test is wasteful. Waveform debugging — using tools like Verdi, SimVision, or Visualizer to step through signal transitions, view hierarchical scopes, and trace causality back through driver chains — is a core day-to-day skill.

**VCS, Xcelium, and Questa** are the industry-standard simulators. Each has different performance characteristics, waveform formats, and command-line options. Verification engineers must understand simulator-specific tuning: parallel simulation, assertion acceleration, and debug-vs.-performance tradeoffs. You'll spend significant time learning command-line flags for seed control (reproducibility), waveform dumping (FSDB/VCD/SHM), coverage collection (UCDB), and debugging features (interactive debugging, statement groups, history/undo).

Simulation correctness is non-negotiable. Simulators must correctly model `$display` ordering, `fork/join` concurrency, delays, and zero-time loops. Regressions must run fast enough to iterate many times per day. Verification engineers must understand how to debug simulator-specific issues: X-propagation, race conditions between testbench and DUT, and simulation/synthesis mismatches caused by non-synthesizable constructs leaking into RTL.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] SystemVerilog for Verification: A Guide to Learning the Testbench Language Features(https://www.amazon.com/s?k=SystemVerilog+for+Verification+Chris+Spear)
- [Coursera] Event-driven simulation and waveform debugging in VCS and Xcelium(https://www.udemy.com/courses/search/?q=HDL+simulation+waveform+debugging)
- [YouTube] SystemVerilog event-driven simulation algorithm(https://www.youtube.com/results?search_query=event+driven+simulation+algorithm+tutorial)