export interface TileMainPage {
  title: string;
  description: string;
  link: string;
  image: string;
  id: number;
}

export const tiles: TileMainPage[] = [
  {
    title: 'Newsletter "Pretekst do rozmyślań"',
    description: 'Co dwa tygodnie w Twojej skrzynce mailowej',
    link: 'https://www.subscribepage.com/pretekst',
    image: 'newsletter.webp',
    id: 1,
  },
  {
    title: 'Podcast "Pod Pretekstem"',
    description:
      'Posłuchaj i porozmkminiaj razem ze mną życiowo-zawodowe tematy',
    link: 'https://open.spotify.com/show/2clasOw1kmW2Ru0VHwtSyA?si=f4ff0c2d08274e32',
    image: 'mice.webp',
    id: 2,
  },
  {
    title: 'Blog wakeupandcode.pl',
    description:
      'Zbiór artykułów o zmianie branży, nauce kodowania i stawianiu pierwszych kroków w IT',
    link: 'https://www.wakeupandcode.pl',
    image: 'blog.webp',
    id: 3,
  },
  {
    title: 'Grupa na FB "Programuj, Dziewczyno!"',
    description: 'IT, kod i motywacja w dziewczyńskim gronie',
    link: 'https://www.facebook.com/groups/programujdziewczyno',
    image: 'laptop.webp',
    id: 4,
  },
];
