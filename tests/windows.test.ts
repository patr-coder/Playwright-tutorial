import{ expect, Page, test } from "@playwright/test";

test.describe("navigation",function() {
    test.beforeEach(async ({ page }) => {
      // Go to the starting url before each test.
      await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    });

let facebookPage: Page;
test.only("Windows Interact with one tabs", async ({page})=>{

    // await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    
    console.log(page.url());

    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("a[title='Follow @Lambdatesting on Twitter']")
    ]);
    console.log(newWindow.url());
})
test("Windows Interact with multiple tabs", async ({page})=>{

    // await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
   
    
    console.log(page.url());
 
    const [newWindows] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("a[title='Follow @Lambdatesting on Facebook']"),
        await page.waitForTimeout(3000)
        


    ]);
    await newWindows.waitForLoadState(); // wait all url to be loaded

    const pages = newWindows.context().pages();
    console.log('No of tabs : ' + pages.length)

    pages.forEach(tab => {    // loop all urls
        console.log(tab.url())
    })

   
    for (let index = 0; index < pages.length; index++){
        const url = pages[index].url()
        if(url === "https://www.facebook.com/lambdatest/"){
            facebookPage = pages[index]
        }
    }
    const text = await facebookPage.textContent("h1")
    console.log(text)

});
});
