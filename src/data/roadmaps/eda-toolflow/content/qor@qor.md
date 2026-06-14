# QoR

Quality of Results (QoR) refers to the set of metrics used to judge how good a chip implementation is at a given stage: timing slack (worst negative slack and total negative slack), area, power (leakage and dynamic), congestion, DRC violation counts, and runtime/memory consumption of the tool run itself. In an EDA toolflow context, QoR is not just an output to report at the end — it is the primary feedback signal that flow and methodology engineers use to judge whether a script change, a new tool version, or a constraint update made things better or worse.

Tracking QoR requires extracting these metrics consistently from tool log files and reports, which differ in format between vendors and even between tool versions. Flow engineers write parsers (often in Tcl, Python, or Perl) that scrape synthesis, place-and-route, and STA reports for key numbers and normalize them into a common schema, since comparing a Genus log to a Fusion Compiler log requires mapping different terminology onto the same metrics. These parsed numbers are typically loaded into a database or spreadsheet-like structure so they can be plotted over time or compared across experiments.

QoR work also involves defining what "good" looks like for a given block: target frequency with margin, area budget against the floorplan, and power envelope against the package/thermal constraints. Engineers analyze QoR deltas when something changes — a new RTL drop, an updated library, a tool patch, or a script tweak — to catch regressions early, since a seemingly small change (like reordering optimization commands or adjusting a `set_max_delay`) can shift WNS by tens of picoseconds across hundreds of paths. Understanding how to read timing, area, and power reports, and how to attribute a QoR change to its root cause, is a core skill for anyone maintaining a design flow.

Visit the following resources to learn more:

- [@book@Static Timing Analysis for Nanometer Designs](https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker)
- [@course@timing closure ASIC](https://www.udemy.com/courses/search/?q=timing+closure+ASIC+QoR)
- [@video@QoR timing area power analysis](https://www.youtube.com/results?search_query=QoR+timing+area+power+analysis+ASIC)
- [@article@QoR analysis](https://vlsi.kr/?s=QoR)
