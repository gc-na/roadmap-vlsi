# Python

Python has become the standard language for the infrastructure layer surrounding EDA tools — while Tcl drives the tools themselves, Python is used to orchestrate flows, parse and aggregate reports, build dashboards, and interface with databases and web services. A typical use case is a Python script that walks through hundreds of STA log files across corners and blocks, extracts WNS/TNS/area/power using regular expressions or structured report parsing, and loads the results into a database or generates a QoR summary spreadsheet using libraries like `pandas` and `openpyxl`.

Python's ecosystem makes it well suited for the "glue" layer: launching jobs onto the compute grid via subprocess calls or scheduler APIs, polling job status, retrying failures, and aggregating results into pass/fail reports — often implemented with frameworks built on `argparse` for CLI tools, `logging` for structured run logs, and `multiprocessing` or `concurrent.futures` for managing many parallel sub-tasks from a driver script. Many regression and release systems are themselves Python applications with a database backend (often via `sqlalchemy` or a simple SQLite/PostgreSQL schema) tracking run history, and web frontends (Flask/Django) for dashboards showing regression health and QoR trends over time.

Python is also used for data manipulation tasks that Tcl handles awkwardly: parsing and transforming SDC, LEF/DEF, or SPEF files with custom parsers or libraries, generating constraint files programmatically from spreadsheets or JSON configs (e.g., expanding a table of clock definitions into hundreds of `create_clock`/`set_clock_uncertainty` commands), and validating that generated constraint files meet methodology rules before they're checked in. Familiarity with virtual environments, packaging internal tools for reuse across teams, and writing maintainable, tested code (since flow infrastructure scripts are run thousands of times and a bug can silently corrupt QoR data across an entire regression) are important skills for Python in this domain.

Visit the following resources to learn more:

- [@book@Automate the Boring Stuff with Python](https://www.amazon.com/s?k=Automate+the+Boring+Stuff+with+Python+Al+Sweigart)
- [@course@Python automation scripting](https://www.udemy.com/courses/search/?q=Python+automation+scripting+for+engineers)
- [@video@Python scripting for EDA automation](https://www.youtube.com/results?search_query=Python+scripting+for+EDA+automation+chip+design)
- [@article@Python automation EDA](https://vlsi.kr/?s=Python+automation)
