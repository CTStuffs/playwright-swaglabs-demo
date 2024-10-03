
import { test as base } from '@playwright/test';
import { LoginPage } from "../models/login-page";
import { FrontPage } from "../models/front-page";
import { HeaderBar } from "../models/header-bar";
import { CartPage, CheckoutCart } from "../models/cart";
import { CheckoutPage } from '../models/checkout';
import data from '../test-data/test-data.json';

type MyFixtures = {
    loginPage: LoginPage;
    frontPage: FrontPage;
    headerBar: HeaderBar;
    cartPage: CartPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await loginPage.inputCredentials(data.credentials.username, data.credentials.badPassword);
        await loginPage.clickLoginBtn();

        await use(loginPage);

    },

    frontPage: async ({ page }, use) => {
        await use(new FrontPage(page));
    },
    headerBar: async ({ page }, use) => {
        await use(new HeaderBar(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },

})

export { expect } from '@playwright/test';

