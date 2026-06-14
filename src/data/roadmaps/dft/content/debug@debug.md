# Debug

Silicon debug and diagnosis is the process of taking a die that fails test (in the lab during bring-up, or on the tester during production) and determining the root cause, distinguishing between a design bug, a process-induced defect, a test program error, or a marginal/timing issue. DFT structures designed primarily for manufacturing test, scan chains, JTAG, MBIST, also serve as the primary access mechanisms for debug: scan dump (reading out the full state of all flip-flops via the scan chains after stopping the clock at a specific cycle) lets engineers reconstruct the internal state of the chip at the moment of failure, which is often the fastest way to localize a logic bug to a specific module.

For ATPG-detected failures, automated diagnosis tools analyze the pattern of failing scan cells across multiple failing patterns and use the netlist topology to compute a ranked list of candidate defect locations (cell, pin, and fault type), guiding physical failure analysis (PFA) techniques like emission microscopy, laser voltage probing, or focused ion beam (FIB) editing to the most likely site. On-chip debug infrastructure beyond pure DFT, embedded logic analyzers, trace buffers, and processor debug modules (ARM CoreSight, RISC-V debug per the RISC-V Debug Specification), provide real-time visibility into bus transactions, register states, and program execution, accessed through the same JTAG TAP used for manufacturing test, often via a separate debug access port (DAP).

Debug also encompasses bring-up of new silicon: characterizing a first-pass chip against simulation, identifying systematic issues (e.g., a clock domain crossing bug that only manifests at certain voltage/frequency corners), and correlating tester fail signatures across many units to distinguish random defects from systematic design or process issues that require a respin or process tweak. Effective debug depends on DFT decisions made early in the flow, adequate scan chain granularity and observability, sufficient trace buffer depth, and clear documentation (bug tracking correlated with scan chain/cell names) so that a failure observed on the tester can be traced back to a specific RTL signal or transistor-level structure.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Digital Systems Testing and Testable Design(https://www.amazon.com/s?k=Digital+Systems+Testing+and+Testable+Design+Abramovici+Breuer+Friedman)
- [Coursera] silicon debug failure analysis scan diagnosis(https://www.udemy.com/courses/search/?q=silicon+debug+failure+analysis+scan+diagnosis)
- [YouTube] silicon debug scan diagnosis failure analysis(https://www.youtube.com/results?search_query=silicon+debug+scan+diagnosis+failure+analysis)
