const { test, expect } = require('@playwright/test');
const { USERS } = require('../utils/users');

// Login is the scenario under test here, so start from a clean logged-out
// context even though the chromium project normally reuses an auth session.
test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Login', () => {
  test('should login with valid credentials', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

    await page.locator('[data-test="username"]').fill(USERS.standard.username);
    await page.locator('[data-test="password"]').fill(USERS.standard.password);
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
    await expect(page.locator('[data-test="inventory-list"]')).toBeVisible();
    await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(6);
  });
});
