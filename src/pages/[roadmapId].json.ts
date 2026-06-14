import type { APIRoute } from 'astro';
import { officialRoadmapDetails } from '../queries/official-roadmap';

export const prerender = false;

// Bundle the Balsamiq roadmap JSON at build time so it ships inside the
// serverless function. Reading from disk at runtime (fs.readFileSync) fails on
// Vercel because the src/data files are not traced into the function bundle.
const roadmapJsonFiles = import.meta.glob('/src/data/roadmaps/*/*.json', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export const GET: APIRoute = async function ({ params }) {
  const { roadmapId } = params;

  if (!roadmapId) {
    return new Response('Roadmap ID is required', { status: 400 });
  }

  const rawJson =
    roadmapJsonFiles[`/src/data/roadmaps/${roadmapId}/${roadmapId}.json`];

  if (rawJson) {
    return new Response(rawJson, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Fallback to metadata if the Balsamiq JSON is missing
  const roadmapJson = await officialRoadmapDetails(roadmapId);
  if (!roadmapJson) {
    return new Response('Roadmap not found', { status: 404 });
  }
  return new Response(JSON.stringify(roadmapJson), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
