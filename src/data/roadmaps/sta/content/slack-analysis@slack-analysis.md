# Slack Analysis

Slack is the central metric in STA: it quantifies the margin between when a signal is required to arrive (required time) and when it actually arrives (arrival time). For setup checks, slack = required time - arrival time, where a positive value means the path has timing margin and a negative value means a violation that must be fixed before signoff. For hold checks, the relationship is reversed in sense but the same principle applies — slack measures how much margin exists before data arrives too early.

Worst negative slack (WNS) is the single largest negative slack value across all endpoints for a given check, and total negative slack (TNS) is the sum of all negative slack values across all violating endpoints, weighted by clock domain. WNS tells you how bad the worst single violation is, while TNS tells you how widespread violations are across the design — a design with small WNS but huge TNS has many marginal paths rather than one severe outlier, which usually points to a systemic issue (e.g., a clock tree problem or a congested region) rather than a single bad cell.

During physical design and timing closure, engineers track WNS and TNS at each stage (post-synthesis, post-placement, post-CTS, post-route) to monitor convergence trends. Slack is reported per corner and per check type (setup, hold, recovery, removal, max transition, max capacity), since a path can be critical in one corner but have ample margin in another. Effective slack analysis also involves grouping violations by clock domain, path group, or physical region to prioritize fixes — for example, fixing a handful of cells that appear across many critical paths (common-path optimization) is often more efficient than fixing each path individually. Slack histograms and Pareto analysis of failing endpoints are standard techniques for prioritizing ECO (engineering change order) work.

Visit the following resources to learn more:

- [@book@Static Timing Analysis for Nanometer Designs](https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [@course@timing closure ECO](https://www.udemy.com/courses/search/?q=timing+closure+ECO+VLSI)
- [@video@WNS TNS slack timing closure](https://www.youtube.com/results?search_query=WNS+TNS+slack+timing+closure+explained)
- [@article@slack analysis WNS TNS](https://vlsi.kr/?s=slack+analysis)
