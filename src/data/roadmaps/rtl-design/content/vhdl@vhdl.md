# VHDL

VHDL (VHSIC Hardware Description Language, IEEE 1076) is the other major HDL used for RTL design, dominant particularly in European semiconductor companies, defense/aerospace, and FPGA flows alongside Verilog. VHDL is a strongly-typed language derived from Ada, which means the compiler enforces type matching (e.g., `std_logic` vs. `std_logic_vector` vs. `integer`) much more strictly than Verilog — type mismatches that Verilog silently coerces are compile errors in VHDL, which catches certain classes of bugs earlier at the cost of more verbose code.

A VHDL design unit consists of an `entity` (the interface — ports and generics, analogous to a Verilog module's port list and parameters) and one or more `architecture` bodies (the implementation). This separation allows multiple implementations of the same interface, useful for swapping between behavioral and structural descriptions, or different optimization targets, without changing the entity that other modules instantiate.

For synthesizable RTL, combinational logic is described with `process` blocks containing only combinational signals in the sensitivity list (or `process(all)` in VHDL-2008), while sequential logic uses `process` blocks sensitive to a clock edge (`if rising_edge(clk) then`). As with Verilog, the completeness of `if`/`case` branches inside a combinational process determines whether a latch is inferred — the same underlying hardware-inference rules apply, just expressed in VHDL syntax. `signal` assignments (`<=`) in VHDL behave similarly to Verilog's non-blocking assignments for sequential updates.

VHDL's `generic` and `generate` constructs support parameterized, reusable RTL similar to Verilog's `parameter` and `generate`. Packages (`package`/`package body`) provide a mechanism for sharing types, constants, and functions across a design, comparable to SystemVerilog packages. For engineers moving between Verilog/SystemVerilog and VHDL environments, the underlying digital design concepts — synchronous design, FSM coding patterns, latch avoidance — transfer directly; only the syntax and type system differ.

Visit the following resources to learn more:

- [@book@RTL Hardware Design Using VHDL by Pong P. Chu](https://www.amazon.com/s?k=RTL+Hardware+Design+Using+VHDL+Pong+Chu)
- [@course@vhdl for fpga and rtl design](https://www.udemy.com/courses/search/?q=vhdl+for+fpga+and+rtl+design)
- [@video@vhdl tutorial for beginners rtl design](https://www.youtube.com/results?search_query=vhdl+tutorial+for+beginners+rtl+design)
- [@article@vhdl](https://vlsi.kr/?s=vhdl)
