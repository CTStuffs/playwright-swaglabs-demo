import { expect, type Locator, type Page } from '@playwright/test';


export class FrontPage {
    readonly page: Page;
    readonly inventoryList: Locator;
    readonly inventoryItems: Locator;

    constructor(_page: Page) {
        this.page = _page;
        this.inventoryItems = _page.locator('[data-test="inventory-item"]');

    }

    async addItemToCart(itemName: string) {

        await this.inventoryItems.filter({ hasText: itemName }).locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    }

}