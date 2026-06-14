# Synthesis

Beyond the area/timing/power optimization view of synthesis, there is a verification- and lint-centric perspective: how RTL coding choices that affect synthesizability also affect whether a design can be efficiently and meaningfully verified. Writing "synthesizable" RTL is necessary but not sufficient — the same code should also produce a design whose gate-level netlist behaves equivalently to RTL simulation, whose structure supports formal tools, and whose corner cases are visible to coverage and assertion-based checking.

A central concern is RTL/gate-level simulation mismatch, often rooted in synthesis-unfriendly constructs that simulate one way but synthesize another: blocking assignments in sequential always blocks, `x`-value (unknown) handling differences (RTL simulation may propagate `x` through a `case` statement in ways the synthesized gates, which have no concept of `x`, cannot replicate — this is why `x`-propagation and `x`-optimism/pessimism are a recurring gate-level simulation debugging theme), and full_case/parallel_case-style synthesis directives that can cause synthesis to optimize away logic that RTL simulation still exercises (e.g., assuming a `case` statement is full when it isn't, dropping a default branch's logic that simulation would have used for "impossible" but reachable input combinations).

Verification-friendly synthesizable RTL also means structuring code so that formal tools and equivalence checkers (e.g., Logic Equivalence Checking, LEC, comparing RTL to the synthesized netlist) can analyze it efficiently — avoiding excessively complex arithmetic that creates state-space explosion for formal, and keeping FSM encodings and reset behavior explicit rather than relying on synthesis to "clean up" ambiguous states. DFT (design-for-test) considerations also interact with synthesis from a verification standpoint: scan-friendly flip-flops, testable reset architectures, and avoiding combinational loops or asynchronous logic that scan insertion and ATPG tools cannot handle.

Finally, gate-level simulation (GLS) — running testbenches against the post-synthesis (and post-place-and-route) netlist with SDF-annotated timing — is the verification activity most directly tied to synthesis output, and RTL coding choices around resets, initial values, and `x`-propagation determine how much debugging effort GLS requires.

Visit the following resources to learn more:

- [@book@Writing Testbenches using SystemVerilog by Janick Bergeron](https://www.amazon.com/s?k=Writing+Testbenches+SystemVerilog+Janick+Bergeron)
- [@course@gate level simulation verification flow](https://www.udemy.com/courses/search/?q=gate+level+simulation+verification+flow)
- [@video@RTL gate level simulation mismatch x propagation](https://www.youtube.com/results?search_query=RTL+gate+level+simulation+mismatch+x+propagation)
- [@article@gate level simulation synthesis verification](https://vlsi.kr/?s=gate+level+simulation)
