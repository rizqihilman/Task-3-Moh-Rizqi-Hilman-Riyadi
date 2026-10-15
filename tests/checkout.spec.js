const { test, expect } = require('@playwright/test');
const { CHECKOUT_INFO } = require('../utils/users');

const PRODUCT = 'Sauce Labs Onesie';
const PRODUCT_PRICE = '$7.99';

// Runs with the authenticated session created by the setup project, so this
// test can be executed on its own without running login.spec.js first.
test.describe('Checkout', () => {
  test('should complete checkout for Sauce Labs Onesie', async ({ page }) => {
    // 1. products page (session from storageState)
    await page.goto('/inventory.html');
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');

    // 2. find the product. saucedemo has no search box, so "search" means
    //    locating the product card by name in the inventory grid.
    const item = page.locator('[data-test="inventory-item"]').filter({ hasText: PRODUCT });
    await expect(item).toHaveCount(1);
    await expect(item.locator('[data-test="inventory-item-name"]')).toHaveText(PRODUCT);
    await expect(item.locator('[data-test="inventory-item-price"]')).toHaveText(PRODUCT_PRICE);

    // 3. add it to the cart
    await item.locator('[data-test^="add-to-cart"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
    await expect(item.locator('[data-test^="remove"]')).toBeVisible();

    // 4. open the cart and 5. verify the selected product
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL(/cart\.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Your Cart');

    const cartItem = page.locator('[data-test="inventory-item"]');
    await expect(cartItem).toHaveCount(1);
    await expect(cartItem.locator('[data-test="inventory-item-name"]')).toHaveText(PRODUCT);
    await expect(cartItem.locator('[data-test="item-quantity"]')).toHaveText('1');
    await expect(cartItem.locator('[data-test="inventory-item-price"]')).toHaveText(PRODUCT_PRICE);

    // 6. proceed to checkout
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL(/checkout-step-one\.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Your Information');

    // 7. fill in the required information
    await page.locator('[data-test="firstName"]').fill(CHECKOUT_INFO.firstName);
    await page.locator('[data-test="lastName"]').fill(CHECKOUT_INFO.lastName);
    await page.locator('[data-test="postalCode"]').fill(CHECKOUT_INFO.postalCode);
    await page.locator('[data-test="continue"]').click();

    // 8. and 9. order overview - verify the relevant details
    await expect(page).toHaveURL(/checkout-step-two\.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Overview');
    await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(1);
    await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText(PRODUCT);
    await expect(page.locator('[data-test="payment-info-value"]')).toHaveText('SauceCard #31337');
    await expect(page.locator('[data-test="shipping-info-value"]')).toHaveText('Free Pony Express Delivery!');
    await expect(page.locator('[data-test="subtotal-label"]')).toHaveText(`Item total: ${PRODUCT_PRICE}`);
    await expect(page.locator('[data-test="tax-label"]')).toHaveText('Tax: $0.64');
    await expect(page.locator('[data-test="total-label"]')).toHaveText('Total: $8.63');

    // 10. finish the order
    await page.locator('[data-test="finish"]').click();

    // 11. the order is really complete: confirmation page + empty cart
    await expect(page).toHaveURL(/checkout-complete\.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Complete!');
    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
    await expect(page.locator('[data-test="complete-text"]')).toContainText('dispatched');
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
  });
});
