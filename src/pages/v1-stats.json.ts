export const prerender = true;

export async function GET() {
  return new Response(
    JSON.stringify({
      current: {
        hash: 'vlsikorea',
        date: new Date().toISOString(),
        message: 'VLSI Korea Roadmap',
      },
      previous: {
        hash: 'init',
        date: new Date().toISOString(),
        message: 'Initial',
      },
    }),
    {},
  );
}
