"""Convert hex color strings in roadmap JSON to the integer format the renderer needs.

`roadmap-renderer` parses colors with `d >> 16 & 255` etc., i.e. it expects an
integer color code (Balsamiq format), not a CSS hex string. A hex string like
"#2b78e4" coerces to NaN -> 0 -> rgb(0,0,0), so every fill/border/text color
collapses to black and the diagram becomes unreadable.

This script rewrites every `color` / `borderColor` / `textColor` property
(recursively, including controls nested inside __group__) from "#rrggbb" to the
integer 0xRRGGBB. It also gives the bold category headers white text so they
read on their colored banner fill.

Idempotent: once values are integers the hex regex no longer matches, so
re-running is a no-op.

Usage:
    python3 scripts/fix-roadmap-colors.py [roadmap-id ...]
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
COLOR_KEYS = ('color', 'borderColor', 'textColor')
HEX_RE = re.compile(r'^#([0-9a-fA-F]{6})$')
WHITE = 0xFFFFFF


def hex_to_int(value):
    if isinstance(value, str):
        m = HEX_RE.match(value)
        if m:
            return int(m.group(1), 16)
    return value


def fix_control(control):
    props = control.get('properties') or {}
    for key in COLOR_KEYS:
        if key in props:
            props[key] = hex_to_int(props[key])

    # Bold category headers are colored banners -> use white text for contrast.
    if props.get('bold') and control.get('typeID') == 'TextInput':
        props['textColor'] = WHITE

    children = control.get('children', {}).get('controls', {}).get('control')
    if children:
        for child in children:
            fix_control(child)


def fix_roadmap(roadmap):
    path = f'{BASE}/{roadmap}/{roadmap}.json'
    with open(path) as f:
        data = json.load(f)

    for control in data['mockup']['controls']['control']:
        fix_control(control)

    with open(path, 'w') as f:
        json.dump(data, f, indent=2)


def main():
    for roadmap in sys.argv[1:] or ROADMAPS:
        fix_roadmap(roadmap)
        print(f'{roadmap}: colors converted to integer format')


if __name__ == '__main__':
    main()
