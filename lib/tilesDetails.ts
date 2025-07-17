export interface TileMainPage {
  link: string;
  image: string;
  id: number;
  translationKey: string;
}

export const tiles: TileMainPage[] = [
  {
    link: 'https://joannaotmianowska.substack.com/',
    image: 'newsletter.webp',
    id: 1,
    translationKey: 'newsletter',
  },
  {
    link: 'https://open.spotify.com/show/2clasOw1kmW2Ru0VHwtSyA?si=f4ff0c2d08274e32',
    image: 'mice.webp',
    id: 2,
    translationKey: 'podcast',
  },
  {
    link: 'https://www.wakeupandcode.pl',
    image: 'blog.webp',
    id: 3,
    translationKey: 'blog',
  },
  {
    link: 'https://www.facebook.com/groups/programujdziewczyno',
    image: 'laptop.webp',
    id: 4,
    translationKey: 'group',
  },
];
