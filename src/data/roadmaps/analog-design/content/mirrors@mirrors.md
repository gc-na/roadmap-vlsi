# Mirrors

Current mirrors are the basic building block for biasing nearly every analog circuit, copying a reference current to one or more branches with a ratio set by transistor sizing (W/L ratios). The simple two-transistor mirror relies on both devices having the same VGS and operating in saturation; accuracy depends on matching threshold voltage, mobility, and channel length between the reference and output devices, which is why mirror transistors are typically laid out with identical orientation, common-centroid arrangements, and sufficient length to minimize the impact of random mismatch (governed by Pelgrom's law, where mismatch variance scales as 1/(WL)).

The simple mirror's accuracy is limited by finite output resistance (channel-length modulation causes the output current to vary with output voltage) and by systematic error from differing VDS between the reference and output branches. The cascode current mirror addresses this by adding a second transistor in series, multiplying output resistance by approximately gm·ro and making the output current far less sensitive to output voltage — critical for high-gain amplifier stages and precision current sources. Wide-swing cascode mirrors further optimize the bias scheme to maximize usable output voltage headroom, an important consideration in low-voltage designs.

Beyond simple scaling, mirrors implement key functions: the Wilson mirror improves output resistance with fewer devices, regulated cascode (gain-boosted) mirrors push output resistance even higher for gain-boosted amplifier stages, and translinear circuits exploit the exponential I-V relationship of BJTs (or subthreshold MOSFETs) for current-domain arithmetic in references and PTAT/CTAT generation. Mirrors also propagate bias currents across the chip through current distribution networks, where IR drop and matching across long routing distances must be carefully managed.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Analysis and Design of Analog Integrated Circuits(https://www.amazon.com/s?k=Analysis+and+Design+of+Analog+Integrated+Circuits+Gray+Hurst+Lewis+Meyer+current+mirrors)
- [Coursera] current mirror design analog CMOS(https://www.udemy.com/courses/search/?q=current+mirror+design+analog+CMOS)
- [YouTube] cascode current mirror design analysis(https://www.youtube.com/results?search_query=cascode+current+mirror+design+analysis)
