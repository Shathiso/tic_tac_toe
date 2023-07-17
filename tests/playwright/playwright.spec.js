// @ts-check
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shathiso.github.io/tic_tac_toe/');
  await page.getByRole('button', { name: 'X' }).click();
  await page.locator('#cell-1').click();
  await page.locator('#cell-4').click();
  await page.locator('#cell-7').click();

  await page.screenshot({path: `./screenshots/tic_tac_toe.png`})
  await page.getByRole('button', { name: 'Restart game' }).click();
});
