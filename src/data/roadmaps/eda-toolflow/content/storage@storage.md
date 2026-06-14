# Storage

Chip design generates enormous volumes of data: a single block's place-and-route run can produce gigabytes of databases, netlists, SPEF parasitics, and logs, and a full-chip project across hundreds of blocks and many PVT corners can reach petabyte scale over its lifetime. Storage infrastructure for EDA flows typically relies on high-performance network filesystems — NFS-based NAS appliances (e.g., NetApp, Isilon/PowerScale) or distributed/parallel filesystems for the highest-throughput needs — shared across the compute farm so that thousands of simultaneous jobs can read libraries and write results without becoming I/O-bound.

A key design decision is directory layout and quota management: organizing data by project, block, milestone, and run so that disk usage can be tracked and capped per team, and so old or superseded runs can be identified for cleanup. Because re-running a flow regenerates most intermediate files, many teams implement automated scratch-space policies — temporary run directories on fast local or scratch storage that are purged after a retention period, while only "golden" or release artifacts are copied to long-term, backed-up storage. This tiering (fast scratch vs. durable archive) balances performance against the cost of high-IOPS storage.

Flow engineers care about storage because I/O performance directly affects tool runtime — a place-and-route tool that's constantly waiting on NFS for library reads or writing large database checkpoints can be dramatically slower on congested storage — and because flow scripts must be written to clean up intermediate files, compress logs, and avoid leaving stale large files (like uncompressed SPEF or full-chip GDS) scattered across the farm. Capacity planning, monitoring per-project disk usage against quotas, and coordinating with IT/CAD teams on storage expansion or migration (including the disruption of moving an active project to new mount points) are recurring responsibilities tied closely to release and regression infrastructure.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Storage Networks Explained(https://www.amazon.com/s?k=storage+networks+NFS+NAS+explained)
- [Coursera] NFS storage administration Linux(https://www.udemy.com/courses/search/?q=NFS+storage+administration+Linux)
- [YouTube] NFS storage performance compute cluster(https://www.youtube.com/results?search_query=NFS+storage+performance+compute+cluster)
