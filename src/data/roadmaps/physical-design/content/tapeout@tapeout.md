# Tapeout

Tapeout is the final milestone of the physical design flow: the point at which the completed layout is packaged into a GDSII (or increasingly OASIS) file and released to the foundry for mask generation and fabrication. Reaching tapeout requires that every signoff check has passed cleanly — DRC and LVS with no unwaived violations, signoff STA showing no timing violations across all corners (PVT — process, voltage, temperature) and modes, IR drop and EM within limits, antenna rule checks clean, and formal equivalence checking confirming the final netlist matches the verified RTL/gate-level intent. Each of these checks is run with signoff-accurate tools and models (extracted parasitics, signoff Liberty corners, foundry-qualified DRC/LVS decks), which are typically more conservative and higher-resolution than the tools used during implementation iterations.

Beyond the core PD checks, tapeout involves additional steps specific to the manufacturing handoff: adding fill shapes (metal and via fill) to meet density requirements for chemical-mechanical polishing (CMP) uniformity, inserting scribe lines and alignment marks for the reticle, merging in any IP blocks delivered as hard macros (GDS streams from third parties), running a final streaming-out and merge of all hierarchical GDS views into a single flat or hierarchical top-level GDS, and performing a final DRC/LVS/antenna check on the fully merged design since fill insertion and IP merging can introduce new violations. Many designs also go through resolution enhancement techniques (RET) such as optical proximity correction (OPC) at the foundry side, though PD teams must ensure the layout is compatible with these techniques (e.g., respecting recommended rules beyond minimum DRC).

Tapeout is typically a hard deadline with significant cost implications — mask sets for advanced nodes cost millions of dollars, and any error that escapes to silicon may require a costly re-spin (a new mask set and fabrication run) or, if caught early enough, a metal-only ECO that reuses some existing masks. For this reason, tapeout is preceded by extensive checklists, sign-off reviews involving multiple teams (design, verification, physical design, package/test), and often a final "tapeout readiness" review confirming all waivers are documented and all required checks have been completed on the exact GDS being sent to the foundry.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Physical Design Essentials: An ASIC Design Implementation Perspective(https://www.amazon.com/s?k=Physical+Design+Essentials+An+ASIC+Design+Implementation+Perspective+Sait+Youssef)
- [Coursera] ASIC tapeout signoff flow(https://www.udemy.com/courses/search/?q=ASIC+tapeout+signoff+flow)
- [YouTube] chip tapeout process explained(https://www.youtube.com/results?search_query=chip+tapeout+process+explained)
