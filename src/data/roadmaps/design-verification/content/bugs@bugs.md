# Bugs

Understanding how bugs originate and propagate is fundamental to designing effective verification strategies. RTL bugs broadly fall into a few categories: functional logic errors (wrong Boolean expression, incorrect state machine transition, off-by-one in a counter or address decode), interface/protocol violations (incorrect handshake timing, missing back-pressure handling, violating a bus protocol's ordering rules), clock-domain crossing (CDC) issues (metastability, data corruption when signals cross asynchronous boundaries without proper synchronization), reset issues (incomplete reset of state, X-propagation from uninitialized registers), and corner-case/boundary conditions (FIFO full/empty, counter wraparound, arithmetic overflow/underflow).

A key skill is bug triage: when a test fails, you must determine whether the failure is a real DUT bug, a testbench/environment bug (incorrect reference model, miswired interface, wrong configuration), or a test issue (bad constraints, wrong expected values). This typically involves waveform debugging, comparing simulation logs against a reference model or specification, and isolating the failure to the smallest reproducible scenario — often by reducing a random seed's test length or disabling parts of the stimulus until the symptom disappears or changes.

Once a real bug is identified, writing a clear bug report matters: a precise description of the violated expectation, the waveform/log evidence, the minimal reproduction steps (seed, test name, configuration), and the suspected root cause in RTL. Many teams also practice root-cause classification — tracking whether bugs are found in simulation, formal, emulation, or post-silicon, and what verification gap allowed each to slip through — to improve coverage models and test plans for future projects. Bug hunting before tape-out is the core value proposition of the entire DV function, so triage speed and accuracy directly affect schedule.

Visit the following resources to learn more:

- [@book@Writing Testbenches: Functional Verification of HDL Models](https://www.amazon.com/s?k=Writing+Testbenches+Functional+Verification+of+HDL+Models+Bergeron)
- [@course@RTL debugging and bug triage](https://www.udemy.com/courses/search/?q=RTL+debugging+bug+triage)
- [@video@RTL bug debugging waveform tutorial](https://www.youtube.com/results?search_query=RTL+bug+debugging+waveform+tutorial)
- [@article@RTL debugging](https://vlsi.kr/?s=RTL+debugging)
