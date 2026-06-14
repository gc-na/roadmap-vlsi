# Methodology

Design methodology is the documented set of practices, rules, and standard scripts that govern how a chip design team uses its tools to go from RTL to GDSII. It encompasses naming conventions for clocks, ports, and hierarchical instances; constraint authoring standards (how SDC files are structured and which switches are mandatory); rules for floorplanning and pin placement; and checklists for what must pass before a design can move from one stage to the next, such as synthesis-to-place-and-route handoff criteria or signoff readiness checks. Methodology is what turns a collection of powerful but generic EDA tools into a repeatable, predictable process that produces consistent results across blocks and teams.

A core responsibility of methodology engineering is maintaining the "golden" reference flow: a curated set of Tcl procedures, variable files, and run scripts that every block team starts from, so that improvements (a new optimization switch, a fix for a tool bug, a better ECO procedure) are made once and propagated everywhere rather than being reinvented per block. This includes defining how multi-corner multi-mode analysis is set up, how low-power techniques like clock gating, multi-voltage domains, and power gating are implemented consistently, and how hierarchical versus flat flows are chosen based on design size.

Methodology also covers documentation and training: writing internal guides for how to run the flow, debug common failures, and interpret QoR reports, plus onboarding new engineers onto the toolchain. Methodology engineers continuously gather feedback from block owners, triage recurring issues, and decide whether a fix belongs in the shared flow or is block-specific. They work closely with CAD (tool installation and licensing), flow architecture (script structure), and release teams (versioning and rollout) to ensure changes to methodology are tested in regression before being adopted broadly, balancing innovation against the stability that large design teams depend on.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] VLSI Physical Design: From Graph Partitioning to Timing Closure(https://www.amazon.com/s?k=VLSI+Physical+Design+methodology+timing+closure)
- [Coursera] VLSI design methodology(https://www.udemy.com/courses/search/?q=VLSI+design+methodology+ASIC+flow)
- [YouTube] chip design methodology RTL to GDSII(https://www.youtube.com/results?search_query=chip+design+methodology+RTL+to+GDSII)
