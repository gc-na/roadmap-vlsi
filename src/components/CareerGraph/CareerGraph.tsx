import { useEffect, useRef, useState } from 'react';
import cytoscape, {
  type Core,
  type ElementDefinition,
  type NodeSingular,
} from 'cytoscape';
import {
  nodes as graphNodes,
  edges as graphEdges,
  NODE_TYPE_META,
  EDGE_TYPE_META,
  type GraphNode,
  type GraphNodeType,
} from '../../data/career-graph';

const ALL_TYPES = Object.keys(NODE_TYPE_META) as GraphNodeType[];

function buildElements(active: Set<GraphNodeType>): ElementDefinition[] {
  const visibleNodeIds = new Set(
    graphNodes.filter((n) => active.has(n.type)).map((n) => n.id),
  );

  const nodeEls: ElementDefinition[] = graphNodes
    .filter((n) => visibleNodeIds.has(n.id))
    .map((n) => ({
      data: {
        id: n.id,
        label: n.label,
        type: n.type,
        roadmap: n.roadmap ?? '',
        demand: n.demand ?? 40,
        color: NODE_TYPE_META[n.type].color,
        size: 26 + (n.demand ?? 40) * 0.42,
      },
    }));

  const edgeEls: ElementDefinition[] = graphEdges
    .filter((ed) => visibleNodeIds.has(ed.source) && visibleNodeIds.has(ed.target))
    .map((ed) => ({
      data: {
        id: `${ed.source}->${ed.target}:${ed.type}`,
        source: ed.source,
        target: ed.target,
        type: ed.type,
        color: EDGE_TYPE_META[ed.type].color,
        lineStyle: EDGE_TYPE_META[ed.type].style,
      },
    }));

  return [...nodeEls, ...edgeEls];
}

export function CareerGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<Core | null>(null);
  const [active, setActive] = useState<Set<GraphNodeType>>(new Set(ALL_TYPES));
  const [selected, setSelected] = useState<GraphNode | null>(null);

  // (Re)build graph when the active type filter changes.
  useEffect(() => {
    if (!containerRef.current) return;

    const cy = cytoscape({
      container: containerRef.current,
      elements: buildElements(active),
      style: [
        {
          selector: 'node',
          style: {
            'background-color': 'data(color)',
            label: 'data(label)',
            width: 'data(size)',
            height: 'data(size)',
            'font-size': 11,
            'font-weight': 600,
            color: '#0f172a',
            'text-valign': 'bottom',
            'text-halign': 'center',
            'text-margin-y': 4,
            'text-wrap': 'wrap',
            'text-max-width': '110px',
            'border-width': 2,
            'border-color': '#ffffff',
            'overlay-opacity': 0,
          },
        },
        {
          selector: 'edge',
          style: {
            width: 1.6,
            'line-color': 'data(color)',
            'line-style': 'data(lineStyle)' as any,
            'curve-style': 'bezier',
            'target-arrow-color': 'data(color)',
            'target-arrow-shape': 'triangle',
            'arrow-scale': 0.8,
            opacity: 0.55,
          },
        },
        {
          selector: '.faded',
          style: { opacity: 0.08, 'text-opacity': 0.08 },
        },
        {
          selector: '.highlighted',
          style: { 'border-color': '#0f172a', 'border-width': 4, opacity: 1 },
        },
        {
          selector: 'edge.highlighted',
          style: { width: 3, opacity: 1, 'border-width': 0 },
        },
      ],
      layout: {
        name: 'cose',
        animate: false,
        nodeRepulsion: () => 12000,
        idealEdgeLength: () => 110,
        padding: 30,
        randomize: false,
        componentSpacing: 120,
      } as any,
      minZoom: 0.2,
      maxZoom: 2.5,
      wheelSensitivity: 0.25,
    });

    cyRef.current = cy;

    const clearHighlight = () => {
      cy.elements().removeClass('faded highlighted');
    };

    cy.on('tap', 'node', (evt) => {
      const node = evt.target as NodeSingular;
      const neighborhood = node.closedNeighborhood();
      cy.elements().addClass('faded');
      neighborhood.removeClass('faded').addClass('highlighted');

      const found = graphNodes.find((n) => n.id === node.id());
      setSelected(found ?? null);
    });

    cy.on('tap', (evt) => {
      if (evt.target === cy) {
        clearHighlight();
        setSelected(null);
      }
    });

    return () => {
      cy.destroy();
      cyRef.current = null;
    };
  }, [active]);

  const toggleType = (t: GraphNodeType) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(t)) {
        if (next.size > 1) next.delete(t);
      } else {
        next.add(t);
      }
      return next;
    });
  };

  const resetView = () => {
    cyRef.current?.fit(undefined, 40);
    cyRef.current?.elements().removeClass('faded highlighted');
    setSelected(null);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Filter / legend bar */}
      <div className="flex flex-wrap items-center gap-2">
        {ALL_TYPES.map((t) => {
          const on = active.has(t);
          const meta = NODE_TYPE_META[t];
          return (
            <button
              key={t}
              type="button"
              onClick={() => toggleType(t)}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                on
                  ? 'border-slate-300 bg-white text-slate-800'
                  : 'border-slate-200 bg-slate-100 text-slate-400'
              }`}
            >
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: meta.color, opacity: on ? 1 : 0.3 }}
              />
              {meta.label}
            </button>
          );
        })}
        <button
          type="button"
          onClick={resetView}
          className="ml-auto rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50"
        >
          Reset view
        </button>
      </div>

      <div className="relative">
        <div
          ref={containerRef}
          className="h-[640px] w-full rounded-xl border border-slate-200 bg-slate-50"
        />

        {/* Info panel */}
        {selected && (
          <div className="absolute right-3 top-3 w-72 rounded-lg border border-slate-200 bg-white p-4 shadow-lg">
            <div className="mb-1 flex items-center gap-2">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: NODE_TYPE_META[selected.type].color }}
              />
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {NODE_TYPE_META[selected.type].label}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">{selected.label}</h3>
            {selected.description && (
              <p className="mt-1 text-sm text-slate-600">{selected.description}</p>
            )}
            {typeof selected.demand === 'number' && (
              <div className="mt-3">
                <div className="mb-1 flex justify-between text-xs text-slate-500">
                  <span>JD demand</span>
                  <span>{selected.demand}/100</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-100">
                  <div
                    className="h-1.5 rounded-full bg-blue-500"
                    style={{ width: `${selected.demand}%` }}
                  />
                </div>
              </div>
            )}
            {selected.roadmap && (
              <a
                href={`/${selected.roadmap}`}
                className="mt-3 inline-block rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-500"
              >
                Open roadmap →
              </a>
            )}
          </div>
        )}

        <p className="absolute bottom-3 left-3 rounded bg-white/80 px-2 py-1 text-xs text-slate-500">
          Click a node to explore its connections · scroll to zoom · drag to pan
        </p>
      </div>
    </div>
  );
}
