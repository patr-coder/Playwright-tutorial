import{Page} from "@playwright/test"
// Login Class 
export default class LoginPage {
    constructor(public page:Page){}
    // Login in Method 
      async login(email:string, password:string){
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginButton(); 
      }
    // Email input
    async enterEmail(Email:string){
        await this.page.getByPlaceholder("E-Mail Address")
        .fill(Email)
    }
     // Password Input
    async enterPassword(password:string){
        await this.page.locator("input[type='password']")
        .fill(password)
      }
      // Login Button 
      async clickLoginButton(){
        await Promise.all([
          this.page.waitForNavigation(),
          await this.page.locator("input[type='submit']").click()
        ])
        
      }
      // Time waitForTimeout 
      async WaitTime(){
        await this.page.waitForTimeout(5000)
      }  
}