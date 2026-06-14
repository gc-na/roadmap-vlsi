# Sequences

In UVM, stimulus generation is decoupled from stimulus delivery through the **sequence/sequencer/driver** mechanism. A `uvm_sequence` is a class whose `body()` task generates one or more `uvm_sequence_item` transactions and sends them to a `uvm_sequencer` via `start_item()`/`finish_item()` (or the shorthand `\`uvm_do` macros). The **sequencer** arbitrates between multiple sequences that may be running concurrently, and the **driver** pulls items from the sequencer (`get_next_item()`/`item_done()`) and converts each one into pin-level signal activity over one or more clock cycles.

This **random generation** decoupling enables powerful reuse patterns. A low-level sequence might generate a single constrained-random transaction, while a higher-level sequence generates a stream of such transactions representing a realistic traffic pattern. Sequences can be composed hierarchically: a test-level sequence selects which traffic-pattern sequences to run and in what proportion.

**Sequence layering** supports composition and reuse. A `virtual sequence` running on a virtual sequencer can coordinate multiple sequences across multiple agents simultaneously — for example, driving a CPU-side write sequence on one interface while a memory-side response sequence runs on another, keeping them synchronized through events or shared configuration objects.

The **factory pattern** is heavily used here: a base test can register a default sequence for each sequencer, and a derived test can override it (via `set_type_override` or `set_inst_override`) to substitute error-injecting or corner-case sequences without touching the environment. **Response handling** — where the driver returns a response item back through the sequencer to the originating sequence via `get_response()` — lets sequences make decisions based on DUT feedback (e.g., retrying a transaction after a NACK). Mastering sequence layering, arbitration (`grab`/`ungrab`, priority), and virtual sequences is what lets a single UVM environment support everything from simple smoke tests to complex, multi-interface system-level scenarios.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] A Practical Guide to Adopting the Universal Verification Methodology (UVM)(https://www.amazon.com/s?k=A+Practical+Guide+to+Adopting+the+Universal+Verification+Methodology+UVM+Rosenberg+Meade)
- [Coursera] UVM sequences sequencers random generation(https://www.udemy.com/courses/search/?q=UVM+sequences+sequencers)
- [YouTube] UVM sequence layering virtual sequences tutorial(https://www.youtube.com/results?search_query=UVM+sequence+sequencer+driver+tutorial)
