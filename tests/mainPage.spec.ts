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
});
