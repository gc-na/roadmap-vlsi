# Bandgap

The bandgap voltage reference generates a stable voltage (typically ~1.2V) that is largely independent of temperature and supply variation, serving as the foundation for biasing, ADC references, and LDO regulation across the chip. The core principle is combining two voltages with opposite temperature coefficients: the base-emitter voltage VBE of a bipolar transistor (or diode), which decreases with temperature (CTAT, complementary-to-absolute-temperature), and the difference in VBE between two BJTs operating at different current densities, ΔVBE, which increases with temperature (PTAT, proportional-to-absolute-temperature). Summing VBE with a scaled ΔVBE (multiplied by a resistor ratio) cancels the first-order temperature dependence, yielding the bandgap voltage of roughly 1.2V.

In CMOS processes without dedicated vertical BJTs, designers use parasitic vertical or lateral PNP/NPN structures formed from well/substrate junctions. The core topology relies on an op-amp to force equal voltages (or currents) across two branches with different current densities, often using a 1:N ratio between two BJTs or a resistor ladder to set the ΔVBE scaling factor. Curvature correction techniques address the second-order (nonlinear) temperature dependence of VBE, improving the reference's flatness across the full temperature range — important for high-precision references in data converters.

Practical bandgap design must also address startup circuitry (since the bandgap loop has a degenerate zero-current solution), PSRR (often requiring a low-dropout pre-regulator or cascoded current sources), and the trade-off between accuracy, area (BJT and resistor matching), and power. Trimming (via fuses, OTP, or digital calibration) is commonly used in production to correct for process variation in VBE and resistor ratios, since untrimmed bandgap accuracy is typically only a few percent.

Visit the following resources to learn more:

- [@book@Design of Analog CMOS Integrated Circuits](https://www.amazon.com/s?k=Design+of+Analog+CMOS+Integrated+Circuits+Razavi+bandgap+reference)
- [@course@bandgap voltage reference design](https://www.udemy.com/courses/search/?q=bandgap+voltage+reference+design)
- [@video@bandgap reference circuit design CMOS](https://www.youtube.com/results?search_query=bandgap+reference+circuit+design+CMOS)
- [@article@bandgap reference design](https://vlsi.kr/?s=bandgap+reference+design)
