# Clock Domains

Modern SoCs contain multiple clock domains operating at different frequencies, often asynchronous to one another (e.g., a CPU core, a USB PHY, and a DDR controller each running off independent clocks). STA must analyze both intra-domain paths (where launch and capture flops share the same clock) and inter-domain paths (clock domain crossings, or CDCs), where the relationship between the two clocks may be unknown, unrelated, or only loosely related.

For paths that cross between two related clocks — for example, a clock and its divided-by-two generated clock — STA can compute a valid timing relationship because the edges align at known intervals. However, for truly asynchronous clock domains, no meaningful setup/hold relationship exists, so these paths are typically excluded from timing analysis using `set_clock_groups -asynchronous` or `set_false_path`. Failing to properly exclude or handle CDC paths can cause the tool to report spurious violations on paths that are functionally safe due to synchronizer circuits (e.g., dual-flop synchronizers, FIFOs with gray-coded pointers).

Clock domain analysis also involves understanding clock relationships defined through `create_generated_clock`, where divided, multiplied, or inverted clocks must correctly trace back to their master clock so STA can compute valid arrival time relationships. Tools report "unconstrained" or "no defined relationship" warnings when clocks lack a clear connection, which can mask real issues if not investigated. In multi-clock designs, path groups are often organized by clock domain to allow domain-specific optimization priorities during synthesis and place-and-route, and CDC-specific tools (separate from STA, such as dedicated CDC verification tools) are used alongside STA to catch metastability and reconvergence issues that static timing alone cannot detect.

Visit the following resources to learn more:

- [@book@Static Timing Analysis for Nanometer Designs](https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [@course@clock domain crossing CDC design](https://www.udemy.com/courses/search/?q=clock+domain+crossing+CDC+design)
- [@video@clock domain crossing CDC synchronizer](https://www.youtube.com/results?search_query=clock+domain+crossing+CDC+synchronizer+STA)
- [@article@clock domain crossing](https://vlsi.kr/?s=clock+domain+crossing)
