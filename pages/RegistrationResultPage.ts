import { expect, type Locator, type Page } from "@playwright/test";

export class RegistrationResultPage {
    readonly page: Page;
    readonly pageContainer: Locator;
    readonly pageTitle: Locator;
    readonly message: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageContainer = page.locator('.registration-result-page');
        this.pageTitle = this.pageContainer.getByRole('heading', { name: 'Register' });
        this.message = this.pageContainer.locator('.result');
        this.continueButton = this.pageContainer.getByRole('button', { name: 'Continue' });
    }

    async isResultVisible() {
        await expect(this.pageContainer).toBeVisible();
    }

    async clickContinue() {
        await this.continueButton.click();
    }


}