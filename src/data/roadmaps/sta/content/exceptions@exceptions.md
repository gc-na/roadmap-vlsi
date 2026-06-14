# Exceptions

Timing exceptions are SDC commands that override the default timing analysis behavior for specific paths, and they are essential because not every path in a design conforms to a simple single-cycle register-to-register relationship. The three primary exception types are false paths, multicycle paths, and min/max delay overrides, each addressed with specific SDC commands.

`set_false_path` tells STA to completely ignore timing on a specified path, typically used for paths that exist structurally in the netlist but are never functionally sensitized together — for example, paths through mux select lines that are mutually exclusive with certain data paths, scan chains during functional mode, or asynchronous clock domain crossings. `set_multicycle_path` specifies that a path is allowed to take more than one clock cycle to propagate, common in designs where a slow operation (like a divider) is given multiple cycles by design; the setup multiplier shifts the required time by N cycles, and a corresponding hold multiplier (often N-1) must be specified to avoid creating an incorrect hold check at the wrong edge. `set_max_delay` and `set_min_delay` directly override the computed required time with an absolute value, useful for I/O timing budgets or paths where the standard clock-relative calculation doesn't apply.

`set_case_analysis` is another important exception-like constraint, fixing a pin to a constant 0 or 1 to model a tie-off condition (such as a test mode pin permanently grounded), which allows the tool to prune logic cones that become unreachable and avoid false critical paths through dead logic. Misapplying exceptions is a common source of signoff escapes — an overly broad false path can mask a real violation, while a missing multicycle exception can cause synthesis and P&R tools to over-optimize a path that doesn't need it, wasting area and power. Every exception should be justified by the actual design intent and reviewed during constraint (SDC) quality checks.

Visit the following resources to learn more:

- [@book@Static Timing Analysis for Nanometer Designs](https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [@course@SDC constraints false path multicycle](https://www.udemy.com/courses/search/?q=SDC+constraints+false+path+multicycle)
- [@video@false path multicycle path SDC exceptions](https://www.youtube.com/results?search_query=false+path+multicycle+path+SDC+exceptions)
- [@article@timing exceptions SDC](https://vlsi.kr/?s=timing+exceptions)
