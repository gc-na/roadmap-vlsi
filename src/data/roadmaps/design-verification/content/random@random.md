# Random

Constrained-random verification (CRV) is the core technique that lets SystemVerilog testbenches explore far more of a design's state space than directed tests ever could. Instead of hand-writing every stimulus sequence, you define `rand` and `randc` class member variables and apply `constraint` blocks that restrict legal values — for example, constraining an address field to stay within a memory's valid range while still randomizing across that entire range, or weighting transaction types with `dist` so that error cases occur with realistic but non-zero probability. Calling `randomize()` on an object then solves the constraints and produces a legal, pseudo-random transaction.

**Constraints** are your primary tool for steering randomization. You define ranges (`address inside {[0:0xFFFF]}`), exclusions (`address != 0`), weighted **distributions** (`transaction_type dist {READ := 70, WRITE := 25, ERROR := 5}`), and logical relationships (`if (req) full_addr = {base + offset;}`). Constraint **solving order** matters — use `solve...before` to declare that one variable should be randomized before another if they have interdependencies. **Soft constraints** (using `soft`) can be overridden by derived classes or inline constraints, enabling flexibility without subclassing.

Writing good constraints is a skill in itself. You need to avoid **over-constraining** (which can make the solver fail or return no solutions) or **under-constraining** (which can generate illegal or uninteresting stimulus). Inline constraints via `randomize() with {...}` let a specific test override default randomization without creating a new subclass.

**Randomization** must be **reproducible**: simulations are run with explicit random seeds, and a failing test must be re-runnable with the same seed to debug the exact same sequence of random decisions. Regression suites typically run the same tests across many seeds to maximize state-space coverage over time. Constrained-random stimulus is most powerful when paired with functional **coverage** (to measure what's actually been exercised) and a scoreboard/reference model (to check correctness automatically) — together these form the classic coverage-driven verification (CDV) loop: randomize, check, measure coverage, then add constraints or directed tests to close coverage holes.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] SystemVerilog for Verification: A Guide to Learning the Testbench Language Features(https://www.amazon.com/s?k=SystemVerilog+for+Verification+Chris+Spear)
- [Coursera] Constraints distribution randomization SystemVerilog(https://www.udemy.com/courses/search/?q=constrained+random+verification+SystemVerilog)
- [YouTube] SystemVerilog constraint solver randomization tutorial(https://www.youtube.com/results?search_query=SystemVerilog+constraints+randomization+tutorial)
