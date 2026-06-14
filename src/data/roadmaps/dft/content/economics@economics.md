# Economics

DFT decisions are ultimately economic decisions: every scan flop, BIST controller, test point, and ATPG pattern adds area, routing congestion, and test time, all of which translate directly into cost per die. The central tradeoff is between test cost and test quality, usually expressed as defect coverage or DPPM (defective parts per million). Higher fault coverage requires more patterns, longer tester time, and often additional silicon area for compression logic or BIST, while lower coverage risks shipping defective parts that fail in the field or, worse, cause system-level returns that are far more expensive than a tester reject.

Tester time is a dominant cost driver because automated test equipment (ATE) time is billed by the second across millions of units, so even small reductions in pattern count or scan chain length multiply into significant savings at volume. This is why test compression architectures (EDT, embedded deterministic test) and on-chip BIST exist: they trade a modest area overhead for large reductions in tester channel count, test time, and ATE memory requirements. Similarly, the choice between testing at multiple voltage/frequency corners versus a single corner, or running full ATPG patterns versus a reduced subset for production test, is driven by balancing yield loss from test escapes against the marginal cost of additional test time.

Area overhead from DFT logic (scan muxes, test points, BIST controllers, JTAG TAP) typically ranges from a few percent to over ten percent depending on design maturity and testability requirements, and must be budgeted early in the floorplan. Yield ramp economics also matter: early in a process node's life, diagnostic resolution (the ability to localize failures precisely) is worth extra silicon because it accelerates yield learning, while in mature production the focus shifts to minimizing recurring test cost per unit. Engineers must weigh these factors against product requirements such as automotive (ISO 26262) reliability targets, which often mandate higher coverage and additional structures like logic BIST regardless of incremental cost.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Essentials of Electronic Testing for Digital, Memory and Mixed-Signal VLSI Circuits(https://www.amazon.com/s?k=Essentials+of+Electronic+Testing+for+Digital+Memory+and+Mixed-Signal+VLSI+Circuits+Bushnell+Agrawal)
- [Coursera] semiconductor test cost yield(https://www.udemy.com/courses/search/?q=semiconductor+test+cost+yield)
- [YouTube] cost of test semiconductor ATE(https://www.youtube.com/results?search_query=cost+of+test+semiconductor+ATE)
