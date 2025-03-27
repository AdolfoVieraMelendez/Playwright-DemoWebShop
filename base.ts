import { test as base } from '@playwright/test';
import { HeaderPage } from './pages/miscellaneous/HeaderPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';

type MyFixtures = {
    headerPage: HeaderPage;
    homePage: HomePage;
    loginPage: LoginPage;
}

export const test = base.extend<MyFixtures>({
    headerPage: async ({ page }, use) => {
        await use(new HeaderPage(page))
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    }
});

export { expect } from '@playwright/test';