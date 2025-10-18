import { test, expect } from '@playwright/test';
test('gooele' , async({ page }) =>{
      //Locator การระบุตำแหน่ง  
    await page.goto('https://www.Google.com//');
    //await page.goto('https://computer.surin.rmuti.ac.th/computer/index.php');
    await page.getByRole('combobox', { name: 'Search Google or type a URL'}).fill("สาขาเทคโนโลยีคอมพิวเตอร์ คณะเกษตรศาสตร์และเทคโนโลยี มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน สุรินทร์");
    //Locator การระบุตำแหน่ง  

});
