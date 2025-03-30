import { expect, test } from '../base.ts';

test('Should login then logout', async ({ 
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
  const loggedAccount = await headerPage.getAccount();
  console.log(loggedAccount);
  await expect(loggedAccount).toEqual('risri.playwright@gmail.com');
  await headerPage.logout();
  await headerPage.isLoggedOut();
});

test('Should register a new account', async({
  headerPage,
  registrationPage,
  homePage,
  registrationResultPage
}) => {
  await homePage.goto();
  await headerPage.register();
  await registrationPage.fullSuccessfullRegistration('Male', 'Risri', 'Bunry', 'rb667@pw7.com', 'ribu123');
  await registrationResultPage.isResultVisible();
  await expect(registrationResultPage.message).toHaveText('Your registration completed');
  await registrationResultPage.message.screenshot({ path: './screenshots/message.png' });
  await registrationResultPage.page.screenshot({ path: './screenshots/registrationResultPage.png' });
  await registrationResultPage.clickContinue();
  await expect(homePage.slider).toBeVisible();

});
