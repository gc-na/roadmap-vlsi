# ADC/DAC

Data converters bridge the analog and digital domains, and architecture selection depends heavily on the target resolution, speed, and power budget. The successive approximation register (SAR) ADC has become dominant for medium-resolution (8-14 bit), medium-speed applications due to its excellent energy efficiency — it uses a binary search algorithm, a comparator, and a capacitive DAC (CDAC) to converge on the input voltage one bit at a time. Pipeline ADCs use multiple stages of coarse flash conversion plus residue amplification (via multiplying DACs and residue amplifiers) to achieve high resolution at high speed, while sigma-delta (ΔΣ) converters oversample and use noise-shaping (via a modulator loop) combined with digital decimation filters to push quantization noise out of band, achieving very high resolution for audio, sensor, and precision measurement applications at the cost of bandwidth.

Key static specifications include resolution, INL/DNL (integral and differential nonlinearity, capturing deviations from an ideal transfer curve), offset and gain error, and dynamic specs like SNR, SNDR, ENOB (effective number of bits), and SFDR (spurious-free dynamic range), all typically extracted from FFT analysis of a sampled sine wave. DAC architectures mirror ADC needs: resistor-string DACs offer inherent monotonicity, current-steering DACs provide high speed for RF applications, and capacitive (charge-redistribution) DACs are ubiquitous in SAR ADCs due to their low static power and good matching.

Critical non-ideal effects include capacitor/resistor mismatch (driving DNL and requiring calibration or redundancy in advanced SAR designs), comparator offset and noise (setting the effective LSB floor), sampling switch nonlinearity and kT/C noise, and clock jitter (which translates to sampling-time error, particularly impactful for high-frequency input signals). Calibration techniques — foreground (one-time trim) and background (continuously adaptive) — are increasingly used to relax analog matching requirements and shift complexity into the digital domain.

Visit the following resources to learn more:

- [@book@Understanding Delta-Sigma Data Converters](https://www.amazon.com/s?k=Understanding+Delta-Sigma+Data+Converters+Schreier+Temes)
- [@course@ADC DAC design data converters](https://www.udemy.com/courses/search/?q=ADC+DAC+design+data+converters)
- [@video@SAR ADC pipeline ADC sigma delta design](https://www.youtube.com/results?search_query=SAR+ADC+pipeline+ADC+sigma+delta+design)
- [@article@ADC DAC design](https://vlsi.kr/?s=ADC+DAC+design)
