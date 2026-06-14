# Mindset

Design verification requires a fundamentally different mindset from RTL design. Where a designer asks "how do I build this to work correctly," a verification engineer asks "how could this fail, and how do I prove it doesn't." This adversarial, proof-by-exhaustion mentality drives every decision in a verification flow. A good DV engineer assumes the design under test (DUT) is guilty until proven innocent through evidence — simulation logs, coverage reports, and assertion results.

**Bug hunting** is the core discipline. Instead of skimming a specification for happy-path behavior, you hunt for ambiguities, corner cases, boundary conditions, and implicit assumptions. Every phrase like "the FIFO shall not overflow" immediately triggers: what happens if it does? How do I force that state? You write a test plan that enumerates failure scenarios before any testbench code is written. This shift-left mentality — catching bugs early, before tape-out — is the entire point of the job.

**Coverage goals** anchor your verification strategy. You don't write random tests; you write tests aimed at hitting specific coverage targets (functional coverage, code coverage, assertion coverage). This means understanding upfront what "done" means: 95% code coverage? All corner cases of the protocol exercised? All fault models detectable? Coverage-driven development forces you to be intentional about what you're verifying and how you'll know when you've verified it.

Verification also demands comfort with negative results. A test that passes immediately is often less valuable than one that fails and reveals a real bug. Finding issues early is the entire discipline. This means you need to be skeptical of your own testbench: a passing test could mean the design is correct, or it could mean your checker is broken, your stimulus never reached the interesting state, or your scoreboard silently swallowed a mismatch. Building self-checking environments with strong assertions, and periodically injecting known bugs to confirm the testbench actually catches them (mutation testing), is part of building this verification mindset.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Writing Testbenches: Functional Verification of HDL Models(https://www.amazon.com/s?k=Writing+Testbenches+Functional+Verification+of+HDL+Models+Bergeron)
- [Coursera] Verification mindset and test planning(https://www.udemy.com/courses/search/?q=verification+engineer+mindset)
- [YouTube] Coverage-driven verification strategy(https://www.youtube.com/results?search_query=coverage-driven+verification+strategy)
