# CDC

Clock domain crossing (CDC) refers to any signal that originates in a flip-flop clocked by one clock and is captured by a flip-flop clocked by a different, asynchronous (or asynchronously related) clock. Modern SoCs routinely have dozens of clock domains — CPU, peripherals, I/O interfaces, PLLs with different ratios — and any signal crossing between them is at risk of metastability: if the signal transitions too close to the capturing clock edge, the receiving flip-flop's output can settle to an invalid intermediate voltage level or take longer than expected to resolve, potentially propagating an unpredictable value.

The standard mitigation for single-bit control signals is a synchronizer — typically two (or three, for higher-speed/lower-MTBF designs) flip-flops in series in the destination clock domain, giving a potentially metastable value one or more extra clock cycles to resolve before being used by downstream logic. Critically, only single-bit signals (or signals guaranteed to change only one bit at a time, like a Gray-coded counter) can be synchronized this way directly — synchronizing a multi-bit bus with a simple double-flop risks different bits resolving in different cycles, producing a transient invalid value.

For multi-bit data crossing clock domains, common patterns include asynchronous FIFOs (using Gray-coded read/write pointers compared across domains to generate full/empty flags safely), or a request/acknowledge handshake protocol that ensures data is held stable until the receiving domain has safely captured it, often combined with a synchronized enable pulse.

From an RTL perspective, writing CDC-safe code means recognizing crossing points in the design, applying the correct synchronizer or FIFO structure, and avoiding combinational logic between the synchronizer flops and the first capturing register (which would reintroduce metastability risk). CDC issues are notoriously hard to catch in simulation because metastability is a physical, probabilistic phenomenon — this is why dedicated static CDC verification tools (e.g., Synopsys SpyGlass CDC, Cadence Conformal CDC) are standard in any multi-clock design flow, checking for missing or incorrectly structured synchronizers across the entire design.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Clock Domain Crossing (CDC) Design and Verification Techniques Using SystemVerilog by Clifford Cummings(https://www.amazon.com/s?k=Clock+Domain+Crossing+CDC+Design+Verification+SystemVerilog+Cummings)
- [Coursera] clock domain crossing cdc design(https://www.udemy.com/courses/search/?q=clock+domain+crossing+cdc+design)
- [YouTube] clock domain crossing metastability synchronizer(https://www.youtube.com/results?search_query=clock+domain+crossing+metastability+synchronizer)
