import { test } from '../base.ts';

test('Login and Logout', async ({ 
  headerPage,
  homePage,
  loginPage
 }) => {
  await homePage.goto();
  await headerPage.login();
  await loginPage.isReady();
  await loginPage.enterEmail('risri.playwright@gmail.com');
  await loginPage.enterPassword('pw123!');
  await loginPage.clickLogin();
  await headerPage.isLoggedIn();
  await headerPage.logout();
  await headerPage.isLoggedOut();
});
