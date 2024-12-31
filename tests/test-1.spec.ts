import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://playwright.dev/');
await page.getByRole('link', { name: 'Docs' }).click();
await page.getByRole('heading', { name: 'IntroductionDirect link to' }).click();
await expect(page.getByRole('heading', { name: 'IntroductionDirect link to' })).toBeVisible();
await expect(page.getByRole('heading', { name: 'Installing PlaywrightDirect' })).toBeVisible();
});