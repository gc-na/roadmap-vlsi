# Release

Release engineering in the EDA toolflow context is the discipline of packaging, versioning, and distributing flow scripts, methodology updates, PDK/library deliverables, and IP so that hundreds of designers across many blocks and projects can consume a stable, tested set of tools and scripts without each having to track changes independently. A "release" is a tagged, frozen snapshot — a specific version of the flow repository, paired with specific tool versions and library versions — that has passed the regression suite and is declared safe for production use, distinct from the actively-developed mainline where methodology engineers make ongoing changes.

A typical release process involves a candidate build going through the full regression suite, QoR comparison against the previous release baseline, and a review/sign-off step where any QoR deltas or behavior changes are documented and approved by methodology leads. Once approved, the release is tagged in revision control, installed to a shared, read-only location on the filesystem (often versioned directories like `/cad/flows/myflow/v3.2/`), and an announcement is sent to block owners describing what changed, what action (if any) they need to take, and a deprecation timeline for the previous version they're migrating from.

Release management also handles the practical realities of a large organization: supporting multiple active release versions simultaneously (since not every block can migrate the moment a new release ships, especially mid-tapeout), backporting critical bug fixes to older releases when needed, and maintaining clear release notes and changelogs so engineers can understand what changed between versions when debugging an unexpected difference in results. Coordinating releases of the flow with releases of PDKs, IP, and EDA tool versions — since these are often interdependent — and managing the rollback process if a release turns out to have a critical issue after wide adoption, are core release-management responsibilities that require both technical rigor and clear communication across teams.

Visit the following resources to learn more:

- [@book@The Phoenix Project](https://www.amazon.com/s?k=The+Phoenix+Project+release+management+devops)
- [@course@release management software](https://www.udemy.com/courses/search/?q=release+management+versioning+software)
- [@video@release management versioning engineering](https://www.youtube.com/results?search_query=release+management+versioning+engineering+process)
- [@article@release management flow](https://vlsi.kr/?s=release+management)
