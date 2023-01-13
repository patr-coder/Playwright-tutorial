import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://ecommerce-playground.lambdatest.io/');

  await page.getByRole('button', { name: ' My account' }).click();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

  await page.getByPlaceholder('E-Mail Address').click();

  await page.getByPlaceholder('E-Mail Address').fill('patrickmukadi2017@gmail.com');

  await page.getByPlaceholder('Password').click();

  await page.getByPlaceholder('Password').fill('Masonwork2023.');

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');

  await page.getByRole('link', { name: ' Edit your account information' }).click();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/edit');

  await page.getByPlaceholder('First Name').click();

  await page.getByPlaceholder('Last Name').click();

  await page.getByPlaceholder('Last Name').fill('mukadi lumbala');

  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');

  await page.hover("//a[@data-toggle ='dropdown']//span[contains(.,'My account')]")

//   await page.getByRole('link', { name: 'Logout' }).click();
  // await page.click("//span[text()[normalize-space()='Logout']]")
  // await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/logout');
});