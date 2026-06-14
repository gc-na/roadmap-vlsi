# Physical Design Flow

The physical design (PD) flow transforms a synthesized gate-level netlist, along with timing constraints (SDC), a technology library (Liberty/LEF), and a floorplan, into a manufacturable GDSII layout. The major stages run roughly in sequence: floorplanning (defining die size, core area, macro placement, and I/O pin locations), power planning (building the power grid of rings and straps), placement (legally arranging standard cells into rows while optimizing timing, congestion, and power), clock tree synthesis (CTS, building buffered clock distribution networks to minimize skew and insertion delay), routing (global and detailed routing of all signal nets across the metal stack), and post-route optimization/ECO (fixing remaining timing, DRC, or power violations).

Each stage has its own optimization objectives but they are deeply interdependent — a placement decision affects routability and clock tree topology, and clock tree insertion delay affects timing closure that may require further placement or sizing changes. Modern PD tools (Synopsys Fusion Compiler/ICC2, Cadence Innovus, or open-source flows built on OpenROAD) run these stages iteratively, often re-running timing analysis (using built-in STA engines or signed-off tools like PrimeTime) after each step to check for setup/hold violations across all PVT corners, and applying engineering change orders (ECOs) to incrementally fix issues without redoing the entire flow. The flow is parameterized by cell utilization (target density, typically 60–80% in advanced nodes), timing margin (slack budget for setup/hold), power budgets (total, dynamic, and leakage), and DRC cleanliness targets (zero violations for tapeout).

Throughout the flow, engineers balance competing objectives via timing-driven placement and routing algorithms that prioritize critical paths, congestion-aware cell spreading that prevents routing bottlenecks, and power-aware optimization that distributes current and manages thermal effects. Incremental flows (not restarting from scratch) are essential for PPA convergence; running full placement/CTS/routing from a previous checkpoint with updated constraints is far faster than starting fresh. After place-and-route, the design proceeds to physical verification: design rule checking (DRC), layout-versus-schematic (LVS), and parasitic extraction (RC), followed by signoff timing (STA with extracted RC at multiple corners), signoff power analysis (IR drop, EM current density, thermal analysis), and finally tapeout, where the GDSII (or OASIS) file is handed off to the foundry.

Understanding the PD flow as a complete system — recognizing which stage is responsible for which class of problem (congestion is a placement/routing issue; skew is a CTS problem; voltage drop is power-grid related) — is essential for efficient diagnosis and fix prioritization. A missed timing constraint may originate from placement (poor critical path positioning), CTS (excessive insertion delay), or insufficient cell upsizing, and tracing the root cause requires familiarity with tool reports and the physical relationships between netlist structure and layout. Production designs also demand planning for multiple tape-outs and respins, understanding which changes can be ECO'd versus which require full re-implementation, and managing schedules to meet aggressive project timelines.

## Key Concepts

- **Iterative Refinement**: Modern flows support incremental place/CTS/route starting from checkpoints; engineers avoid full flow reruns by leveraging partial optimizations and ECOs.
- **PPA Trade-offs**: Timing closure, power budgets, and area constraints compete; tools expose these trade-offs through cell selection, placement strategy, and routing layer assignment.
- **Tool Automation vs. Manual Intervention**: Place-and-route automation handles most decisions, but critical paths, high-power nets, and congested regions often require manual floorplanning, placement hints, or routing layer preferences.
- **Signoff Closure**: DRC, LVS, timing, power, and EM checks must all pass before tapeout; understanding which signoff tool identifies which class of violation (Calibre for DRC, PrimeTime for timing) accelerates problem resolution.
- **Constraint-Driven Flow**: Timing constraints (SDC), power delivery requirements (P/G planning rules), and manufacturability rules (DRC, LVS) drive the entire flow; incorrect constraints propagate downstream.

## Resume Tips

- **Show End-to-End Ownership**: Describe a design from floorplan through tapeout, highlighting the decisions made at each stage and how they contributed to meeting PPA targets (e.g., "Defined floorplan that reduced CTS latency by 8%, enabling 5% timing margin improvement").
- **Quantify Convergence Time**: Mention how many iterations were required for timing/power/DRC closure, and what techniques accelerated convergence (e.g., "Achieved clean DRC closure on first routing attempt by pre-allocating routing layers based on congestion maps").
- **Explain Tool Integration**: Discuss how you used Innovus, ICC2, or OpenROAD in your flow, including specific optimizations (timing-driven placement, congestion-aware routing) and how you interpreted and acted on tool reports (IR maps, timing reports, congestion graphs).

Visit the following resources to learn more:

- [Book] Physical Design Essentials: An ASIC Design Implementation Perspective by Sait & Youssef(https://www.amazon.com/s?k=Physical+Design+Essentials+ASIC+Design+Implementation+Perspective)
- [Book] VLSI Physical Design: From Graph Partitioning to Timing Closure by Xing & Kuh(https://www.amazon.com/s?k=VLSI+Physical+Design+Graph+Partitioning+Timing+Closure)
- [Coursera] Advanced ASIC Physical Design Flow(https://www.udemy.com/courses/search/?q=advanced+ASIC+physical+design+flow)
- [YouTube] RTL to GDSII flow overview and step-by-step walkthrough(https://www.youtube.com/results?search_query=RTL+to+GDSII+flow+overview+walkthrough)
