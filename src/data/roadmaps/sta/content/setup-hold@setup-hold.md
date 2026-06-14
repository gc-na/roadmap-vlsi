# Setup/Hold

Setup and hold checks are the two fundamental timing constraints that STA verifies for every register-to-register path. The setup check ensures that data launched from a flop arrives at the downstream flop's data input early enough to be captured correctly by the next active clock edge — that is, before the clock edge minus the flop's setup time requirement. The hold check ensures that data does not arrive too quickly, so that it does not change before the current clock edge has had enough time to capture the previous value, accounting for the flop's hold time requirement.

For setup, the governing equation is roughly: launch clock arrival + data path delay + setup time <= capture clock arrival + clock period. The difference between the required time and the arrival time is called slack; positive slack means the path meets timing, negative slack indicates a violation. Setup violations are typically fixed by reducing combinational delay (cell sizing, buffer insertion, logic restructuring) or by adjusting clock skew. For hold, the relationship is: launch clock arrival + data path delay >= capture clock arrival + hold time, evaluated typically at the same clock edge (or adjacent edge for multicycle paths). Hold violations are commonly fixed by inserting delay (extra buffers) into the fast path.

Setup is checked against the "long path" (max delay analysis) and is sensitive to the clock period — faster clocks tighten setup margins. Hold is checked against the "short path" (min delay analysis) and is independent of clock period but sensitive to clock skew and uncertainty. Both checks must account for clock latency, jitter, and on-chip variation (OCV) derating, since setup uses a worst-case slow launch/fast capture corner while hold uses the opposite assumption. Mastering the interplay between setup and hold is the core skill for debugging timing reports in any STA tool.

Visit the following resources to learn more:

- [@book@Static Timing Analysis for Nanometer Designs](https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [@course@static timing analysis setup hold](https://www.udemy.com/courses/search/?q=static+timing+analysis+setup+hold)
- [@video@setup time and hold time explained](https://www.youtube.com/results?search_query=setup+time+and+hold+time+explained+STA)
- [@article@setup hold timing](https://vlsi.kr/?s=setup+hold+timing)
