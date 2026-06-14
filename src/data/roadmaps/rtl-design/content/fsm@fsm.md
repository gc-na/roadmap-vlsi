# FSM

Finite state machines are the primary mechanism for describing control logic in RTL designs — bus protocol controllers, arbiters, sequencers, and handshake logic are all naturally expressed as FSMs. An FSM consists of a finite set of states, a state register, a next-state function (combinational), and an output function that can be either Moore-style (outputs depend only on current state) or Mealy-style (outputs also depend on current inputs).

The standard RTL coding pattern splits an FSM into two or three always blocks: a sequential block (`always_ff`) that updates the state register on the clock edge, and a combinational block (`always_comb`) that computes the next state and outputs based on the current state and inputs, often using a `case` statement over an enumerated state type. Separating these concerns keeps the design readable and makes it easier for synthesis to recognize the state register and apply state-machine-specific optimizations such as state encoding changes.

State encoding is a meaningful design decision. Binary encoding minimizes the number of flip-flops, one-hot encoding (one flip-flop per state) often produces faster, simpler next-state logic at the cost of more registers, and gray encoding can reduce switching activity for power-sensitive designs. Synthesis tools can often re-encode states automatically via attributes or directives, but understanding the trade-offs helps when reviewing synthesis reports or debugging timing-critical control paths.

FSM design also intersects heavily with verification: every state and transition should ideally be reachable and exercised, dead states or unreachable states often indicate a coding bug, and tools flag unreachable states or incomplete case statements (missing `default`) as lint violations. For safety- or reset-critical FSMs, defining a well-specified reset state and ensuring the FSM always returns to a known state after reset (or after an error condition) is essential, connecting directly to reset strategy and formal verification topics.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Digital Design and Computer Architecture by Harris and Harris(https://www.amazon.com/s?k=Digital+Design+and+Computer+Architecture+Harris+Harris)
- [Coursera] finite state machine verilog design(https://www.udemy.com/courses/search/?q=finite+state+machine+verilog+design)
- [YouTube] FSM design verilog moore mealy(https://www.youtube.com/results?search_query=FSM+design+verilog+moore+mealy)
