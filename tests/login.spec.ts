import { test, expect } from '@playwright/test';
import { LoginPage } from "../models/login-page";
import data from '../test-data/test-data.json';

test.beforeEach(async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    await page.goto('/');
});

test.describe('login tests', () => {

    test('login test with successful credentials', async ({ page }) => {
        let loginPage = new LoginPage(page);

        await loginPage.inputCredentials(data.credentials.username, data.credentials.password);
        await loginPage.clickLoginBtn();
        await expect(page).toHaveURL("/inventory.html");
    });


    test('login test with incorrect credentials', async ({ page }) => {
        let loginPage = new LoginPage(page);

        await loginPage.inputCredentials(data.credentials.username, data.credentials.badPassword);
        await loginPage.clickLoginBtn();
        await loginPage.checkErrorMsg("Epic sadface: Username and password do not match any user in this service");

    });

    test('login test with locked out user credentials', async ({ page }) => {
        let loginPage = new LoginPage(page);

        // in a real automation suite, we'd actually input the credentials three times to perform the lock out, then reset via DB command  for that user later on
        // but saucedemo doesn't allow for that, so we're using the credentials it provided anyway
        await loginPage.inputCredentials(data.credentials.lockedOutUsername, data.credentials.password);
        await loginPage.clickLoginBtn();
        await loginPage.checkErrorMsg("Epic sadface: Sorry, this user has been locked out.");

    });



})

