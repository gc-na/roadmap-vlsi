# Tempus

Tempus is Cadence's signoff-quality static timing analysis tool, positioned as a competitor and alternative to Synopsys PrimeTime in the EDA market, and is tightly integrated with Cadence's Innovus place-and-route flow. Like PrimeTime, Tempus reads a gate-level netlist, SDC constraints, Liberty libraries across multiple corners, and parasitics (SPEF), and computes timing using the same fundamental STA principles — arrival times, required times, slack, and the same delay models (NLDM, CCS, ECSM).

Tempus supports multi-mode multi-corner (MMMC) analysis through view definitions that pair constraint modes with RC corners, and it includes advanced on-chip variation (AOCV/POCV) modeling and signal integrity analysis for crosstalk delay and noise, comparable in scope to PrimeTime SI. A key differentiator historically has been Tempus's tight coupling with Innovus, allowing engineers to run "what-if" timing analysis directly within the physical implementation environment and apply ECO fixes that are immediately reflected in both the timing and physical database, reducing the back-and-forth between separate STA and P&R tools.

Tempus also offers a distributed, multi-threaded analysis engine designed to handle large MMMC scenario counts efficiently on compute farms, and supports a Tcl-based command interface similar in spirit to PrimeTime's `pt_shell`, though with Cadence-specific command names and conventions. Because design teams sometimes use Innovus for place-and-route but PrimeTime for final signoff (or vice versa with other tool combinations), correlation between Tempus and PrimeTime results — comparing slack numbers path-by-path for the same scenario — is a common methodology task to catch discrepancies in delay calculation, library interpretation, or SDC parsing between the two tools before committing to a signoff number.

Visit the following resources to learn more:

- [@book@Static Timing Analysis for Nanometer Designs](https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [@course@Cadence Tempus Innovus timing](https://www.udemy.com/courses/search/?q=Cadence+Tempus+Innovus+timing)
- [@video@Cadence Tempus timing signoff tutorial](https://www.youtube.com/results?search_query=Cadence+Tempus+timing+signoff+tutorial)
- [@article@Tempus](https://vlsi.kr/?s=Tempus)
