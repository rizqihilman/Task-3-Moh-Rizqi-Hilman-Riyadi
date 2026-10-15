const { test: setup, expect } = require('@playwright/test');
const { USERS } = require('../utils/users');

/**
 * Logs in once and saves the browser session. The checkout spec reuses this
 * session, so it does not depend on login.spec.js having run first.
 */
setup('authenticate as standard user', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill(USERS.standard.username);
  await page.locator('[data-test="password"]').fill(USERS.standard.password);
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');

  await page.context().storageState({ path: '.auth/user.json' });
});
