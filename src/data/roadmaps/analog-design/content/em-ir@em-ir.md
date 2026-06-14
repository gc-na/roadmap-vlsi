# EM/IR

Electromigration (EM) and IR drop analysis verify that the power, ground, and signal routing in an analog layout can reliably carry the required currents without degrading performance or causing long-term reliability failures. EM occurs when high current density in a metal interconnect causes metal atoms to migrate via momentum transfer with electrons, gradually thinning the conductor at one end and accumulating material (creating voids and hillocks) until the wire opens or shorts to a neighbor — failure rates increase exponentially with current density and temperature (described by Black's equation), so each metal layer and via has a maximum allowed current density (often specified separately for DC and average/RMS AC currents).

IR drop refers to the voltage drop across resistive power/ground routing due to the current drawn by the circuit, which shifts the effective supply voltage seen by transistors away from the ideal value. In analog circuits, IR drop is especially damaging because it directly perturbs bias points, introduces offset (if it differs between matched branches), and couples as supply noise into sensitive nodes — a current mirror or differential pair with asymmetric IR drop on its tail current source effectively sees a mismatched bias, degrading offset and CMRR even if the devices themselves are perfectly matched.

For analog blocks, EM/IR analysis requires accurate current estimates per branch (often derived from simulation, not just average power), careful sizing of power/ground routing and via arrays especially near high-current devices (output stages, large current mirrors, ESD clamps), and attention to how power routing is shared or isolated between noisy digital and sensitive analog domains — since shared return paths can couple switching IR-drop transients directly into analog ground references. Tools like Voltus, RedHawk, or built-in extraction-based checkers analyze the extracted power network against current estimates to flag violations before tapeout.

Visit the following resources to learn more:

- [@book@CMOS Mixed-Signal Circuit Design](https://www.amazon.com/s?k=CMOS+Mixed-Signal+Circuit+Design+Baker+electromigration+IR+drop)
- [@course@electromigration IR drop analysis IC design](https://www.udemy.com/courses/search/?q=electromigration+IR+drop+analysis+IC+design)
- [@video@electromigration IR drop analysis analog layout](https://www.youtube.com/results?search_query=electromigration+IR+drop+analysis+analog+layout)
- [@article@electromigration IR drop analog](https://vlsi.kr/?s=electromigration+IR+drop+analog)
