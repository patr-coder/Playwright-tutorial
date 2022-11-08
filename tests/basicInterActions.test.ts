import { expect,test } from "@playwright/test";
test("basic Interaction with inputs",async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message")
    console.log(await messageInput.inputValue());

    await messageInput.type("hi Patrick");
})

test("sum", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const sum1 = page.locator("#sum1")
    const sum2 = page.locator("#sum2")

    const validButton = page.locator("form#gettotal>button");
    let num1 = 500;
    let num2 = 400;
    await sum1.type("" + num1);
    await sum2.type("" + num2);

    await validButton.click();
    const result = page.locator("#addmessage")
    console.log(await result.textContent());
    let expectedResult = num1 + num2;
    await expect(result).toHaveText("" + expectedResult)
})
test("checkbox", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    const SingleCheck = await page.locator("#isAgeSelected")
    expect(SingleCheck).not.toBeChecked();
    await SingleCheck.check();
    await expect(SingleCheck).toBeChecked();

}) 