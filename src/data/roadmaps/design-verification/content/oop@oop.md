# OOP

SystemVerilog testbenches rely heavily on object-oriented programming (OOP), and this is one of the biggest conceptual jumps for engineers coming from RTL-only Verilog. Classes encapsulate data and behavior — a transaction class might hold address, data, and control fields plus a `display()` method, while a driver class holds a virtual interface handle and a `run_phase()` task. Understanding class declarations, constructors (`new()`), member variables, and methods is the entry point, but the real power comes from inheritance and polymorphism: a base `bus_transaction` class can be extended into `read_transaction` and `write_transaction` subclasses, and a driver written to operate on the base class handle will correctly dispatch to overridden methods on the derived objects at run time.

Other OOP concepts central to UVM-style testbenches include virtual methods and virtual classes (enabling polymorphic dispatch and abstract base classes that cannot be instantiated directly), parameterized classes (generic containers and components that work across data widths or types), and static members/methods (shared across all instances, used for things like transaction counters). Handles (object references) and dynamic memory management matter too — SystemVerilog objects are reference types, garbage-collected, and `null` handles are a common source of runtime errors if a component is used before being constructed or connected.

Two language features deserve special attention: the `factory` pattern (UVM's `uvm_factory`, which lets you override which class type gets constructed at run time, enabling test-specific behavior without editing base code) relies entirely on polymorphism and class registration macros (`uvm_object_utils`, `uvm_component_utils`). Deep copy/clone semantics (`copy()`, `clone()`) and the `do_compare`/`do_print`/`do_copy` callback methods are also OOP-driven patterns that appear throughout `uvm_sequence_item` and `uvm_object` usage. Mastering OOP in SystemVerilog is a prerequisite for reading or writing any nontrivial UVM code.

Visit the following resources to learn more:

- [@book@SystemVerilog for Verification: A Guide to Learning the Testbench Language Features](https://www.amazon.com/s?k=SystemVerilog+for+Verification+Chris+Spear)
- [@course@SystemVerilog OOP for verification](https://www.udemy.com/courses/search/?q=SystemVerilog+OOP+for+verification)
- [@video@SystemVerilog object oriented programming classes tutorial](https://www.youtube.com/results?search_query=SystemVerilog+object+oriented+programming+classes+tutorial)
- [@article@SystemVerilog OOP](https://vlsi.kr/?s=SystemVerilog+OOP)
