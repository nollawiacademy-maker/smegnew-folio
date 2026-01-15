export const projects = [
  {
    id: 1,
    title: 'Network Infrastructure Overhaul',
    category: 'Networking',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c3f03978-0432-4b10-bc86-8604ee32ddd9/project-abstract-1-is7w7r5-1768474922291.webp',
  },
  {
    id: 2,
    title: 'Cybersecurity Framework Implementation',
    category: 'Security',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c3f03978-0432-4b10-bc86-8604ee32ddd9/project-abstract-2-jorvpmu-1768474929678.webp',
  },
  {
    id: 3,
    title: 'Cloud Migration & Management',
    category: 'Cloud',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c3f03978-0432-4b10-bc86-8604ee32ddd9/project-abstract-3-tosa9fs-1768474937412.webp',
  },
  {
    id: 4,
    title: 'Data Analytics Platform',
    category: 'Data',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c3f03978-0432-4b10-bc86-8604ee32ddd9/project-abstract-4-zfj7oyt-1768474944415.webp',
  },
  {
    id: 5,
    title: 'AI-Powered Automation',
    category: 'AI/ML',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c3f03978-0432-4b10-bc86-8604ee32ddd9/project-abstract-5-elxmard-1768474952602.webp',
  },
  {
    id: 6,
    title: 'Custom Software Development',
    category: 'Development',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c3f03978-0432-4b10-bc86-8604ee32ddd9/project-abstract-6-5d66nqg-1768474959556.webp',
  },
];

export const categories = ['All', ...new Set(projects.map(p => p.category))];