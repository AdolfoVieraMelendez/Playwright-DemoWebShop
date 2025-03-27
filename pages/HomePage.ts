import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;    
    }
    

    async goto() {
        await this.page.goto('https://demowebshop.tricentis.com/');
    }
}