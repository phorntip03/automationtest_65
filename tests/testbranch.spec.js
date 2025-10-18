import { test, expect } from '@playwright/test';
test('branch', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/pro/');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('admin');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('admin.min');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: '🌿 แก้ไขสาขา' }).click();
  await page.getByRole('link', { name: ' เพิ่มสาขา' }).click();
  await page.getByRole('textbox', { name: 'ชื่อสาขา' }).click();
  await page.getByRole('textbox', { name: 'ชื่อสาขา' }).fill('เมคคา');
  await page.getByRole('button', { name: ' บันทึก' }).click();
  await expect(page.getByRole('cell', { name: 'เมคคา' })).toBeVisible();
  await page.screenshot({path:"test-results/screenshot.png",fullPage:true});
});
test('branch1', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/pro/');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('admin');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('admin.min');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: '🌿 แก้ไขสาขา' }).click();
  await page.getByRole('link', { name: ' เพิ่มสาขา' }).click();
  await page.getByRole('button', { name: ' บันทึก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อสาขา' }).click();
  await page.screenshot({path:"test-results/screenshot.png",fullPage:true});
});