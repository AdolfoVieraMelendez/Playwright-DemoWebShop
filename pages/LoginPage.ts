import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly loginContainer: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly remembermeCheck: Locator;
    readonly forgotPasswordLink: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginContainer = this.page.locator('.login-page');
        this.emailInput = this.page.locator('#Email');
        this.passwordInput = this.page.locator('#Password');
        this.remembermeCheck = this.page.locator('#RememberMe');
        this.forgotPasswordLink = this.page.locator('.forgot-password a');
        this.loginButton = this.page.locator('.login-button')
    }

    async isReady() {
        await expect(this.loginContainer).toBeVisible();
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }
}