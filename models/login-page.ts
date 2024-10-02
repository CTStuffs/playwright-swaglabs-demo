import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginBtn: Locator;
    readonly errorMsgBox: Locator;

    constructor(_page: Page) {
        this.page = _page;
        this.usernameField = _page.locator('[data-test="username"]');
        this.passwordField = _page.locator('[data-test="password"]');
        this.loginBtn = _page.locator('[data-test="login-button"]');
        this.errorMsgBox = _page.locator('[data-test="error"]');

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