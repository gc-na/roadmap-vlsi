# MMMC

Multi-Mode Multi-Corner (MMMC) analysis is the practice of running STA across many combinations of operating modes (e.g., functional mode, test mode, low-power mode) and process/voltage/temperature corners (e.g., worst-case slow at high temperature and low voltage for setup, best-case fast at low temperature and high voltage for hold) within a single analysis setup. A real chip must meet timing across all of these combinations, so signoff STA cannot rely on a single corner — it must evaluate the cross-product of relevant modes and corners, often called scenarios.

Each scenario in an MMMC setup typically consists of an SDC constraint file (defining mode-specific clocks, exceptions, and I/O timing) paired with a library/corner specification (defining which `.lib` files, parasitic models, and derating to use for that PVT condition). For setup analysis, the worst-case corner usually combines slow process corner, low voltage (VDDmin), and high temperature (or the temperature inversion corner for FinFET nodes where low temperature can be worse). For hold analysis, the worst-case corner typically combines fast process, high voltage (VDDmax), and low temperature. Multi-voltage designs add further complexity, requiring level-shifter timing and voltage-area-specific libraries to be modeled correctly.

Tools like PrimeTime and Tempus support MMMC natively through commands that define analysis views (combining a constraint mode and a delay corner), and engineers can run all scenarios in parallel using distributed compute to manage the runtime cost. A key MMMC concept is that optimization during synthesis and place-and-route must also consider multiple corners simultaneously (multi-corner optimization), since a cell sized to fix a setup violation at the slow corner could create a hold violation at the fast corner. Properly scoping which scenarios are "signoff" (must be clean) versus "informational" is a major methodology decision that balances coverage against turnaround time.

Visit the following resources to learn more:

- [@book@Static Timing Analysis for Nanometer Designs](https://www.amazon.com/s?k=Static+Timing+Analysis+for+Nanometer+Designs+Bhasker+Chetput)
- [@course@multi corner multi mode timing signoff](https://www.udemy.com/courses/search/?q=multi+corner+multi+mode+STA+signoff)
- [@video@MMMC multi mode multi corner STA](https://www.youtube.com/results?search_query=MMMC+multi+mode+multi+corner+STA+explained)
- [@article@MMMC multi corner](https://vlsi.kr/?s=MMMC)
