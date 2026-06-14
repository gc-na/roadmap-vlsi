# Compression

Test compression addresses the mismatch between the number of internal scan chains a design can support (often thousands, for short chains and fast test time) and the limited number of pins/channels available on the tester (typically tens). On-chip decompressor and compactor logic sits between the tester channels and the internal scan chains: the decompressor (often implemented as an XOR/XNOR fan-out network or a ring of programmable broadcast logic) expands a small number of tester input channels into many internal scan chain inputs, while the compactor (typically an XOR tree or a more sophisticated selective compactor) compresses many chain outputs down to a small number of tester output channels.

The dominant commercial architectures are embedded deterministic test (EDT, Synopsys/Siemens heritage) and similar ring-based or combinational compression schemes from other vendors, generally offering compression ratios from roughly 10x to over 100x depending on the number of internal chains versus external channels. Because multiple internal chains share a compactor XOR tree, an unknown (X) value captured in any one chain can corrupt the observed value for all chains sharing that XOR cone; X-bounding and dedicated X-masking logic (sometimes integrated into the compactor itself) are essential to prevent unpredictable values from invalidating large portions of a pattern.

Compression dramatically reduces ATE test time and pattern memory requirements, which is the primary economic justification for the area overhead of the decompressor/compactor logic, typically a few percent of die area. Design considerations include selecting the compression ratio based on expected pattern counts and available test pins, ensuring the decompressor's combinational logic doesn't create excessive routing congestion near the scan chain endpoints, and verifying that the compression network itself is testable (often via a bypass mode that allows direct, uncompressed access to chains for diagnosis). During failure diagnosis, compacted responses must be "unrolled" or the design switched to a bypass/serial mode to localize the failing scan cell precisely.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Essentials of Electronic Testing for Digital, Memory and Mixed-Signal VLSI Circuits(https://www.amazon.com/s?k=Essentials+of+Electronic+Testing+for+Digital+Memory+and+Mixed-Signal+VLSI+Circuits+Bushnell+Agrawal)
- [Coursera] test compression EDT scan SoC(https://www.udemy.com/courses/search/?q=test+compression+EDT+scan+SoC)
- [YouTube] embedded deterministic test compression scan compactor(https://www.youtube.com/results?search_query=embedded+deterministic+test+compression+scan+compactor)
