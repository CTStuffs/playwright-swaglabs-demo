import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartItems: Locator;
    constructor(_page: Page) {
        this.page = _page;
        this.cartItems = _page.locator('[data-test="inventory-item"]');
    }

    async checkCartItem(itemName: string, itemDesc: string, itemQuantity: string, itemPrice: string) {
        let cartItem = this.cartItems.filter({ hasText: itemName });
        await expect(cartItem.locator('[data-test="inventory-item-name"]')).toHaveText(itemName);
        await expect(cartItem.locator('[data-test="item-quantity"]')).toHaveText(itemQuantity);
        await expect(cartItem.locator('[data-test="inventory-item-desc"]')).toHaveText(itemDesc);
        await expect(cartItem.locator('[data-test="inventory-item-price"]')).toHaveText(itemPrice);

        //await this.cartItems.filter({ hasText: itemName }).locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    async checkCartEmpty() {
        await expect(this.cartItems).not.toBeVisible();
    }

    async deleteItem(itemName: string) {
        let cartItem = this.cartItems.filter({ hasText: itemName });
        await cartItem.locator('[data-test="remove-sauce-labs-backpack"]').click();
    }
}