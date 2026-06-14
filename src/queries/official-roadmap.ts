// VLSI Korea — static roadmap details
import { queryOptions } from '@tanstack/react-query';
import { FetchError, httpGet } from '../lib/query-http';
import { DateTime } from 'luxon';

export const allowedOfficialRoadmapType = ['skill', 'role', 'best-practice'] as const;
export type AllowedOfficialRoadmapType = (typeof allowedOfficialRoadmapType)[number];

export const allowedOfficialRoadmapQuestionType = ['faq', 'main'] as const;
export type AllowedOfficialRoadmapQuestionType = (typeof allowedOfficialRoadmapQuestionType)[number];

export type OfficialRoadmapQuestion = {
  _id: string;
  type: AllowedOfficialRoadmapQuestionType;
  title: string;
  description: any;
};

export type OfficialRoadmapCourse = {
  _id: string;
  title: string;
  description: string;
  link: string;
  instructor: { name: string; image: string; title: string };
  features: string[];
};

export interface OfficialRoadmapDocument {
  _id?: string;
  order: number;
  title: { card: string; page: string };
  description: string;
  slug: string;
  nodes: any[];
  edges: any[];
  draft: { nodes: any[]; edges: any[] };
  seo: { title: string; description: string; keywords: string[] };
  openGraph?: { image?: string };
  partner?: { description: string; linkText: string; link: string };
  type: AllowedOfficialRoadmapType;
  dimensions?: { height: number; width: number };
  questions?: OfficialRoadmapQuestion[];
  relatedRoadmaps?: string[];
  courses?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type OfficialRoadmapWithCourses = Omit<OfficialRoadmapDocument, 'courses'> & {
  courses: OfficialRoadmapCourse[];
};

// VLSI Korea static roadmap data
const VLSI_ROADMAPS: Record<string, OfficialRoadmapDocument> = {
  sta: {
    slug: 'sta',
    order: 1,
    title: { card: 'STA', page: 'Static Timing Analysis (STA)' },
    description: 'Master timing closure for digital IC design: from setup/hold fundamentals to advanced OCV, crosstalk, and signoff.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'STA Roadmap — VLSI Korea', description: 'Static Timing Analysis career roadmap.', keywords: ['sta', 'static timing analysis', 'vlsi'] },
    type: 'skill',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-06-01'),
    questions: [],
    relatedRoadmaps: ['physical-design', 'rtl-design'],
  },
  'physical-design': {
    slug: 'physical-design',
    order: 2,
    title: { card: 'Physical Design', page: 'Physical Design (PD)' },
    description: 'From RTL to GDSII: floorplanning, placement, CTS, routing, and physical verification.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Physical Design Roadmap — VLSI Korea', description: 'Physical Design career roadmap.', keywords: ['physical design', 'pd', 'vlsi'] },
    type: 'skill',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-06-01'),
    questions: [],
    relatedRoadmaps: ['sta', 'rtl-design'],
  },
  'rtl-design': {
    slug: 'rtl-design',
    order: 3,
    title: { card: 'RTL Design', page: 'RTL Design' },
    description: 'Design digital circuits with Verilog, SystemVerilog: synthesis-ready code, FSM, pipelining, and CDC.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'RTL Design Roadmap — VLSI Korea', description: 'RTL Design career roadmap.', keywords: ['rtl', 'verilog', 'systemverilog', 'vlsi'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-06-01'),
    questions: [],
    relatedRoadmaps: ['design-verification', 'sta'],
  },
  'design-verification': {
    slug: 'design-verification',
    order: 4,
    title: { card: 'DV', page: 'Design Verification (DV)' },
    description: 'Verify chip functionality: UVM testbenches, coverage-driven verification, formal methods, and debugging.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Design Verification Roadmap — VLSI Korea', description: 'Design Verification career roadmap.', keywords: ['verification', 'uvm', 'vlsi'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-06-01'),
    questions: [],
    relatedRoadmaps: ['rtl-design', 'dft'],
  },
  'analog-design': {
    slug: 'analog-design',
    order: 5,
    title: { card: 'Analog', page: 'Analog / Mixed-Signal Design' },
    description: 'Design op-amps, bandgaps, PLLs, data converters. From small-signal analysis to layout parasitics.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Analog Design Roadmap — VLSI Korea', description: 'Analog/Mixed-Signal career roadmap.', keywords: ['analog', 'mixed-signal', 'vlsi'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-06-01'),
    questions: [],
    relatedRoadmaps: ['physical-design', 'sta'],
  },
  dft: {
    slug: 'dft',
    order: 6,
    title: { card: 'DFT', page: 'Design for Test (DFT)' },
    description: 'Ensure manufacturability: scan chains, ATPG, BIST, JTAG, and test compression for modern SoCs.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'DFT Roadmap — VLSI Korea', description: 'Design for Test career roadmap.', keywords: ['dft', 'scan', 'bist', 'vlsi'] },
    type: 'skill',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-06-01'),
    questions: [],
    relatedRoadmaps: ['design-verification', 'physical-design'],
  },
  'eda-toolflow': {
    slug: 'eda-toolflow',
    order: 7,
    title: { card: 'EDA Toolflow', page: 'EDA Toolflow Engineering' },
    description: 'Build and optimize the chip design flow: CAD infrastructure, methodology, regression, and release management.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'EDA Toolflow Roadmap — VLSI Korea', description: 'EDA Toolflow career roadmap.', keywords: ['eda', 'cad', 'toolflow', 'vlsi'] },
    type: 'skill',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-06-01'),
    questions: [],
    relatedRoadmaps: ['sta', 'physical-design'],
  },
  // Job Role Roadmaps
  'rtl-designer': {
    slug: 'rtl-designer',
    order: 8,
    title: { card: 'RTL Designer', page: 'RTL Designer' },
    description: 'Design digital circuits with Verilog/SystemVerilog: synthesizable RTL, testbenches, functional verification.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'RTL Designer Roadmap — VLSI Korea', description: 'RTL Designer career roadmap.', keywords: ['rtl', 'designer', 'verilog', 'systemverilog'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: ['rtl-design', 'design-verification'],
  },
  'physical-designer': {
    slug: 'physical-designer',
    order: 9,
    title: { card: 'Physical Designer', page: 'Physical Design Engineer' },
    description: 'From RTL to GDSII: floorplanning, placement, CTS, routing, sign-off.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Physical Designer Roadmap — VLSI Korea', description: 'Physical Design Engineer career roadmap.', keywords: ['physical design', 'layout', 'pd', 'gdsii'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: ['physical-design', 'sta'],
  },
  'verification-engineer': {
    slug: 'verification-engineer',
    order: 10,
    title: { card: 'Verification Engineer', page: 'Verification Engineer' },
    description: 'Verify chip functionality: UVM testbenches, coverage-driven verification, formal methods.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Verification Engineer Roadmap — VLSI Korea', description: 'Verification Engineer career roadmap.', keywords: ['dv', 'verification', 'uvm', 'testbench'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: ['design-verification', 'rtl-design'],
  },
  'sta-engineer': {
    slug: 'sta-engineer',
    order: 11,
    title: { card: 'STA Engineer', page: 'STA Engineer' },
    description: 'Master timing closure: setup/hold, OCV, crosstalk, signoff.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'STA Engineer Roadmap — VLSI Korea', description: 'STA Engineer career roadmap.', keywords: ['sta', 'timing', 'closure', 'signoff'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: ['sta', 'physical-design'],
  },
  'analog-designer': {
    slug: 'analog-designer',
    order: 12,
    title: { card: 'Analog Designer', page: 'Analog IC Designer' },
    description: 'Design op-amps, bandgaps, PLLs, data converters; from circuit design to layout.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Analog Designer Roadmap — VLSI Korea', description: 'Analog IC Designer career roadmap.', keywords: ['analog', 'circuit', 'ic', 'design'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: ['analog-design'],
  },
  'mixed-signal-designer': {
    slug: 'mixed-signal-designer',
    order: 13,
    title: { card: 'Mixed-Signal Engineer', page: 'Mixed-Signal Designer' },
    description: 'Design analog + digital subsystems: interfaces, integration, system-level verification.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Mixed-Signal Designer Roadmap — VLSI Korea', description: 'Mixed-Signal Designer career roadmap.', keywords: ['mixed-signal', 'analog', 'digital', 'integration'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: ['analog-design', 'design-verification'],
  },
  'dft-engineer': {
    slug: 'dft-engineer',
    order: 14,
    title: { card: 'DFT Engineer', page: 'DFT Engineer' },
    description: 'Ensure manufacturability: scan chains, ATPG, BIST, JTAG, compression.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'DFT Engineer Roadmap — VLSI Korea', description: 'DFT Engineer career roadmap.', keywords: ['dft', 'test', 'scan', 'atpg'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: ['dft', 'design-verification'],
  },
  'memory-designer': {
    slug: 'memory-designer',
    order: 15,
    title: { card: 'Memory Designer', page: 'Memory Designer' },
    description: 'Design DRAM, SRAM, Flash, NVM: bit cells, arrays, periphery, characterization.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Memory Designer Roadmap — VLSI Korea', description: 'Memory Designer career roadmap.', keywords: ['memory', 'dram', 'sram', 'flash'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: ['analog-design'],
  },
  'power-management-designer': {
    slug: 'power-management-designer',
    order: 16,
    title: { card: 'Power Mgmt Engineer', page: 'Power Management IC Designer' },
    description: 'Design voltage regulators, buck/boost converters, PMICs, power delivery.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Power Management Designer Roadmap — VLSI Korea', description: 'Power Management IC Designer career roadmap.', keywords: ['power', 'pmic', 'regulator', 'converter'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: ['analog-design'],
  },
  'rf-wireless-designer': {
    slug: 'rf-wireless-designer',
    order: 17,
    title: { card: 'RF/Wireless Engineer', page: 'RF/Wireless IC Designer' },
    description: 'Design RF front-ends, LNAs, mixers, VCOs, power amps; 5G/WiFi/mmWave.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'RF/Wireless Designer Roadmap — VLSI Korea', description: 'RF/Wireless IC Designer career roadmap.', keywords: ['rf', 'wireless', 'lna', '5g'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: ['analog-design'],
  },
  'formal-verification-engineer': {
    slug: 'formal-verification-engineer',
    order: 18,
    title: { card: 'Formal Verification Eng.', page: 'Formal Verification Engineer' },
    description: 'Prove chip correctness: model checking, equivalence checking, property verification.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Formal Verification Engineer Roadmap — VLSI Korea', description: 'Formal Verification Engineer career roadmap.', keywords: ['formal', 'verification', 'model checking', 'smt'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: ['design-verification'],
  },
  'eda-engineer': {
    slug: 'eda-engineer',
    order: 19,
    title: { card: 'EDA Engineer', page: 'EDA/CAD Engineer' },
    description: 'Build design flows: infrastructure, methodology, automation, tool integration.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'EDA Engineer Roadmap — VLSI Korea', description: 'EDA/CAD Engineer career roadmap.', keywords: ['eda', 'cad', 'flow', 'infrastructure'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: ['eda-toolflow'],
  },
  'silicon-debug-engineer': {
    slug: 'silicon-debug-engineer',
    order: 20,
    title: { card: 'Silicon Debug Eng.', page: 'Silicon Debug Engineer' },
    description: 'Debug and characterize silicon: probe, emulation, failure analysis, root cause.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Silicon Debug Engineer Roadmap — VLSI Korea', description: 'Silicon Debug Engineer career roadmap.', keywords: ['debug', 'silicon', 'emulation', 'analysis'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: ['design-verification'],
  },
  'yield-engineer': {
    slug: 'yield-engineer',
    order: 21,
    title: { card: 'Yield Engineer', page: 'Yield Engineer' },
    description: 'Maximize manufacturing yield: defect analysis, process monitor, yield ramp.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Yield Engineer Roadmap — VLSI Korea', description: 'Yield Engineer career roadmap.', keywords: ['yield', 'manufacturing', 'defect', 'analysis'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: [],
  },
  'process-technology-engineer': {
    slug: 'process-technology-engineer',
    order: 22,
    title: { card: 'Process Tech Eng.', page: 'Process Technology Engineer' },
    description: 'Develop semiconductor process: PDK, cell design, characterization, yield.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Process Technology Engineer Roadmap — VLSI Korea', description: 'Process Technology Engineer career roadmap.', keywords: ['process', 'pdk', 'technology', 'characterization'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: [],
  },
  'hardware-security-engineer': {
    slug: 'hardware-security-engineer',
    order: 23,
    title: { card: 'Hardware Security', page: 'Hardware Security Engineer' },
    description: 'Secure chip design: threat models, cryptography, side-channel, secure boot.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Hardware Security Engineer Roadmap — VLSI Korea', description: 'Hardware Security Engineer career roadmap.', keywords: ['security', 'hardware', 'cryptography', 'threat'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: [],
  },
  'design-manager': {
    slug: 'design-manager',
    order: 24,
    title: { card: 'Design Manager', page: 'Design Manager' },
    description: 'Lead design teams: project management, resource allocation, delivery.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Design Manager Roadmap — VLSI Korea', description: 'Design Manager career roadmap.', keywords: ['manager', 'leadership', 'team', 'project'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: [],
  },
  'design-director': {
    slug: 'design-director',
    order: 25,
    title: { card: 'Design Director', page: 'Design Director' },
    description: 'Drive design strategy: organization, technology roadmap, product vision.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Design Director Roadmap — VLSI Korea', description: 'Design Director career roadmap.', keywords: ['director', 'strategy', 'leadership', 'vision'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: [],
  },
  'post-silicon-validation': {
    slug: 'post-silicon-validation',
    order: 26,
    title: { card: 'Post-Silicon Valid.', page: 'Post-Silicon Validation Engineer' },
    description: 'Validate silicon: characterization, emulation, FPGA bring-up, test development.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'Post-Silicon Validation Engineer Roadmap — VLSI Korea', description: 'Post-Silicon Validation Engineer career roadmap.', keywords: ['validation', 'silicon', 'emulation', 'bring-up'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: ['design-verification'],
  },
  'dfm-engineer': {
    slug: 'dfm-engineer',
    order: 27,
    title: { card: 'DFM Engineer', page: 'Design for Manufacturing Engineer' },
    description: 'Optimize for manufacturability: lithography, process window, cost.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'DFM Engineer Roadmap — VLSI Korea', description: 'Design for Manufacturing Engineer career roadmap.', keywords: ['dfm', 'manufacturing', 'yield', 'lithography'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: ['physical-design'],
  },
  'tcad-engineer': {
    slug: 'tcad-engineer',
    order: 28,
    title: { card: 'TCAD Engineer', page: 'Technology CAD Engineer' },
    description: 'Model process physics: SPICE models, device simulation, process modeling.',
    nodes: [], edges: [],
    draft: { nodes: [], edges: [] },
    seo: { title: 'TCAD Engineer Roadmap — VLSI Korea', description: 'Technology CAD Engineer career roadmap.', keywords: ['tcad', 'spice', 'modeling', 'simulation'] },
    type: 'role',
    dimensions: { width: 1300, height: 800 },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-06-14'),
    questions: [],
    relatedRoadmaps: [],
  },
};

export function officialRoadmapOptions(slug: string) {
  return queryOptions({
    queryKey: ['official-roadmap', slug],
    queryFn: () => {
      const roadmap = VLSI_ROADMAPS[slug];
      if (roadmap) return Promise.resolve(roadmap);
      return httpGet<OfficialRoadmapWithCourses>(`/v1-official-roadmap/${slug}`);
    },
  });
}

export async function officialRoadmapDetails(roadmapSlug: string) {
  const roadmap = VLSI_ROADMAPS[roadmapSlug];
  if (roadmap) return roadmap;
  try {
    return await httpGet<OfficialRoadmapWithCourses>(`/v1-official-roadmap/${roadmapSlug}`);
  } catch (error) {
    if (FetchError.isFetchError(error) && error.status === 404) return null;
    throw error;
  }
}

export async function listOfficialRoadmaps() {
  return Object.values(VLSI_ROADMAPS);
}

export async function listOfficialBeginnerRoadmaps() {
  return [];
}

export function isNewRoadmap(createdAt: Date) {
  return (
    createdAt &&
    DateTime.now().diff(DateTime.fromJSDate(new Date(createdAt)), 'days').days < 45
  );
}
