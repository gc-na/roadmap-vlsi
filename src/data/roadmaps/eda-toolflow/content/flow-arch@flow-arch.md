# Flow Arch

Flow architecture is the overall design of how stages of the chip design process connect, hand off data, and execute as a coherent pipeline. A typical digital flow runs through RTL synthesis, floorplanning, placement, clock tree synthesis, routing, extraction, STA, power analysis, formal verification, and signoff, and the flow architecture defines the directory structure, naming conventions, file formats (Verilog, LEF/DEF, SDC, SPEF, GDSII), and the order and dependencies between these steps. A well-architected flow makes each stage's inputs and outputs explicit so that any step can be rerun in isolation given the correct upstream artifacts, which is essential for debugging and for parallelizing work across blocks and engineers.

Designing a flow architecture means deciding how configuration is layered: global defaults shared across a project, block-specific overrides, and per-run experiment variants. Common patterns include a base set of Tcl/Makefile scripts that are sourced or included, with project- and block-level variable files overriding parameters like clock periods, voltage corners, or tool versions. The architecture must also account for multi-corner multi-mode (MCMM) execution, where the same RTL is run through many PVT corners and operating modes, and for hierarchical flows where blocks are implemented independently and later integrated at the top level using abstracts or ILMs.

A good flow architecture is reproducible and version-controlled: every run should be traceable to a specific revision of scripts, constraints, and tool versions, often captured in a run manifest or log header. It also needs to scale, since a single flow definition is reused across hundreds of blocks and thousands of regression runs on a compute farm, so directory layouts, environment setup, and output locations are parameterized rather than hardcoded. Engineers building flow architecture work closely with methodology, CAD, and release teams to ensure changes propagate cleanly without breaking existing block owners' setups.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Digital Systems Design with FPGAs and CPLDs(https://www.amazon.com/s?k=ASIC+design+flow+digital+VLSI+methodology)
- [Coursera] ASIC design flow(https://www.udemy.com/courses/search/?q=ASIC+design+flow+VLSI)
- [YouTube] ASIC design flow architecture(https://www.youtube.com/results?search_query=ASIC+design+flow+architecture+EDA)
