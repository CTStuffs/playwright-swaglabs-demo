
import { test, expect } from '@playwright/test';
import { LoginPage } from "../models/login-page";
import { FrontPage } from "../models/front-page";
import { HeaderBar } from "../models/header-bar";
import { CartPage } from "../models/cart";
import data from '../test-data/items.json';


test.beforeEach(async ({ page }) => {
    let loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.inputCredentials("standard_user", "secret_sauce");
    await loginPage.clickLoginBtn();
});


test.describe('cart tests', () => {

    test.skip('add item to cart and check it is present', async ({ page }) => {
        let frontPage = new FrontPage(page);
        let headerBar = new HeaderBar(page);
        let cartPage = new CartPage(page);

        await frontPage.addItemToCart(data.itemName);
        await headerBar.checkCartCapacity("1");
        await headerBar.clickCartIcon();
        await expect(page).toHaveURL("/cart.html");

        await cartPage.checkCartItem(data.itemName, data.itemDesc, "1", data.itemPrice);


    });

    test('add item and then delete it from cart', async ({ page }) => {
        let frontPage = new FrontPage(page);
        let headerBar = new HeaderBar(page);
        let cartPage = new CartPage(page);

        await frontPage.addItemToCart(data.itemName);
        await headerBar.checkCartCapacity("1");
        await headerBar.clickCartIcon();
        await expect(page).toHaveURL("/cart.html");

        await cartPage.checkCartItem(data.itemName, data.itemDesc, "1", data.itemPrice);
        await cartPage.deleteItem(data.itemName);
        await cartPage.checkCartEmpty();

    });


})
