# Small-Signal

Small-signal analysis is the foundational technique for analyzing analog circuits around a DC operating point. After establishing the bias point (the large-signal solution), each nonlinear device is replaced by a linear small-signal model — a MOSFET becomes a transconductance gm, an output resistance ro, and parasitic capacitances. This linearization allows the use of superposition, KCL/KVL, and standard two-port theory to compute gain, input/output impedance, and frequency response without solving the full nonlinear equations.

Key small-signal parameters include gm (transconductance, governing how much drain current change results from a gate voltage change), ro (output resistance, set by channel-length modulation, ro = 1/(λ·ID)), and gmb (body transconductance). These combine in topologies like the common-source, common-gate, and common-drain stages, each offering distinct gain, input/output impedance, and bandwidth characteristics. Cascading stages (cascode) multiplies output resistance and gain (gm·ro)² while a differential pair provides common-mode rejection and sets up the foundation for most op-amp topologies.

Mastering small-signal analysis means being able to quickly derive gain expressions like Av = -gm·(ro || RL) for a common-source stage, or identify dominant poles by inspection, often using techniques such as the Miller approximation, half-circuit analysis for differential pairs, and superposition for feedback networks. This intuition is what allows a designer to predict how changing a transistor's size or bias current will shift gain, bandwidth, and noise — before ever running a SPICE simulation — and is the bridge between device physics and full circuit-level performance specs.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Analysis and Design of Analog Integrated Circuits(https://www.amazon.com/s?k=Analysis+and+Design+of+Analog+Integrated+Circuits+Gray+Hurst+Lewis+Meyer)
- [Coursera] small signal analysis analog circuits(https://www.udemy.com/courses/search/?q=small+signal+analysis+analog+circuits)
- [YouTube] small signal model MOSFET analysis(https://www.youtube.com/results?search_query=small+signal+model+MOSFET+analysis)
