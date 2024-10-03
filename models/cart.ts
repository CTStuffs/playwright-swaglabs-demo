import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartItems: Locator;
    readonly checkoutBtn: Locator;
    constructor(_page: Page) {
        this.page = _page;
        this.cartItems = this.page.locator('[data-test="inventory-item"]');
        this.checkoutBtn = this.page.locator('[data-test="checkout"]');
    }

    async checkCartItem(itemName: string, itemDesc: string, itemQuantity: string, itemPrice: string) {
        let cartItem = this.cartItems.filter({ hasText: itemName });
        await expect(cartItem.locator('[data-test="inventory-item-name"]')).toHaveText(itemName);
        await expect(cartItem.locator('[data-test="item-quantity"]')).toHaveText(itemQuantity);
        await expect(cartItem.locator('[data-test="inventory-item-desc"]')).toHaveText(itemDesc);
        await expect(cartItem.locator('[data-test="inventory-item-price"]')).toHaveText('$' + itemPrice);
    }

    async checkCartEmpty() {
        await expect(this.cartItems).not.toBeVisible();
    }

    async deleteItem(itemName: string) {
        let cartItem = this.cartItems.filter({ hasText: itemName });
        await cartItem.getByRole('button', { name: 'Remove' }).click();
    }

    async clickCheckoutBtn() {
        await this.checkoutBtn.click();
    }
}

export class CheckoutCart extends CartPage {

}