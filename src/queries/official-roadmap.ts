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
