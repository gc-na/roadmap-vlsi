# Random

Constrained-random verification (CRV) is the core technique that lets SystemVerilog testbenches explore far more of a design's state space than directed tests ever could. Instead of hand-writing every stimulus sequence, you define `rand` and `randc` class member variables and apply `constraint` blocks that restrict legal values — for example, constraining an address field to stay within a memory's valid range while still randomizing across that entire range, or weighting transaction types with `dist` so that error cases occur with realistic but non-zero probability. Calling `randomize()` on an object then solves the constraints and produces a legal, pseudo-random transaction.

Writing good constraints is a skill in itself. You need to understand constraint solving order (`solve...before`), soft constraints (which can be overridden by derived classes or `randomize() with`), implication and conditional constraints (`->`, `if-else` inside constraint blocks), and how to avoid over-constraining (which can make the solver fail or silently restrict coverage) or under-constraining (which can generate illegal/uninteresting stimulus). Inline constraints via `randomize() with {...}` let a specific test override default randomization without subclassing.

Reproducibility is critical: simulations are run with explicit random seeds, and a failing test must be re-runnable with the same seed to debug the exact same sequence of random decisions. Regression suites typically run the same tests across many seeds to maximize state-space coverage over time. Constrained-random stimulus is most powerful when paired with functional coverage (to measure what's actually been exercised) and a scoreboard/reference model (to check correctness automatically) — together these three pieces form the classic coverage-driven verification (CDV) loop: randomize, check, measure coverage, then add constraints or directed tests to close coverage holes.

Visit the following resources to learn more:

- [@book@SystemVerilog for Verification: A Guide to Learning the Testbench Language Features](https://www.amazon.com/s?k=SystemVerilog+for+Verification+Chris+Spear)
- [@course@constrained random verification SystemVerilog](https://www.udemy.com/courses/search/?q=constrained+random+verification+SystemVerilog)
- [@video@SystemVerilog constraints randomization tutorial](https://www.youtube.com/results?search_query=SystemVerilog+constraints+randomization+tutorial)
- [@article@constrained random verification](https://vlsi.kr/?s=constrained+random+verification)
