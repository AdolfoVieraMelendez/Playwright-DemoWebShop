import { test as base } from '@playwright/test';
import { HeaderPage } from './pages/miscellaneous/HeaderPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { RegistrationResultPage } from './pages/RegistrationResultPage';

type MyFixtures = {
    headerPage: HeaderPage;
    homePage: HomePage;
    loginPage: LoginPage;
    registrationPage: RegistrationPage;
    registrationResultPage: RegistrationResultPage;
}

export const test = base.extend<MyFixtures>({
    headerPage: async ({ page }, use) => {
        await use(new HeaderPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    
    registrationPage: async ({ page }, use) => {
        await use(new RegistrationPage(page));
    },

    registrationResultPage: async({ page }, use) => {
        await use(new RegistrationResultPage(page));
    }
});

export { expect } from '@playwright/test';