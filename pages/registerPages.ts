import { Page } from "@playwright/test";
export default class RegisterPage{
  
    constructor(public page:Page) {

  }
   // FirstName input 
  async enterFirstName(FirstName:string) {

    await this.page.getByPlaceholder("First Name")
      .fill(FirstName);
  }
  // LastName input 
  async enterLastName(LastName:string){
    await this.page.getByPlaceholder("Last Name")
     .fill(LastName);
  }
  // Email Input
  async enterEmail(Email:string){
    await this.page.getByPlaceholder("E-Mail")
     .fill(Email);
  }
  // Telephone input 
  async enterTelephone(Telephone:string){
    await this.page.getByPlaceholder("Telephone")
    .fill(Telephone)
  }
  // Password input 
  async enterPassword(password:string){
    await this.page.locator("input[name='password']")
    .fill(password)
  }
  // Confirm password input 
  async enterConfirmPassword(ConfirmPassword:string){
    await this.page.getByPlaceholder("Password Confirm")
    .fill(ConfirmPassword)
  }
  // Function checked
  async isSubscribeChecked(){
    return await this.page.locator("label[for='input-newsletter-no']").isChecked()
  }
  // Function Condition 
  async clickAgreeCondition(){
    await this.page.click("label[for='input-agree']")
  }
  // function condition 
  async clickContinue(){
    await Promise.all([
      this.page.waitForNavigation({waitUntil: "networkidle"}),
      this.page.locator("input[type='submit']").click()
    ])
  }
  // Function continue 
  async time(){
    await this.page.waitForTimeout(5000)
  }
 
}