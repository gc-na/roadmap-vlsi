# Physics

Analog design begins with the physics of the MOSFET. Beyond the simple square-law I-V relationship, practical analog circuits operate across all regions of operation — subthreshold, triode, and saturation — and the choice of region directly determines the trade-off between gain, speed, noise, and power. In modern CMOS nodes, short-channel effects such as velocity saturation, drain-induced barrier lowering (DIBL), and channel-length modulation cause the drain current to deviate significantly from the long-channel model, making gm/ID-based design methodologies more reliable than closed-form equations for sizing transistors.

Understanding the physical origins of parasitic capacitances (Cgs, Cgd, Cgb, junction capacitances) and resistances (source/drain, gate poly, well) is essential because these elements set the bandwidth limits and feedback paths that shape every amplifier and oscillator. The body effect, threshold voltage variation with temperature and process, and mobility degradation under high vertical fields all feed directly into circuit-level behavior — for example, why a cascode transistor needs adequate VDS headroom, or why a current mirror's accuracy depends on matching threshold voltages and oxide thickness across devices.

Process technology also matters: bulk CMOS, FinFET, and SOI each present different capacitance, leakage, and matching characteristics. Analog designers must read transistor models (BSIM4, BSIM-CMG) and SPICE corner files to understand how a circuit will behave across process, voltage, and temperature (PVT) variation, since analog performance specs like gain, offset, and bandwidth are far more sensitive to device-level physics than digital logic, where only delay and leakage typically matter.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Design of Analog CMOS Integrated Circuits(https://www.amazon.com/s?k=Design+of+Analog+CMOS+Integrated+Circuits+Razavi)
- [Coursera] MOSFET device physics analog design(https://www.udemy.com/courses/search/?q=MOSFET+device+physics+analog+design)
- [YouTube] MOSFET physics for analog IC design(https://www.youtube.com/results?search_query=MOSFET+physics+for+analog+IC+design)
