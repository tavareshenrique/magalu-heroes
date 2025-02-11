import { expect, test } from '@playwright/test';

test('it should mark a character as a favorite', async ({ page }) => {
  await page.goto('/hero/1011334');

  await page.waitForResponse(
    (response) =>
      response.url().includes('/characters/1011334') &&
      response.status() === 200,
  );

  await expect(page.getByText('See some offers for this')).toBeVisible();

  await page.getByTestId('favorite-button').click();

  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Favorites' })).toBeVisible();
});

test('it should navigate to the hero page in magalu store', async ({
  page,
}) => {
  await page.goto('/hero/1011334');

  await page.waitForResponse(
    (response) =>
      response.url().includes('/characters/1011334') &&
      response.status() === 200,
  );

  await expect(page.getByText('See some offers for this')).toBeVisible();

  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Magalu.' }).click(),
  ]);

  await expect(newPage).toHaveURL(
    /https:\/\/www\.magazineluiza\.com\.br\/busca\/3\+d\+man\//,
  );
});

test('it should open comic dialog', async ({ page }) => {
  await page.goto('/hero/1011334');

  await page.waitForResponse(
    (response) =>
      response.url().includes('/characters/1011334') &&
      response.status() === 200,
  );

  const comic = page.getByRole('button', {
    name: 'Avengers: The Initiative (2007) #19 Avengers: The Initiative (2007) #19 No',
  });

  await expect(comic).toBeVisible();

  await comic.click();

  await expect(page.getByRole('dialog')).toBeVisible();
});
