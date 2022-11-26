import {expect, test} from "../base/pomFixture";
import * as data from "../test-data/identity-test-data.json";
// specify browser 
// test.use({
//     browserName: "firefox",
// })


test.describe("page object test demo", function(){
    test("Register Costumers test_01", async({page,baseURL,registerPage})=>{  

        await page.goto(`${baseURL}route=account/register`);
        // const registerPage = new  RegisterPage(page);
        await registerPage.enterFirstName(data.FirstName);
        await registerPage.enterLastName(data.LastName);
        await registerPage.enterEmail(data.Email);
        await registerPage.enterTelephone(data.Telephone)
        await registerPage.enterPassword(data.password); 
        await registerPage.enterConfirmPassword(data.password);
        await registerPage.isSubscribeChecked()
        await registerPage.clickAgreeCondition();
        await registerPage.clickContinue();    
        await registerPage.time();
    })
    // Using URL for each Block setting URL playwright.config.ts file
    test.describe("login and add to cart",function() {
        test.beforeEach(async ({ page, baseURL }) => {
            await page.goto(`${baseURL}route=account/login`) 
        
        });  
    })
    // 
    
    test("Login test_02", async({page, baseURL, loginPage, homePage})=>{    
        await page.goto(`${baseURL}route=account/login`)  
        // const Login = new LoginPage(page);
        
        await loginPage.enterEmail(data.Email); 
        await loginPage.enterPassword(data.password);
        await loginPage.clickLoginButton();  
        // await homePage.title(); 
        expect (await page.title()).toBe("My Account");              
        await loginPage.WaitTime();
           
    })
    test("Add to cart test_03", async({page, baseURL, loginPage,registerPage,homePage,specialHotPage})=>{   
        // const login = new LoginPage(page);
        // const homePage = new HomePage(page);
        // const specialHotPage = new SpecialHotPage(page);
        await page.goto(`${baseURL}route=account/login`) 
        await loginPage.login(data.Email,data.password);
        await homePage.clickSpecialHotMenu(); 
        await specialHotPage.addFirstProductToTheCart();
        const isCartVisible = await specialHotPage.isToastVisible();  
        await expect(isCartVisible).toBeVisible();       
    
    })
})


