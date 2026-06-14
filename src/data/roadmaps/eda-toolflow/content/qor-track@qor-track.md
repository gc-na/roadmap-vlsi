# QoR Track

QoR tracking is the practice of systematically recording quality-of-results metrics (timing slack, area, power, congestion, DRC counts, runtime) across runs over time so that trends, regressions, and improvements can be analyzed at a project level rather than just looking at a single run's report. While the "QoR" topic covers reading and understanding individual reports, QoR tracking is about building and operating the infrastructure that captures these metrics continuously across every block, every corner, and every milestone of a project, and making that history queryable and visualizable.

In practice this means writing extraction scripts (commonly Python) that run after every synthesis, place-and-route, or STA job completes, parse the relevant log/report files, and write structured records (block name, corner, mode, run ID, flow revision, date, and the metric values) into a database — often a relational database or a time-series-friendly schema. A dashboard, frequently built with Flask/Django plus a charting library, or with tools like Grafana on top of the database, lets engineers and managers see how WNS, area, and power for each block have evolved across weekly milestones, compare current numbers against a target or a previous tapeout, and drill down into which specific paths or cells are driving a regression.

QoR tracking is central to release decisions: before promoting a flow change or library update to the production branch, engineers compare QoR across the regression suite against the previous baseline, and any non-trivial QoR delta needs to be explained and approved. At the project level, QoR tracking feeds milestone reviews — is the chip converging toward timing closure on schedule, is area creeping up block by block, is power within budget — and historical QoR data is also valuable for post-mortems, helping correlate a late-stage timing problem with the flow or library change that introduced it weeks earlier.


## Resume Tips

- Quantify your experience: mention specific tools, methodologies, or design metrics.
- In interviews, explain your problem-solving approach — companies value reasoning over memorization.
- Highlight cross-functional collaboration: most semiconductor work is team-based.
Visit the following resources to learn more:

- [Book] Data Visualization with Python and JavaScript(https://www.amazon.com/s?k=data+visualization+dashboard+Python+Grafana)
- [Coursera] data dashboard Python Grafana(https://www.udemy.com/courses/search/?q=Python+dashboard+Grafana+data+visualization)
- [YouTube] QoR tracking dashboard chip design(https://www.youtube.com/results?search_query=QoR+tracking+dashboard+timing+area+power+trends)
