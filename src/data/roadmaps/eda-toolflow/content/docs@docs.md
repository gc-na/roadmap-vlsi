# Docs

Documentation for an EDA toolflow covers everything a block owner or new team member needs to run the flow, understand its options, debug failures, and know what changed between versions. This includes setup guides (how to source the environment and start a run), reference documentation for every configurable variable and switch in the flow's Tcl/Makefile/Python interfaces, methodology guides explaining the rationale behind constraint and floorplanning rules, troubleshooting/FAQ pages for common errors, and release notes documenting changes, fixes, and migration steps between flow versions.

Good documentation in this domain has to stay synchronized with fast-moving scripts: a flow's configurable variables and procedures change frequently as methodology evolves, so documentation that is manually maintained separately from the code tends to go stale quickly. Many teams address this by generating reference documentation directly from code — docstrings in Python utilities, comment headers in Tcl procedures that follow a parseable convention, or auto-generated tables of variable defaults — so that documentation builds are part of the release process and can't drift far from the actual implementation. Internal wikis (Confluence, MediaWiki, or simple static-site generators) are common for narrative methodology guides, while generated reference docs often live alongside the flow repository itself.

Documentation also plays a key role in onboarding and knowledge transfer: as flows accumulate years of accumulated fixes and special cases, the reasoning behind a particular workaround or constraint can be lost if not written down, leading to "tribal knowledge" that only a few senior engineers hold. Writing clear runbooks for common operational tasks (how to bring up a new block on the flow, how to triage a regression failure, how to request a license or grid capacity increase) reduces the support burden on flow/methodology teams and is especially valuable as design teams scale and turnover occurs. Release notes specifically need to call out any change that could affect QoR or require action from block owners, since silent behavior changes are a common source of confusion during flow migrations.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Docs for Developers(https://www.amazon.com/s?k=Docs+for+Developers+technical+documentation)
- [Coursera] technical writing documentation(https://www.udemy.com/courses/search/?q=technical+writing+documentation+software)
- [YouTube] writing technical documentation engineering(https://www.youtube.com/results?search_query=writing+technical+documentation+for+engineering+teams)
