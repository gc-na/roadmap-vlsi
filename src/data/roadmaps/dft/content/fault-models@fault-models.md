# Fault Models

A fault model is an abstraction that lets ATPG tools and fault simulators represent physical defects as logical misbehaviors on a gate-level netlist, making test generation and quality measurement computationally tractable. The most fundamental and widely used model is the stuck-at fault model, which assumes a node is permanently fixed at logic 0 (stuck-at-0) or logic 1 (stuck-at-1), regardless of the inputs driving it. Stuck-at fault coverage remains the baseline metric reported for almost every digital test program, and a "single stuck-at" assumption (one fault at a time) keeps the fault list manageable even for designs with millions of gates.

As process nodes shrank, stuck-at faults stopped capturing many real silicon defects, particularly resistive shorts, opens, and timing-related issues, so additional models were introduced. The transition fault model targets delay defects by requiring each gate output to be tested for both a slow-to-rise and a slow-to-fast transition, typically applied with at-speed test patterns. Bridging faults model unintended shorts between two nodes (wired-AND or wired-OR behavior), while stuck-open faults capture defects in CMOS pass-transistor or pull-up/pull-down structures that leave a node floating, often requiring two-pattern sequences to detect. Path-delay faults consider the cumulative delay along a specific sensitized path, which is important for catching small distributed delay defects that no single transition fault would expose.

In practice, a modern SoC test plan combines several models: stuck-at for basic structural coverage, transition-delay (often called "at-speed" or AC scan) for timing-sensitive defects, and sometimes cell-aware or bridging models derived from the actual standard-cell layout to catch defects specific to a library's transistor topology. Cell-aware test models faults inside the transistor-level structure of library cells rather than only at cell boundaries, improving defect coverage for a given pattern count. Choosing the right combination of fault models, and understanding their detection mechanisms, directly affects test escape rates and the defective-parts-per-million (DPPM) shipped to customers.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Essentials of Electronic Testing for Digital, Memory and Mixed-Signal VLSI Circuits(https://www.amazon.com/s?k=Essentials+of+Electronic+Testing+for+Digital+Memory+and+Mixed-Signal+VLSI+Circuits+Bushnell+Agrawal)
- [Coursera] digital VLSI test fault models(https://www.udemy.com/courses/search/?q=digital+VLSI+test+fault+models)
- [YouTube] stuck-at fault transition fault model ATPG(https://www.youtube.com/results?search_query=stuck-at+fault+transition+fault+model+ATPG)
