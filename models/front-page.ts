import { expect, type Locator, type Page } from '@playwright/test';


export class FrontPage {
    readonly page: Page;
    //readonly inventoryList: Locator;
    readonly inventoryItems: Locator;

    constructor(_page: Page) {
        this.page = _page;
        this.inventoryItems = _page.locator('[data-test="inventory-item"]');

    }

    async addItemToCart(itemName: string) {

        await this.inventoryItems.filter({ hasText: itemName }).getByRole('button', {
            name: 'Add to cart'
        }).click();

        // for some reason, the data-test attributes for the add and remove buttons include the item names in this test website
        // which means each add/remove button has its own unique data-test!
        // this may be a bug
        //.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    }

}