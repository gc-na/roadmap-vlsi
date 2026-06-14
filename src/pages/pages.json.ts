// VLSI Korea Roadmap — pages.json
import { getAllBestPractices } from '../lib/best-practice';
import { getAllVideos } from '../lib/video';
import { getAllQuestionGroups } from '../lib/question-group';

export async function GET() {
  const videos = await getAllVideos();
  const questionGroups = await getAllQuestionGroups();
  const bestPractices = await getAllBestPractices();

  // VLSI Korea Roadmaps
  const vlsiRoadmaps = [
    { id: 'sta', title: 'Static Timing Analysis (STA)', description: 'Timing closure from fundamentals to signoff.', group: 'Roadmaps' },
    { id: 'physical-design', title: 'Physical Design (PD)', description: 'RTL to GDSII: floorplan, place, CTS, route.', group: 'Roadmaps' },
    { id: 'rtl-design', title: 'RTL Design', description: 'Verilog, SystemVerilog, synthesis-ready digital design.', group: 'Roadmaps' },
    { id: 'design-verification', title: 'Design Verification (DV)', description: 'UVM, coverage-driven, formal verification.', group: 'Roadmaps' },
    { id: 'analog-design', title: 'Analog / Mixed-Signal Design', description: 'Op-amps, PLLs, data converters, parasitics.', group: 'Roadmaps' },
    { id: 'dft', title: 'Design for Test (DFT)', description: 'Scan, ATPG, BIST, JTAG for manufacturability.', group: 'Roadmaps' },
    { id: 'eda-toolflow', title: 'EDA Toolflow Engineering', description: 'CAD infra, methodology, regression, release.', group: 'Roadmaps' },
  ];

  const roadmapPages = vlsiRoadmaps.map((r) => ({
    id: r.id,
    url: `/${r.id}`,
    title: r.title,
    shortTitle: r.title,
    description: r.description,
    group: r.group,
    metadata: { tags: ['vlsi-roadmap'] },
    renderer: 'balsamiq',
  }));

  return new Response(
    JSON.stringify([
      ...roadmapPages,
      ...bestPractices.map((bestPractice) => ({
        id: bestPractice.id,
        url: `/best-practices/${bestPractice.id}`,
        title: bestPractice.frontmatter.briefTitle,
        shortTitle: bestPractice.frontmatter.briefTitle,
        description: bestPractice.frontmatter.briefDescription,
        group: 'Best Practices',
      })),
      ...questionGroups.map((questionGroup) => ({
        id: questionGroup.id,
        url: `/questions/${questionGroup.id}`,
        title: questionGroup.frontmatter.briefTitle,
        shortTitle: questionGroup.frontmatter.briefTitle,
        group: 'Questions',
      })),
      ...videos.map((video) => ({
        id: video.id,
        url: `/videos/${video.id}`,
        title: video.frontmatter.title,
        shortTitle: video.frontmatter.title,
        group: 'Videos',
      })),
    ]),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    },
  );
}
