# Assertions

SystemVerilog Assertions (SVA) provide a concise, formal way to specify temporal properties of design behavior directly in the RTL or bind files, and they are checked continuously throughout simulation rather than only at the end of a test. An immediate assertion checks a condition combinationally at the point it's evaluated (similar to a procedural `if` with an error message), while a concurrent assertion (`property`/`sequence` constructs evaluated with `assert property`) checks temporal relationships across clock cycles — for example, "if `req` is asserted, then `ack` must be asserted within 4 cycles" or "once `valid` goes high, `data` must remain stable until `ready`."

The sequence and property layer gives you operators for expressing complex timing relationships: `##n` for cycle delays, `|->` and `|=>` for overlapping and non-overlapping implication, `throughout`, `within`, `and`/`or`, and repetition operators (`[*n]`, `[->n]`). Well-written assertions catch protocol violations (AXI, AHB, APB handshake rules), FSM illegal-state transitions, and interface contract violations the moment they occur — often pinpointing the exact cycle and signal of a bug, which is far faster to debug than tracing back from a scoreboard mismatch many cycles later.

Assertions also feed coverage: `cover property` statements record when a specific temporal scenario occurs, useful for confirming corner-case timing relationships were exercised. Many verification IP (VIP) packages ship with comprehensive assertion-based protocol checkers that get bound to interface signals automatically. Beyond simulation, the exact same SVA properties are the input language for formal verification tools (model checkers), which can mathematically prove a property holds for all possible inputs rather than just the ones exercised by simulation — making assertions a bridge between dynamic and formal verification.

Visit the following resources to learn more:

- [@book@SystemVerilog Assertions and Functional Coverage](https://www.amazon.com/s?k=SystemVerilog+Assertions+and+Functional+Coverage+Ashok+Mehta)
- [@course@SystemVerilog assertions SVA](https://www.udemy.com/courses/search/?q=SystemVerilog+assertions+SVA)
- [@video@SystemVerilog assertions SVA tutorial](https://www.youtube.com/results?search_query=SystemVerilog+assertions+SVA+tutorial)
- [@article@SystemVerilog assertions](https://vlsi.kr/?s=SystemVerilog+assertions)
