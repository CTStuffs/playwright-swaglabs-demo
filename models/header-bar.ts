import { expect, type Locator, type Page } from '@playwright/test';

export class HeaderBar {
    readonly page: Page;
    readonly shoppingCartIcon: Locator;
    readonly shoppingCartBadge: Locator;
    constructor(_page: Page) {
        this.page = _page;
        this.shoppingCartIcon = _page.locator('[data-test="shopping-cart-link"]');
        this.shoppingCartBadge = _page.locator('[data-test="shopping-cart-badge"]');
    }

    async clickCartIcon() {
        await this.shoppingCartIcon.click();
    }

    async checkCartCapacity(val: string) {
        await expect(this.shoppingCartBadge).toHaveText(val);
    }


}