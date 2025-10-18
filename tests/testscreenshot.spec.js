import { test, expect } from '@playwright/test';

test('screenshot',async({ page }) =>{
    await page.goto("https://computer.surin.rmuti.ac.th/sc/fornend/");
//คำสั่งในการถ่ายภาพหน้าจอ
    await page.screenshot({path:"screenshot.png"});

    await page.getByRole("link",{name:"เข้าสู่ระบบ"}).click();

    await page.screenshot({path:"test-results/screenshot2.png",}); 

    await page.screenshot({path:"test-results/screenshot3.png",fullPage:true});
});


test('kmutnb',async({ page }) =>{
    await page.goto("https://computer.surin.rmuti.ac.th/sc/fornend/");
//คำสั่งในการถ่ายภาพหน้าจอ
    await page.screenshot({path:"test-results/screenshot2.png",}); 

    await page.screenshot({path:"test-results/screenshot3.png",fullPage:true});

    await page.locator("nav").screenshot({path:"test-results/screenshot4.png",}); 
    await page.locator("footer").screenshot({path:"test-results/screenshot5.png",}); 
    //ถ้าต้องการระบุตำแหน่งตาม class ใช้ . id ใช้ #
    await page.locator(".vehicle_section").screenshot({path:"test-results/screenshot6.png",}); 
});

test('jaoh',async({ page }) =>{
   await page.goto("https://computer.surin.rmuti.ac.th/sc/fornend/");
});

test('jaohhh',async({ page }) =>{
    await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
    await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).dblclick();
    await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click();
    await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('aoh');
    await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
    await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('aoh1234');
    await page.getByRole('button', { name: ' เข้าสู่ระบบ' }).dblclick();
    await expect(page.getByRole('heading', { name: 'กลุ่มวิชาเรียนทั้งหมด' })).toBeVisible();
    await page.locator('div:nth-child(3) > .card > .card-body > .d-flex > .btn.btn-primary').click();
    await expect(page.getByRole('heading', { name: 'การทำนายแบบเกษตรแม่นยำ' })).toBeVisible();
});
