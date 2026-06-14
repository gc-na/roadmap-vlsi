# Perf DV

Performance verification focuses on confirming that a design meets its quantitative throughput, latency, and bandwidth targets under realistic and worst-case traffic conditions — a different goal from functional correctness verification, which only asks whether the result is correct, not how fast it was produced. This is especially important for components like caches, memory controllers, NoC (network-on-chip) fabrics, and DMA engines, where the architectural spec often includes explicit numeric targets (e.g., "sustain 90% of peak DRAM bandwidth under streaming access patterns" or "average read latency under 50 cycles at 80% queue occupancy").

The testbench needs traffic generators capable of producing realistic and stress patterns — bursty traffic, multiple concurrent streams with different priorities, address patterns that stress page hits/misses in a memory controller, and back-to-back transactions that probe pipeline bubbles or arbitration starvation. Performance metrics (latency distributions, bandwidth utilization, queue occupancy over time, arbitration fairness) are typically collected via SystemVerilog covergroups, custom monitors that timestamp transaction start/end events, or by post-processing waveform/transaction logs. Because performance bugs often only manifest under sustained load over long periods, performance tests frequently require longer simulation runs or are migrated to emulation for realistic traffic volumes.

A related concern is power-aware verification: many SoCs implement dynamic voltage and frequency scaling (DVFS), clock gating, and power domains that must be verified for both functional correctness (does the design retain state correctly across a power-down/power-up sequence, using UPF — Unified Power Format — to describe power intent) and performance impact (does clock-gating logic introduce unacceptable latency on wake-up). Performance verification engineers often build analytical or cycle-approximate models of the design's expected throughput to compare against RTL simulation results, helping distinguish "the RTL has a performance bug" from "the architecture itself can't meet the target," which is valuable feedback for architects early in the design cycle.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Computer Architecture: A Quantitative Approach(https://www.amazon.com/s?k=Computer+Architecture+A+Quantitative+Approach+Hennessy+Patterson)
- [Coursera] SoC performance verification(https://www.udemy.com/courses/search/?q=SoC+performance+verification)
- [YouTube] SoC performance verification bandwidth latency(https://www.youtube.com/results?search_query=SoC+performance+verification+bandwidth+latency)
