export const siteConfig = {
  title: 'VLSI Korea Roadmaps — Semiconductor Career Paths',
  description:
    'Semiconductor design career roadmaps for students and engineers. STA, Physical Design, RTL, Verification, Analog, DFT, EDA.',
  url: {
    twitter: 'https://twitter.com/vlsikorea',
    youtube: 'https://youtube.com/@VLSIKorea',
    repo: 'https://github.com/nilbuild/developer-roadmap',
    contribute: '#',
    issue: 'https://github.com/nilbuild/developer-roadmap/issues/new',
  },
  keywords: [
    'semiconductor career',
    'vlsi roadmap',
    'sta roadmap',
    'physical design roadmap',
    'rtl design roadmap',
    'design verification roadmap',
    'analog design roadmap',
    'dft roadmap',
    'eda toolflow',
    'vlsi korea',
    'semiconductor engineer',
    ...[
      'static timing analysis',
      'physical design',
      'rtl design',
      'verification',
      'analog design',
      'dft',
      'eda',
    ].flatMap((k) => [
      `${k} roadmap`,
      `${k} career`,
      `${k} skills`,
    ]),
  ],
};
