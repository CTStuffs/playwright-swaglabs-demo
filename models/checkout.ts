import { expect, type Locator, type Page } from '@playwright/test';


export class CheckoutPage {
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly zipcodeField: Locator;
    readonly continueBtn: Locator;
    readonly finishBtn: Locator;
    readonly backHomeBtn: Locator;
    readonly paymentInfoVal: Locator;
    readonly shippingInfoVal: Locator;
    readonly subtotalVal: Locator;
    readonly taxVal: Locator;
    readonly totalVal: Locator;

    constructor(_page: Page) {
        this.page = _page;
        this.firstNameField = this.page.locator('[data-test="firstName"]');
        this.lastNameField = this.page.locator('[data-test="lastName"]');
        this.zipcodeField = this.page.locator('[data-test="postalCode"]');
        this.continueBtn = this.page.locator('[data-test="continue"]');
        this.finishBtn = this.page.locator('[data-test="finish"]');
        this.backHomeBtn = this.page.locator('[data-test="back-to-products"]');
        this.paymentInfoVal = this.page.locator('[data-test="payment-info-value"]');
        this.shippingInfoVal = this.page.locator('[data-test="shipping-info-value"]');
        this.subtotalVal = this.page.locator('[data-test="subtotal-label"]');
        this.taxVal = this.page.locator('[data-test="tax-label"]');
        this.totalVal = this.page.locator('[data-test="total-label"]');

    }

    async inputFirstStepDetails(firstName: string, lastName: string, zipcode: string) {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.zipcodeField.fill(zipcode);
    }

    async clickContinue() {
        await this.continueBtn.click();
    }

    async clickFinish() {
        await this.finishBtn.click();
    }

    async clickBackHome() {
        await this.backHomeBtn.click();
    }

    async checkCheckoutInfo(paymentInfo: string, shippingInfo: string, subtotal: string, tax: string, total: string) {
        await expect(this.paymentInfoVal).toHaveText(paymentInfo);
        await expect(this.shippingInfoVal).toHaveText(shippingInfo);
        await expect(this.subtotalVal).toHaveText('Item total: $' + subtotal);
        await expect(this.taxVal).toHaveText('Tax: $' + tax);
        await expect(this.totalVal).toHaveText('Total: $' + total);

    }
}