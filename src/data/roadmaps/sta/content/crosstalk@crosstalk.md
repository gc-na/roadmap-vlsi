# Crosstalk

Crosstalk, or signal integrity (SI) noise, arises from capacitive coupling between adjacent metal interconnects. When an aggressor net switches, it injects noise current onto a neighboring victim net through their shared coupling capacitance, which can either cause a glitch on a quiet victim or alter the delay of a switching victim. As process nodes shrink, wires become taller and narrower relative to their spacing, increasing the ratio of coupling capacitance to ground capacitance, making crosstalk a first-order concern in deep submicron and advanced-node STA.

Crosstalk affects timing in two distinct ways. Delay change (also called crosstalk delay or SI delay) occurs when the aggressor switches in the same direction as the victim (constructive coupling), slowing the victim's transition and adding delay, or in the opposite direction (destructive coupling), speeding it up — STA tools compute a delta delay for each affected arc based on the relative switching windows of aggressors and victims. Glitch (or noise) analysis evaluates whether a quiet victim net experiences a voltage bump large enough to be interpreted as a logic transition by a downstream gate, potentially causing a functional failure independent of any clock-based timing check; this is evaluated against noise margin thresholds derived from the receiving gate's switching threshold.

Signoff STA tools such as PrimeTime SI and Tempus with signal integrity analysis incorporate crosstalk by identifying aggressor-victim pairs from the extracted parasitics (SPEF), determining which aggressors can switch within the victim's relevant timing window, and applying the worst-case delta delay to setup and hold calculations. Mitigation techniques include increasing spacing between critical nets, inserting shield wires tied to VDD/VSS, adjusting net ordering during routing, and using non-default routing rules (NDRs) for sensitive clock and reset nets. Crosstalk analysis significantly increases runtime compared to basic STA, so it is typically run at signoff corners rather than during every incremental ECO iteration.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Static Timing Analysis for Nanometer Designs(https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [Coursera] signal integrity crosstalk VLSI(https://www.udemy.com/courses/search/?q=signal+integrity+crosstalk+VLSI+timing)
- [YouTube] crosstalk signal integrity STA(https://www.youtube.com/results?search_query=crosstalk+signal+integrity+STA+PrimeTime)
