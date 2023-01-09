import{test, expect} from "@playwright/test";
test.use({viewport: {width:390, height:884}})
test("device", async function({page}){
    await page.goto("http://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.viewportSize()?.width)
    console.log(await page.viewportSize()?.height)

    await page.getByPlaceholder("username").type("Admin",{delay:200});
    await page.getByPlaceholder("Password").type("admin123",{delay:200});
    await page.locator("//button[@type='submit']").click();

    // await expect(page.getByText("Dashboard")).toBeVisible(); 
    await page.waitForTimeout(3000);
})