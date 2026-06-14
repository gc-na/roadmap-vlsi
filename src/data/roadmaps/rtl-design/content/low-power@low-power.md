# Low Power

Low-power RTL design addresses dynamic and static (leakage) power consumption through architectural and coding techniques that the RTL designer controls, complementing physical-design and library-level power optimizations applied later in the flow. Dynamic power is dominated by switching activity (`P = C * V^2 * f * alpha`, where alpha is the switching factor), so reducing unnecessary toggling of registers and combinational logic directly reduces power.

Clock gating is the most common RTL-level dynamic power technique: instead of letting a register's clock toggle every cycle regardless of whether new data needs to be captured, an enable signal gates the clock (via a clock-gating cell inserted by synthesis, driven by an RTL-level enable condition) so the register only consumes dynamic power when it actually needs to update. Writing RTL with explicit, well-timed enable conditions on registers (rather than always-enabled registers with a mux feeding back the old value) allows synthesis tools to automatically infer clock gating during the "power-aware synthesis" step.

Power gating (shutting off the supply voltage to entire blocks that are idle) is architected at the RTL/floorplan level by defining power domains, and requires RTL to correctly handle isolation cells (forcing safe values on outputs from a powered-down domain), retention registers (preserving critical state across a power-down event using a separate always-on supply), and level shifters at domain boundaries — all typically described via a UPF (Unified Power Format) file alongside the RTL, with the RTL designer responsible for ensuring the design behaves correctly when these structures are inserted (e.g., not assuming a powered-down block's outputs remain meaningful).

Operand isolation (preventing unused datapath logic, such as one input of a multiplexer-selected ALU operation, from toggling and burning power when its result won't be used) and multi-bit/multi-Vt cell usage are additional considerations. From a coding perspective, avoiding unnecessary toggling — for instance, not incrementing a counter that feeds unused logic, or using `casez`/don't-cares thoughtfully — and architecting clean enable hierarchies are the RTL designer's primary levers for low-power design.

Visit the following resources to learn more:

- [@book@Low Power Methodology Manual by Keating, Flynn, Aitken, Gibbons, Shi](https://www.amazon.com/s?k=Low+Power+Methodology+Manual+Keating+Flynn)
- [@course@low power vlsi design](https://www.udemy.com/courses/search/?q=low+power+vlsi+design)
- [@video@clock gating power gating rtl design](https://www.youtube.com/results?search_query=clock+gating+power+gating+rtl+design)
- [@article@low power design](https://vlsi.kr/?s=low+power+design)
