// Semiconductor Design Career Knowledge Graph
//
// Synthesized from job-description analysis across major semiconductor
// employers (NVIDIA, Intel, Synopsys, Cadence, Samsung, TI, AMD, Qualcomm,
// Apple, Micron). Nodes are domains, roles, skills, tools, concepts, and
// career levels; edges encode how they relate (requires / prerequisite /
// uses / progresses-to / specializes / related). `demand` (0-100) reflects
// how frequently a node appears in postings and drives node sizing.

export type GraphNodeType =
  | 'domain'
  | 'role'
  | 'skill'
  | 'tool'
  | 'concept'
  | 'level';

export type GraphEdgeType =
  | 'specializes' // domain -> role  (this domain contains this role)
  | 'requires' // role -> skill   (this role needs this skill)
  | 'prerequisite' // skill -> skill  (learn A before B)
  | 'includes' // skill -> concept
  | 'uses' // skill/role -> tool
  | 'progresses_to' // role/level -> role/level (career ladder)
  | 'related'; // loose cross-link

export interface GraphNode {
  id: string;
  label: string;
  type: GraphNodeType;
  /** Slug of an existing roadmap to deep-link to, if any. */
  roadmap?: string;
  /** 0-100, JD frequency; drives node size. */
  demand?: number;
  description?: string;
}

export interface GraphEdge {
  source: string;
  target: string;
  type: GraphEdgeType;
}

export const NODE_TYPE_META: Record<
  GraphNodeType,
  { label: string; color: string }
> = {
  domain: { label: 'Domain', color: '#0f172a' },
  role: { label: 'Job Role', color: '#2b78e4' },
  skill: { label: 'Skill Area', color: '#4f7a28' },
  tool: { label: 'EDA Tool', color: '#e47911' },
  concept: { label: 'Concept', color: '#874efe' },
  level: { label: 'Career Level', color: '#0f766e' },
};

export const EDGE_TYPE_META: Record<
  GraphEdgeType,
  { label: string; color: string; style: 'solid' | 'dashed' | 'dotted' }
> = {
  specializes: { label: 'contains role', color: '#94a3b8', style: 'solid' },
  requires: { label: 'requires skill', color: '#2b78e4', style: 'solid' },
  prerequisite: { label: 'prerequisite', color: '#64748b', style: 'dashed' },
  includes: { label: 'includes', color: '#4f7a28', style: 'dotted' },
  uses: { label: 'uses tool', color: '#e47911', style: 'dotted' },
  progresses_to: { label: 'progresses to', color: '#0f766e', style: 'solid' },
  related: { label: 'related', color: '#cbd5e1', style: 'dashed' },
};

// ---------------------------------------------------------------------------
// Nodes
// ---------------------------------------------------------------------------

export const nodes: GraphNode[] = [
  // ---- Domains ----
  { id: 'd-digital', label: 'Digital Design', type: 'domain', demand: 95, description: 'Front-end RTL design and digital architecture.' },
  { id: 'd-physical', label: 'Physical Implementation', type: 'domain', demand: 90, description: 'RTL-to-GDSII back-end implementation and signoff.' },
  { id: 'd-verification', label: 'Verification', type: 'domain', demand: 98, description: 'Functional and formal verification of designs.' },
  { id: 'd-analog', label: 'Analog / Mixed-Signal', type: 'domain', demand: 80, description: 'Analog, RF, and mixed-signal circuit design.' },
  { id: 'd-test', label: 'Test & DFT', type: 'domain', demand: 75, description: 'Design-for-test and manufacturing test.' },
  { id: 'd-eda', label: 'EDA / CAD', type: 'domain', demand: 70, description: 'Design flow, methodology, and infrastructure.' },
  { id: 'd-mfg', label: 'Manufacturing', type: 'domain', demand: 65, description: 'Yield, process technology, and DFM.' },
  { id: 'd-lead', label: 'Leadership', type: 'domain', demand: 60, description: 'Engineering management and technical direction.' },

  // ---- Roles ----
  { id: 'r-rtl', label: 'RTL Designer', type: 'role', roadmap: 'rtl-designer', demand: 92 },
  { id: 'r-pd', label: 'Physical Designer', type: 'role', roadmap: 'physical-designer', demand: 88 },
  { id: 'r-dv', label: 'Verification Engineer', type: 'role', roadmap: 'verification-engineer', demand: 96 },
  { id: 'r-sta', label: 'STA Engineer', type: 'role', roadmap: 'sta-engineer', demand: 82 },
  { id: 'r-analog', label: 'Analog Designer', type: 'role', roadmap: 'analog-designer', demand: 78 },
  { id: 'r-ms', label: 'Mixed-Signal Designer', type: 'role', roadmap: 'mixed-signal-designer', demand: 70 },
  { id: 'r-dft', label: 'DFT Engineer', type: 'role', roadmap: 'dft-engineer', demand: 72 },
  { id: 'r-mem', label: 'Memory Designer', type: 'role', roadmap: 'memory-designer', demand: 58 },
  { id: 'r-pmic', label: 'Power Mgmt Designer', type: 'role', roadmap: 'power-management-designer', demand: 60 },
  { id: 'r-rf', label: 'RF/Wireless Designer', type: 'role', roadmap: 'rf-wireless-designer', demand: 62 },
  { id: 'r-fv', label: 'Formal Verification Eng.', type: 'role', roadmap: 'formal-verification-engineer', demand: 64 },
  { id: 'r-eda', label: 'EDA/CAD Engineer', type: 'role', roadmap: 'eda-engineer', demand: 66 },
  { id: 'r-debug', label: 'Silicon Debug Eng.', type: 'role', roadmap: 'silicon-debug-engineer', demand: 55 },
  { id: 'r-yield', label: 'Yield Engineer', type: 'role', roadmap: 'yield-engineer', demand: 52 },
  { id: 'r-process', label: 'Process Tech Eng.', type: 'role', roadmap: 'process-technology-engineer', demand: 50 },
  { id: 'r-sec', label: 'Hardware Security Eng.', type: 'role', roadmap: 'hardware-security-engineer', demand: 58 },
  { id: 'r-mgr', label: 'Design Manager', type: 'role', roadmap: 'design-manager', demand: 48 },
  { id: 'r-dir', label: 'Design Director', type: 'role', roadmap: 'design-director', demand: 40 },
  { id: 'r-psv', label: 'Post-Silicon Validation', type: 'role', roadmap: 'post-silicon-validation', demand: 60 },
  { id: 'r-dfm', label: 'DFM Engineer', type: 'role', roadmap: 'dfm-engineer', demand: 50 },
  { id: 'r-tcad', label: 'TCAD Engineer', type: 'role', roadmap: 'tcad-engineer', demand: 42 },

  // ---- Skill areas (link to existing skill roadmaps where available) ----
  { id: 's-rtl', label: 'RTL Design', type: 'skill', roadmap: 'rtl-design', demand: 90 },
  { id: 's-dv', label: 'Design Verification', type: 'skill', roadmap: 'design-verification', demand: 94 },
  { id: 's-pd', label: 'Physical Design', type: 'skill', roadmap: 'physical-design', demand: 86 },
  { id: 's-sta', label: 'Static Timing Analysis', type: 'skill', roadmap: 'sta', demand: 80 },
  { id: 's-analog', label: 'Analog Design', type: 'skill', roadmap: 'analog-design', demand: 74 },
  { id: 's-dft', label: 'Design for Test', type: 'skill', roadmap: 'dft', demand: 70 },
  { id: 's-eda', label: 'EDA Toolflow', type: 'skill', roadmap: 'eda-toolflow', demand: 64 },
  { id: 's-arch', label: 'Computer Architecture', type: 'skill', demand: 78 },
  { id: 's-lowpower', label: 'Low-Power Design', type: 'skill', demand: 72 },
  { id: 's-si', label: 'Signal Integrity', type: 'skill', demand: 55 },
  { id: 's-dsp', label: 'DSP / Algorithms', type: 'skill', demand: 58 },
  { id: 's-scripting', label: 'Scripting (Tcl/Python)', type: 'skill', demand: 84 },

  // ---- Concepts ----
  { id: 'c-setuphold', label: 'Setup / Hold', type: 'concept', demand: 70 },
  { id: 'c-cdc', label: 'CDC', type: 'concept', demand: 76 },
  { id: 'c-ocv', label: 'OCV / AOCV', type: 'concept', demand: 55 },
  { id: 'c-crosstalk', label: 'Crosstalk', type: 'concept', demand: 50 },
  { id: 'c-uvm', label: 'UVM', type: 'concept', demand: 88 },
  { id: 'c-coverage', label: 'Coverage', type: 'concept', demand: 80 },
  { id: 'c-sva', label: 'Assertions (SVA)', type: 'concept', demand: 72 },
  { id: 'c-scan', label: 'Scan / ATPG', type: 'concept', demand: 66 },
  { id: 'c-floorplan', label: 'Floorplanning', type: 'concept', demand: 64 },
  { id: 'c-cts', label: 'Clock Tree Synth', type: 'concept', demand: 62 },
  { id: 'c-drclvs', label: 'DRC / LVS', type: 'concept', demand: 68 },
  { id: 'c-iem', label: 'IR Drop / EM', type: 'concept', demand: 58 },
  { id: 'c-pll', label: 'PLL / Clocking', type: 'concept', demand: 52 },
  { id: 'c-adc', label: 'ADC / DAC', type: 'concept', demand: 54 },
  { id: 'c-fsm', label: 'FSM Design', type: 'concept', demand: 60 },
  { id: 'c-pipeline', label: 'Pipelining', type: 'concept', demand: 64 },
  { id: 'c-formal', label: 'Formal Properties', type: 'concept', demand: 60 },
  { id: 'c-powerdomain', label: 'Power Domains (UPF)', type: 'concept', demand: 66 },

  // ---- Tools ----
  { id: 't-vcs', label: 'Synopsys VCS', type: 'tool', demand: 82 },
  { id: 't-xcelium', label: 'Cadence Xcelium', type: 'tool', demand: 70 },
  { id: 't-dc', label: 'Design Compiler', type: 'tool', demand: 76 },
  { id: 't-pt', label: 'PrimeTime', type: 'tool', demand: 78 },
  { id: 't-tempus', label: 'Tempus', type: 'tool', demand: 50 },
  { id: 't-innovus', label: 'Innovus', type: 'tool', demand: 72 },
  { id: 't-icc2', label: 'ICC2 / Fusion', type: 'tool', demand: 68 },
  { id: 't-calibre', label: 'Calibre', type: 'tool', demand: 74 },
  { id: 't-spectre', label: 'Spectre', type: 'tool', demand: 60 },
  { id: 't-virtuoso', label: 'Virtuoso', type: 'tool', demand: 62 },
  { id: 't-tessent', label: 'Tessent', type: 'tool', demand: 48 },
  { id: 't-jasper', label: 'JasperGold', type: 'tool', demand: 56 },
  { id: 't-verdi', label: 'Verdi', type: 'tool', demand: 64 },

  // ---- Career levels ----
  { id: 'l-intern', label: 'Intern / New Grad', type: 'level', demand: 100 },
  { id: 'l-junior', label: 'Junior Engineer', type: 'level', demand: 90 },
  { id: 'l-senior', label: 'Senior Engineer', type: 'level', demand: 85 },
  { id: 'l-staff', label: 'Staff / Principal', type: 'level', demand: 55 },
  { id: 'l-mgr', label: 'Manager', type: 'level', demand: 45 },
  { id: 'l-dir', label: 'Director / VP', type: 'level', demand: 30 },
];

// ---------------------------------------------------------------------------
// Edges
// ---------------------------------------------------------------------------

const e = (source: string, target: string, type: GraphEdgeType): GraphEdge => ({
  source,
  target,
  type,
});

export const edges: GraphEdge[] = [
  // Domains -> roles
  e('d-digital', 'r-rtl', 'specializes'),
  e('d-digital', 'r-mem', 'specializes'),
  e('d-physical', 'r-pd', 'specializes'),
  e('d-physical', 'r-sta', 'specializes'),
  e('d-physical', 'r-dfm', 'specializes'),
  e('d-verification', 'r-dv', 'specializes'),
  e('d-verification', 'r-fv', 'specializes'),
  e('d-verification', 'r-psv', 'specializes'),
  e('d-analog', 'r-analog', 'specializes'),
  e('d-analog', 'r-ms', 'specializes'),
  e('d-analog', 'r-pmic', 'specializes'),
  e('d-analog', 'r-rf', 'specializes'),
  e('d-test', 'r-dft', 'specializes'),
  e('d-test', 'r-debug', 'specializes'),
  e('d-eda', 'r-eda', 'specializes'),
  e('d-eda', 'r-tcad', 'specializes'),
  e('d-mfg', 'r-yield', 'specializes'),
  e('d-mfg', 'r-process', 'specializes'),
  e('d-digital', 'r-sec', 'specializes'),
  e('d-lead', 'r-mgr', 'specializes'),
  e('d-lead', 'r-dir', 'specializes'),

  // Roles -> required skills
  e('r-rtl', 's-rtl', 'requires'),
  e('r-rtl', 's-arch', 'requires'),
  e('r-rtl', 's-dv', 'requires'),
  e('r-rtl', 's-lowpower', 'requires'),
  e('r-dv', 's-dv', 'requires'),
  e('r-dv', 's-rtl', 'requires'),
  e('r-dv', 's-scripting', 'requires'),
  e('r-pd', 's-pd', 'requires'),
  e('r-pd', 's-sta', 'requires'),
  e('r-pd', 's-scripting', 'requires'),
  e('r-sta', 's-sta', 'requires'),
  e('r-sta', 's-pd', 'requires'),
  e('r-sta', 's-scripting', 'requires'),
  e('r-analog', 's-analog', 'requires'),
  e('r-ms', 's-analog', 'requires'),
  e('r-ms', 's-dv', 'requires'),
  e('r-pmic', 's-analog', 'requires'),
  e('r-rf', 's-analog', 'requires'),
  e('r-rf', 's-si', 'requires'),
  e('r-dft', 's-dft', 'requires'),
  e('r-dft', 's-rtl', 'requires'),
  e('r-mem', 's-analog', 'requires'),
  e('r-mem', 's-pd', 'requires'),
  e('r-fv', 's-dv', 'requires'),
  e('r-fv', 's-rtl', 'requires'),
  e('r-eda', 's-eda', 'requires'),
  e('r-eda', 's-scripting', 'requires'),
  e('r-debug', 's-dv', 'requires'),
  e('r-debug', 's-dft', 'requires'),
  e('r-psv', 's-dv', 'requires'),
  e('r-yield', 's-dft', 'requires'),
  e('r-dfm', 's-pd', 'requires'),
  e('r-tcad', 's-analog', 'requires'),
  e('r-sec', 's-rtl', 'requires'),
  e('r-sec', 's-dv', 'requires'),

  // Skill prerequisites
  e('s-arch', 's-rtl', 'prerequisite'),
  e('s-rtl', 's-dv', 'prerequisite'),
  e('s-rtl', 's-pd', 'prerequisite'),
  e('s-pd', 's-sta', 'prerequisite'),
  e('s-rtl', 's-dft', 'prerequisite'),
  e('s-analog', 's-si', 'prerequisite'),
  e('s-scripting', 's-eda', 'prerequisite'),

  // Skills -> concepts
  e('s-sta', 'c-setuphold', 'includes'),
  e('s-sta', 'c-ocv', 'includes'),
  e('s-sta', 'c-crosstalk', 'includes'),
  e('s-rtl', 'c-fsm', 'includes'),
  e('s-rtl', 'c-pipeline', 'includes'),
  e('s-rtl', 'c-cdc', 'includes'),
  e('s-dv', 'c-uvm', 'includes'),
  e('s-dv', 'c-coverage', 'includes'),
  e('s-dv', 'c-sva', 'includes'),
  e('s-dv', 'c-formal', 'includes'),
  e('s-pd', 'c-floorplan', 'includes'),
  e('s-pd', 'c-cts', 'includes'),
  e('s-pd', 'c-drclvs', 'includes'),
  e('s-pd', 'c-iem', 'includes'),
  e('s-dft', 'c-scan', 'includes'),
  e('s-analog', 'c-pll', 'includes'),
  e('s-analog', 'c-adc', 'includes'),
  e('s-lowpower', 'c-powerdomain', 'includes'),

  // Skills/roles -> tools
  e('s-dv', 't-vcs', 'uses'),
  e('s-dv', 't-xcelium', 'uses'),
  e('s-dv', 't-verdi', 'uses'),
  e('s-rtl', 't-dc', 'uses'),
  e('s-sta', 't-pt', 'uses'),
  e('s-sta', 't-tempus', 'uses'),
  e('s-pd', 't-innovus', 'uses'),
  e('s-pd', 't-icc2', 'uses'),
  e('s-pd', 't-calibre', 'uses'),
  e('s-analog', 't-spectre', 'uses'),
  e('s-analog', 't-virtuoso', 'uses'),
  e('s-dft', 't-tessent', 'uses'),
  e('s-dv', 't-jasper', 'uses'),

  // Concept cross-links (related)
  e('c-cdc', 'c-formal', 'related'),
  e('c-setuphold', 'c-cts', 'related'),
  e('c-uvm', 'c-coverage', 'related'),
  e('c-iem', 'c-crosstalk', 'related'),
  e('c-pll', 'c-setuphold', 'related'),

  // Career ladder (levels)
  e('l-intern', 'l-junior', 'progresses_to'),
  e('l-junior', 'l-senior', 'progresses_to'),
  e('l-senior', 'l-staff', 'progresses_to'),
  e('l-senior', 'l-mgr', 'progresses_to'),
  e('l-mgr', 'l-dir', 'progresses_to'),
  e('l-staff', 'l-dir', 'progresses_to'),

  // Role progression / lateral transitions
  e('r-rtl', 'r-dv', 'related'),
  e('r-rtl', 'r-sta', 'related'),
  e('r-pd', 'r-sta', 'related'),
  e('r-dv', 'r-fv', 'progresses_to'),
  e('r-dv', 'r-psv', 'related'),
  e('r-analog', 'r-ms', 'progresses_to'),
  e('r-analog', 'r-pmic', 'related'),
  e('r-analog', 'r-rf', 'related'),
  e('r-dft', 'r-debug', 'related'),
  e('r-rtl', 'r-mgr', 'progresses_to'),
  e('r-pd', 'r-mgr', 'progresses_to'),
  e('r-dv', 'r-mgr', 'progresses_to'),
  e('r-mgr', 'r-dir', 'progresses_to'),
  e('r-yield', 'r-process', 'related'),
  e('r-process', 'r-tcad', 'related'),
  e('r-pd', 'r-dfm', 'related'),
];
