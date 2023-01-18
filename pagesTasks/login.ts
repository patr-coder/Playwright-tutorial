import { Page } from "@playwright/test";
// Login Class 
export default class Login{
    constructor(public page:Page){}
// Login in Method 
        async Login_In(email:string, password:string){
            await this.EnterEmail(email)
            await this.EnterPassword(password)
            await this.ClickLogin()
        }
    // Email input
    async EnterEmail(Email:string){
        await this.page.getByPlaceholder("E-Mail")
        .fill(Email)
    }
    // Password Input
    async EnterPassword(Password:string){
        await this.page.getByPlaceholder("Password")
        .fill(Password)
    }
    // Login Button 
    async ClickLogin(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.locator("input[type='submit']").click()
        ])  
    }
      // Time waitForTimeout 
    async Time(){
        await this.page.waitForTimeout(2000)
    }
}