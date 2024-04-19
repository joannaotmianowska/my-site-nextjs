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
    description: 'Piszę o rozwoju osobistym, kreatywności i technologii. Dzielę się przemyśleniami, doświadczeniami i inspiracjami. Polecam książki, podcasty i narzędzia, które pomagają mi się rozwijać. Nowe wydanie co dwa tygodnie w Twojej skrzynce mailowej. Dołącz ju dziś! 💌',
    link: 'https://www.subscribepage.com/pretekst',
    image: 'newsletter.webp',
    id: 1,
  },
  {
    title: 'Podcast "Pod Pretekstem"',
    description:
      'Poszukaj ze mną prekstów do rozmyślań i rozmów. Tematy, wokół których będziemy się kręcić to m.in. kod, dobrostan, balans, macierzyństwo, notatki, rozwój, planowanie, odpoczynek. Ale tak naprawdę pretekstem do rozmyślań moe być wszystko. Słuchaj na swojej ulubionej platformie podcastowej lub na YT 🎧',
    link: 'https://open.spotify.com/show/2clasOw1kmW2Ru0VHwtSyA?si=f4ff0c2d08274e32',
    image: 'mice.webp',
    id: 2,
  },
  {
    title: 'Blog wakeupandcode.pl',
    description:
      'Zbiór artykułów o zmianie branży, nauce kodowania i stawianiu pierwszych kroków w IT. A do tego trochę życiowych rozkmin, przeglądów ciekawych treści i dawki motywacji do działania 🌱',
    link: 'https://www.wakeupandcode.pl',
    image: 'blog.webp',
    id: 3,
  },
  {
    title: 'Grupa na FB "Programuj, Dziewczyno!"',
    description: 'IT, kod i motywacja w dziewczyńskim gronie. Dołącz do ponad 30 tysięcy członkiń zakręconych na punkcie świata IT i programowania. Wspieramy się, uczymy i rozwijamy razem 👩🏻‍💻',
    link: 'https://www.facebook.com/groups/programujdziewczyno',
    image: 'laptop.webp',
    id: 4,
  },
];
