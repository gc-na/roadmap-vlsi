# Clock Basics

The clock signal is the timing reference against which every register-to-register path is checked, so understanding how clocks are defined and propagated is fundamental to STA. In SDC (Synopsys Design Constraints), a clock is defined with `create_clock` by specifying a period and waveform edges on a source pin or port. Generated clocks, created with `create_generated_clock`, model clocks derived from a master clock through dividers, multipliers, or clock gating cells, and their relationship to the master clock must be accurately described for STA to compute correct timing.

Clock latency represents the delay from the clock source to a given point in the clock tree, and is split into source latency (delay from the ideal clock origin to the clock definition point, often modeling PLL/clock generator delay) and network latency (delay through the on-chip clock distribution network, i.e., the clock tree). Clock skew is the difference in arrival time of the clock edge at two different sequential elements; positive skew between launch and capture flops can help or hurt setup and hold depending on direction. Clock uncertainty models additional margin for jitter, duty-cycle distortion, and clock tree variation, and is typically applied via `set_clock_uncertainty`.

Before clock tree synthesis (CTS), STA tools treat clocks as "ideal" with zero or user-specified latency and no skew variation across the tree. After CTS, propagated clocks reflect the actual buffered clock tree, including real insertion delays and skew at each endpoint, computed via `set_propagated_clock`. Understanding the difference between ideal and propagated clocks, along with concepts like clock gating, duty cycle, and clock domain definitions, is essential for interpreting timing reports correctly at different design stages.

Visit the following resources to learn more:

- [@book@Static Timing Analysis for Nanometer Designs](https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [@course@SDC constraints clock](https://www.udemy.com/courses/search/?q=SDC+constraints+clock+timing)
- [@video@clock skew jitter latency STA](https://www.youtube.com/results?search_query=clock+skew+jitter+latency+STA)
- [@article@clock basics STA](https://vlsi.kr/?s=clock+basics)
