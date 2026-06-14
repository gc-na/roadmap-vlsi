# PD Flow

The physical design (PD) flow transforms a synthesized gate-level netlist, along with timing constraints (SDC), a technology library (Liberty/LEF), and a floorplan, into a manufacturable GDSII layout. The major stages run roughly in sequence: floorplanning (defining die size, core area, macro placement, and I/O pin locations), power planning (building the power grid of rings and straps), placement (legally arranging standard cells into rows while optimizing timing, congestion, and power), clock tree synthesis (CTS, building buffered clock distribution networks to minimize skew and insertion delay), routing (global and detailed routing of all signal nets across the metal stack), and post-route optimization/ECO (fixing remaining timing, DRC, or power violations).

Each stage has its own optimization objectives but they are deeply interdependent — a placement decision affects routability and clock tree topology, and clock tree insertion delay affects timing closure that may require further placement or sizing changes. Modern PD tools (such as Synopsys Fusion Compiler/ICC2, Cadence Innovus, or open-source flows built on OpenROAD) run these stages iteratively, often re-running timing analysis (using built-in or signed-off STA engines) after each step to check for setup/hold violations, and applying engineering change orders (ECOs) to incrementally fix issues without redoing the entire flow. Throughout the flow, "what-if" exploration and incremental flows let engineers converge on power-performance-area (PPA) targets without restarting from scratch each time a constraint changes.

After place-and-route, the design proceeds to physical verification — design rule checking (DRC), layout-versus-schematic (LVS), and parasitic extraction — followed by signoff timing (STA with extracted RC), signoff power analysis (IR drop, EM), and finally tapeout, where the GDSII (or OASIS) file is handed off to the foundry. Understanding the PD flow as a whole — and recognizing which stage is responsible for which class of problem (e.g., congestion is a placement/routing issue, skew is a CTS issue, IR drop is a power-grid issue) — is essential for diagnosing and fixing issues efficiently rather than chasing symptoms downstream.

Visit the following resources to learn more:

- [@book@Physical Design Essentials: An ASIC Design Implementation Perspective](https://www.amazon.com/s?k=Physical+Design+Essentials+An+ASIC+Design+Implementation+Perspective+Sait+Youssef)
- [@course@ASIC physical design flow](https://www.udemy.com/courses/search/?q=ASIC+physical+design+flow)
- [@video@RTL to GDSII flow overview](https://www.youtube.com/results?search_query=RTL+to+GDSII+flow+overview)
- [@article@physical design flow](https://vlsi.kr/?s=physical+design+flow)
