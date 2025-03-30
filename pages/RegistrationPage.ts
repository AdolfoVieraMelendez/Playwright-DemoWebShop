import { expect, type Locator, type Page } from '@playwright/test';

export class RegistrationPage {
    readonly page: Page;
    readonly registrationContainer: Locator;
    readonly pageTitle: Locator;
    readonly genderMaleRadio: Locator;
    readonly genderFemaleRadio: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registrationContainer = page.locator('.registration-page');
        this.pageTitle = page.getByRole('heading', { name: 'Register' });
        this.genderMaleRadio = page.getByRole('radio', { name: 'Male', exact: true });
        this.genderFemaleRadio = page.getByRole('radio', { name: 'Female' });
        this.firstNameInput = page.locator('#FirstName');
        this.lastNameInput = page.locator('#LastName');
        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.confirmPasswordInput = page.locator('#ConfirmPassword');
        this.registerButton = page.getByRole('button', { name: 'Register' });
    }

    async isRegistrationVisible() {
        await expect(this.registrationContainer).toBeVisible();
    }

    /**
     * Selects a gender
     * 
     *  @param gender - Male | Female 
     */ 
    async selectGender(gender: string) {
        if (gender !== 'Male' && gender !== 'Female') {
            throw new Error(`Invalid option: ${gender}. Please use "Male" or "Female".`);
        }

        const genderSelector = gender === 'Male' ? this.genderMaleRadio : this.genderFemaleRadio;
        await genderSelector.check();
    }

    async enterFirstName(name: string) {
        await this.firstNameInput.fill(name);
    }

    async enterLastName(name: string) {
        await this.lastNameInput.fill(name);
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async enterConfirmPassword(password: string) {
        await this.confirmPasswordInput.fill(password);
    }

    async clickRegister() {
        await this.registerButton.click();
    }

    async fullSuccessfullRegistration(gender: string, firstName: string, lastName: string, email: string, password: string) {
        await this.isRegistrationVisible();
        await this.selectGender(gender);
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.enterConfirmPassword(password);
        await this.clickRegister();
    }

}