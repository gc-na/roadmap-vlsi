# Bugs

Understanding how bugs originate and propagate is fundamental to designing effective verification strategies. RTL bugs broadly fall into a few categories: **functional logic errors** (wrong Boolean expression, incorrect state machine transition, off-by-one in a counter or address decode), **interface/protocol violations** (incorrect handshake timing, missing back-pressure handling, violating bus protocol ordering rules), **clock-domain crossing (CDC) issues** (metastability, data corruption when signals cross asynchronous boundaries without proper synchronization), **reset issues** (incomplete reset of state, X-propagation from uninitialized registers), and **corner cases** (FIFO full/empty, counter wraparound, arithmetic overflow/underflow).

**Corner case and boundary condition** testing is where many bugs hide: the design works for typical transactions but fails at the edges (maximum address, minimum counter value, simultaneous reset and active state, back-to-back rapid transactions). Effective test plans explicitly enumerate these boundary scenarios and write directed tests to exercise them. A FIFO that works for normal occupancy levels may have a bug when exactly full or exactly empty; a cache coherency protocol may have a race in back-to-back writes to the same address.

**Test escapes** (bugs that make it through verification) are tracked rigorously. After tape-out, any bug found in silicon is analyzed to determine which verification gap allowed it to escape: Was there no functional coverage for that case? Did the testbench stimulus never reach that state? Was there a reference model bug? Understanding test escapes drives improvements in future verification strategies.

A key skill is **bug triage**: when a test fails, you determine whether it's a real DUT bug, a testbench/environment bug (incorrect reference model, miswired interface, wrong configuration), or a test issue (bad constraints, wrong expected values). This involves waveform debugging, comparing simulation logs against specification, and isolating the failure to the smallest reproducible scenario — often by reducing a random seed's test length or disabling parts of the stimulus until the symptom disappears.

Once a real bug is identified, writing a clear bug report matters: precise description of the violated expectation, waveform/log evidence, minimal reproduction steps (seed, test name, configuration), and suspected root cause in RTL. Many teams practice root-cause classification — tracking whether bugs are found in simulation, formal, emulation, or post-silicon, and what verification gap allowed each to slip through.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Writing Testbenches: Functional Verification of HDL Models(https://www.amazon.com/s?k=Writing+Testbenches+Functional+Verification+of+HDL+Models+Bergeron)
- [Coursera] RTL debugging corner cases and bug triage(https://www.udemy.com/courses/search/?q=RTL+debugging+bug+triage)
- [YouTube] Functional bugs corner cases and test escapes(https://www.youtube.com/results?search_query=functional+bugs+corner+cases+debugging)
