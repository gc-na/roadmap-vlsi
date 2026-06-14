# Lint

RTL linting is a static analysis step — run before simulation or synthesis — that checks source code against a set of structural and stylistic rules without requiring any test vectors. Tools like Synopsys SpyGlass Lint, Cadence HAL, or Verilator's lint mode parse the RTL and flag constructs that are likely to cause functional bugs, simulation/synthesis mismatches, or downstream tool problems.

Common categories of lint violations directly relevant to RTL design include: unintended latch inference (incomplete `if`/`case` coverage in combinational blocks), multi-driven nets (a signal assigned from more than one always block or both a continuous assignment and a procedural block), blocking assignments used inside clocked sequential blocks (a frequent source of simulation/synthesis mismatch), incomplete sensitivity lists in legacy `always @(...)` blocks, unreachable code or unreachable FSM states, width mismatches in arithmetic or port connections that cause implicit truncation or sign-extension, and combinational feedback loops.

Lint also enforces coding guidelines that improve consistency across a large codebase with many contributors — naming conventions, requiring `default` branches in `case` statements even when functionally "complete" (defensive coding against future modifications), restrictions on mixing clock edges or using multiple clocks in one always block, and flagging the use of constructs known to behave inconsistently across simulators or synthesis tools.

Because lint runs early and fast (no testbench required), it is typically the first quality gate in an RTL development flow — catching a large fraction of bugs before they require expensive simulation debug cycles. A clean lint report is also frequently a sign-off requirement before RTL is handed off to verification or synthesis teams. Understanding lint rule categories — and why each rule exists in terms of hardware semantics — helps an RTL designer write code that is correct "the first time" rather than relying on lint as an afterthought to be waived away.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Reuse Methodology Manual for System-on-a-Chip Designs by Keating and Bricaud(https://www.amazon.com/s?k=Reuse+Methodology+Manual+System+on+Chip+Keating+Bricaud)
- [Coursera] rtl design lint coding guidelines(https://www.udemy.com/courses/search/?q=rtl+design+lint+coding+guidelines)
- [YouTube] rtl lint checks verilog spyglass(https://www.youtube.com/results?search_query=rtl+lint+checks+verilog+spyglass)
