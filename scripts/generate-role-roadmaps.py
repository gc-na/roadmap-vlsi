"""Generate semiconductor design role roadmaps from a master list.

Creates Balsamiq mockup JSON files for each role in ROLES, with standard
categories (Fundamentals, Core Skills, Advanced, Tools, Career) and typical
subtopics for that role.

Usage:
    python3 scripts/generate-role-roadmaps.py
"""

import json
import os

BASE = 'src/data/roadmaps'

ROLES = [
    # Core IC Design
    {
        'id': 'rtl-designer',
        'title': 'RTL Designer',
        'card': 'RTL Designer',
        'description': 'Design digital circuits with Verilog/SystemVerilog: synthesizable RTL, testbenches, functional verification.',
        'categories': [
            ('Fundamentals', ['Boolean Logic', 'Combinational', 'Sequential', 'FSM']),
            ('HDL & Synthesis', ['Verilog', 'SystemVerilog', 'Synthesis', 'Linting']),
            ('Advanced Design', ['Pipelining', 'CDC', 'Reset', 'Low Power']),
            ('Verification', ['Assertions', 'Formal Methods', 'Coverage', 'Debugging']),
            ('Career', ['Industry Tools', 'Code Reviews', 'Mentoring', 'Leadership']),
        ]
    },
    {
        'id': 'physical-designer',
        'title': 'Physical Design Engineer',
        'card': 'Physical Designer',
        'description': 'From RTL to GDSII: floorplanning, placement, CTS, routing, sign-off.',
        'categories': [
            ('Fundamentals', ['CMOS Basics', 'Standard Cells', 'Design Rules', 'PD Flow']),
            ('Floorplanning', ['Die Area', 'Macros', 'Power Grid', 'Pin Placement']),
            ('Place & Route', ['Placement', 'CTS', 'Routing', 'ECO']),
            ('Sign-off', ['DRC/LVS', 'IR Drop', 'EM', 'Tapeout']),
            ('Career', ['Advanced Flows', 'Multi-Die', 'Mentoring', 'Technical Lead']),
        ]
    },
    {
        'id': 'verification-engineer',
        'title': 'Verification Engineer',
        'card': 'Verification Eng.',
        'description': 'Verify chip functionality: UVM testbenches, coverage-driven verification, formal methods.',
        'categories': [
            ('Foundations', ['Mindset', 'Testbenches', 'Simulation', 'Bug Hunting']),
            ('SystemVerilog', ['OOP', 'Randomization', 'Coverage', 'Assertions']),
            ('UVM', ['Architecture', 'Sequences', 'Scoreboards', 'RAL']),
            ('Advanced', ['Formal Verification', 'Emulation', 'Performance DV', 'Gate Sims']),
            ('Career', ['Verification Lead', 'Methodology', 'Mentoring', 'Director']),
        ]
    },
    {
        'id': 'sta-engineer',
        'title': 'STA Engineer',
        'card': 'STA Engineer',
        'description': 'Master timing closure: setup/hold, OCV, crosstalk, signoff.',
        'categories': [
            ('Fundamentals', ['Digital Logic', 'Setup/Hold', 'Clock Basics', 'Timing Arcs']),
            ('Core STA', ['Timing Paths', 'Slack Analysis', 'Clock Domains', 'Exceptions']),
            ('Advanced', ['OCV/AOCV', 'Crosstalk', 'MMMC', 'Signoff']),
            ('Tools', ['PrimeTime', 'Tempus', 'OpenSTA', 'Tcl Scripting']),
            ('Career', ['Closure Lead', 'Methodology', 'Tool Dev', 'Management']),
        ]
    },
    {
        'id': 'analog-designer',
        'title': 'Analog IC Designer',
        'card': 'Analog Designer',
        'description': 'Design op-amps, bandgaps, PLLs, data converters; from circuit design to layout.',
        'categories': [
            ('Fundamentals', ['Physics', 'Small-Signal', 'Frequency Response', 'Noise']),
            ('Core Circuits', ['Op-Amps', 'Bandgaps', 'Current Mirrors', 'Comparators']),
            ('Specialized', ['PLLs/DLLs', 'ADC/DAC', 'LDOs', 'ESD']),
            ('Layout', ['Matching', 'Parasitics', 'Post-Sim', 'EM/IR']),
            ('Career', ['Advanced Circuits', 'Mixed-Signal', 'Mentoring', 'Principal']),
        ]
    },
    {
        'id': 'mixed-signal-designer',
        'title': 'Mixed-Signal Designer',
        'card': 'Mixed-Signal Eng.',
        'description': 'Design analog + digital subsystems: interfaces, integration, system-level verification.',
        'categories': [
            ('Analog Basics', ['Op-Amps', 'Filters', 'ADC/DAC', 'Clocking']),
            ('Digital Integration', ['RTL Design', 'Timing', 'Verification', 'Power']),
            ('System Design', ['Block Integration', 'Noise Coupling', 'Layout', 'Floorplan']),
            ('Verification', ['AMS Testbenches', 'Simulation', 'Formal', 'Silicon Debug']),
            ('Career', ['System Architect', 'Technical Lead', 'Manager', 'Director']),
        ]
    },
    {
        'id': 'dft-engineer',
        'title': 'DFT Engineer',
        'card': 'DFT Engineer',
        'description': 'Ensure manufacturability: scan chains, ATPG, BIST, JTAG, compression.',
        'categories': [
            ('Foundations', ['Fault Models', 'Test Economics', 'Defects', 'DFT Flow']),
            ('Scan & ATPG', ['Scan Chains', 'ATPG', 'Transition Tests', 'Compression']),
            ('BIST & JTAG', ['Mem BIST', 'Logic BIST', 'IEEE 1149.1', 'IEEE 1500']),
            ('SoC Test', ['Test Integration', 'Analog Test', 'Debug', 'Yield']),
            ('Career', ['Test Strategy', 'Test Lead', 'Director', 'VP']),
        ]
    },
    {
        'id': 'memory-designer',
        'title': 'Memory Designer',
        'card': 'Memory Designer',
        'description': 'Design DRAM, SRAM, Flash, NVM: bit cells, arrays, periphery, characterization.',
        'categories': [
            ('Bit Cell Design', ['DRAM Cell', 'SRAM Cell', 'Flash Cell', 'Reliability']),
            ('Array Periphery', ['Decoders', 'Sense Amps', 'Write Drivers', 'Power']),
            ('Characterization', ['Speed', 'Power', 'Noise Margins', 'Temperature']),
            ('Advanced', ['Multi-Level Cells', '3D Memory', 'Yield', 'Process Variation']),
            ('Career', ['Memory Architecture', 'Technology Lead', 'Manager', 'Principal']),
        ]
    },
    {
        'id': 'power-management-designer',
        'title': 'Power Management IC Designer',
        'card': 'Power Management Eng.',
        'description': 'Design voltage regulators, buck/boost converters, PMICs, power delivery.',
        'categories': [
            ('Fundamentals', ['DC-DC Topology', 'Control Theory', 'Loop Stability', 'Efficiency']),
            ('Analog Circuits', ['Error Amp', 'PWM Comparator', 'References', 'Current Sense']),
            ('Integration', ['Digital Interface', 'I2C/UART', 'Sequencing', 'Protection']),
            ('Verification', ['SPICE Sim', 'Transient Response', 'Layout Effects', 'EMI']),
            ('Career', ['PMIC Architect', 'Technical Lead', 'Manager', 'Principal']),
        ]
    },
    {
        'id': 'rf-wireless-designer',
        'title': 'RF/Wireless IC Designer',
        'card': 'RF/Wireless Eng.',
        'description': 'Design RF front-ends, LNAs, mixers, VCOs, power amps; 5G/WiFi/mmWave.',
        'categories': [
            ('RF Fundamentals', ['S-Parameters', 'Matching', 'Noise Figure', 'Linearity']),
            ('RF Circuits', ['LNA', 'Mixer', 'VCO', 'Power Amp']),
            ('System Integration', ['Transceiver', 'PLL', 'Bias', 'Packaging']),
            ('Simulation & Measurement', ['EM Simulation', 'ADS/ACS', 'On-Wafer Test', 'Characterization']),
            ('Career', ['RF System Architect', 'Technical Lead', 'Manager', 'Principal']),
        ]
    },
    {
        'id': 'formal-verification-engineer',
        'title': 'Formal Verification Engineer',
        'card': 'Formal Verification',
        'description': 'Prove chip correctness: model checking, equivalence checking, property verification.',
        'categories': [
            ('Fundamentals', ['Propositional Logic', 'SAT/SMT', 'Model Checking', 'Temporal Logic']),
            ('Tools & Methods', ['Synopsys Verdi', 'Cadence Xcelium', 'Formal Apps', 'Property Writing']),
            ('RTL Formal', ['Equivalence Checking', 'Property Verification', 'Unreachability', 'Coverage']),
            ('Advanced', ['Post-Synthesis Formal', 'Datapath Reasoning', 'Abstraction', 'Assumptions']),
            ('Career', ['Formal Lead', 'Methodology Expert', 'Manager', 'Director']),
        ]
    },
    {
        'id': 'eda-engineer',
        'title': 'EDA/CAD Engineer',
        'card': 'EDA Engineer',
        'description': 'Build design flows: infrastructure, methodology, automation, tool integration.',
        'categories': [
            ('Flow Design', ['Flow Architecture', 'Tool Evaluation', 'Methodology', 'QoR Tracking']),
            ('Infrastructure', ['LSF/Grid', 'License Management', 'Storage', 'Version Control']),
            ('Scripting', ['Tcl', 'Python', 'Shell', 'Makefile/CMake']),
            ('Regression & Release', ['Test Automation', 'QoR Dashboards', 'Release Mgmt', 'Documentation']),
            ('Career', ['Flow Lead', 'Chief Methodology', 'Manager', 'Director']),
        ]
    },
    {
        'id': 'silicon-debug-engineer',
        'title': 'Silicon Debug Engineer',
        'card': 'Silicon Debug Eng.',
        'description': 'Debug and characterize silicon: probe, emulation, failure analysis, root cause.',
        'categories': [
            ('Basics', ['Logic Analyzers', 'Oscilloscopes', 'Probing', 'Signal Integrity']),
            ('Emulation & FPGA', ['Emulation Platforms', 'Bring-Up', 'Pattern Generation', 'Analysis']),
            ('Failure Analysis', ['Fault Localization', 'Waveform Analysis', 'Root Cause', 'Correlation']),
            ('Tools & Flow', ['Debuggers', 'Trace Tools', 'Data Analysis', 'Reporting']),
            ('Career', ['Debug Lead', 'Silicon Expert', 'Manager', 'Director']),
        ]
    },
    {
        'id': 'yield-engineer',
        'title': 'Yield Engineer',
        'card': 'Yield Engineer',
        'description': 'Maximize manufacturing yield: defect analysis, process monitor, yield ramp.',
        'categories': [
            ('Fundamentals', ['Yield Basics', 'Defect Types', 'Failure Modes', 'Statistical Methods']),
            ('Test & Characterization', ['Parametric Test', 'Bin Analysis', 'Correlation', 'Outliers']),
            ('Analysis & Modeling', ['Yield Modeling', 'Pareto Analysis', 'Design Robustness', 'DFM']),
            ('Ramp & Fab Interface', ['Yield Ramp', 'Fab Engagement', 'Disposition', 'Cost Reduction']),
            ('Career', ['Yield Lead', 'Fab Manager', 'Director', 'VP']),
        ]
    },
    {
        'id': 'process-technology-engineer',
        'title': 'Process Technology Engineer',
        'card': 'Process Tech Eng.',
        'description': 'Develop semiconductor process: PDK, cell design, characterization, yield.',
        'categories': [
            ('Process Fundamentals', ['CMOS Technology', 'Process Nodes', 'Design Rules', 'Design Kit']),
            ('Cell Development', ['Standard Cell Library', 'Memory Cells', 'I/O Cells', 'Characterization']),
            ('PDK & Tools', ['PDK Delivery', 'Spice Models', 'Design Rule Checking', 'Documentation']),
            ('Advanced', ['Process Variation', 'Thermal Effects', 'Reliability', 'Next-Gen Nodes']),
            ('Career', ['PDK Lead', 'Process Engineer Manager', 'Director', 'Chief Process Architect']),
        ]
    },
    {
        'id': 'hardware-security-engineer',
        'title': 'Hardware Security Engineer',
        'card': 'Hardware Security',
        'description': 'Secure chip design: threat models, cryptography, side-channel, secure boot.',
        'categories': [
            ('Security Basics', ['Threat Modeling', 'Cryptography', 'Common Attacks', 'Standards']),
            ('Hardware Crypto', ['AES', 'RSA', 'ECC', 'SHA Accelerators']),
            ('Side-Channel Protection', ['Power Analysis', 'Timing Attacks', 'Countermeasures', 'Masking']),
            ('Integration', ['Secure Boot', 'TEE', 'Key Management', 'Compliance']),
            ('Career', ['Security Architect', 'Chief Security Officer', 'Manager', 'Director']),
        ]
    },
    {
        'id': 'design-manager',
        'title': 'Design Manager',
        'card': 'Design Manager',
        'description': 'Lead design teams: project management, resource allocation, delivery.',
        'categories': [
            ('Fundamentals', ['Semiconductor Basics', 'Design Flow', 'Project Planning', 'Risk Management']),
            ('People Management', ['Team Building', 'Performance Reviews', 'Career Development', 'Motivation']),
            ('Project Execution', ['Scheduling', 'Milestones', 'Resource Allocation', 'Risk Mitigation']),
            ('Leadership', ['Strategic Planning', 'Cross-Functional', 'Executive Communication', 'Mentoring']),
            ('Career', ['Senior Manager', 'Director', 'VP Engineering', 'Chief Architect']),
        ]
    },
    {
        'id': 'design-director',
        'title': 'Design Director',
        'card': 'Design Director',
        'description': 'Drive design strategy: organization, technology roadmap, product vision.',
        'categories': [
            ('Technical Leadership', ['Technology Strategy', 'Architecture Decisions', 'Innovation', 'Standards']),
            ('Organization', ['Team Structure', 'Hiring', 'Succession Planning', 'Culture']),
            ('Product & Business', ['Market Analysis', 'Competitive Positioning', 'Cost Targets', 'Time-to-Market']),
            ('Executive', ['Board Presentations', 'Executive Communication', 'P&L Responsibility', 'Strategic Planning']),
            ('Career', ['VP Engineering', 'Chief Technology Officer', 'EVP', 'C-Suite']),
        ]
    },
    # Specialized Roles
    {
        'id': 'post-silicon-validation',
        'title': 'Post-Silicon Validation Engineer',
        'card': 'Post-Silicon Valid.',
        'description': 'Validate silicon: characterization, emulation, FPGA bring-up, test development.',
        'categories': [
            ('Validation Basics', ['Test Methodology', 'Coverage', 'Testbenches', 'Metrics']),
            ('Emulation & FPGA', ['Emulation Platforms', 'FPGA Prototyping', 'Bring-Up', 'Debugging']),
            ('Test Development', ['Test Vectors', 'Pattern Generation', 'Results Analysis', 'Reporting']),
            ('System Level', ['System Integration', 'Performance Validation', 'Power Measurement', 'Reliability']),
            ('Career', ['Validation Lead', 'Manager', 'Director', 'VP Quality']),
        ]
    },
    {
        'id': 'dfm-engineer',
        'title': 'Design for Manufacturing Engineer',
        'card': 'DFM Engineer',
        'description': 'Optimize for manufacturability: lithography, process window, cost.',
        'categories': [
            ('DFM Fundamentals', ['Lithography', 'Process Windows', 'Defect Sensitivity', 'Yield Impact']),
            ('Design Rules & Checking', ['Design Rule Development', 'DRC Tools', 'Rule Enforcement', 'Exceptions']),
            ('Analysis & Optimization', ['Critical Area Analysis', 'Lithography Simulation', 'Cost Optimization', 'Hotspot Identification']),
            ('Fab Collaboration', ['Process Variability', 'Design Robustness', 'Design Kits', 'Feedback Loop']),
            ('Career', ['DFM Lead', 'Process Design Kit Manager', 'Director', 'Principal']),
        ]
    },
    {
        'id': 'tcad-engineer',
        'title': 'Technology CAD Engineer',
        'card': 'TCAD Engineer',
        'description': 'Model process physics: SPICE models, device simulation, process modeling.',
        'categories': [
            ('Physics & Simulation', ['Semiconductor Physics', 'SPICE Fundamentals', 'Device Modeling', 'Numerical Methods']),
            ('SPICE Modeling', ['Transistor Models', 'Parameter Extraction', 'Characterization', 'Validation']),
            ('Process Simulation', ['Process Flow Modeling', 'Lithography Simulation', 'Etch Simulation', 'Deposition']),
            ('Optimization', ['Model Accuracy', 'Parameter Tuning', 'Variability Modeling', 'PDK Development']),
            ('Career', ['SPICE Model Architect', 'Process Simulator Lead', 'Manager', 'Director']),
        ]
    },
]

def generate_roadmap_json(role):
    """Generate Balsamiq mockup JSON for a role roadmap."""
    controls = []
    y = 10

    # Title
    controls.append({
        'typeID': 'Label',
        'x': 20,
        'y': y,
        'measuredW': 200,
        'measuredH': 30,
        'properties': {'text': role['title'], 'size': 28, 'color': 0x1A1A2E}
    })
    y += 50

    # Categories and topics
    colors = [0x2B78E4, 0x4F7A28, 0x874EFE, 0xE47911, 0x0F766E]  # Blue, Green, Purple, Orange, Teal

    for cat_idx, (category, topics) in enumerate(role['categories']):
        color = colors[cat_idx % len(colors)]

        # Canvas row background
        controls.append({
            'typeID': 'Canvas',
            'x': 10,
            'y': y,
            'measuredW': 780,
            'measuredH': 80,
            'properties': {'color': 0xF8FAFC, 'borderColor': 0xE2E8F0, 'backgroundAlpha': 0.5}
        })

        # Category header
        controls.append({
            'typeID': 'TextInput',
            'x': 20,
            'y': y + 10,
            'measuredW': 760,
            'measuredH': 25,
            'properties': {
                'text': category,
                'size': 15,
                'bold': True,
                'color': color,
                'borderColor': color,
                'textColor': 0xFFFFFF
            }
        })

        # Topics
        for i, topic in enumerate(topics):
            x_offset = 20 + (i * 150)
            controls.append({
                'typeID': '__group__',
                'x': x_offset,
                'y': y + 40,
                'measuredW': 140,
                'measuredH': 30,
                'properties': {'controlName': f'{topic.lower().replace(" ", "-")}@{topic.lower().replace(" ", "-")}'},
                'children': {
                    'controls': {
                        'control': [{
                            'typeID': 'TextInput',
                            'x': 0,
                            'y': 0,
                            'measuredW': 140,
                            'measuredH': 30,
                            'properties': {
                                'text': topic,
                                'size': 13,
                                'color': 0xFFFFFF,
                                'borderColor': color,
                                'backgroundAlpha': 1
                            }
                        }]
                    }
                }
            })

        y += 100

    return {
        'mockup': {
            'controls': {
                'control': controls
            },
            'measuredW': 800,
            'measuredH': y
        }
    }

def main():
    for role in ROLES:
        role_id = role['id']
        role_dir = os.path.join(BASE, role_id)
        os.makedirs(role_dir, exist_ok=True)

        # Generate JSON
        json_data = generate_roadmap_json(role)
        json_path = os.path.join(role_dir, f'{role_id}.json')
        with open(json_path, 'w') as f:
            json.dump(json_data, f, indent=2)

        print(f'✓ {role_id}')

if __name__ == '__main__':
    main()
