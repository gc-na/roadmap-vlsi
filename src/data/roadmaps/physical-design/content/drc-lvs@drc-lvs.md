# DRC/LVS

Design rule checking (DRC) and layout-versus-schematic (LVS) are the two pillars of physical verification, run after place-and-route to confirm that the final layout is both manufacturable and functionally correct before tapeout. DRC checks the layout's geometry against the foundry's design rule manual — a set of rules specifying minimum widths, spacings, enclosures, area, and density for every layer and layer combination in the process. Violations (such as two metal shapes spaced too closely, a via without sufficient enclosure, or a region exceeding the maximum allowed metal density for planarization) can cause the chip to fail fabrication or have reduced yield, so DRC must be completely clean (with documented, foundry-approved waivers for any unavoidable exceptions) before tapeout.

LVS verifies that the layout actually implements the intended circuit by extracting a netlist directly from the GDSII geometry (transistors from active/poly overlaps, interconnects from metal/via shapes) and comparing it, device-by-device and net-by-net, against the reference netlist (typically the post-route netlist or schematic). LVS catches errors that DRC cannot, such as a missing via that creates an open connection, an unintended short between two nets that happen to overlap, or a transistor with the wrong width/length due to a layout generation error. LVS mismatches are reported as shorts, opens, or device parameter mismatches, and even a single LVS error typically blocks tapeout since it indicates the manufactured chip would not match the verified design.

Both checks are run using foundry-qualified tools (such as Synopsys IC Validator, Cadence Pegasus, or Siemens Calibre) with rule decks provided by the foundry, and are computationally intensive enough that they're often run hierarchically or with multi-threaded/distributed processing on full-chip designs. A related check, antenna rule checking, is often bundled with DRC to catch process-induced charging issues on long unconnected metal segments. Physical verification is iterative — early DRC/LVS runs on partial or in-progress layouts catch issues before they compound, while the final signoff run must be completely clean, making DRC/LVS one of the hard gating criteria for tapeout readiness.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Physical Design Essentials: An ASIC Design Implementation Perspective(https://www.amazon.com/s?k=Physical+Design+Essentials+An+ASIC+Design+Implementation+Perspective+Sait+Youssef)
- [Coursera] DRC LVS physical verification(https://www.udemy.com/courses/search/?q=DRC+LVS+physical+verification)
- [YouTube] DRC and LVS explained chip design(https://www.youtube.com/results?search_query=DRC+and+LVS+explained+chip+design)
