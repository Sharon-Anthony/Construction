import project1 from '../../assets/services/residential.jpg';
import project2 from '../../assets/services/commercial.jpg';
import project3 from '../../assets/services/renovation.jpg';
import project4 from '../../assets/services/design.jpg';
import project5 from '../../assets/services/management.jpg';
import project6 from '../../assets/services/safety.jpg';


export const projects = [
  {
    id: 1,
    src: project1,
    title: 'Residential Construction',
    description: 'Tailored homes built with excellence and care.',
    category: 'residential',
    status: 'completed',
    location: 'San Francisco, CA',
    date: 'June 2023',
    size: '3,200 sq ft',
    client: 'Private Homeowner',
    budget: '$1.2M',
    details: 'This custom home features sustainable materials, smart home technology, and energy-efficient design. The project included site preparation, foundation work, and complete interior finishes. We used advanced BIM modeling to coordinate all systems and ensure precision throughout the construction process.'
  },
  {
    id: 2,
    src: project2,
    title: 'Commercial Development',
    description: 'Professional-grade spaces designed for growth.',
    category: 'commercial',
    status: 'completed',
    location: 'New York, NY',
    date: 'January 2023',
    size: '15,000 sq ft',
    client: 'Tech Startup Inc.',
    budget: '$4.5M',
    details: 'Modern office space with open floor plan, collaborative areas, and premium finishes. The project involved structural steel framing, glass curtain walls, and complete MEP systems installation. We achieved LEED Gold certification through sustainable practices including energy-efficient HVAC, recycled materials, and smart lighting systems.'
  },
  {
    id: 3,
    src: project3,
    title: 'Historic Renovation',
    description: 'Preserving the past while modernizing functionality.',
    category: 'renovation',
    status: 'completed',
    location: 'Boston, MA',
    date: 'March 2023',
    size: '8,500 sq ft',
    client: 'Heritage Foundation',
    budget: '$2.8M',
    details: 'Complete restoration of a 1920s commercial building while maintaining historic character. Work included structural reinforcement, facade restoration, and interior modernization. We carefully preserved original architectural elements while upgrading all systems to meet current codes, including seismic retrofitting and ADA compliance.'
  },
  {
    id: 4,
    src: project4,
    title: 'Architectural Design',
    description: 'Innovative concepts that inspire and function.',
    category: 'design',
    status: 'completed',
    location: 'Austin, TX',
    date: 'August 2023',
    size: '5,000 sq ft',
    client: 'Creative Agency LLC',
    budget: '$1.5M',
    details: 'Cutting-edge design for a creative workspace featuring modular components and flexible layouts. Our team delivered complete architectural services from concept development through construction documents. The design incorporates biophilic elements, natural lighting optimization, and space-efficient solutions that adapt to evolving needs.'
  },
  {
    id: 5,
    src: project5,
    title: 'Construction Management',
    description: 'Seamless coordination from blueprint to completion.',
    category: 'management',
    status: 'ongoing',
    location: 'Chicago, IL',
    date: 'Ongoing',
    size: '22,000 sq ft',
    client: 'Regional Healthcare System',
    budget: '$6.2M',
    details: 'Comprehensive project management for a multi-specialty medical facility. Our services include schedule optimization, subcontractor coordination, and quality control. We implemented lean construction principles to minimize waste and maintain tight timelines while adhering to strict healthcare facility regulations and infection control protocols.'
  },
  {
    id: 6,
    src: project6,
    title: 'Safety Compliance',
    description: 'Building with the highest safety standards.',
    category: 'safety',
    status: 'ongoing',
    location: 'Seattle, WA',
    date: 'October 2023',
    size: 'N/A',
    client: 'Multiple Construction Sites',
    budget: '$350K',
    details: 'Site-wide safety program implementation across multiple active construction projects. Developed comprehensive safety plans, conducted hazard analyses, and trained over 200 workers. Our program reduced incident rates by 65% through fall protection systems, equipment safety protocols, and daily safety briefings tailored to specific work activities.'
  }
];

export const projectStatuses = [
  { id: 'all', name: 'All Projects' },
  { id: 'completed', name: 'Completed' },
  { id: 'ongoing', name: 'Ongoing' }
];