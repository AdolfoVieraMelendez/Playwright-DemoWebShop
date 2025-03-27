import { expect, type Locator, type Page } from '@playwright/test';

export class HeaderPage {
    readonly page: Page;
    readonly registerLink: Locator;
    readonly loginLink: Locator;
    readonly shoppingCartLink: Locator;
    readonly wishListLink: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerLink = page.locator('a.ico-register');
        this.loginLink = page.locator('[href="/login"]');
        this.shoppingCartLink = page.locator('//a[./span[normalize-space(.)="Shopping cart"]]');
        this.wishListLink = page.locator('.ico-wishlist');
        this.logoutLink = page.locator('.ico-logout');
    }

    async login() {
        await this.loginLink.click();
    }

    async logout() {
        await this.logoutLink.click();
    }

    async isLoggedIn() {
        await expect(this.logoutLink).toBeVisible();
    }

    async isLoggedOut() {
        await expect(this.loginLink).toBeVisible();
    }

}