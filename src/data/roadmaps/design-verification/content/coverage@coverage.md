# Coverage

**Functional coverage** answers the question that code coverage cannot: has the design actually been exercised in the scenarios the specification cares about, not just which lines of RTL executed. SystemVerilog `covergroup`/`coverpoint`/`bins` constructs let you define exactly what to measure — for example, a coverpoint on a transaction's opcode field with explicit bins for each instruction type, or a `cross` between opcode and a "queue full" flag to confirm every instruction type has been tried while the queue was full. Coverage is **sampled** (often via `sample()` calls triggered by a clocking event) and aggregated across all tests in a regression into a merged coverage database.

**Code coverage** — statement, branch, expression, toggle, and FSM state/transition coverage — is collected automatically by the simulator from the RTL itself and answers "which parts of the design were activated at all." It's a necessary but insufficient metric: 100% toggle coverage on a register says nothing about whether it was toggled in the right context. Most projects track both: **code coverage** to catch dead code or unreachable logic, and **functional coverage** to confirm the verification plan's scenarios were actually hit.

**Assertion coverage** — `cover property` statements in SVA — records when specific temporal scenarios occur, useful for confirming corner-case timing relationships were exercised. Coverage-driven verification (CDV) closes the loop between constrained-random stimulus and the test plan: **coverage holes** (bins that remain unhit after running the regression) are analyzed to determine whether they're reachable, and if so, constraints are adjusted or new directed tests are written to hit them.

**Coverage closure** — typically targeting near-100% on both functional and code coverage with documented waivers for unreachable cases — is one of the primary exit criteria for declaring a block "verified" and ready for tape-out. Tools like Synopsys VCS/Verdi, Cadence IMC, and Siemens Questa provide coverage merging, ranking (identifying which tests contribute unique coverage), and exclusion management for this process.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] A Practical Guide to Adopting the Universal Verification Methodology (UVM)(https://www.amazon.com/s?k=A+Practical+Guide+to+Adopting+the+Universal+Verification+Methodology+UVM+Rosenberg+Meade)
- [Coursera] Functional coverage covergroup bins SystemVerilog(https://www.udemy.com/courses/search/?q=functional+coverage+SystemVerilog)
- [YouTube] Coverage-driven verification and closure strategy(https://www.youtube.com/results?search_query=coverage-driven+verification+covergroup+tutorial)
