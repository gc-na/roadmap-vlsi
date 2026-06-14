"""Wrap leaf TextInput nodes in Balsamiq roadmap JSON files with __group__ controls.

Each VLSI roadmap (src/data/roadmaps/{roadmap}/{roadmap}.json) is a Balsamiq
mockup made of TextInput controls: bold ones are category headers, plain ones
are leaf topics. The renderer only makes `__group__` controls clickable, so
every leaf TextInput must be wrapped in one with a `controlName` of the form
`{slug}@{slug}` -- that id is what `src/pages/[roadmapId]/[...topicId].astro`
uses to find `content/{slug}@{slug}.md`.

Usage:
    python3 scripts/wrap-roadmap-groups.py [roadmap-id ...]

With no arguments, processes all roadmaps in ROADMAPS below. Safe to re-run:
leaves that are already wrapped in a `__group__` are left untouched and won't
be wrapped again (only top-level TextInput controls are considered).

Writes a combined manifest (roadmap -> [{slug, text, category}, ...]) to
scripts/topic-manifest.json, which is useful when writing the matching
content/{slug}@{slug}.md files for a new roadmap.
"""

import json
import re
import sys

ROADMAPS = [
    'sta',
    'physical-design',
    'rtl-design',
    'design-verification',
    'analog-design',
    'dft',
    'eda-toolflow',
]
BASE = 'src/data/roadmaps'
MANIFEST_PATH = 'scripts/topic-manifest.json'


def slugify(text):
    s = text.lower()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return s.strip('-')


def wrap_roadmap(roadmap):
    path = f'{BASE}/{roadmap}/{roadmap}.json'
    with open(path) as f:
        data = json.load(f)

    controls = data['mockup']['controls']['control']
    new_controls = []
    used_slugs = set()
    current_category = None
    leaves = []  # (slug, text, category)

    for control in controls:
        if control.get('typeID') != 'TextInput':
            new_controls.append(control)
            continue

        properties = control['properties']
        if properties.get('bold'):
            current_category = properties['text']
            new_controls.append(control)
            continue

        # Leaf node -> wrap in __group__
        slug = slugify(properties['text'])
        if slug in used_slugs:
            slug = slugify(f"{properties['text']}-{current_category}")
        used_slugs.add(slug)

        group_id = f'{slug}@{slug}'
        child = dict(control)
        child['x'] = 0
        child['y'] = 0

        new_controls.append({
            'typeID': '__group__',
            'x': control['x'],
            'y': control['y'],
            'measuredW': control['measuredW'],
            'measuredH': control['measuredH'],
            'zOrder': control['zOrder'],
            'properties': {'controlName': group_id},
            'children': {'controls': {'control': [child]}},
        })
        leaves.append({'slug': slug, 'text': properties['text'], 'category': current_category})

    data['mockup']['controls']['control'] = new_controls
    with open(path, 'w') as f:
        json.dump(data, f, indent=2)

    return leaves


def main():
    roadmaps = sys.argv[1:] or ROADMAPS
    manifest = {}

    for roadmap in roadmaps:
        leaves = wrap_roadmap(roadmap)
        manifest[roadmap] = leaves
        print(f'{roadmap}: {len(leaves)} leaves wrapped')

    with open(MANIFEST_PATH, 'w') as f:
        json.dump(manifest, f, indent=2)
    print(f'manifest written to {MANIFEST_PATH}')


if __name__ == '__main__':
    main()
