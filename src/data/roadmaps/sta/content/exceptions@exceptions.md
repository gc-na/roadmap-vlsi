# Exceptions

Timing exceptions are SDC commands that override the default timing analysis behavior for specific paths, and they are essential because not every path in a design conforms to a simple single-cycle register-to-register relationship. The three primary exception types are false paths, multicycle paths, and min/max delay overrides, each addressed with specific SDC commands. Exceptions require careful justification: they can hide bugs if applied too broadly, but are necessary to avoid false violations on functionally safe paths.

`set_false_path` tells STA to completely ignore timing on a specified path, typically used for paths that exist structurally in the netlist but are never functionally sensitized together — for example, paths through mux select lines that are mutually exclusive with certain data paths, scan chains during functional mode, or asynchronous clock domain crossings. A false path should never be applied to the same signal as timing path constraints; if a path is false in one mode, it should remain false across all modes, or the design has a functional issue. Overly broad false paths (e.g., `set_false_path -from [get_clocks clk] -to [get_clocks alt_clk]` without specificity) can mask real violations and are a leading cause of signoff escapes.

`set_multicycle_path` specifies that a path is allowed to take more than one clock cycle to propagate, common in designs where a slow operation (like a divider or gray-code counter) is given multiple cycles by design. The setup multiplier shifts the required time by N cycles forward (allowing more time), and a corresponding hold multiplier (often N-1) must be specified to avoid creating an incorrect hold check at the wrong edge. For example, a 3-cycle path might use `-setup 3 -hold 2`, meaning setup is checked against the capture edge 3 cycles after launch, while hold is checked against the edge 2 cycles after launch (the cycle before setup is captured).

`set_max_delay` and `set_min_delay` directly override the computed required time with an absolute value, useful for I/O timing budgets or paths where the standard clock-relative calculation doesn't apply. For instance, if an external interface requires a 10ns propagation window independent of the internal clock, `set_max_delay 10ns -from [pin] -to [pin]` specifies that absolute limit. `set_case_analysis` is another important exception-like constraint, fixing a pin to a constant 0 or 1 to model a tie-off condition (such as a test mode pin permanently grounded), which allows the tool to prune logic cones that become unreachable and avoid false critical paths through dead logic.

Misapplying exceptions is a common source of signoff escapes — an overly broad false path can mask a real violation, while a missing multicycle exception can cause synthesis and P&R tools to over-optimize a path that doesn't need it, wasting area and power. Every exception should be justified by design documentation and reviewed during constraint quality checks; a common practice is to include comments in the SDC file explaining the business logic for each exception. Tools often provide "exception coverage" reports identifying which exceptions are actually used (vs. redundant) and which design areas lack exceptions but appear suspicious based on timing analysis results.

## Key Concepts

- False paths (`set_false_path`): completely exclude paths that don't exist functionally
- Multicycle paths (`set_multicycle_path`): allow N cycles for data propagation with separate setup/hold multipliers
- Min/max delay overrides: direct timing constraints independent of clock relationships
- Case analysis (`set_case_analysis`): prune unreachable logic by fixing pins to constant values
- Exception justification and audit: every exception needs design intent documentation

## Resume Tips

- On your resume: demonstrate constraint expertise — "defined and audited SDC for 2M-gate design with 85+ exceptions across 6 domains; implemented Tcl verification script to catch redundant/conflicting exceptions, reducing constraint audit time from 2 days to 2 hours and improving signoff confidence."
- In interviews: explain why both setup and hold multipliers are needed for multicycle paths, and describe a scenario where a missing or incorrect multicycle exception caused a signoff issue.
- Demonstrate judgment on exceptions: explain when you would use a false path vs. a multicycle path, and discuss the risk of an overly broad false path masking a real bug vs. being too narrow and creating spurious violations.

Visit the following resources to learn more:

- [Book] Static Timing Analysis for Nanometer Designs(https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [Coursera] SDC Constraints - False Path and Multicycle(https://www.coursera.org/search?query=SDC+constraints+false+path+multicycle)
- [YouTube] False Path and Multicycle Path - SDC Exceptions(https://www.youtube.com/results?search_query=false+path+multicycle+path+SDC+exceptions)
- [Article] Timing Constraint Quality and Audit(https://www.amazon.com/s?k=SDC+constraints+timing+design)
