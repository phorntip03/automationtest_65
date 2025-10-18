import { test, expect } from '@playwright/test';
test('login', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/pro/');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('admin');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('admin.min');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: '📊 ยินดีต้อนรับสู่ระบบจัดการฐานข้อมูลหลักสูตรระยะสั้น' })).toBeVisible();
  await page.screenshot({path:"test-results/screenshot.png",fullPage:true});
});
test('loginn', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/pro/');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('admin');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('admin.min');
  //await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({path:"test-results/screenshot21.png",fullPage:true});
});
test('login1', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/pro/');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('adminn');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('admin.min');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({path:"test-results/screenshot3.png",fullPage:true});
});
test('login2', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/pro/');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('admin');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('admin.minn');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({path:"test-results/screenshot4.png",fullPage:true});
});
test('login3', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/pro/');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('adminn');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('admin.minn');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({path:"test-results/screenshot5.png",fullPage:true});
});
