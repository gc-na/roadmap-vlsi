# Makefile

Make and Makefiles are widely used in EDA flows as the orchestration layer that ties together the many steps and dependencies of a design flow — synthesis depends on RTL and constraints, place-and-route depends on the synthesized netlist, STA depends on the routed design and SPEF, and so on. Make's dependency-tracking model (a target is rebuilt only if its prerequisites are newer) maps naturally onto this: a Makefile can express that the place-and-route step should rerun if the synthesis netlist or floorplan changed, but skip rerunning if nothing upstream changed, saving significant compute time on large flows where a full run can take many hours.

In practice, EDA Makefiles define targets for each flow stage (`synth`, `place`, `cts`, `route`, `sta`, `signoff`), with each target's recipe typically being a shell command that submits a job to the grid (via `bsub`) running a tool-specific Tcl script, and waits for or tracks completion. Variables and pattern rules are used to parameterize over blocks, corners, and modes — a single Makefile rule might expand into dozens of actual jobs across a `BLOCKS` and `CORNERS` variable combination using `foreach`-style generation or included per-block makefiles. `make -j` enables launching many independent jobs in parallel, which combined with grid submission allows a regression to fan out hundreds of jobs from a single `make regression` invocation.

Makefiles in this domain often grow complex, with included sub-makefiles per project or block, phony targets for cleanup and reporting, and integration with the job-tracking system so `make` doesn't just fire-and-forget grid jobs but can report aggregate pass/fail. Common pitfalls include incorrect dependency declarations causing stale results to be silently reused, and the need for `.PHONY` targets and careful handling of timestamps on networked filesystems where clock skew between machines can confuse Make's timestamp-based logic. Some teams move away from raw Make toward Python-based build systems (like SCons or custom DAG schedulers) for more complex dependency graphs, but Make remains common due to its ubiquity and simplicity for straightforward pipelines.

Visit the following resources to learn more:

- [@book@Managing Projects with GNU Make](https://www.amazon.com/s?k=Managing+Projects+with+GNU+Make)
- [@course@Makefile build automation](https://www.udemy.com/courses/search/?q=Makefile+build+automation+Linux)
- [@video@Makefile tutorial dependencies](https://www.youtube.com/results?search_query=GNU+Make+Makefile+tutorial+dependencies)
- [@article@Makefile flow automation](https://vlsi.kr/?s=Makefile)
