# ESD

Electrostatic discharge (ESD) protection circuits shield IC pads and internal circuitry from high-voltage, high-current transient events (human body model, machine model, charged device model) that can occur during handling and assembly. ESD design requires creating a low-impedance discharge path that triggers fast enough and clamps voltage low enough to prevent gate oxide rupture or junction damage in the protected core circuit, while remaining transparent (high impedance, low capacitance) during normal operation.

Common ESD device structures include diodes (forward and reverse-biased clamps to VDD/VSS rails), grounded-gate NMOS (GGNMOS) which relies on parasitic bipolar snapback behavior to clamp voltage during a strike, and silicon-controlled rectifiers (SCRs) which provide very low clamping voltage and high current handling per unit area through latch-up-like regenerative action, but require careful design to avoid triggering during normal supply ramps (false triggering) or remaining latched after the event. The whole-chip ESD network typically uses a power rail clamp (often an RC-triggered MOSFET clamp) connecting VDD to VSS, combined with pad-level diodes that direct discharge current into the rails.

A central trade-off in ESD design is the interaction with analog performance: ESD devices add parasitic capacitance to I/O pads (impacting bandwidth in RF and high-speed analog I/O) and leakage current (impacting precision references and high-impedance nodes). The "ESD design window" concept captures the requirement that the ESD device's trigger voltage must be below the breakdown voltage of the protected gate oxide, but above the maximum operating voltage — and as process nodes scale down, this window shrinks, making ESD co-design with the core analog circuit (rather than as an afterthought) increasingly necessary. TLP (transmission line pulse) testing is the standard characterization method for ESD device IV curves and failure thresholds.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] ESD: Circuits and Devices(https://www.amazon.com/s?k=ESD+Circuits+and+Devices+Voldman)
- [Coursera] ESD protection circuit design IC(https://www.udemy.com/courses/search/?q=ESD+protection+circuit+design+IC)
- [YouTube] ESD protection design for ICs(https://www.youtube.com/results?search_query=ESD+protection+design+for+ICs)
