import { Page } from "@playwright/test";
// Register Costumer 
export default class Register{
    
    constructor(public page:Page){

    }
    // FirstName input 
async EnterFirstName(FirstName:string){

    await this.page.locator("input[name='firstname']")
    .fill(FirstName);
}
// LastName input 
async EnterLastName(LastName:string){
    await this.page.getByPlaceholder("Last Name")
    .fill(LastName)
}
// Email Input
async EnterEmail(Email:string){
    await this.page.getByPlaceholder("E-Mail")
    .fill(Email)
}
// Telephone input 
async EnterTelephone(Telephone:string){
    await this.page.getByPlaceholder("Telephone")
    .fill(Telephone);
}
// Password input 
async EnterPassword(password:string){
    await this.page.locator("input[name='password']")
    .fill(password)
  }
  // Confirm password input 
async ConfirmPassword(PasswordConfirm:string){
    await this.page.getByPlaceholder("Password Confirm")
    .fill(PasswordConfirm)
}

// Function checked
async checked(){
    return this.page.locator("label[for='input-newsletter-no']").isChecked()
}
// function Condition
async condition(){
    await this.page.click("label[for='input-agree']")
}
// Function continue 
async continue(){
    await Promise.all([
        this.page.waitForNavigation({waitUntil:"networkidle"}),
        this.page.locator("input[type='submit']").click()
    ])
}
}