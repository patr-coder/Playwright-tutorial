import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registerPages"
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import SpecialHotPage from "../pages/specialHotPage";

const email = "network@t-partynersnrsyst.co.jp";
const password = "0123456789";

// Register Customer Account 
test.describe("page object test demo", function(){
    test("Register Costumers test_01", async({page,baseURL})=>{  

        await page.goto(`${baseURL}route=account/register`);
        const register = new  RegisterPage(page);
        await register.enterFirstName("partners");
        await register.enterLastName("patron");
        await register.enterEmail(email);
        await register.enterTelephone("08965767556")
        await register.enterPassword(password); 
        await register.enterConfirmPassword(password);
        await register.isSubscribeChecked()
        await register.clickAgreeCondition();
        await register.clickContinue();   
        await register.time();
    })
    // Using URL for each Block setting URL playwright.config.ts file
    test.describe("login and add to cart",function() {
        test.beforeEach(async ({ page, baseURL }) => {
            await page.goto(`${baseURL}route=account/login`) 
        
        });  
    })
    // 
    test("Login test_02", async({page, baseURL})=>{    
        await page.goto(`${baseURL}route=account/login`) 
        const Login = new LoginPage(page);
        await Login.enterEmail(email); 
        await Login.enterPassword(password);
        await Login.clickLoginButton();  
        expect (await page.title()).toBe("My Account");       
        await Login.WaitTime();
           
    })
    test("Add to cart test_03", async({page, baseURL})=>{   
        const login = new LoginPage(page);
        const homePage = new HomePage(page);
        const specialHotPage = new SpecialHotPage(page);
        await page.goto(`${baseURL}route=account/login`)
        await login.login(email,password);
        await homePage.clickSpecialHotMenu(); 
        await specialHotPage.addFirstProductToTheCart();
        const isCartVisible = await specialHotPage.isToastVisible();  
        expect(isCartVisible).toBeVisible();
    
    })
})


