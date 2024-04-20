import { test, expect } from '@playwright/test';

test('basic elements are visible', async ({ page }) => {
  await page.goto('https://my-site-nextjs-seven.vercel.app/');

  // Check if the page title is correct
  const title = await page.title();
  expect(title).toBe('👩🏻‍💻 Joanna Otmianowska Portfolio');

  // Check if the main heading is displayed
  const mainHeading = await page.textContent('h1');
  expect(mainHeading).toBe('Joanna Otmianowska');

  // Check if the main image is displayed
  const image = await page.isVisible('img[alt="Joanna Otmianowska"]');
  expect(image).toBeTruthy();

  // Check if the tiles are rendered
  const tiles = await page.$$('li');
  expect(tiles.length).toBeGreaterThan(0);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Joanna Otmianowska/);
});

test('main page link', async ({ page }) => {
  await page.goto('https://my-site-nextjs-seven.vercel.app/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Strona główna' }).click();
});
