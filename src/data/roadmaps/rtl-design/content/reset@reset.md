# Reset

Reset strategy determines how a design's flip-flops and state initialize to a known value, and it is one of the most consequential — and most often underestimated — architectural decisions in RTL design. The two fundamental choices are synchronous reset (the reset signal is sampled like any other input, only taking effect on a clock edge, e.g., `if (rst) q <= 0; else ... ` inside `always_ff @(posedge clk)`) and asynchronous reset (the reset directly forces the flip-flop to its reset value regardless of the clock, e.g., `always_ff @(posedge clk or posedge rst)`).

Synchronous resets are glitch-free and easier to verify with STA (reset is just another timing path), but they require the clock to be running to take effect and need the reset pulse to be wide enough to be sampled, which can be problematic during power-up before clocks are stable. Asynchronous resets take effect immediately regardless of clock activity, which is useful for power-up initialization, but they introduce a reset recovery/removal timing check and — critically — create a CDC-like problem of their own: if the asynchronous reset is deasserted close to a clock edge, different flops can sample the deassertion in different cycles, leading to functional inconsistency.

This is why most modern designs use an asynchronous assert, synchronous deassert reset scheme: a reset synchronizer circuit (often a chain of flip-flops similar to a CDC synchronizer) ensures the reset signal is released cleanly and synchronously with respect to each clock domain, even though the assertion can happen asynchronously and immediately.

Other reset considerations include reset domain crossing (analogous to CDC, when signals cross between blocks reset by different reset signals or at different times), the choice of active-high vs. active-low polarity (consistency matters for library cell selection, since some standard cell flip-flops only natively support one polarity), partial/selective reset (not every register needs reset — resetting only state that affects control flow or output validity reduces area and reset fan-out, an important low-power and DFT consideration), and ensuring reset coverage is verified — that every flop reaches its specified value after reset, checked via simulation and often formal reset analysis tools.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] RTL Design Techniques by Clifford Cummings (SNUG papers on reset)(https://www.amazon.com/s?k=Clifford+Cummings+RTL+coding+reset+techniques)
- [Coursera] rtl reset design verilog(https://www.udemy.com/courses/search/?q=rtl+reset+design+verilog)
- [YouTube] synchronous vs asynchronous reset verilog(https://www.youtube.com/results?search_query=synchronous+vs+asynchronous+reset+verilog)
