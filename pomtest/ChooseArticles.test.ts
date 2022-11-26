import{expect, test} from "@playwright/test"
import Login from "../pagesTasks/login"
import Register from "../pagesTasks/register"
import Home from "../pagesTasks/home"
import BuyArticles from "../pagesTasks/buy"

const email = "atrick@masonworkep.co.jp"
const password = "password"

// Register Customer Account 
 test.describe("Register Costumers", function (){
    test("Register", async({page, baseURL})=>{ 
        await page.goto(`${baseURL}route=account/register`)
        const register = new Register(page)
        await register.EnterFirstName("Danny")  
        await register.EnterLastName("Patrick")
        await register.EnterEmail(email)
        await register.EnterTelephone("73541416715")
        await register.EnterPassword(password)
        await register.ConfirmPassword(password)
        await register.checked()
        await register.condition()
        await register.continue() 
        await page.waitForTimeout(2000)
    })
 })
 // Using URL for each Block setting URL in playwright.config.ts file
 test.describe("Costumer Login in and Buy ", function(){
    test.beforeEach(async({page, baseURL})=>{
        await page.goto(`${baseURL}route=account/login`)
    })
    // Login in After create Account 
    test("Login", async({page, baseURL})=>{   
        const login = new Login(page)
        await login.EnterEmail(email) 
        await login.EnterPassword(password)
        await login.ClickLogin()   
        expect(await page.title()).toBe("My Account")
        await page.waitForTimeout(2000)
    })
    test("buying add to cart", async({page, baseURL})=>{    
        const login = new Login(page)
        const home = new Home(page)
        const buy = new BuyArticles(page)
        await login.Login_In(email,password)    
        await home.HomeClickHot()
        await buy.addFirstProductToTheCart() 
        await buy.isToastVisible()
        const  CartVisible = await buy.isToastVisible();
        expect(CartVisible).toBeVisible();

    })
 })


 