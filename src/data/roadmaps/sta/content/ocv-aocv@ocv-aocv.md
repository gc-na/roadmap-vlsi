# OCV/AOCV

On-Chip Variation (OCV) analysis accounts for the fact that process, voltage, and temperature (PVT) parameters are not perfectly uniform across a die — two instances of the same cell can have slightly different delays due to local variation in dopant concentration, metal thickness, local IR drop, and temperature gradients. Basic global OCV models this by applying a single derating factor (e.g., +5% for late/max paths and -5% for early/min paths) uniformly to every cell and net delay across the chip, which is simple but pessimistic, especially for paths with many stages where the worst-case and best-case derates compound unrealistically.

Advanced OCV (AOCV) refines this by making the derating factor depend on two parameters: the number of logic stages (depth) in the path and the distance the path traverses across the die. The intuition is that variation tends to average out over longer paths (more stages, more distance) due to statistical cancellation, so AOCV tables provide smaller derating percentages for deep/long paths and larger derating for shallow/short paths, which are more susceptible to local mismatch. AOCV derating tables are typically provided as part of the timing library (often as a separate AOCV file referenced via `read_aocv` or embedded as derate tables) and are characterized per cell type, stage count, and distance bucket.

Parametric On-Chip Variation (POCV), sometimes called LVF (Liberty Variation Format), goes further by modeling each cell delay as a statistical distribution (mean and standard deviation, sigma) rather than a fixed derate percentage, allowing the tool to compute path delay variation via statistical sum-of-variances (typically combining sigmas in quadrature) rather than simple percentage scaling. POCV/LVF is increasingly standard at advanced nodes (7nm and below) because traditional AOCV tables become impractically large and less accurate as variation sources become more complex. Choosing between global OCV, AOCV, and POCV/LVF is a major signoff methodology decision that significantly affects margin and achievable timing closure.

Visit the following resources to learn more:

- [@book@Static Timing Analysis for Nanometer Designs](https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [@course@on-chip variation AOCV POCV timing](https://www.udemy.com/courses/search/?q=on+chip+variation+AOCV+POCV+timing+signoff)
- [@video@OCV AOCV POCV LVF explained](https://www.youtube.com/results?search_query=OCV+AOCV+POCV+LVF+explained+STA)
- [@article@OCV AOCV POCV](https://vlsi.kr/?s=OCV+AOCV)
