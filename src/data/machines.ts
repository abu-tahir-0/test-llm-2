export interface Machine {
  id: string;
  name: string;
  model: string;
  category: 'CNC' | 'Robotics' | '3D Printing' | 'Laser' | 'Assembly';
  description: string;
}

export const machines: Machine[] = [
  {
    id: '1',
    name: 'Apex Precision X1',
    model: 'APX-X1-2024',
    category: 'CNC',
    description: 'High-precision 5-axis CNC milling machine designed for aerospace-grade components.'
  },
  {
    id: '2',
    name: 'Titan Arm v4',
    model: 'TA-V4-800',
    category: 'Robotics',
    description: 'Heavy-duty industrial robotic arm with an 800kg payload capacity and sub-millimeter accuracy.'
  },
  {
    id: '3',
    name: 'Lumina SL',
    model: 'LUM-SL-500',
    category: '3D Printing',
    description: 'Industrial stereolithography printer for high-resolution resin prototypes and end-use parts.'
  },
  {
    id: '4',
    name: 'Vortex Laser Cutter',
    model: 'VX-LC-6000',
    category: 'Laser',
    description: '6kW fiber laser cutting system capable of processing thick steel plates with extreme speed.'
  },
  {
    id: '5',
    name: 'Nexus Assembly Line',
    model: 'NX-AL-MOD',
    category: 'Assembly',
    description: 'Modular automated assembly system with integrated AI vision for quality control.'
  },
  {
    id: '6',
    name: 'Apex Precision X2',
    model: 'APX-X2-2024',
    category: 'CNC',
    description: 'Enhanced 5-axis CNC with integrated cooling and automated tool changer.'
  },
  {
    id: '7',
    name: 'Titan Arm Mini',
    model: 'TA-M-50',
    category: 'Robotics',
    description: 'Compact robotic arm optimized for high-speed pick-and-place operations.'
  },
  {
    id: '8',
    name: 'Lumina Metal',
    model: 'LUM-MET-200',
    category: '3D Printing',
    description: 'Direct metal laser sintering system for complex aerospace and medical titanium parts.'
  },
  {
    id: '9',
    name: 'Vortex Tube Pro',
    model: 'VX-TP-3000',
    category: 'Laser',
    description: 'Specialized laser system for precision cutting of cylindrical and structural tubing.'
  },
  {
    id: '10',
    name: 'Nexus Solder Station',
    model: 'NX-SS-400',
    category: 'Assembly',
    description: 'Automated precision soldering station for high-density circuit board manufacturing.'
  },
  {
    id: '11',
    name: 'Apex Lathe Pro',
    model: 'APX-LP-100',
    category: 'CNC',
    description: 'High-torque CNC lathe for heavy-duty turning operations in automotive manufacturing.'
  },
  {
    id: '12',
    name: 'Titan Cobot 7',
    model: 'TA-CB-7',
    category: 'Robotics',
    description: 'Collaborative robot designed to work safely alongside human operators without fencing.'
  },
  {
    id: '13',
    name: 'Lumina PolyJet',
    model: 'LUM-PJ-900',
    category: '3D Printing',
    description: 'Multi-material 3D printer capable of creating realistic prototypes with varying textures.'
  },
  {
    id: '14',
    name: 'Vortex Micro Laser',
    model: 'VX-ML-500',
    category: 'Laser',
    description: 'Ultra-fine laser engraving and cutting system for micro-electronics and jewelry.'
  },
  {
    id: '15',
    name: 'Nexus Packaging Unit',
    model: 'NX-PU-1000',
    category: 'Assembly',
    description: 'End-of-line automated packaging and palletizing system with smart sorting.'
  },
  {
    id: '16',
    name: 'Apex Mill-Turn',
    model: 'APX-MT-500',
    category: 'CNC',
    description: 'Hybrid mill-turn center that combines the capabilities of a lathe and a milling machine.'
  },
  {
    id: '17',
    name: 'Titan Delta High-Speed',
    model: 'TA-DHS-10',
    category: 'Robotics',
    description: 'Delta-style robot for ultra-fast sorting and packaging in the food and pharma industries.'
  },
  {
    id: '18',
    name: 'Lumina SLS',
    model: 'LUM-SLS-450',
    category: '3D Printing',
    description: 'Selective Laser Sintering system for durable, functional nylon parts without supports.'
  },
  {
    id: '19',
    name: 'Vortex Weld Master',
    model: 'VX-WM-4000',
    category: 'Laser',
    description: 'High-power laser welding system for deep penetration welds in automotive frames.'
  },
  {
    id: '20',
    name: 'Nexus Quality Inspector',
    model: 'NX-QI-AI',
    category: 'Assembly',
    description: 'AI-powered inspection station using hyperspectral imaging to detect internal defects.'
  },
  {
    id: '21',
    name: 'Apex Vertical Mill',
    model: 'APX-VM-300',
    category: 'CNC',
    description: 'Versatile vertical machining center for general purpose industrial manufacturing.'
  },
  {
    id: '22',
    name: 'Titan Gantry System',
    model: 'TA-GS-5000',
    category: 'Robotics',
    description: 'Large-scale gantry robot for handling oversized components in shipbuilding.'
  },
  {
    id: '23',
    name: 'Lumina Bio-Print',
    model: 'LUM-BIO-10',
    category: '3D Printing',
    description: 'Specialized bioprinter for research in tissue engineering and regenerative medicine.'
  },
  {
    id: '24',
    name: 'Vortex Clean-Cut',
    model: 'VX-CC-2000',
    category: 'Laser',
    description: 'Precision laser system optimized for cutting delicate plastics and composites.'
  },
  {
    id: '25',
    name: 'Nexus Fastener Bot',
    model: 'NX-FB-200',
    category: 'Assembly',
    description: 'High-speed automated screw-driving and fastening robot with torque monitoring.'
  },
  {
    id: '26',
    name: 'Apex Swiss-Turn',
    model: 'APX-ST-20',
    category: 'CNC',
    description: 'Swiss-type lathe for high-volume production of small, complex medical components.'
  },
  {
    id: '27',
    name: 'Titan AGV Fleet',
    model: 'TA-AGV-X',
    category: 'Robotics',
    description: 'Autonomous Guided Vehicles for intelligent material transport across factory floors.'
  },
  {
    id: '28',
    name: 'Lumina Ceramic',
    model: 'LUM-CER-150',
    category: '3D Printing',
    description: 'Industrial printer for technical ceramics used in high-temperature applications.'
  },
  {
    id: '29',
    name: 'Vortex Surface Treater',
    model: 'VX-ST-800',
    category: 'Laser',
    description: 'Laser surface treatment system for hardening, cleaning, and texturing metals.'
  },
  {
    id: '30',
    name: 'Nexus Final Test',
    model: 'NX-FT-900',
    category: 'Assembly',
    description: 'Comprehensive final testing station with electrical, mechanical, and software validation.'
  }
];
