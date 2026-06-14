# Mindset

Design verification requires a fundamentally different mindset from RTL design. Where a designer asks "how do I build this to work correctly," a verification engineer asks "how could this fail, and how do I prove it doesn't." This adversarial, proof-by-exhaustion mentality drives every decision in a verification flow, from test planning to coverage closure. A good DV engineer assumes the design under test (DUT) is guilty until proven innocent through evidence — simulation logs, coverage reports, and assertion results.

This mindset shows up concretely in how you read a specification. Instead of skimming for the happy-path behavior, you look for ambiguities, corner cases, boundary conditions, and implicit assumptions (reset values, clock domain crossings, back-to-back transactions, error injection paths). Every "the FIFO shall not overflow" statement should immediately trigger the question: what happens if it does, and how do I force that condition in simulation? Writing a test plan that enumerates these scenarios before any testbench code is written is a core discipline.

Verification also demands comfort with negative results. A test that passes immediately is often less valuable than one that fails and reveals a real bug — finding bugs early, before tape-out, is the entire point of the job. This means you need to be skeptical of your own testbench too: a passing test could mean the design is correct, or it could mean your checker is broken, your stimulus never reached the interesting state, or your scoreboard silently swallowed a mismatch. Building self-checking environments with strong assertions, and periodically injecting known bugs to confirm the testbench actually catches them (mutation testing), is part of building this verification mindset.

Visit the following resources to learn more:

- [@book@Writing Testbenches: Functional Verification of HDL Models](https://www.amazon.com/s?k=Writing+Testbenches+Functional+Verification+of+HDL+Models+Bergeron)
- [@course@digital design verification fundamentals](https://www.udemy.com/courses/search/?q=digital+design+verification+fundamentals)
- [@video@verification engineer mindset ASIC](https://www.youtube.com/results?search_query=verification+engineer+mindset+ASIC)
- [@article@verification mindset](https://vlsi.kr/?s=verification+mindset)
