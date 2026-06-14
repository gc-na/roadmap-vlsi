# ATPG

Automatic Test Pattern Generation (ATPG) is the process of algorithmically deriving input vectors that, when applied to a scan-based design, will detect specified faults by producing a different output response in a faulty circuit than in a fault-free one. Classical algorithms such as the D-algorithm, PODEM (Path-Oriented Decision Making), and FAN form the theoretical basis: each works by selecting a target fault, sensitizing it (forcing the faulty node to a value opposite its stuck value, called the D-frontier), and propagating the resulting discrepancy to an observable output while justifying the required input assignments back through the circuit. Modern commercial tools (Synopsys TestMAX, Siemens Tessent, Cadence Modus) implement highly optimized, structurally aware versions of these algorithms operating on million-gate designs.

ATPG operates on the scan-inserted gate-level netlist and produces patterns expressed as sequences of scan-in values, primary input values, and capture clock pulses, paired with expected scan-out and output responses. Fault coverage is measured against the full fault list (typically collapsed to remove equivalent faults), and is reported as a percentage of detected faults versus the total, with separate categories for faults that are detected, undetectable (e.g., redundant or untestable due to design constraints), aborted (too complex to resolve within effort limits), and not yet processed. Test pattern compaction (static and dynamic) reduces the final pattern count by merging patterns that target multiple faults simultaneously without conflicting requirements, directly reducing tester time.

A major practical concern is unknown (X) values arising from uninitialized memories, analog macros, or multi-cycle paths; ATPG tools must either block these X-sources, bound them with X-masking on the compactor, or model them explicitly so they don't corrupt observed responses. For at-speed testing, transition fault ATPG generates two-pattern sequences (an initialization pattern and a launch/capture pair run at functional clock speed) and must account for clock domain crossings and on-chip clock generation (PLLs) through dedicated at-speed test clocking schemes. Diagnosis-oriented ATPG additionally generates patterns optimized to distinguish between candidate fault locations for failure analysis.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Essentials of Electronic Testing for Digital, Memory and Mixed-Signal VLSI Circuits(https://www.amazon.com/s?k=Essentials+of+Electronic+Testing+for+Digital+Memory+and+Mixed-Signal+VLSI+Circuits+Bushnell+Agrawal)
- [Coursera] ATPG automatic test pattern generation(https://www.udemy.com/courses/search/?q=ATPG+automatic+test+pattern+generation)
- [YouTube] ATPG algorithm PODEM D-algorithm tutorial(https://www.youtube.com/results?search_query=ATPG+algorithm+PODEM+D-algorithm+tutorial)
