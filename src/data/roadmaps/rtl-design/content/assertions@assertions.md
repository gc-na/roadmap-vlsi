# Assertions

Assertions are statements embedded in (or alongside) RTL that specify expected design behavior, automatically checked during simulation and formal verification. SystemVerilog Assertions (SVA), written using `assert property`, `assume property`, and `cover property` constructs, let designers and verification engineers express temporal relationships — "if signal A is asserted, signal B must be asserted within N cycles" — using a concise, declarative syntax built on sequences and properties.

For an RTL designer, assertions serve as executable documentation of design intent and as an early bug-detection mechanism. Simple combinational assertions (immediate assertions, `assert (condition)`) can catch invalid states the moment they occur — for example, asserting that a one-hot signal never has more than one bit set, or that a FIFO's read pointer never exceeds its write pointer. Concurrent assertions, evaluated relative to clock edges using SVA's temporal operators (`##` for cycle delay, `|->` and `|=>` for implication, `throughout`, `until`), capture protocol-level requirements like "a request must be followed by an acknowledge within 4 cycles, and the request signal must remain high until the acknowledge."

Assertions integrated directly into RTL (sometimes called "white-box" assertions) are particularly valuable for internal FSM invariants, interface protocol checks between sub-modules, and CDC-related properties (e.g., asserting a signal is only ever a single bit wide when crossing a synchronizer). Many of these properties can also feed formal verification tools directly — the same SVA written for simulation checking can often be used as a formal property to be proven exhaustively, rather than merely checked against simulated stimulus.

A practical RTL coding consideration is keeping assertions synthesis-transparent: assertions must be ignored by synthesis (most tools automatically strip `assert`/`cover` statements, but designers should verify this) while remaining active in simulation, and assertion density should be balanced against simulation performance overhead, especially in large block-level or SoC-level regressions.

Visit the following resources to learn more:

- [@book@SystemVerilog Assertions Handbook by Ben Cohen](https://www.amazon.com/s?k=SystemVerilog+Assertions+Handbook+Ben+Cohen)
- [@course@systemverilog assertions sva](https://www.udemy.com/courses/search/?q=systemverilog+assertions+sva)
- [@video@systemverilog assertions tutorial sva](https://www.youtube.com/results?search_query=systemverilog+assertions+tutorial+sva)
- [@article@systemverilog assertions](https://vlsi.kr/?s=systemverilog+assertions)
