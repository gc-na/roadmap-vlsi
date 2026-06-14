# ECO

An engineering change order (ECO) is a small, targeted modification applied to a design late in the flow — after placement, CTS, or routing — without restarting the full implementation. ECOs typically address issues found during signoff: timing violations (setup/hold) discovered after extracted-RC STA, DRC violations from physical verification, IR drop or EM hotspots from power signoff, or functional bug fixes that arrive after the netlist has already been placed and routed. Because re-running the entire flow from scratch for every small fix would be prohibitively slow and could introduce new issues elsewhere, ECOs are designed to make the minimum necessary change while preserving as much of the existing layout as possible ("incremental" or "in-place" ECO).

There are two broad categories of ECOs: functional ECOs, which change the design's logic (adding, removing, or rewiring gates to fix a bug or implement a late RTL change), and timing/physical ECOs, which preserve functionality but adjust the implementation to fix a violation — for example, upsizing a cell to improve drive strength, downsizing a cell to reduce power or fix a hold violation, swapping a cell to a different Vt flavor, inserting or removing buffers on a net, or shifting a cell's location slightly to resolve a DRC spacing issue. Timing ECOs are often guided by ECO-specific timing analysis that identifies the highest-leverage fix (e.g., the single buffer insertion that resolves the most violating endpoints) and many PD tools support automated ECO flows that propose and apply such fixes while checking for new violations introduced by the change.

A critical aspect of ECO methodology is verification: any logic change must be re-verified for functional equivalence (often via formal equivalence checking against the original netlist) and any physical change must be re-checked for DRC/LVS cleanliness in the affected region, plus incremental timing signoff to confirm the fix didn't create new violations elsewhere. Late-stage ECOs, especially after tapeout-level signoff has begun ("metal-only" ECOs that avoid changing base layers to save mask costs), are tightly scoped and heavily scrutinized because the cost and risk of errors increase dramatically the closer the design is to tapeout.

Visit the following resources to learn more:

- [@book@Static Timing Analysis for Nanometer Designs](https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chadha)
- [@course@ASIC ECO timing closure](https://www.udemy.com/courses/search/?q=ASIC+ECO+timing+closure)
- [@video@ECO flow physical design explained](https://www.youtube.com/results?search_query=ECO+flow+physical+design+explained)
- [@article@ECO physical design](https://vlsi.kr/?s=ECO)
