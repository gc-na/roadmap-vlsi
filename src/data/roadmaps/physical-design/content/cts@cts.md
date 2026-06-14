# CTS

Clock tree synthesis (CTS) builds the buffered/inverted distribution network that delivers the clock signal from its source (a PLL output or top-level clock pin) to every sequential element's clock pin, with the primary goals of minimizing clock skew (the difference in arrival time between sinks) and controlling insertion delay (latency from source to sink), while also managing transition times, power, and routing area consumed by clock buffers. CTS runs after placement because it needs the actual physical locations of all flip-flops and latches to build a tree whose topology matches the design's geometry — typically organized as balanced trees or meshes with buffers inserted at each level to regenerate signal strength and equalize delay across branches.

Skew matters because it directly affects setup and hold margins: if a launching flip-flop's clock arrives later than the capturing flip-flop's clock (positive skew in the direction of data flow), it effectively reduces the time available for the data path, while the opposite case can help setup but hurt hold. CTS tools balance local skew (within a clock domain) and account for useful skew techniques that deliberately introduce skew to help borrow time across pipeline stages. Clock nets are also routed with special care — often using shielding (ground/power wires on either side of the clock net) to reduce coupling noise and crosstalk-induced jitter, and sometimes on dedicated clock-preferred layers to keep clock routing predictable and separate from congested signal routing.

After CTS, the design undergoes extensive post-CTS optimization: timing is re-analyzed with the actual clock tree's insertion delays and skew, and any setup/hold violations are fixed through buffer sizing, gate sizing, or local placement adjustments. Clock gating cells (inserted during synthesis for power savings) must be handled carefully in CTS since they sit in the clock path and add both delay and an enable-dependent timing arc. For multi-clock designs, CTS must also manage clock domain crossings and ensure that clock tree balancing doesn't inadvertently create large skew between domains that interact through synchronizers, which is checked separately in clock domain crossing (CDC) analysis.

Visit the following resources to learn more:

- [@book@Static Timing Analysis for Nanometer Designs](https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chadha)
- [@course@clock tree synthesis ASIC design](https://www.udemy.com/courses/search/?q=clock+tree+synthesis+ASIC+design)
- [@video@clock tree synthesis CTS explained](https://www.youtube.com/results?search_query=clock+tree+synthesis+CTS+explained)
- [@article@clock tree synthesis](https://vlsi.kr/?s=clock+tree+synthesis)
