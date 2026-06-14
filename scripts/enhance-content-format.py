"""Convert existing content markdown to new format with [Labels] and resume tips.

Reads existing src/data/roadmaps/*/content/*.md files, converts old format
[@type@Title](url) to new format [Label](url), removes vlsi.kr links,
and adds resume tips section.

This is a QUICK converter; manual content expansion (4-6 paragraphs) should
follow for depth.

Usage:
    python3 scripts/enhance-content-format.py [roadmap-id ...]
"""

import os
import re

BASE = 'src/data/roadmaps'

# Map old @type@ to new [Label]
TYPE_MAP = {
    'book': 'Book',
    'course': 'Coursera',
    'video': 'YouTube',
    'article': 'Article',
}

RESUME_TIPS_TEMPLATES = {
    'default': [
        "Quantify your experience: mention specific tools, methodologies, or design metrics.",
        "In interviews, explain your problem-solving approach — companies value reasoning over memorization.",
        "Highlight cross-functional collaboration: most semiconductor work is team-based.",
    ]
}

def convert_links(content):
    """Convert [@type@Title](url) to [Label](url)."""
    def replace_link(match):
        link_type = match.group(1).lower()
        title = match.group(2)
        url = match.group(3)
        label = TYPE_MAP.get(link_type, 'Link')
        return f'[{label}] {title}({url})'

    # Replace [@type@Title](url) with [Label] Title(url)
    content = re.sub(r'\[@(\w+)@([^\]]+)\]\(([^)]+)\)', replace_link, content)
    return content

def remove_vlsi_kr_links(content):
    """Remove links to vlsi.kr."""
    # Remove entire bullet points that link to vlsi.kr
    lines = content.split('\n')
    filtered = []
    for line in lines:
        if 'vlsi.kr' not in line:
            filtered.append(line)
    return '\n'.join(filtered)

def add_resume_tips(title, content):
    """Add Resume Tips section if not present."""
    if '## Resume Tips' in content or '## resume tips' in content.lower():
        return content

    tips = RESUME_TIPS_TEMPLATES.get('default', [])
    tips_section = '\n## Resume Tips\n\n'
    for tip in tips:
        tips_section += f'- {tip}\n'

    # Insert before "Visit the following resources"
    if 'Visit the following resources' in content:
        content = content.replace('Visit the following resources', tips_section + 'Visit the following resources')
    else:
        content += tips_section

    return content

def enhance_file(filepath):
    """Enhance a single content file."""
    with open(filepath, 'r') as f:
        content = f.read()

    # Extract title for resume tips
    title_match = re.search(r'^# (.+)$', content, re.MULTILINE)
    title = title_match.group(1) if title_match else 'Topic'

    # Apply conversions
    content = convert_links(content)
    content = remove_vlsi_kr_links(content)
    content = add_resume_tips(title, content)

    with open(filepath, 'w') as f:
        f.write(content)

    return True

def main():
    count = 0
    for root, dirs, files in os.walk(BASE):
        for file in files:
            if file.endswith('.md'):
                filepath = os.path.join(root, file)
                enhance_file(filepath)
                count += 1

    print(f'✓ Enhanced {count} content files')

if __name__ == '__main__':
    main()
