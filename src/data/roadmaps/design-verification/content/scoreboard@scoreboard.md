# Scoreboard

The scoreboard is the component that gives a UVM testbench its self-checking capability: it receives transactions from monitors (via `uvm_analysis_export`/`uvm_analysis_imp` ports), compares actual DUT behavior against expected behavior, and reports mismatches. In its most common form, a scoreboard maintains a reference model — either a behavioral SystemVerilog model, a C/C++ model integrated via DPI, or a simpler algorithmic prediction — that computes the expected output for each input transaction. When the monitor reports an actual output transaction, the scoreboard compares it against the predicted value, typically using queues to handle out-of-order or pipelined responses.

A key design challenge is transaction matching and ordering. For in-order protocols, a simple FIFO of expected transactions works: pop the oldest expected item and compare against each actual item as it arrives. For out-of-order systems (e.g., a memory controller that reorders requests, or a multi-threaded interconnect), the scoreboard needs tagging (transaction IDs) or associative arrays to match responses to their originating requests regardless of arrival order. Timing also matters: the scoreboard must handle cases where the expected transaction arrives before, after, or interleaved with the actual transaction, often using `uvm_tlm_analysis_fifo` to buffer one side while waiting for the other.

Beyond simple comparison, scoreboards often implement `do_compare()` overrides on transaction objects to define field-by-field comparison rules (e.g., ignoring don't-care bits, or treating certain fields as "expected to be X" in error scenarios), and they report results through `uvm_error`/`uvm_info` so failures surface in the simulation log and regression dashboard. End-of-test checks (verifying all expected transactions were eventually matched, with no leftover unmatched items in either queue) are essential — a scoreboard that only checks "no mismatches found" but never verifies queues are empty can mask missing transactions entirely.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] A Practical Guide to Adopting the Universal Verification Methodology (UVM)(https://www.amazon.com/s?k=A+Practical+Guide+to+Adopting+the+Universal+Verification+Methodology+UVM+Rosenberg+Meade)
- [Coursera] UVM scoreboard reference model(https://www.udemy.com/courses/search/?q=UVM+scoreboard+reference+model)
- [YouTube] UVM scoreboard tutorial(https://www.youtube.com/results?search_query=UVM+scoreboard+tutorial)
