import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginBtn: Locator;
    readonly errorMsgBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('[data-test="username"]');
        this.passwordField = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[data-test="login-button"]');
        this.errorMsgBox = page.locator('[data-test="error"]');

    }

    async clickLoginBtn() {
        await this.loginBtn.click();
    }

    async inputCredentials(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
    }

    async checkErrorMsg(message: string) {
        await expect(this.errorMsgBox).toHaveText(message);
    }

    async goto() {
        await this.page.goto("/");

    }
}