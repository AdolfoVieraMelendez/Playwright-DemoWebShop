import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly pageContainer: Locator;
    readonly slider: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageContainer = page.locator('.home-page');
        this.slider = this.pageContainer.locator('#nivo-slider');
    }
    

    async goto() {
        await this.page.goto('https://demowebshop.tricentis.com/');
    }
}