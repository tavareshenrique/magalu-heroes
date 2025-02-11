import { expect, test } from '@playwright/test';

test('it should mark a character as a favorite', async ({ page }) => {
  await page.goto('/');

  await page.waitForResponse(
    (response) =>
      response.url().includes('/characters') && response.status() === 200,
  );

  await expect(page.getByRole('heading', { name: '3-D Man' })).toBeVisible();

  const heroCard = await page.locator('[data-testid="hero-card"]').first();

  const favoriteButton = await heroCard.locator(
    '[data-testid="favorite-button"]',
  );

  await favoriteButton.click();

  expect(page.getByRole('heading', { name: 'Favorites' })).toBeVisible();
});

test('it should order the characters', async ({ page }) => {
  await page.goto('/');

  await page.waitForResponse(
    (response) =>
      response.url().includes('/characters') && response.status() === 200,
  );

  await page.locator('[data-testid="sort-heroes-trigger"]').click();

  await page.locator('[data-testid="sort-heroes-modified"]').click();

  await expect(page.locator('[data-testid="sort-heroes-trigger"]')).toHaveText(
    'Modification',
  );

  await expect(
    page.getByRole('heading', { name: 'Lenny Balinger' }),
  ).toBeVisible();
});

test('it should page to next page', async ({ page }) => {
  await page.goto('/');

  await page.waitForResponse(
    (response) =>
      response.url().includes('/characters') && response.status() === 200,
  );

  await expect(page.getByRole('heading', { name: '3-D Man' })).toBeVisible();

  await page.locator('[data-testid="pagination-next"]').click();

  await expect(
    page.getByRole('heading', { name: '3-D Man' }),
  ).not.toBeVisible();
});

test('it should page to back page', async ({ page }) => {
  await page.goto('/');

  await page.waitForResponse(
    (response) =>
      response.url().includes('/characters') && response.status() === 200,
  );

  await expect(page.getByRole('heading', { name: '3-D Man' })).toBeVisible();

  await page.locator('[data-testid="pagination-next"]').click();

  await expect(
    page.getByRole('heading', { name: '3-D Man' }),
  ).not.toBeVisible();

  await page.locator('[data-testid="pagination-prev"]').click();

  await expect(page.getByRole('heading', { name: '3-D Man' })).toBeVisible();
});

test('it should filter a character by name', async ({ page }) => {
  await page.goto('/');

  await page.waitForResponse(
    (response) =>
      response.url().includes('/characters') && response.status() === 200,
  );

  await page.getByRole('textbox', { name: 'Character Name:' }).fill('Hulk');

  await page.getByRole('button', { name: 'Apply Filters' }).click();

  await expect(
    page.getByRole('heading', { name: 'Hulk', exact: true }),
  ).toBeVisible();
});

test('it should filter only fav', async ({ page }) => {
  await page.goto('/');

  await page.waitForResponse(
    (response) =>
      response.url().includes('/characters') && response.status() === 200,
  );

  await expect(page.getByRole('heading', { name: '3-D Man' })).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'A-Bomb (HAS)' }),
  ).toBeVisible();

  const heroCard = await page.locator('[data-testid="hero-card"]').first();

  const favoriteButton = await heroCard.locator(
    '[data-testid="favorite-button"]',
  );

  await favoriteButton.click();

  await page.getByRole('switch', { name: 'Show only favorites?' }).click();

  await page.getByRole('button', { name: 'Apply Filters' }).click();

  await expect(
    page.getByRole('heading', { name: '3-D Man' }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'A-Bomb (HAS)' }),
  ).not.toBeVisible();
});

test('it should reset filter', async ({ page }) => {
  await page.goto('/');

  await page.waitForResponse(
    (response) =>
      response.url().includes('/characters') && response.status() === 200,
  );

  await expect(page.getByRole('heading', { name: '3-D Man' })).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'A-Bomb (HAS)' }),
  ).toBeVisible();

  const heroCard = await page.locator('[data-testid="hero-card"]').first();

  const favoriteButton = await heroCard.locator(
    '[data-testid="favorite-button"]',
  );

  await favoriteButton.click();

  await page.getByRole('switch', { name: 'Show only favorites?' }).click();

  await page.getByRole('button', { name: 'Apply Filters' }).click();

  await expect(
    page.getByRole('heading', { name: '3-D Man' }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'A-Bomb (HAS)' }),
  ).not.toBeVisible();

  await page.getByRole('button', { name: 'Reset Filters' }).click();

  await expect(
    page.getByRole('heading', { name: '3-D Man' }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'A-Bomb (HAS)' }),
  ).toBeVisible();
});

test('it should navigate to character detail', async ({ page }) => {
  await page.goto('/');

  await page.waitForResponse(
    (response) =>
      response.url().includes('/characters') && response.status() === 200,
  );

  await expect(page.getByRole('heading', { name: '3-D Man' })).toBeVisible();

  const heroLink = await page.locator('[data-testid="hero-link"]').first();

  await heroLink.click();

  await expect(page.getByText('See some offers for this')).toBeVisible();
});
