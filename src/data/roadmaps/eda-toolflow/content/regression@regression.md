# Regression

A regression suite in EDA flow engineering is a curated set of representative design runs — covering different blocks, sizes, corners, and feature configurations — that is executed automatically whenever the flow scripts, methodology, or tool version changes, to catch unintended breakage or QoR degradation before it impacts production block teams. Unlike software regression testing where pass/fail is usually binary, EDA regressions must also compare QoR metrics (timing, area, power, runtime) against a baseline, since a run can "pass" (complete without errors) while still being significantly worse than before.

Building a regression infrastructure involves selecting test cases that exercise different aspects of the flow (small blocks for fast turnaround, large blocks for scale testing, designs with specific features like multi-voltage domains or unusual clocking), defining a baseline/golden set of results to compare against, and automating the comparison — flagging any test where WNS, area, or power moves beyond a threshold, or where the run fails, errors out, or hangs. Regression runs are dispatched to the compute grid, often hundreds of jobs per regression cycle, and results are aggregated into a dashboard or report showing pass/fail status and QoR deltas per test.

Operationally, regressions run on triggers: nightly for ongoing methodology development, and on-demand before any flow or tool change is promoted to the release branch used by production teams. A key engineering challenge is keeping regression turnaround time manageable as the suite grows — using incremental/smoke subsets for quick checks and full suites for release gating, caching unchanged intermediate results, and triaging failures efficiently (distinguishing a real regression from environment flakiness, license contention, or an outdated golden reference that itself needs updating). Regression infrastructure is usually built in Python with a database tracking historical results, integrated with the job scheduler (LSF/grid) and often with CI-style triggers tied to the revision control system.

Visit the following resources to learn more:

- [@book@Continuous Delivery](https://www.amazon.com/s?k=Continuous+Delivery+software+regression+testing)
- [@course@regression testing automation](https://www.udemy.com/courses/search/?q=regression+testing+automation+CI)
- [@video@regression testing automation pipeline](https://www.youtube.com/results?search_query=regression+testing+automation+EDA+CAD+flow)
- [@article@regression testing flow](https://vlsi.kr/?s=regression+testing)
