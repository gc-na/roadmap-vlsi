# Shell

Shell scripting (primarily bash, with csh/tcsh still found in older EDA environments) is the connective layer that wraps tool invocations, sets up environments, and chains stages of the flow together at the operating-system level. Every EDA tool run is launched from a shell, and the shell environment determines which tool version executes, which licenses are visible, and which libraries and PDK files are found — almost all of this is configured through environment variables (`PATH`, `LD_LIBRARY_PATH`, `LM_LICENSE_FILE`, tool-specific variables like `SYNOPSYS_ROOT`) set up via sourced setup scripts, often per project, per block, or per tool version.

A typical flow uses shell scripts to: source the correct environment setup for a given tool version, create run directories with timestamps or run IDs, copy or symlink input files (RTL, constraints, libraries) into a clean workspace, invoke the EDA tool (often via `bsub` for grid submission) with appropriate command-line switches and redirect stdout/stderr to logs, check exit codes and key strings in logs to determine pass/fail, and clean up or archive results afterward. Mastery of standard Unix utilities — `grep`, `sed`, `awk`, `find`, `xargs`, pipes and redirection — is essential since these are used constantly for log scanning, file manipulation, and quick one-off data extraction that doesn't justify a full Python script.

Shell environment management becomes a significant challenge at scale: different blocks or projects may require different tool versions simultaneously, multiple PDK versions must coexist without conflict, and environment setup scripts can become tangled with conditional logic for different sites, machine types, or legacy compatibility. Module systems (like `environment modules` or `lmod`) are sometimes used to manage this more cleanly. Writing robust shell scripts — proper quoting, error handling with `set -e`/`set -u`, avoiding subtle word-splitting bugs, and making scripts portable across bash versions on different farm hosts — directly affects flow reliability, since a shell bug can cause silent failures that are hard to diagnose across thousands of grid jobs.

Visit the following resources to learn more:

- [@book@The Linux Command Line](https://www.amazon.com/s?k=The+Linux+Command+Line+William+Shotts)
- [@course@bash shell scripting](https://www.udemy.com/courses/search/?q=bash+shell+scripting+Linux)
- [@video@bash scripting for engineers](https://www.youtube.com/results?search_query=bash+shell+scripting+tutorial+Linux)
- [@article@shell scripting flow automation](https://vlsi.kr/?s=shell+scripting)
