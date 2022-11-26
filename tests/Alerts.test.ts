import { expect, Expect, test } from "@playwright/test";
test("handle",async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    page.on("dialog", async(alert)=>{
        const text = alert.message();
        console.log(text);;
        await alert.accept();

    })
    await page.locator("button[class='btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900']").click()
    
})
test("handle button OK ",async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    page.on("dialog", async(alert)=>{
        const text = alert.message();
        console.log(text);
        await alert.accept();

    })
    await page.locator("p[class='text-gray-900 text-size-16 mt-10 text-black font-bold'] button[type='button']").click()
    expect(page.locator("#confirm-demo")).toContainText("You pressed OK!")
    // await expect(page.getByAltText()) 
})
test("handle button Cancel ",async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    page.on("dialog", async(alert)=>{
        const text = alert.message();
        console.log(text);;
        // await alert.accept();
        await alert.dismiss();

    })
    await page.locator("p[class='text-gray-900 text-size-16 mt-10 text-black font-bold'] button[type='button']").click()
    expect(page.locator("#confirm-demo")).toContainText("Cancel!")
})
// test("handle button input name ",async ({page}) => {     

//     await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo") 
//     page.on("dialog", async(alert)=>{
//         const text = alert.defaultValue();
//         console.log(text);;
//         await alert.accept("Patrick");
//         // await alert.dismiss();

//     })
    // await page.locator("p[class='text-gray-900 text-size-16 mt-10 text-black font-bold'] button[type='button']").click()
    // await page.locator("p[class='text-gray-900 ml-10 text-size-16 mt-10 text-black font-bold'] button[type='button']").click();
    // await expect(page.locator("#prompt-demo")).toContainText("Patrick")

    // await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")
    // await page.locator("button[data-target='#myModal']").click();
    // await page.locator("body > div:nth-child(1) > section:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click();  

// })

