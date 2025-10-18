import { test, expect } from '@playwright/test';
//ชื่อเรื่องการทดสอบfacebook
test('facebook' , async({ page }) =>{
    await page.goto('https://www.facebook.com/');
    
    //Locator การระบุตำแหน่ง getByRole
   // await page.getByRole('button', { name: 'Log in'}).click();
   // await page.getByRole('button', { name: 'Create new account'}).click();
 //   await page.getByRole('textbox', { name: 'Email address or phone number'}).click();
      await page.getByRole('textbox', { name: 'Email address or phone number'}).fill("0631966902");
      await page.getByRole('textbox', { name: 'Password'}).fill("12345");
      

});
//Locator การระบุตำแหน่ง getByText
test('computer' , async({ page }) =>{
    await page.goto('https://computer.surin.rmuti.ac.th/computer/index.php');
      //Locator การระบุตำแหน่ง getByText
    await expect(page.getByText('Faculty of Agriculture and Technology')).toBeVisible();
    //Locator การระบุตำแหน่ง xpath
    await expect(page.locator('xpath=//*[@id="header"]/div[3]/ul/li[4]')).toBeVisible();
//    await expect(page.getByText('Faculty of Agriculture and Technology')).click();

});

test("facebook_register", async({ page }) =>{
  await page.goto("https://www.facebook.com/");
  await page.getByRole("button",{name:"Create new account"}).click();
  await page.getByRole('textbox', { name: 'First name'}).fill("porntip");
  await page.getByRole('textbox', { name: 'Surname'}).fill("poonsap");
  await page.getByRole('combobox', { name: 'Day'}).selectOption("2");
  await page.getByRole('combobox', { name: 'Month'}).selectOption("Apr");
  await page.getByRole('combobox', { name: 'Year'}).selectOption("2003");
  await page.getByRole('radio', { name: 'Female',exact:true}).click();
  await page.getByRole('textbox', { name: 'Mobile number or email address'}).fill("0631966902");
  await page.getByRole('textbox', { name: 'New password'}).fill("123456");
});
