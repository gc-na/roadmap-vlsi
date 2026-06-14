# Analog Test

Analog and mixed-signal (AMS) blocks, PLLs, ADCs, DACs, voltage regulators, SerDes/PHYs, and I/O drivers, cannot be tested with the digital stuck-at/scan methodology because their behavior is continuous and parametric rather than purely logical, so DFT for these blocks relies on different techniques. A common approach is to add digital test wrappers around analog cores that allow digital control of bias conditions, mode selection, and basic functional checks (e.g., putting a PLL into a divider/bypass mode so its output frequency can be measured digitally), bridging the analog block into the chip's digital test infrastructure via IEEE 1500-style wrappers or simple register interfaces.

Specific structures address specific block types. PLLs and clock generators often include a frequency divider chain feeding a counter, allowing the tester to verify lock frequency and basic functionality digitally without needing analog probes. ADCs and DACs can be tested with on-chip loopback (DAC output routed to ADC input) to verify conversion accuracy and linearity (INL/DNL) using digital pattern comparison, avoiding the need for precision analog test equipment on every tester. High-speed SerDes and I/O interfaces commonly include built-in eye-diagram monitors, loopback paths (near-end and far-end), and pattern generators/checkers (e.g., PRBS generators) that allow signal integrity and bit-error-rate characterization to be performed largely under digital control.

Analog test also relies heavily on parametric measurements, threshold voltages, leakage currents, oscillator frequencies, and bandgap reference voltages, which require the tester to apply precise analog stimuli and measure analog responses, often through dedicated analog test pins or an analog test bus that multiplexes internal nodes to a small number of pins for probing. Because analog test time and the analog channel count on testers are expensive, DFT engineers work to maximize the portion of AMS verification that can be done digitally (via loopback, BIST-like structures, and on-chip monitors such as voltage/temperature sensors), reserving true analog ATE measurements for the parameters that cannot be inferred any other way. Mixed-signal DFT planning must also account for noise isolation, ensuring digital scan/BIST activity during test doesn't inject switching noise that corrupts sensitive analog measurements.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Mixed-Signal Test Engineering: A Guide to Test and Mixed-Signal Measurement Algorithms(https://www.amazon.com/s?k=Mixed-Signal+Test+Engineering+ADC+DAC+PLL+test)
- [Coursera] analog mixed signal test ADC DAC PLL(https://www.udemy.com/courses/search/?q=analog+mixed+signal+test+ADC+DAC+PLL)
- [YouTube] mixed signal test ADC DAC loopback BIST(https://www.youtube.com/results?search_query=mixed+signal+test+ADC+DAC+loopback+BIST)
