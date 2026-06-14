# Comparator

A comparator determines which of two input voltages is larger, producing a digital output, and is a critical block in ADCs, oscillators, switching regulators, and level detectors. Unlike an op-amp used in a closed feedback loop, a comparator is typically used open-loop and is optimized for speed and decision accuracy rather than linearity. Topologies range from simple differential pairs followed by gain/inverter stages, to dynamic latch-based comparators (StrongARM latch) that use positive feedback (cross-coupled inverters) to regenerate a small input difference into a full-swing digital output extremely quickly, with regeneration time constant set by gm/C of the latch.

Key specifications include offset voltage (driven by input pair and latch device mismatch), hysteresis, propagation delay (and its dependence on input overdrive — smaller input differences take longer to resolve), kickback noise (charge injected back onto the input nodes when the latch regenerates, which can disturb sensitive reference or sampling networks), and metastability (the probability the output has not resolved to a valid logic level within the allotted time, important in high-speed flash ADCs and SAR ADC comparators).

Preamplifier stages are often added before the latch to reduce kickback and improve sensitivity at the cost of bandwidth and added noise/offset. Offset cancellation techniques — such as auto-zeroing (storing and subtracting offset using switched capacitors) or chopping — are used in precision comparators. In the context of data converters, comparator design directly trades off against ADC resolution (LSB size vs. comparator offset and noise), conversion speed, and power, making comparator architecture selection (dynamic latch vs. preamp+latch vs. continuous-time) a first-order decision in SAR, flash, and pipeline ADC design.

Visit the following resources to learn more:

- [@book@CMOS Mixed-Signal Circuit Design](https://www.amazon.com/s?k=CMOS+Mixed-Signal+Circuit+Design+Baker+comparator)
- [@course@comparator design StrongARM latch ADC](https://www.udemy.com/courses/search/?q=comparator+design+StrongARM+latch+ADC)
- [@video@StrongARM latch comparator design](https://www.youtube.com/results?search_query=StrongARM+latch+comparator+design)
- [@article@comparator design](https://vlsi.kr/?s=comparator+design)
