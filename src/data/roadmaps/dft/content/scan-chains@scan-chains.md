# Scan Chains

Scan design is the foundation of structural digital test: every (or nearly every) sequential element in a design is replaced with a scan flip-flop containing a multiplexer that selects between its normal data input and a scan-in input from the previous flop in the chain. When the design enters scan mode (controlled by a scan_enable signal), all flops are connected into one or more long shift registers, allowing arbitrary test patterns to be shifted in and captured responses to be shifted out through dedicated scan_in and scan_out pins. The most common implementation is the multiplexed-flip-flop (mux-D) scan cell, though level-sensitive scan design (LSSD) using dual-latch cells is still used in some high-reliability designs for its clean separation of shift and capture clocks.

A typical ATPG cycle consists of a shift phase, where a test pattern is serially loaded into the chain over many clock cycles, followed by a capture phase, where the functional clock pulses once (or twice for at-speed transition tests) to capture the circuit's response into the scan flops, and then another shift phase to unload the response while loading the next pattern. Because shift dominates the total cycle count, scan chain length directly determines test time; designs are typically split into many parallel chains of roughly balanced length to keep shift time manageable, with the number of chains constrained by available test pins or compression hardware.

Scan chain design requires careful handling of clock domains (each chain ideally contains flops from a single clock domain, or uses lockup latches at domain boundaries to avoid race conditions), reset and set behavior (asynchronous resets must be controllable in test mode to avoid masking faults), and X-sources such as uninitialized memories or analog blocks that must be bounded or blocked from propagating into the scan chain. Scan chain integrity testing (a simple flush/shift pattern) is run first in production test to verify the chains themselves are fault-free before any functional ATPG patterns are applied.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Essentials of Electronic Testing for Digital, Memory and Mixed-Signal VLSI Circuits(https://www.amazon.com/s?k=Essentials+of+Electronic+Testing+for+Digital+Memory+and+Mixed-Signal+VLSI+Circuits+Bushnell+Agrawal)
- [Coursera] scan design DFT digital test(https://www.udemy.com/courses/search/?q=scan+design+DFT+digital+test)
- [YouTube] scan chain design flip flop shift capture(https://www.youtube.com/results?search_query=scan+chain+design+flip+flop+shift+capture)
