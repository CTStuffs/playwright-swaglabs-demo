

import { CheckoutCart } from "../models/cart";
import { CheckoutPage } from '../models/checkout';
import data from '../test-data/test-data.json';
import { test, expect } from "../fixtures/my-fixture";

test.beforeEach(async ({ page, loginPage }) => {
    await page.goto('/');
    await loginPage.inputCredentials("standard_user", "secret_sauce");
    await loginPage.clickLoginBtn();
});


test.describe('cart tests', () => {

    test('add item to cart and check it is present', async ({ page, frontPage, headerBar, cartPage }) => {

        await frontPage.addItemToCart(data.items[0].itemName);
        await headerBar.checkCartCapacity("1");
        await headerBar.clickCartIcon();
        await expect(page).toHaveURL("/cart.html");

        await cartPage.checkCartItem(data.items[0].itemName, data.items[0].itemDesc, "1", data.items[0].itemPrice);


    });

    test('add item and then delete it from cart', async ({ page, frontPage, headerBar, cartPage }) => {

        await frontPage.addItemToCart(data.items[0].itemName);
        await headerBar.checkCartCapacity("1");
        await headerBar.clickCartIcon();
        await expect(page).toHaveURL("/cart.html");

        await cartPage.checkCartItem(data.items[0].itemName, data.items[0].itemDesc, "1", data.items[0].itemPrice);
        await cartPage.deleteItem(data.items[0].itemName);
        await cartPage.checkCartEmpty();

    });

    test('checkout cart and pay for multiple items', async ({ page, frontPage, headerBar, cartPage }) => {
        let checkoutPage = new CheckoutPage(page);
        let checkoutCart = new CheckoutCart(page);

        await frontPage.addItemToCart(data.items[0].itemName);
        await frontPage.addItemToCart(data.items[1].itemName);
        await headerBar.checkCartCapacity("2");
        await headerBar.clickCartIcon();
        await expect(page).toHaveURL("/cart.html");

        await cartPage.checkCartItem(data.items[0].itemName, data.items[0].itemDesc, "1", data.items[0].itemPrice);
        await cartPage.checkCartItem(data.items[1].itemName, data.items[1].itemDesc, "1", data.items[1].itemPrice);
        await cartPage.clickCheckoutBtn();

        await checkoutPage.inputFirstStepDetails(data.personalDetails.firstName, data.personalDetails.lastName, data.personalDetails.zipcode);
        await checkoutPage.clickContinue();

        await checkoutCart.checkCartItem(data.items[0].itemName, data.items[0].itemDesc, "1", data.items[0].itemPrice);
        await checkoutCart.checkCartItem(data.items[1].itemName, data.items[1].itemDesc, "1", data.items[1].itemPrice);
        await checkoutPage.checkCheckoutInfo(data.paymentInfo.card, data.paymentInfo.shipping, data.paymentInfo.itemTotal, data.paymentInfo.tax, data.paymentInfo.fullTotal);
        await checkoutPage.clickFinish();
        await expect(page).toHaveURL("/checkout-complete.html");

        // to check the text here, visual testing such as Applitools would be great

        await checkoutPage.clickBackHome();
        await expect(page).toHaveURL("/inventory.html");

    });


})
