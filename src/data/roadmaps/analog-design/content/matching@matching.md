# Matching

Device matching is the layout discipline of ensuring that nominally identical transistors, resistors, and capacitors behave as identically as possible despite random and systematic variation across the die. Random mismatch follows Pelgrom's law, where the variance of a parameter mismatch (e.g., threshold voltage ΔVT) is inversely proportional to device area (WL) — larger devices match better but cost area and add capacitance, so matching-critical devices (differential pair inputs, current mirror legs, bandgap BJTs) are sized as a direct trade-off against bandwidth and power.

Systematic mismatch arises from layout-induced asymmetries: gradients in oxide thickness, temperature, mechanical stress, and dopant concentration across the die cause devices placed in different locations or orientations to differ even if drawn identically. The common-centroid layout technique addresses this by interleaving the unit elements of matched devices (e.g., ABBA or quad arrangements) so that the centroid of each device coincides, canceling first-order gradient effects. Devices must also share the same orientation (avoiding rotation-dependent stress and diffusion effects), use dummy elements at the edges of arrays to ensure uniform etch and implant boundary conditions, and maintain consistent surroundings (same metal density, same well spacing).

For resistors and capacitors, matching also depends on using unit-element arrays with identical geometry, avoiding corner rounding effects by using non-minimum dimensions, and accounting for interconnect parasitics that can dominate mismatch at small unit sizes. In current mirrors, differential pairs, and bandgap references, matching directly sets offset voltage, gain accuracy, and CMRR — making layout-level matching decisions as performance-critical as the schematic-level transistor sizing, and a primary reason analog layout cannot be fully automated like digital standard-cell placement.

Visit the following resources to learn more:

- [@book@Layout, Hot Electron and Process Issues for VLSI](https://www.amazon.com/s?k=analog+layout+design+matching+Hastings)
- [@course@analog IC layout matching techniques](https://www.udemy.com/courses/search/?q=analog+IC+layout+matching+techniques)
- [@video@common centroid layout device matching analog](https://www.youtube.com/results?search_query=common+centroid+layout+device+matching+analog)
- [@article@analog layout matching](https://vlsi.kr/?s=analog+layout+matching)
