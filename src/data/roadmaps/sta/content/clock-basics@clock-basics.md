# Clock Basics

The clock signal is the timing reference against which every register-to-register path is checked, so understanding how clocks are defined and propagated is fundamental to STA. In SDC (Synopsys Design Constraints), a clock is defined with `create_clock` by specifying a period and waveform edges on a source pin or port. Generated clocks, created with `create_generated_clock`, model clocks derived from a master clock through dividers, multipliers, or clock gating cells, and their relationship to the master clock must be accurately described for STA to compute correct timing. For example, a divided-by-two clock has edges spaced twice as far apart as its master, and STA must track this relationship to correctly compute capture and launch times across the clock boundary.

Clock latency represents the delay from the clock source to a given point in the clock tree, and is split into source latency (delay from the ideal clock origin to the clock definition point, often modeling PLL/clock generator delay) and network latency (delay through the on-chip clock distribution network, i.e., the clock tree). Clock skew is the difference in arrival time of the clock edge at two different sequential elements; positive skew between launch and capture flops can help or hurt setup and hold depending on direction. A positive skew (capture clock arrives later than launch clock) helps setup but hurts hold, whereas negative skew does the opposite. Clock uncertainty models additional margin for jitter, duty-cycle distortion, and clock tree variation, and is typically applied via `set_clock_uncertainty` with separate values for setup and hold.

Before clock tree synthesis (CTS), STA tools treat clocks as "ideal" with zero or user-specified latency and no skew variation across the tree. All sequential elements see the clock arrive at the same time, simplifying the analysis but requiring conservative uncertainty margins to account for the eventual real clock tree. After CTS, propagated clocks reflect the actual buffered clock tree, including real insertion delays and skew at each endpoint, computed via `set_propagated_clock`. This transition from ideal to propagated modeling is a critical juncture in the design flow: skew values can change dramatically, previously non-critical paths may become critical due to unfavorable skew, and hold violations may appear for the first time once realistic clock propagation is modeled.

Understanding the difference between ideal and propagated clocks, along with concepts like clock gating (selective clock enabling to power-sensitive cells), duty cycle (fraction of clock period where signal is high), and clock domain definitions, is essential for interpreting timing reports correctly at different design stages. Clock gating cells introduce an additional combinational element in the clock distribution path, requiring special handling in constraints via `set_clock_gating_check` to avoid spurious violations when the gating logic changes. Accurate clock modeling directly impacts the validity of all downstream timing analysis.

## Key Concepts

- Clock definition via `create_clock` with period and edges; generated clocks via `create_generated_clock`
- Clock latency split into source latency (PLL delay) and network latency (clock tree)
- Clock skew as arrival time difference between endpoints; positive skew helps setup, hurts hold
- Ideal clocks (pre-CTS) vs. propagated clocks (post-CTS); transition requires reconfiguration
- Clock uncertainty as margin for jitter and duty-cycle distortion; set separately for setup/hold

## Resume Tips

- On your resume: mention experience with both ideal and propagated clock analysis — "managed clock tree constraints across CTS and post-CTS stages, transitioning timing models from ideal (500ps global skew margin) to propagated (measured 120ps local skew), maintaining slack convergence throughout implementation."
- In interviews: explain how clock skew affects setup and hold independently, and describe a scenario where you discovered a skew-related issue post-CTS.
- Demonstrate knowledge of clock gating: be ready to discuss the `set_clock_gating_check` constraint and why it's necessary to avoid false violations on gating logic.

Visit the following resources to learn more:

- [Book] Static Timing Analysis for Nanometer Designs(https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [Coursera] SDC Constraints and Clock Definition(https://www.coursera.org/search?query=SDC+constraints+clock+timing)
- [YouTube] Clock Skew, Jitter, and Latency in STA(https://www.youtube.com/results?search_query=clock+skew+jitter+latency+STA)
- [Article] Clock Tree Synthesis and Timing(https://www.amazon.com/s?k=clock+tree+synthesis+VLSI)
