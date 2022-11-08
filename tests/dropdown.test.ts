import{ test, expect} from "@playwright/test"

test("dropdown select", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    await page.selectOption("#select-demo",{
        // label: "Friday"
        // index: 1
        value : "Monday"
    })
    await page.waitForTimeout(5000);

    await page.selectOption("#multi-select",[{
        label: "Florida"
    }, {
        index: 4
    }, {
        value : "Washington"
    },])
})
// first way 
test("Dropdown type value first way", async({page})=>{
    await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    await page.locator("span[aria-label='Country'] b[role='presentation']").click();
    await page.fill("input[role='combobox']","Canada")

    
})
// second way 
test.only("Dropdown type value second way", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")
    await page.click("#country+span");
    await page.locator("#select2-country-results")
        .locator("li",{
            hasText: "India"
        }).click()
        await page.waitForTimeout(3000)
 
})
// third way 

test.only("Dropdown type value second way with multiple selected", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")
    await selectCountry("India");
    await selectCountry("Denmark");
    await selectCountry("south Africa");

    async function selectCountry(countryName){

    await page.click("#country+span");
    await page.locator("#select2-country-results")
        .locator("li",{
            hasText: countryName
        }).click()
    }
    })