# Testbench

A testbench is the surrounding environment that drives stimulus into a design under test (DUT), monitors its responses, and checks correctness — all without being synthesized into actual hardware. At its simplest, a testbench instantiates the DUT, generates a clock and reset, applies input vectors, and observes outputs, typically using a hardware description language (Verilog/SystemVerilog) running on an HDL simulator. Even the most basic directed testbench needs to handle timing correctly: driving signals on the correct clock edge, respecting setup/hold relationships at the interface, and avoiding race conditions between the testbench and the DUT (commonly addressed by driving on one clock edge and sampling on another).

Beyond simple directed tests, testbenches evolve into layered, reusable architectures. A typical structure separates the bus functional model (BFM) or driver (which converts abstract transactions into pin-level activity), the monitor (which passively observes the interface and reconstructs transactions), and the checker/scoreboard (which compares observed behavior against an expected model). This separation of stimulus generation from checking is what enables self-checking tests — tests that report pass/fail automatically rather than requiring a human to inspect waveforms.

Modern testbenches are almost always written in SystemVerilog and frequently follow the UVM (Universal Verification Methodology) class library, which standardizes how these components — drivers, monitors, sequencers, agents, scoreboards, and environments — are built and connected. Understanding the basic testbench architecture (clock/reset generation, interface definition, virtual interfaces connecting the testbench to the DUT, and the overall test execution phases) is the foundation before layering on randomization, coverage, or UVM-specific abstractions.

Visit the following resources to learn more:

- [@book@Writing Testbenches: Functional Verification of HDL Models](https://www.amazon.com/s?k=Writing+Testbenches+Functional+Verification+of+HDL+Models+Bergeron)
- [@course@SystemVerilog testbench design](https://www.udemy.com/courses/search/?q=SystemVerilog+testbench+design)
- [@video@SystemVerilog testbench architecture tutorial](https://www.youtube.com/results?search_query=SystemVerilog+testbench+architecture+tutorial)
- [@article@testbench architecture](https://vlsi.kr/?s=testbench+architecture)
