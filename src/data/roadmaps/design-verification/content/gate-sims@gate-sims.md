# Gate Sims

Gate-level simulation (GLS) runs the testbench against the post-synthesis (or post-layout) netlist instead of the RTL, using the actual standard-cell library models and back-annotated timing delays (from SDF — Standard Delay Format — files) rather than the zero-delay or unit-delay behavior of RTL simulation. The primary purposes are to verify that synthesis, scan insertion (for DFT), clock-tree insertion, and any ECOs did not change functional behavior, and to check that the design works correctly with realistic gate and wire delays — catching issues that RTL simulation, with its idealized timing, cannot see.

GLS is typically run in two flavors: zero-delay (or unit-delay) GLS, which focuses purely on functional equivalence to RTL and is faster to run, and timing-annotated (SDF-based) GLS, which uses the back-annotated delays from STA to check things like proper reset sequencing across asynchronous domains, X-propagation through uninitialized flops at power-up, and glitches on asynchronous control signals. Timing GLS is notoriously slow and is usually run on a small subset of tests — often just enough to exercise reset, clock-domain crossings, scan/DFT modes (running the actual scan-shift and ATPG patterns through simulation), and a few key functional scenarios.

X-propagation is one of the most important things GLS catches that RTL simulation often misses: in RTL, uninitialized registers are frequently modeled as starting at a known value (0) for simulation convenience, while real silicon (and a correct gate-level model) starts at an unknown (X) value until reset. If a downstream mux or control path depends on an unreset register before it's properly initialized, GLS will propagate X through the design and can cause spurious assertion failures or scoreboard mismatches — these are often real bugs (missing reset connections) rather than simulation artifacts, so GLS X-issues need careful triage rather than blanket suppression. Because GLS is slow and debug-intensive, teams aim to catch as many bugs as possible in RTL simulation and formal, reserving GLS for sign-off-level confidence on timing, reset, DFT modes, and low-power sequences.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Writing Testbenches: Functional Verification of HDL Models(https://www.amazon.com/s?k=Writing+Testbenches+Functional+Verification+of+HDL+Models+Bergeron)
- [Coursera] gate level simulation ASIC(https://www.udemy.com/courses/search/?q=gate+level+simulation+ASIC)
- [YouTube] gate level simulation SDF X-propagation tutorial(https://www.youtube.com/results?search_query=gate+level+simulation+SDF+X-propagation+tutorial)
