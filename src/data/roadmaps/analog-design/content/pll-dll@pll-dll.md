# PLL/DLL

A phase-locked loop (PLL) generates a clock whose phase and frequency are locked to a reference, and is central to clock generation, frequency synthesis, and clock-data recovery. The core building blocks are a phase/frequency detector (PFD) that compares the reference and feedback clock phases, a charge pump that converts the PFD output into a current driving a loop filter, a loop filter that integrates this into a control voltage, a voltage-controlled oscillator (VCO) that produces the output frequency proportional to that control voltage, and a feedback divider that scales the VCO frequency down to compare against the reference. The loop dynamics are characterized by loop bandwidth and phase margin, analogous to any feedback system, and determine lock time, jitter transfer, and reference spur suppression.

VCO design is often the most challenging analog block: ring oscillators offer wide tuning range and small area but worse phase noise, while LC oscillators (using on-chip inductors and varactors) provide superior phase noise at the cost of area and a narrower, discretely-tuned range. Phase noise analysis (Leeson's model, 1/f² and 1/f³ regions) and jitter (RMS and peak-to-peak, integrated over a bandwidth) are the primary VCO and overall PLL performance metrics, with charge pump mismatch and current leakage contributing reference spurs at the comparison frequency.

A delay-locked loop (DLL) is structurally simpler — it locks the phase of an output clock to a reference by adjusting a voltage- or digitally-controlled delay line, without an oscillator, making it inherently more stable (no VCO means no integration of phase noise) but limited to delay/phase adjustment rather than frequency synthesis. DLLs are widely used for clock deskewing, DDR memory interfaces, and multi-phase clock generation, where their lower jitter accumulation compared to PLLs is advantageous.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Design of Analog CMOS Integrated Circuits(https://www.amazon.com/s?k=Design+of+Analog+CMOS+Integrated+Circuits+Razavi+PLL)
- [Coursera] PLL design phase locked loop CMOS(https://www.udemy.com/courses/search/?q=PLL+design+phase+locked+loop+CMOS)
- [YouTube] PLL design charge pump VCO phase noise(https://www.youtube.com/results?search_query=PLL+design+charge+pump+VCO+phase+noise)
