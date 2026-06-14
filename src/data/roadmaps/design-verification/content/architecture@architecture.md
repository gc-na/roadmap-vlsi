# Architecture

The Universal Verification Methodology (UVM) defines a standardized class library and architectural pattern for building reusable, **layered** testbenches in SystemVerilog. The canonical UVM **testbench structure** consists of a `uvm_test` at the top, which configures and instantiates a `uvm_env` (environment), which in turn contains one or more `uvm_agent`s — one per DUT interface. Each agent bundles a `uvm_sequencer` (which arbitrates and forwards sequence items), a `uvm_driver` (which converts transactions into pin-level activity on a virtual interface), and a `uvm_monitor` (which passively observes the interface and reconstructs transactions for coverage and checking). Agents can be configured as active (driving stimulus) or passive (monitor-only).

**Modularity** is central. The environment contains a scoreboard, a reference model (often a SystemVerilog or C++ model of expected DUT behavior), and coverage collectors, all connected via TLM (Transaction-Level Modeling) analysis ports — `uvm_analysis_port`/`uvm_analysis_export` connections that broadcast transactions from monitors to any number of subscribers without tight coupling. This **separation of concerns** means the scoreboard doesn't care where the transactions come from; it just watches the analysis port and compares.

The UVM **phasing mechanism** (`build_phase`, `connect_phase`, `run_phase`, etc.) provides a deterministic order for component construction, port connection, and execution across the entire hierarchy, ensuring components are ready before they're used. Configuration is managed through the `uvm_config_db`, a hierarchical database that lets a test set parameters (virtual interface handles, agent configs, enable/disable flags) that propagate down to components without hardcoded paths. The **factory pattern** (`uvm_factory`) allows any class type in the hierarchy to be overridden at run time — for example, substituting a derived sequence or a component with injected error behavior — without modifying the base environment code. Understanding this layered, modular architecture is the foundation for everything else in UVM.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] A Practical Guide to Adopting the Universal Verification Methodology (UVM)(https://www.amazon.com/s?k=A+Practical+Guide+to+Adopting+the+Universal+Verification+Methodology+UVM+Rosenberg+Meade)
- [Coursera] UVM architecture testbench layering modularity(https://www.udemy.com/courses/search/?q=UVM+testbench+architecture)
- [YouTube] UVM testbench hierarchy agents drivers monitors(https://www.youtube.com/results?search_query=UVM+architecture+overview+tutorial)
