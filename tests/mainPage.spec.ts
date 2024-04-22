import { test, expect } from '@playwright/test';
import { linkEn, linkPl, desktop, mobile } from './constants';

test('basic elements are visible on desktop in Eng version', async ({
  page,
}) => {
  await page.goto(linkEn);
  await page.setViewportSize(desktop);

  const title = await page.title();
  expect(title).toBe('👩🏻‍💻 Joanna Otmianowska Portfolio');

  const mainHeading = await page.textContent('h1');
  expect(mainHeading).toBe('Joanna Otmianowska');

  const image = await page.isVisible('img[alt="Joanna Otmianowska"]');
  expect(image).toBeTruthy();

  const keyWords = await page.textContent('h3');
  expect(keyWords).toBe(
    '* code * everyday life * development * work * well-being *motherhood * creativity *'
  );

  const intro = await page.getByText('Hey! Welcome to my site').isVisible();
  expect(intro).toBeTruthy();

  const aboutMeSection = await page
    .getByText('A few words about me...')
    .isVisible();
  expect(aboutMeSection).toBeTruthy();

  const aboutMePoint1 = await page
    .getByText('💭   I look for excuses to ponder and converse')
    .isVisible();
  const aboutMePoint2 = await page
    .getByText('✨   I introduce new technologies')
    .isVisible();
  const aboutMePoint3 = await page
    .getByText(
      '🚀   I inspire others with my contagious enthusiasm and drive for action'
    )
    .isVisible();
  expect(aboutMePoint1).toBeTruthy();
  expect(aboutMePoint2).toBeTruthy();
  expect(aboutMePoint3).toBeTruthy();

  const aboutWorkSection = await page
    .getByText('A few words about how I work...')
    .isVisible();
  expect(aboutWorkSection).toBeTruthy();

  const aboutWorkPoint1 = await page
    .getByText('💻   I create user-friendly web applications')
    .isVisible();
  const aboutWorkPoint2 = await page
    .getByText('🎤   I share knowledge at conferences, lectures, and workshops')
    .isVisible();
  const aboutWorkPoint3 = await page
    .getByText('🧪   I am a strong advocate of thorough application testing')
    .isVisible();
  expect(aboutWorkPoint1).toBeTruthy();
  expect(aboutWorkPoint2).toBeTruthy();
  expect(aboutWorkPoint3).toBeTruthy();
});

test('basic elements are visible on mobile in Eng version', async ({
  page,
}) => {
  await page.goto(linkEn);
  await page.setViewportSize(mobile);

  const title = await page.title();
  expect(title).toBe('👩🏻‍💻 Joanna Otmianowska Portfolio');

  const mainHeading = await page.textContent('h1');
  expect(mainHeading).toBe('Joanna Otmianowska');

  const image = await page.isVisible('img[alt="Joanna Otmianowska"]');
  expect(image).toBeTruthy();

  const keyWords = await page.textContent('h3');
  expect(keyWords).toBe(
    '* code * everyday life * development * work * well-being *motherhood * creativity *'
  );

  const intro = await page.getByText('Hey! Welcome to my site').isVisible();
  expect(intro).toBeTruthy();

  const aboutMeSection = await page
    .getByText('A few words about me...')
    .isVisible();
  expect(aboutMeSection).toBeTruthy();

  const aboutMePoint1 = await page
    .getByText('💭   I look for excuses to ponder and converse')
    .isVisible();
  const aboutMePoint2 = await page
    .getByText('✨   I introduce new technologies')
    .isVisible();
  const aboutMePoint3 = await page
    .getByText(
      '🚀   I inspire others with my contagious enthusiasm and drive for action'
    )
    .isVisible();
  expect(aboutMePoint1).toBeTruthy();
  expect(aboutMePoint2).toBeTruthy();
  expect(aboutMePoint3).toBeTruthy();

  const aboutWorkSection = await page
    .getByText('A few words about how I work...')
    .isVisible();
  expect(aboutWorkSection).toBeTruthy();

  const aboutWorkPoint1 = await page
    .getByText('💻   I create user-friendly web applications')
    .isVisible();
  const aboutWorkPoint2 = await page
    .getByText('🎤   I share knowledge at conferences, lectures, and workshops')
    .isVisible();
  const aboutWorkPoint3 = await page
    .getByText('🧪   I am a strong advocate of thorough application testing')
    .isVisible();
  expect(aboutWorkPoint1).toBeTruthy();
  expect(aboutWorkPoint2).toBeTruthy();
  expect(aboutWorkPoint3).toBeTruthy();
});

test('basic elements are visible on desktop in Pl version', async ({
  page,
}) => {
  await page.goto(linkPl);
  await page.setViewportSize(desktop);

  const title = await page.title();
  expect(title).toBe('👩🏻‍💻 Joanna Otmianowska Portfolio');

  const mainHeading = await page.textContent('h1');
  expect(mainHeading).toBe('Joanna Otmianowska');

  const image = await page.isVisible('img[alt="Joanna Otmianowska"]');
  expect(image).toBeTruthy();

  const keyWords = await page.textContent('h3');
  expect(keyWords).toBe(
    '* kod * codzienność * rozwój * praca * dobrostan *macierzyństwo * kreatywność *'
  );

  const intro = await page
    .getByText('Cześć! Witaj na mojej stronie')
    .isVisible();
  expect(intro).toBeTruthy();

  const aboutMeSection = await page
    .getByText('Parę słów o mnie...')
    .isVisible();
  expect(aboutMeSection).toBeTruthy();

  const aboutMePoint1 = await page
    .getByText('💭   Szukam pretekstów do rozmyślań i rozmów')
    .isVisible();
  const aboutMePoint2 = await page
    .getByText('✨   Pokazuję nowe technologie')
    .isVisible();
  const aboutMePoint3 = await page
    .getByText('🚀   Zarażam energią do działania')
    .isVisible();
  expect(aboutMePoint1).toBeTruthy();
  expect(aboutMePoint2).toBeTruthy();
  expect(aboutMePoint3).toBeTruthy();

  const aboutWorkSection = await page
    .getByText('Parę słów o tym, jak pracuję...')
    .isVisible();
  expect(aboutWorkSection).toBeTruthy();

  const aboutWorkPoint1 = await page
    .getByText('💻   Tworzę przyjazne użytkownikom aplikacje webowe')
    .isVisible();
  const aboutWorkPoint2 = await page
    .getByText(
      '🎤   Dzielę się wiedzą na konferencjach, prelekcjach i warsztatach'
    )
    .isVisible();
  const aboutWorkPoint3 = await page
    .getByText(
      '🧪   Jestem gorącą zwolenniczką dokładnego testowania aplikacji'
    )
    .isVisible();
  expect(aboutWorkPoint1).toBeTruthy();
  expect(aboutWorkPoint2).toBeTruthy();
  expect(aboutWorkPoint3).toBeTruthy();
});

test('basic elements are visible on mobile in Pl version', async ({ page }) => {
  await page.goto(linkPl);
  await page.setViewportSize(mobile);

  const title = await page.title();
  expect(title).toBe('👩🏻‍💻 Joanna Otmianowska Portfolio');

  const mainHeading = await page.textContent('h1');
  expect(mainHeading).toBe('Joanna Otmianowska');

  const image = await page.isVisible('img[alt="Joanna Otmianowska"]');
  expect(image).toBeTruthy();

  const keyWords = await page.textContent('h3');
  expect(keyWords).toBe(
    '* kod * codzienność * rozwój * praca * dobrostan *macierzyństwo * kreatywność *'
  );

  const intro = await page
    .getByText('Cześć! Witaj na mojej stronie')
    .isVisible();
  expect(intro).toBeTruthy();

  const aboutMeSection = await page
    .getByText('Parę słów o mnie...')
    .isVisible();
  expect(aboutMeSection).toBeTruthy();

  const aboutMePoint1 = await page
    .getByText('💭   Szukam pretekstów do rozmyślań i rozmów')
    .isVisible();
  const aboutMePoint2 = await page
    .getByText('✨   Pokazuję nowe technologie')
    .isVisible();
  const aboutMePoint3 = await page
    .getByText('🚀   Zarażam energią do działania')
    .isVisible();
  expect(aboutMePoint1).toBeTruthy();
  expect(aboutMePoint2).toBeTruthy();
  expect(aboutMePoint3).toBeTruthy();

  const aboutWorkSection = await page
    .getByText('Parę słów o tym, jak pracuję...')
    .isVisible();
  expect(aboutWorkSection).toBeTruthy();

  const aboutWorkPoint1 = await page
    .getByText('💻   Tworzę przyjazne użytkownikom aplikacje webowe')
    .isVisible();
  const aboutWorkPoint2 = await page
    .getByText(
      '🎤   Dzielę się wiedzą na konferencjach, prelekcjach i warsztatach'
    )
    .isVisible();
  const aboutWorkPoint3 = await page
    .getByText(
      '🧪   Jestem gorącą zwolenniczką dokładnego testowania aplikacji'
    )
    .isVisible();
  expect(aboutWorkPoint1).toBeTruthy();
  expect(aboutWorkPoint2).toBeTruthy();
  expect(aboutWorkPoint3).toBeTruthy();
});
