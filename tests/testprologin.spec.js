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
test('loginpersonnel', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/pro/');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('admin');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('admin.min');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: '✏️เพิ่มบุคลากร' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้ (Username)' }).fill('jira');
  await page.getByRole('textbox', { name: 'รหัสผ่าน (Password)' }).fill('123456');
  await page.getByRole('button', { name: ' บันทึก' }).click();
  await page.screenshot({path:"test-results/screenshot2.png",fullPage:true});
});
test('loginpersonnel1', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/pro/');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('admin');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('admin.min');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: '✏️เพิ่มบุคลากร' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้ (Username)' }).fill('');
  await page.getByRole('textbox', { name: 'รหัสผ่าน (Password)' }).fill('');
  await page.getByRole('button', { name: ' บันทึก' }).click();
  await page.screenshot({path:"test-results/screenshot14.png",fullPage:true});
});
test('loginpersonnel2', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/pro/');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('admin');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('admin.min');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: '✏️เพิ่มบุคลากร' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้ (Username)' }).fill('jira');
  await page.getByRole('textbox', { name: 'รหัสผ่าน (Password)' }).fill('');
  await page.getByRole('button', { name: ' บันทึก' }).click();
  await page.screenshot({path:"test-results/screenshot15.png",fullPage:true});
});
test('loginpersonnel3', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/pro/');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('admin');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('admin.min');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: '✏️เพิ่มบุคลากร' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้ (Username)' }).fill('');
  await page.getByRole('textbox', { name: 'รหัสผ่าน (Password)' }).fill('123456');
  await page.getByRole('button', { name: ' บันทึก' }).click();
  await page.screenshot({path:"test-results/screenshot16.png",fullPage:true});
});
test('loginpersonnel4', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/pro/');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('admin');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('admin.min');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: '✏️เพิ่มบุคลากร' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้ (Username)' }).fill('admin');
  await page.getByRole('textbox', { name: 'รหัสผ่าน (Password)' }).fill('123456');
  await page.screenshot({path:"test-results/screenshot17.png",fullPage:true});
});
test('loginpersonnel5', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/pro/');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('admin');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('admin.min');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: '✏️เพิ่มบุคลากร' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้ (Username)' }).fill('');
  await page.getByRole('textbox', { name: 'รหัสผ่าน (Password)' }).fill('');
  await page.getByRole('button', { name: ' บันทึก' }).click();
  await page.screenshot({path:"test-results/screenshot18.png",fullPage:true});
});
test('branch', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/pro/');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('admin');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('admin.min');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: '🌿 แก้ไขสาขา' }).click();
  await page.getByRole('link', { name: ' เพิ่มสาขา' }).click();
  await page.getByRole('textbox', { name: 'ชื่อสาขา' }).fill('เมคคา');
  await page.getByRole('button', { name: ' บันทึก' }).click();
  await expect(page.getByRole('cell', { name: 'เมคคา' })).toBeVisible();
  await page.screenshot({path:"test-results/screenshot19.png",fullPage:true});
});
test('branch1', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/pro/');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('admin');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('admin.min');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: '🌿 แก้ไขสาขา' }).click();
  await page.getByRole('link', { name: ' เพิ่มสาขา' }).click();
  await page.getByRole('textbox', { name: 'ชื่อสาขา' }).fill('');
  await page.getByRole('button', { name: ' บันทึก' }).click();
  await page.screenshot({path:"test-results/screenshot20.png",fullPage:true});
});