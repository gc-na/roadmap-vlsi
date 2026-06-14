# Yield

Yield, the fraction of manufactured die that meet specification, is both a key business metric and a primary driver of DFT requirements, since test is the mechanism that separates good die from bad and feeds the data used to improve yield over time. Test escapes (defective die that pass test and ship) and yield loss from over-testing (good die failed by overly conservative test limits or guardbanding) are the two failure modes DFT must balance; both are quantified through metrics like DPPM (defective parts per million shipped) and test yield (percentage of die passing test), which together with fault coverage form the standard test quality scorecard.

Yield learning relies heavily on data collected during test: bin-out distributions (categorizing failures by which test step or pattern group caused the fail), wafer maps showing the spatial distribution of failures (useful for identifying systematic process issues localized to specific reticle positions or wafer edges versus random defects scattered uniformly), and parametric data (Vmin/Fmax shmoo plots showing the voltage-frequency operating envelope of each die) that feed statistical bin classification and adaptive test algorithms. Diagnosis-capable test patterns and compression architectures with bypass/serial access modes are designed specifically to support this data collection, since coarse pass/fail results alone don't provide enough resolution for yield improvement.

The relationship between fault coverage and DPPM is often modeled empirically: each additional percentage point of coverage near 100% removes a disproportionate share of remaining defective die that would otherwise escape, which is why mature high-volume products push for coverage well above 99% despite diminishing returns in pattern count. Adaptive test techniques, adjusting test limits, voltage/frequency targets, or even which tests run based on real-time yield data and statistical correlations (part average testing, outlier detection), are increasingly used to improve yield without sacrificing quality. DFT engineers work closely with yield/quality teams to ensure test programs generate the granularity of pass/fail and parametric data needed to drive these yield improvement loops across the product's production lifetime.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Essentials of Electronic Testing for Digital, Memory and Mixed-Signal VLSI Circuits(https://www.amazon.com/s?k=Essentials+of+Electronic+Testing+for+Digital+Memory+and+Mixed-Signal+VLSI+Circuits+Bushnell+Agrawal)
- [Coursera] semiconductor yield analysis test data(https://www.udemy.com/courses/search/?q=semiconductor+yield+analysis+test+data)
- [YouTube] semiconductor yield analysis DPPM wafer map(https://www.youtube.com/results?search_query=semiconductor+yield+analysis+DPPM+wafer+map)
