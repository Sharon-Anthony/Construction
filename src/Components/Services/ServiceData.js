import residential from '../../assets/services/residential.jpg';
import commercial from '../../assets/services/commercial.jpg';
import renovation from '../../assets/services/renovation.jpg';
import design from '../../assets/services/design.jpg';
import management from '../../assets/services/management.jpg';
import safety from '../../assets/services/safety.jpg';

export const services = [
  {
    slug: 'residential-construction',
    img: residential,
    title: 'Residential Construction',
    desc: 'Custom home building with modern techniques',
    features: ['BIM modeling', 'Energy-efficient designs', 'Smart home integration'],
  },
  {
    slug: 'commercial-projects',
    img: commercial,
    title: 'Commercial Projects',
    desc: 'High-quality commercial space development',
    features: ['Steel frame construction', 'LEED certification', 'Modular components'],
  },
  {
    slug: 'building-renovation',
    img: renovation,
    title: 'Building Renovation',
    desc: 'Structural upgrades and modernization',
    features: ['Seismic retrofitting', 'Facade restoration', 'MEP systems upgrade'],
  },
  {
    slug: 'architectural-design',
    img: design,
    title: 'Architectural Design',
    desc: 'Innovative construction planning',
    features: ['3D visualization', 'Site analysis', 'Value engineering'],
  },
  {
    slug: 'project-management',
    img: management,
    title: 'Project Management',
    desc: 'End-to-end construction oversight',
    features: ['Schedule optimization', 'Cost control', 'Quality assurance'],
  },
  {
    slug: 'safety-compliance',
    img: safety,
    title: 'Safety Compliance',
    desc: 'OSHA-standard site safety',
    features: ['Fall protection', 'Hazard analysis', 'Incident prevention'],
  },
];
