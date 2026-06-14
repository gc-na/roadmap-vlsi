# IR Drop

IR drop is the voltage drop across the resistive power delivery network, caused by current flowing through the finite resistance of power grid metal, vias, and standard cell rails — by Ohm's law, V = I × R, so any current draw through a resistive path reduces the voltage actually delivered to a cell below the nominal supply voltage. Excessive IR drop reduces the effective VDD seen by standard cells, which slows down gate switching (increasing delay) and can in extreme cases cause functional failures if voltage drops below the minimum operating voltage of sequential elements. IR drop signoff is therefore a critical part of power integrity verification, performed alongside timing and EM checks before tapeout.

Static IR drop analysis considers average or worst-case current draw across the chip under steady operating conditions, identifying regions where the power grid resistance is too high relative to local current demand — often macros, high-activity logic clusters, or areas far from power pads/bumps. Dynamic IR drop analysis is more complex and often more critical: it models the transient voltage drop caused by simultaneous switching of many gates (especially at clock edges, where large numbers of flip-flops toggle together), which can create instantaneous voltage droops far exceeding the static average. Dynamic IR drop analysis requires vector-based or vectorless switching activity estimates combined with the power grid's RC model, and tools must account for on-chip decoupling capacitance, which acts as a local charge reservoir that dampens these transients.

Fixing IR drop violations typically involves power grid changes — adding more straps or widening existing ones in the affected region, adding more connections (vias) between layers to reduce via resistance, relocating or adding decap cells near high-activity hotspots, or in severe cases adding more power pads/bumps to reduce the distance current must travel. Because IR drop fixes often require power grid modifications, they are best addressed as early as possible (during floorplanning and power planning) using estimated activity, with signoff-level dynamic IR drop analysis (using tools such as Synopsys PrimePower/Voltus-class analysis) confirming margins late in the flow; late-stage IR drop violations can be among the most disruptive to fix because they may require re-routing in the affected area.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Power Integrity Analysis and Management for Integrated Circuits(https://www.amazon.com/s?k=Power+Integrity+Analysis+and+Management+for+Integrated+Circuits)
- [Coursera] IR drop power integrity ASIC(https://www.udemy.com/courses/search/?q=IR+drop+power+integrity+ASIC)
- [YouTube] IR drop analysis chip design explained(https://www.youtube.com/results?search_query=IR+drop+analysis+chip+design+explained)
