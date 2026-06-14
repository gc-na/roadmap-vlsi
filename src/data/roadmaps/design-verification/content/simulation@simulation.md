# Simulation

Simulation is the primary engine of functional verification: an event-driven simulator (such as Synopsys VCS, Cadence Xcelium, or Siemens Questa) executes a compiled model of the RTL design alongside the testbench, processing signal changes ("events") in time order and updating downstream logic accordingly. Understanding the event-driven simulation algorithm — the scheduling regions of the SystemVerilog stratified event queue (active, inactive, NBA, observed, reactive, postponed) — is essential for explaining why race conditions occur and why nonblocking assignments (`<=`) are used for sequential logic while blocking assignments (`=`) and `always_comb` are used for combinational logic.

A typical simulation flow has three stages: compile (parsing and elaborating the HDL source into an internal model, often with optimizations), elaborate (building the design hierarchy, resolving parameters and generate blocks), and run/simulate (executing the time-stepped simulation, producing logs, waveforms, and coverage data). Most flows use a regression manager to compile once and run many tests against the same snapshot, since recompilation for every test is wasteful. Waveform debugging — using tools like Verdi, SimVision, or Visualizer to step through signal transitions, view hierarchical scopes, and trace causality back through driver chains — is a core day-to-day skill.

Simulation performance and correctness both matter. Simulators must correctly model `$display` ordering, `fork/join` concurrency, delays (`#`), and zero-time loops, while regressions must run fast enough to iterate many times per day. Verification engineers should understand simulator command-line options for seed control (for randomization reproducibility), waveform dumping (FSDB/VCD/SHM), and coverage collection, as well as how to debug simulator-specific issues like X-propagation, race conditions between testbench and DUT, and simulation/synthesis mismatches caused by non-synthesizable constructs leaking into RTL.

Visit the following resources to learn more:

- [@book@SystemVerilog for Verification: A Guide to Learning the Testbench Language Features](https://www.amazon.com/s?k=SystemVerilog+for+Verification+Chris+Spear)
- [@course@HDL simulation and waveform debugging](https://www.udemy.com/courses/search/?q=HDL+simulation+waveform+debugging)
- [@video@event driven simulation Verilog tutorial](https://www.youtube.com/results?search_query=event+driven+simulation+Verilog+tutorial)
- [@article@HDL simulation](https://vlsi.kr/?s=HDL+simulation)