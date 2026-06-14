# OOP

SystemVerilog testbenches rely heavily on object-oriented programming (OOP), and this is one of the biggest conceptual jumps for engineers coming from RTL-only Verilog. **Classes** encapsulate data and behavior — a transaction class might hold address, data, and control fields plus a `display()` method, while a driver class holds a virtual interface handle and a `run_phase()` task. Understanding **class declarations**, **constructors** (`new()`), **member variables**, and **methods** is the entry point, but the real power comes from **inheritance** and **polymorphism**: a base `bus_transaction` class can be extended into `read_transaction` and `write_transaction` subclasses, and a driver written to operate on the base class handle will correctly dispatch to overridden methods on derived objects at run time.

**Inheritance** enables code reuse: derived classes extend base class functionality while inheriting all existing methods and member variables. A `write_agent` inherits from `uvm_agent` and adds custom driver/monitor logic. **Encapsulation** groups related data and methods together, hiding internal details behind a clean interface. A register layer exposes `read()` and `write()` methods without exposing the internal prediction or mirror state.

Other OOP concepts central to UVM testbenches include **virtual methods** and **virtual classes** (enabling polymorphic dispatch and abstract base classes that cannot be instantiated directly), **parameterized classes** (generic containers and components that work across data widths or types), and **static members/methods** (shared across all instances, used for things like transaction counters). **Handles** (object references) and dynamic memory management matter too — SystemVerilog objects are reference types, garbage-collected, and `null` handles are a common source of runtime errors if a component is used before being constructed or connected.

Two language features deserve special attention: the **factory pattern** (UVM's `uvm_factory`, which lets you override which class type gets constructed at run time, enabling test-specific behavior without editing base code) relies entirely on polymorphism and class registration macros (`uvm_object_utils`, `uvm_component_utils`). Deep copy/clone semantics (`copy()`, `clone()`) and callback methods (`do_compare()`, `do_print()`, `do_copy()`) are OOP-driven patterns throughout `uvm_sequence_item` and `uvm_object` usage. Mastering OOP in SystemVerilog is a prerequisite for reading or writing any nontrivial UVM code.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] SystemVerilog for Verification: A Guide to Learning the Testbench Language Features(https://www.amazon.com/s?k=SystemVerilog+for+Verification+Chris+Spear)
- [Coursera] SystemVerilog OOP classes inheritance encapsulation(https://www.udemy.com/courses/search/?q=SystemVerilog+OOP+for+verification)
- [YouTube] SystemVerilog classes inheritance polymorphism tutorial(https://www.youtube.com/results?search_query=SystemVerilog+object+oriented+programming+classes+inheritance)
