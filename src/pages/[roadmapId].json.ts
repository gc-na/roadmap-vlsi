import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { officialRoadmapDetails } from '../queries/official-roadmap';

export const prerender = false;

export const GET: APIRoute = async function ({ params }) {
  const { roadmapId } = params;

  if (!roadmapId) {
    return new Response('Roadmap ID is required', { status: 400 });
  }

  // Try to read the actual React Flow JSON from disk
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const projectRoot = path.resolve(__dirname, '../..');
  const jsonPath = path.join(projectRoot, 'src', 'data', 'roadmaps', roadmapId!, `${roadmapId}.json`);

  try {
    const rawJson = fs.readFileSync(jsonPath, 'utf-8');
    return new Response(rawJson, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    // Fallback to metadata
    const roadmapJson = await officialRoadmapDetails(roadmapId!);
    if (!roadmapJson) {
      return new Response('Roadmap not found', { status: 404 });
    }
    return new Response(JSON.stringify(roadmapJson), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
