export const datasource = [
  {
    key: 'laptops',
    title: 'Laptops',
    icon: 'laptop',
    color: '#326149',
    backgroundColor: '#E5F0E9',
    data: [
      {
        key: 'everyday-laptop',
        name: 'Everyday laptop',
        caption: 'Notes, classes, and coursework',
        description: 'A portable computer for class notes, documents, and everyday study tasks.',
        image: require('./assets/gear/everyday-laptop.jpg'),
      },
      {
        key: 'project-laptop',
        name: 'Project laptop',
        caption: 'A home for your next project',
        description: 'A dedicated workspace for coding, design work, and bringing class projects together.',
        image: require('./assets/gear/creative-laptop.jpg'),
      },
    ],
  },
  {
    key: 'audio',
    title: 'Audio',
    icon: 'headphones',
    color: '#6D4D91',
    backgroundColor: '#F0EAF8',
    data: [
      {
        key: 'headphones',
        name: 'Over-ear headphones',
        caption: 'Set the tone for a study session',
        description: 'Headphones for listening to recorded lessons, music, and online classes.',
        image: require('./assets/gear/headphones.jpg'),
      },
      {
        key: 'speaker',
        name: 'Wireless speaker',
        caption: 'A little music for your workspace',
        description: 'A compact speaker for background music and a shared study space.',
        image: require('./assets/gear/speaker.jpg'),
      },
    ],
  },
];
