import { wireframeJSONToSVG } from 'roadmap-renderer';

let modalEl: HTMLDivElement | null = null;

function getModal(): HTMLDivElement {
  if (modalEl) return modalEl;

  const overlay = document.createElement('div');
  overlay.className =
    'fixed inset-0 z-50 hidden items-center justify-center bg-black/50 p-4';
  overlay.innerHTML = `
    <div class="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl">
      <button type="button" data-close-topic class="absolute right-3 top-3 text-2xl leading-none text-gray-400 hover:text-gray-700">&times;</button>
      <div data-topic-content class="prose prose-sm sm:prose-base max-w-none"></div>
    </div>
  `;

  overlay.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target === overlay || target.closest('[data-close-topic]')) {
      overlay.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlay.classList.add('hidden');
    }
  });

  document.body.appendChild(overlay);
  modalEl = overlay;
  return overlay;
}

async function openTopic(resourceId: string, groupId: string) {
  const modal = getModal();
  const content = modal.querySelector('[data-topic-content]') as HTMLElement;
  content.innerHTML = '<p>Loading…</p>';
  modal.classList.remove('hidden');

  try {
    const res = await fetch(`/${resourceId}/${groupId}`);
    content.innerHTML = await res.text();
  } catch {
    content.innerHTML = '<p>Failed to load content.</p>';
  }
}

export async function renderRoadmap() {
  const container = document.getElementById('resource-svg-wrap');
  if (!container) return;

  const resourceId = container.dataset.resourceId;
  if (!resourceId) return;

  const jsonUrl = `/${resourceId}.json`;

  try {
    const res = await fetch(jsonUrl);
    const json = await res.json();
    const svg = await wireframeJSONToSVG(json, {
      fontURL: '/fonts/balsamiq.woff2',
    });
    container.innerHTML = '';
    container.appendChild(svg);

    svg.querySelectorAll<SVGGElement>('.clickable-group').forEach((group) => {
      const groupId = group.dataset.groupId;
      if (!groupId) return;

      group.style.cursor = 'pointer';
      group.addEventListener('click', () => openTopic(resourceId, groupId));
    });
  } catch (error: any) {
    container.innerHTML = `<div class="error py-5 text-center text-red-600 mx-auto">
      <strong>Error loading roadmap.</strong><br>
      ${error?.message || 'Unknown error'}
    </div>`;
  }
}
