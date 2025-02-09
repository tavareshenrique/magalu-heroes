import { HeroTemplate } from '@/templates/HeroTemplate/HeroTemplate';

const heroes = [
  {
    id: '1',
    name: 'Spider-Man',
    description:
      'Peter Parker is a high school student and a superhero with spider-like abilities.',
    thumbnail: '/images/spider.jpg',
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Spider-Man',
    description:
      'Peter Parker is a high school student and a superhero with spider-like abilities.',
    thumbnail: '/images/spider.jpg',
    isFavorite: false,
  },
  {
    id: '3',
    name: 'Spider-Man',
    description:
      'Peter Parker is a high school student and a superhero with spider-like abilities.',
    thumbnail: '/images/spider.jpg',
    isFavorite: false,
  },
  {
    id: '4',
    name: 'Spider-Man',
    description:
      'Peter Parker is a high school student and a superhero with spider-like abilities.',
    thumbnail: '/images/spider.jpg',
    isFavorite: false,
  },
  {
    id: '5',
    name: 'Spider-Man',
    description:
      'Peter Parker is a high school student and a superhero with spider-like abilities.',
    thumbnail: '/images/spider.jpg',
    isFavorite: false,
  },
  {
    id: '6',
    name: 'Spider-Man',
    description:
      'Peter Parker is a high school student and a superhero with spider-like abilities.',
    thumbnail: '/images/spider.jpg',
    isFavorite: false,
  },
];

export default function Home() {
  return <HeroTemplate heroes={heroes} />;
}
