# LSF/Grid

Almost all EDA workloads — synthesis runs, place-and-route, STA across dozens of corners, regression suites — are dispatched to a compute farm rather than run on a local workstation, and LSF (IBM Spectrum LSF) along with alternatives like SGE, Slurm, or PBS is the batch scheduler that manages this. A grid (or compute farm) consists of hundreds to thousands of compute nodes, and the scheduler's job is to queue submitted jobs, match them to available resources based on requested CPU count, memory, and license tokens, and enforce fair-share policies across users and projects so no single team starves the rest.

Flow engineers interact with LSF primarily through `bsub` to submit jobs, `bjobs`/`bqueues` to monitor status and queue health, and `bkill` to terminate runs, usually wrapped inside higher-level scripts so a single command can launch hundreds of parallel STA corner runs or regression tests, each requesting appropriate `-R` resource strings (memory, host groups, license resources). Understanding queue configuration — priority queues, host groups dedicated to specific tool types, memory-based slot limits — is important because a job that requests too little memory can get OOM-killed mid-run after consuming hours of compute, while over-requesting wastes farm capacity and increases queue wait time for everyone.

Grid infrastructure work also includes monitoring farm utilization and capacity planning (how many EDA-tool-equivalent CPU-hours are needed per week versus available), diagnosing failed jobs (host failures, NFS hangs, license unavailability causing jobs to wait indefinitely), and integrating the scheduler with the flow's job-management layer so that a regression run can track thousands of sub-jobs, retry failures, and aggregate pass/fail status. As designs and regression suites grow, efficient grid usage — right-sizing resource requests, using job arrays, and avoiding redundant reruns — directly affects how quickly a design team can iterate and how much compute infrastructure a company needs to provision.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Linux System Programming(https://www.amazon.com/s?k=Linux+system+administration+compute+cluster)
- [Coursera] LSF cluster job scheduling(https://www.udemy.com/courses/search/?q=HPC+cluster+job+scheduling+Linux)
- [YouTube] LSF job scheduler compute farm(https://www.youtube.com/results?search_query=LSF+job+scheduler+compute+farm+EDA)
