# Revision

Revision control for chip design covers version control of flow scripts, constraints, and RTL using systems like Git, Perforce, or SVN, but it extends beyond typical software practices because of the scale and binary nature of design data. Flow scripts, Tcl procedures, SDC files, and Makefiles are usually managed in Git with normal branching and code review workflows, but library files, IP deliverables, and large intermediate databases (place-and-route databases, GDS) often live in a separate data management system or are tracked by reference (a manifest listing paths and checksums) rather than committed directly, since committing multi-gigabyte binaries to Git is impractical.

A central concern is reproducibility: given a specific tag or commit of the flow repository plus a recorded set of library/IP versions and tool versions, it must be possible to reproduce a previous run's results exactly. This requires disciplined tagging of releases, recording the exact revisions of all dependencies (often via a "manifest" or "bill of materials" file), and avoiding mutable references like "latest" in production flows. When a regression fails after a change, engineers need to bisect — check out an earlier flow revision and rerun — to isolate whether the cause was a script change, a library update, or a tool patch.

Branching strategy matters at scale: a typical pattern has a stable "release" branch used by all block teams, a development branch where methodology engineers integrate and test new features, and short-lived feature branches for individual changes, with merges gated by regression passing. Revision control also intersects with IP/library versioning — when a foundry library or hard macro is updated, that update needs its own revision identifier so designs can pin to a known-good version and upgrade deliberately. Engineers working on revision infrastructure build tooling around diffing constraint files, tracking which blocks are on which flow version, and auditing changes that affect QoR or signoff results.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Pro Git(https://www.amazon.com/s?k=Pro+Git+version+control+Scott+Chacon)
- [Coursera] Git version control(https://www.udemy.com/courses/search/?q=Git+version+control+for+engineers)
- [YouTube] Git branching strategy for hardware teams(https://www.youtube.com/results?search_query=Git+version+control+chip+design+flow)
