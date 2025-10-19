import { test, expect } from '@playwright/test';
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
test('test00022', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).fill('ศักดิ์ชัย');
  await page.getByRole('textbox', { name: 'นามสกุล' }).click();
  await page.getByRole('textbox', { name: 'นามสกุล' }).fill('โอษฐงามมมม');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('duke007x');
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).fill('a123123123');
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' }).fill('a123123123');
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).click();
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).fill('0987654321');
  await page.getByRole('textbox', { name: 'อีเมล' }).click();
  await page.getByRole('textbox', { name: 'อีเมล' }).fill('abcde@gmail.com');
  await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
  await expect(page.getByRole('heading', { name: ' วิธีการใช้งาน' })).toBeVisible();
  await page.screenshot({path:"test-results/screenshot22.png",fullPage:true});
});


test('test00023', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).click();
  await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
  await page.screenshot({path:"test-results/screenshot23.png",fullPage:true});
});


test('test00024', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).fill('ศักดิ์ชัย');
  await page.getByRole('textbox', { name: 'นามสกุล' }).click();
  await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
  await page.screenshot({path:"test-results/screenshot24.png",fullPage:true});
});


test('test00025', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).fill('ศักดิ์ชัย');
  await page.getByRole('textbox', { name: 'นามสกุล' }).click();
  await page.getByRole('textbox', { name: 'นามสกุล' }).fill('โอษฐงาม');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
  await page.screenshot({path:"test-results/screenshot25.png",fullPage:true});
});


test('test00026', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).fill('ศักดิ์ชัย');
  await page.getByRole('textbox', { name: 'นามสกุล' }).click();
  await page.getByRole('textbox', { name: 'นามสกุล' }).fill('โอษฐงาม');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('duke00777');
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).click();
  await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
  await page.screenshot({path:"test-results/screenshot26.png",fullPage:true});
});


test('test00027', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).fill('ศักดิ์ชัย');
  await page.getByRole('textbox', { name: 'นามสกุล' }).click();
  await page.getByRole('textbox', { name: 'นามสกุล' }).fill('โอษฐงาม');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('duke000777');
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).fill('a123456');
  await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
  await page.screenshot({path:"test-results/screenshot27.png",fullPage:true});
});


test('test00028', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).fill('ศักดิ์ชัย');
  await page.getByRole('textbox', { name: 'นามสกุล' }).click();
  await page.getByRole('textbox', { name: 'นามสกุล' }).fill('โอษฐงาม');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('duke000777');
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).fill('a123456');
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' }).fill('a123456');
  await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
  await page.screenshot({path:"test-results/screenshot28.png",fullPage:true});
});


test('test00029', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).fill('ศักดิ์ชัย');
  await page.getByRole('textbox', { name: 'นามสกุล' }).click();
  await page.getByRole('textbox', { name: 'นามสกุล' }).fill('โอษฐงาม');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('duke000777');
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).fill('a123456');
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' }).fill('a123456');
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).click();
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).fill('0987654321');
  await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
  await page.screenshot({path:"test-results/screenshot29.png",fullPage:true});
});
test('test00030', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('duke');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('007');
  await page.getByRole('button', { name: ' เข้าสู่ระบบ' }).click();
  await page.getByRole('button', { name: 'ปิด' }).click();
  await expect(page.getByRole('link', { name: ' ตะกร้า' })).toBeVisible();
  await page.getByRole('link', { name: ' ตะกร้า' }).click();
  await expect(page.getByRole('heading', { name: '🛒 รายการที่คุณเลือก' })).toBeVisible();
  await page.screenshot({path:"test-results/screenshot30.png",fullPage:true});
});


test('test00031', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('duke');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('007');
  await page.getByRole('button', { name: ' เข้าสู่ระบบ' }).click();
  await page.getByRole('button', { name: 'ปิด' }).click();
  await expect(page.getByRole('link', { name: ' ตะกร้า' })).toBeVisible();
  await page.getByRole('link', { name: ' ตะกร้า' }).click();
  await expect(page.getByRole('heading', { name: '🛒 รายการที่คุณเลือก' })).toBeVisible();
  await page.screenshot({path:"test-results/screenshot31.png",fullPage:true});
});


test('test00032', async ({ page }) => {
      await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
    await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
    await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('duke');
    await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('007');
    await page.getByRole('button', { name: ' เข้าสู่ระบบ' }).click();
    await page.getByRole('button', { name: 'ปิด' }).click();

    // 2. เพิ่มสินค้าลงในตะกร้า (เพื่อให้แน่ใจว่าลิงก์ชำระเงินปรากฏ)
    await page.locator('.btn.btn-success').first().click(); 
    
    // 3. ไปที่ตะกร้า
    await page.getByRole('link', { name: ' ตะกร้า' }).click();
    
    // 4. คลิก 'ชำระเงิน' ของสินค้าชิ้นแรก (เปิด Modal QR Code)
    const payLink = page.getByRole('link', { name: ' ชำระเงิน' }).first();
    await payLink.waitFor({ state: 'visible' }); 
    await payLink.click();
    
    // 5. คลิก 'ยืนยันการชำระเงิน' (ภายใน Modal QR Code)
    const confirmLink = page.getByRole('link', { name: '✅ ยืนยันการชำระเงิน' });
    await confirmLink.waitFor({ state: 'visible' }); 
    await confirmLink.click();
    
    // * การจัดการ Modal QR Code หลังจากคลิกยืนยัน *
    // คาดว่า Modal จะหายไปทันทีหลังจากคลิก 'ยืนยันการชำระเงิน'
    const qrModal = page.locator('#qrModal'); 
    
    // ใช้ expect เพื่อรอให้ Modal หายไปอย่างชัดเจน
    await expect(qrModal).toBeHidden({ timeout: 10000 }); // รอ 10 วินาทีให้ Modal ปิด
    
    // 6. คลิก 'ชำระเงิน' อีกครั้งเพื่อไปยังหน้าแจ้งโอน
    // การคลิกครั้งที่สองนี้อาจช้าเนื่องจากมีการเปลี่ยนหน้าเว็บ
    await page.getByRole('button', { name: '✅ ยืนยันการชำระเงิน' }).click();
    await page.screenshot({path:"test-results/screenshot32.png",fullPage:true});
});


test('test00033', async ({ page }) => {
await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/fornend/login.php');
    
    // 2. เข้าสู่ระบบ
    // ลบ await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click(); ที่ซ้ำซ้อนออก
    const usernameTextbox = page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' });
    await usernameTextbox.click();
    await usernameTextbox.fill('duke');
    
    await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
    await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('007');
    await page.getByRole('button', { name: ' เข้าสู่ระบบ' }).click();

    // 3. จัดการ Pop-up/Modal หลัง Login
    // ตรวจสอบ Pop-up 'วิธีการชำระเงิน'
    await expect(page.getByRole('button', { name: ' วิธีการชำระเงิน' })).toBeVisible();
    await page.getByRole('button', { name: 'ปิด' }).click();

    // 4. ไปที่ตะกร้า
    await expect(page.getByRole('link', { name: ' ตะกร้า' })).toBeVisible();
    await page.getByRole('link', { name: ' ตะกร้า' }).click();
    
    // 5. คลิกที่รายการในตะกร้า (สมมติว่าเป็นรายการที่สองหรือรายการเดียว)
    // * การแก้ไข: ใช้ getByText เพื่อหาองค์ประกอบที่ชัดเจนกว่า *
    const itemLocator = page.locator('div').filter({ hasText: '📕 กลุ่มวิชา การพัฒนาระบบด้วยเทคโนโลยีสมัยใหม่' });
    
    // ตรวจสอบว่ารายการที่ต้องการคลิกปรากฏ (ใช้ .nth(1) หากมีการอ้างอิงถึงรายการที่สอง)
    const targetItem = itemLocator.nth(1); // หรือใช้ .first()
    

    // 6. จับภาพหน้าจอ
    await page.screenshot({path:"test-results/screenshot33.png",fullPage:true});
});


test('test00034', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('duke');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('007');
  await page.getByRole('button', { name: ' เข้าสู่ระบบ' }).click();
  await page.getByRole('button', { name: 'ปิด' }).click();
  await expect(page.getByRole('link', { name: ' ตะกร้า' })).toBeVisible();
  await page.getByRole('link', { name: ' ตะกร้า' }).click();
  await expect(page.getByRole('heading', { name: '🛒 รายการที่คุณเลือก' })).toBeVisible();
  await page.screenshot({path:"test-results/screenshot34.png",fullPage:true});
});




test('test00035', async ({ page }) => {
    // 1. นำทางไปยังหน้าหลัก
    await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
    
    // 2. เข้าสู่ระบบ
    await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
    await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('duke');
    await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('007');
    await page.getByRole('button', { name: ' เข้าสู่ระบบ' }).click();
    
    // 3. ปิด Modal หลัง Login
    await page.getByRole('button', { name: 'ปิด' }).click();

    // 4. ตรวจสอบลิงก์ตะกร้า (ยังอยู่บนหน้าหลัก)
    const cartLink = page.getByRole('link', { name: ' ตะกร้า' });
    await expect(cartLink).toBeVisible();
    
    // 5. * การแก้ไข: คลิกเพื่อไปที่หน้าตะกร้า *
    await cartLink.click();
    
    // 6. ตรวจสอบ Heading (ตอนนี้ควรอยู่บนหน้าตะกร้าแล้ว)
    await expect(page.getByRole('heading', { name: '🛒 รายการที่คุณเลือก' })).toBeVisible();
    
    // 7. ลบการตรวจสอบ Heading ที่ซ้ำซ้อนออก
    
    // 8. จับภาพหน้าจอ
    await page.screenshot({path:"test-results/screenshot35.png",fullPage:true});
});



test('test00036', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/index.php');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('duke');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('007');
  await page.getByRole('button', { name: ' เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: ' วิธีการใช้งาน' })).toBeVisible();
  await page.getByRole('button', { name: 'ปิด' }).click();
  const userButton = page.getByRole('button', { name: ' ศักดิ์ชัย7 โอษฐงาม' });
  await expect(userButton).toBeVisible();
  await userButton.click(); 
  const profileLink = page.getByRole('link', { name: ' โปรไฟล์' });
  await expect(profileLink).toBeVisible();
  await profileLink.click();
  await expect(page.getByRole('heading', { name: '👤 แก้ไขโปรไฟล์' })).toBeVisible();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('ศักดิ์ชัย7');
  await page.locator('input[name="surname"]').click();
  await page.locator('input[name="surname"]').fill('โอษฐงาม8');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('aodngam@gmail.com2');
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('0987654324');
  await page.getByRole('textbox', { name: 'ปล่อยว่างหากไม่เปลี่ยน' }).click();
  await page.getByRole('textbox', { name: 'ปล่อยว่างหากไม่เปลี่ยน' }).fill('007');
  await page.getByRole('button', { name: '💾 บันทึกการเปลี่ยนแปลง' }).click();
  await expect(page.getByText('✅ บันทึกการเปลี่ยนแปลงเรียบร้อยแล้ว')).toBeVisible();
  await page.screenshot({ path: 'test-results/screenshot36.png', fullPage: true });
});


test('test00037', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('duke');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('007');
  await page.getByRole('button', { name: ' เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('button', { name: ' วิธีการชำระเงิน' })).toBeVisible();
  await page.getByRole('button', { name: 'ปิด' }).click();
  await expect(page.getByRole('button', { name: ' ศักดิ์ชัย7 โอษฐงาม' })).toBeVisible();
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/fornend/edit_profile.php');
  await expect(page.getByRole('heading', { name: '👤 แก้ไขโปรไฟล์' })).toBeVisible();
  await page.locator('input[name="surname"]').click();
  await page.locator('input[name="surname"]').fill('');
  await page.getByRole('button', { name: '💾 บันทึกการเปลี่ยนแปลง' }).click();
  await page.screenshot({ path: 'test-results/screenshot37.png', fullPage: true });
});




test('test00038', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/fornend/login.php');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('duke');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('007');
  await page.getByRole('button', { name: ' เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: ' วิธีการใช้งาน' })).toBeVisible();
  await page.getByRole('button', { name: 'ปิด' }).click();
  await expect(page.getByRole('button', { name: ' ศักดิ์ชัย7 โอษฐงาม' })).toBeVisible();
  await page.getByRole('button', { name: ' ศักดิ์ชัย7 โอษฐงาม' }).click();
  await page.getByRole('link', { name: ' โปรไฟล์' }).click();
  await expect(page.getByRole('heading', { name: '👤 แก้ไขโปรไฟล์' })).toBeVisible();
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('');
  await page.getByRole('button', { name: '💾 บันทึกการเปลี่ยนแปลง' }).click();
    await page.screenshot({ path: 'test-results/screenshot38.png', fullPage: true });
});


test('test00039', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/index.php');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('duke');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('007');
  await page.getByRole('button', { name: ' เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: ' วิธีการใช้งาน' })).toBeVisible();
  await page.getByRole('button', { name: 'ปิด' }).click();
  await expect(page.getByRole('button', { name: ' ศักดิ์ชัย7 โอษฐงาม' })).toBeVisible();
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/fornend/edit_profile.php');
  await expect(page.getByRole('heading', { name: '👤 แก้ไขโปรไฟล์' })).toBeVisible();
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('');
  await page.getByRole('button', { name: '💾 บันทึกการเปลี่ยนแปลง' }).click();
  await page.screenshot({ path: 'test-results/screenshot39.png', fullPage: true });
});


test('test00040', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/fornend/login.php');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('duke');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('007');
  await page.getByRole('button', { name: ' เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: ' วิธีการใช้งาน' })).toBeVisible();
  await page.getByRole('button', { name: 'ปิด' }).click();
  await expect(page.getByRole('button', { name: ' ศักดิ์ชัย7 โอษฐงาม' })).toBeVisible();
  await page.getByRole('button', { name: ' ศักดิ์ชัย7 โอษฐงาม' }).click();
  await page.getByRole('link', { name: ' โปรไฟล์' }).click();
  await expect(page.getByRole('heading', { name: '👤 แก้ไขโปรไฟล์' })).toBeVisible();
  await page.getByRole('textbox', { name: 'ปล่อยว่างหากไม่เปลี่ยน' }).click();
  await page.getByRole('textbox', { name: 'ปล่อยว่างหากไม่เปลี่ยน' }).fill('007');
  await page.getByRole('button', { name: '💾 บันทึกการเปลี่ยนแปลง' }).click();
  await expect(page.getByText('✅ บันทึกการเปลี่ยนแปลงเรียบร้อยแล้ว')).toBeVisible();
  await page.screenshot({ path: 'test-results/screenshot40.png', fullPage: true });
});