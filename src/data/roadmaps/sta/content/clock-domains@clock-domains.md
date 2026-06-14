# Clock Domains

Modern SoCs contain multiple clock domains operating at different frequencies, often asynchronous to one another (e.g., a CPU core at 2GHz, a USB PHY at 48MHz, and a DDR controller at 1GHz each running off independent clocks). STA must analyze both intra-domain paths (where launch and capture flops share the same clock) and inter-domain paths (clock domain crossings, or CDCs), where the relationship between the two clocks may be unknown, unrelated, or only loosely related. Proper handling of multi-domain designs is critical: a missing or incorrect clock domain constraint can lead to signoff escapes where a path appears to have positive slack in STA but actually fails in silicon due to metastability.

For paths that cross between two related clocks — for example, a clock and its divided-by-two generated clock — STA can compute a valid timing relationship because the edges align at known intervals. The tool uses `create_generated_clock` relationships to trace back to a common master clock and compute capture/launch edge pairs that have a deterministic phase relationship. However, for truly asynchronous clock domains, no meaningful setup/hold relationship exists, so these paths are typically excluded from timing analysis using `set_clock_groups -asynchronous` or `set_false_path`. Failing to properly exclude or handle CDC paths can cause the tool to report spurious violations on paths that are functionally safe due to synchronizer circuits (e.g., dual-flop synchronizers, FIFOs with gray-coded pointers).

Clock domain analysis also involves understanding clock relationships defined through `create_generated_clock`, where divided, multiplied, or inverted clocks must correctly trace back to their master clock so STA can compute valid arrival time relationships. Tools report "unconstrained" or "no defined relationship" warnings when clocks lack a clear connection, which can mask real issues if not investigated. A common error is defining a generated clock but failing to specify its source clock, leaving STA unable to compute the relationship to other clocks in the design. For a divided-by-N generated clock, the `–divide_by` parameter is essential; for a multiplied clock, `–multiply_by` is used instead.

In multi-clock designs, path groups are often organized by clock domain to allow domain-specific optimization priorities during synthesis and place-and-route. CDC-specific tools (separate from STA, such as Cadence's Xcelium CDC or Synopsys's Questa formal CDC verification) are used alongside STA to catch metastability and reconvergence issues that static timing alone cannot detect. Synchronizer analysis requires understanding of mean time between failures (MTBF) and metastability windows, concepts beyond STA's scope. However, STA must still correctly model the synchronizer cells themselves (typically 2-4 flops in series) with appropriate timing to ensure the synchronized signal arrives with sufficient setup/hold margin at the receiving domain's endpoints.

## Key Concepts

- Intra-domain vs. inter-domain (CDC) paths and their distinct timing rules
- Clock domain relationships via `create_generated_clock` with `–divide_by`, `–multiply_by`
- Asynchronous clock exclusions: `set_clock_groups -asynchronous` and `set_false_path`
- Generated clock traceability: must be traceable back to a master clock for valid timing
- Synchronizer modeling and CDC verification tools complementing STA analysis

## Resume Tips

- On your resume: highlight multi-domain design experience — "implemented timing constraints for 4-domain SoC with asynchronous USB/DDR controllers; wrote Tcl library to auto-generate generated-clock definitions for dividers and multipliers, eliminating manual constraint errors and reducing audit time by 6 hours per design iteration."
- In interviews: explain the difference between related and asynchronous clock domains, and describe how you would set up constraints for a divided-by-2 clock to a divided-by-3 clock (requires synchronization, cannot compute simple timing relationship).
- Demonstrate understanding of CDC: explain why dual-flop synchronizers are used, and how STA can model them while leaving metastability analysis to dedicated CDC tools.

Visit the following resources to learn more:

- [Book] Static Timing Analysis for Nanometer Designs(https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [Coursera] Clock Domain Crossing and CDC Design(https://www.coursera.org/search?query=clock+domain+crossing+CDC+design)
- [YouTube] Clock Domain Crossing - CDC Synchronizer(https://www.youtube.com/results?search_query=clock+domain+crossing+CDC+synchronizer+STA)
- [Article] Multi-Domain Timing Analysis(https://www.amazon.com/s?k=clock+domain+crossing+VLSI+design)
