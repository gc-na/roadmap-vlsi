# Boolean Logic

Boolean logic is the mathematical foundation of all digital circuits: every signal is modeled as a 0 or 1, and gates implement Boolean operators such as AND, OR, NOT, NAND, NOR, and XOR. In RTL design, before writing a single line of Verilog or VHDL, you need to be comfortable manipulating Boolean expressions — applying De Morgan's theorems, simplifying expressions with Karnaugh maps or the Quine-McCluskey method, and recognizing when an expression can be reduced to fewer literals or a shallower logic depth.

These manipulations matter directly for synthesis quality. A logic function written as a deeply nested expression may synthesize to a long chain of two-input gates, increasing propagation delay and worsening timing closure, while an equivalent but algebraically simplified form can map more efficiently onto standard cells (e.g., a single AND-OR-INVERT or multiplexer cell). Understanding canonical forms — sum-of-products (SOP) and product-of-sums (POS) — also helps when reading synthesis reports or debugging why a synthesizer picked a particular gate-level implementation.

Boolean logic also underlies how RTL constructs like `assign`, `always` blocks, and `case` statements are interpreted by synthesis tools: each combinational output is ultimately reducible to a Boolean function of its inputs, and the synthesizer's job is to find an efficient gate-level realization of that function under area, timing, and power constraints. A good intuition for truth tables, don't-care conditions, and minimal cover also helps when writing test vectors and reasoning about functional coverage during verification.

Finally, Boolean algebra connects directly to CMOS implementation: NAND and NOR gates are the natural building blocks of static CMOS because of how PMOS/NMOS networks are constructed, which is why many synthesis libraries are NAND/NOR-centric rather than AND/OR-centric.

Visit the following resources to learn more:

- [@book@Digital Design and Computer Architecture by Harris and Harris](https://www.amazon.com/s?k=Digital+Design+and+Computer+Architecture+Harris+Harris)
- [@course@boolean algebra digital logic design](https://www.udemy.com/courses/search/?q=boolean+algebra+digital+logic+design)
- [@video@boolean algebra and logic gates](https://www.youtube.com/results?search_query=boolean+algebra+and+logic+gates)
- [@article@boolean logic](https://vlsi.kr/?s=boolean+logic)
