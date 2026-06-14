# Reg Layer

The UVM register abstraction layer (RAL, often called UVM RegModel) provides a structured, object-oriented model of a design's memory-mapped register space, generated from an IP-XACT, SystemRDL, or IP-specific spreadsheet description. Each register is modeled as a `uvm_reg` object with fields (`uvm_reg_field`) that capture bit-level attributes — access type (RW, RO, W1C, etc.), reset value, and width — while `uvm_reg_block` and `uvm_reg_map` organize registers into address maps that mirror the DUT's register address decode. This gives test writers a software-like view: instead of poking raw addresses and hex values, you call `my_reg_block.ctrl_reg.write(status, value)` or `.read(status, data)`.

A critical piece is the adapter and predictor: a `uvm_reg_adapter` translates abstract register read/write operations into bus-specific sequence items (AXI, AHB, APB) that drive the actual interface, while a `uvm_reg_predictor` observes bus transactions via the monitor's analysis port and updates the RAL model's mirrored value automatically, keeping the software-visible model in sync with what's actually happening on the bus. This mirrored value lets tests check `reg.get_mirrored_value()` against `reg.get()` (the desired/expected value) to detect mismatches without manual bookkeeping.

The reg layer also enables built-in test sequences that are extremely valuable for coverage of the register space itself: `uvm_reg_hw_reset_seq` checks all registers return to their specified reset values, `uvm_reg_bit_bash_seq` walks through each writable bit individually to confirm it doesn't affect other bits, and `uvm_reg_access_seq` verifies read/write access policies (e.g., a read-only register actually ignores writes). Front-door access (through the bus, exercising the full datapath and timing) versus back-door access (direct DPI/hierarchical poke into the RTL register, bypassing timing — useful for fast initialization or isolating register-access bugs from bus-protocol bugs) is a distinction every RAL user needs to understand.

Visit the following resources to learn more:

- [@book@A Practical Guide to Adopting the Universal Verification Methodology (UVM)](https://www.amazon.com/s?k=A+Practical+Guide+to+Adopting+the+Universal+Verification+Methodology+UVM+Rosenberg+Meade)
- [@course@UVM register abstraction layer RAL](https://www.udemy.com/courses/search/?q=UVM+register+abstraction+layer+RAL)
- [@video@UVM register model RAL tutorial](https://www.youtube.com/results?search_query=UVM+register+model+RAL+tutorial)
- [@article@UVM register layer](https://vlsi.kr/?s=UVM+register+layer)
