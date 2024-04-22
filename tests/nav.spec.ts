import { test, expect } from '@playwright/test';
import { linkEn, linkPl, desktop, mobile } from './constants';

test('navigation is visible on desktop in Eng version', async ({ page }) => {
  await page.goto(linkEn);
  await page.setViewportSize(desktop);

  const newsletterLink = await page
    .getByRole('link', { name: '💌 newsletter' })
    .isVisible();
  const podcastLink = await page
    .getByRole('link', { name: '🎙️  podcast' })
    .isVisible();
  const instagramLink = await page
    .getByRole('link', { name: '📸  instagram' })
    .isVisible();
  const blogLink = await page
    .getByRole('link', { name: '🌱  wakeupancode.pl' })
    .isVisible();
  const groupLink = await page
    .getByRole('link', { name: '👩🏻‍💻  "Programuj, dziewczyno!" group' })
    .isVisible();
  const polishFlag = await page.getByRole('link', { name: '🇵🇱' }).isVisible();
  const englishFlag = await page.getByRole('link', { name: '🇬🇧' }).isVisible();

  expect(newsletterLink).toBeTruthy();
  expect(podcastLink).toBeTruthy();
  expect(instagramLink).toBeTruthy();
  expect(blogLink).toBeTruthy();
  expect(groupLink).toBeTruthy();
  expect(polishFlag).toBeTruthy();
  expect(englishFlag).toBeTruthy();
});

test('hamburger menu is visible and working on mobile in Eng version', async ({
  page,
}) => {
  await page.goto(linkEn);
  await page.setViewportSize(mobile);

  await page.getByText('🍔').click();
  const newsletterLink = await page
    .getByRole('link', { name: '💌 newsletter' })
    .isVisible();
  expect(newsletterLink).toBeTruthy();

  await page.getByText('❌').click();

  const menuIcon = await page.getByText('🍔').isVisible();
  expect(menuIcon).toBeTruthy();
});

test('navigation is visible on desktop in Pl version', async ({ page }) => {
  await page.goto(linkPl);
  await page.setViewportSize(desktop);

  const newsletterLink = await page
    .getByRole('link', { name: '💌 newsletter' })
    .isVisible();
  const podcastLink = await page
    .getByRole('link', { name: '🎙️  podcast' })
    .isVisible();
  const instagramLink = await page
    .getByRole('link', { name: '📸  instagram' })
    .isVisible();
  const blogLink = await page
    .getByRole('link', { name: '🌱  wakeupancode.pl' })
    .isVisible();
  const groupLink = await page
    .getByRole('link', { name: '👩🏻‍💻  grupa "Programuj, dziewczyno!"' })
    .isVisible();
  const polishFlag = await page.getByRole('link', { name: '🇵🇱' }).isVisible();
  const englishFlag = await page.getByRole('link', { name: '🇬🇧' }).isVisible();

  expect(newsletterLink).toBeTruthy();
  expect(podcastLink).toBeTruthy();
  expect(instagramLink).toBeTruthy();
  expect(blogLink).toBeTruthy();
  expect(groupLink).toBeTruthy();
  expect(polishFlag).toBeTruthy();
  expect(englishFlag).toBeTruthy();
});

test('hamburger menu is visible and working on mobile in Pl version', async ({
  page,
}) => {
  await page.goto(linkPl);
  await page.setViewportSize(mobile);

  await page.getByText('🍔').click();
  const newsletterLink = await page
    .getByRole('link', { name: '💌 newsletter' })
    .isVisible();
  expect(newsletterLink).toBeTruthy();

  await page.getByText('❌').click();

  const menuIcon = await page.getByText('🍔').isVisible();
  expect(menuIcon).toBeTruthy();
});
