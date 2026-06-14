# Signoff

Timing signoff is the final, most rigorous STA run that determines whether a design is ready to tape out. Unlike the fast, approximate timing checks used during synthesis and place-and-route optimization, signoff STA uses the most accurate available models: full SPEF-based parasitic extraction (often from a signoff-quality extraction tool), complete MMMC scenario coverage across all required PVT corners and modes, AOCV or POCV/LVF derating, signal integrity (crosstalk) analysis, and propagated clocks with real clock tree latency and skew.

A signoff timing report must show clean results (zero violations, or only explicitly waived violations) across every defined check: setup, hold, recovery, removal, max transition (slew), max capacitance, max fanout, clock pulse width, and clock gating checks. Beyond simple slack, signoff also examines metrics like total negative slack (TNS) trends, the number of violating endpoints, and design rule checks (DRCs) on transition time and capacitance that, if violated, can indicate signal integrity or reliability risks even if timing technically passes.

Signoff STA also includes verification of the SDC constraints themselves — constraint consistency checks confirm that clocks are properly defined, exceptions don't conflict, and there are no unconstrained endpoints or undriven/floating clock sources. Many teams run formal constraint linting tools alongside STA to catch missing `set_input_delay`/`set_output_delay`, incorrect generated clock relationships, or overly broad false paths before they become signoff escapes. Because signoff runs are computationally expensive (often taking many hours across hundreds of scenarios on a compute farm), teams typically iterate using faster "ECO-quality" STA during convergence and reserve full signoff runs for milestone checkpoints, with the final signoff run serving as the formal gate before handing the design off for fabrication.

Visit the following resources to learn more:

- [@book@Static Timing Analysis for Nanometer Designs](https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [@course@timing signoff VLSI tapeout](https://www.udemy.com/courses/search/?q=timing+signoff+VLSI+tapeout)
- [@video@STA timing signoff flow tapeout](https://www.youtube.com/results?search_query=STA+timing+signoff+flow+tapeout)
- [@article@timing signoff](https://vlsi.kr/?s=timing+signoff)
