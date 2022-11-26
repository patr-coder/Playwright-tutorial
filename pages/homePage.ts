import{expect,Page} from "@playwright/test"
// Home Page Dashboard and Click button , Wait Navigation 
export default class HomePage{

    constructor(public page:Page){

    }
    async clickSpecialHotMenu(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}),
            await this.page.click(".badge.mx-1.mz-menu-label-27")
        ])
    
       
    }
    async title(){ 
       await expect(this.title()).toBe("My Account");
    }
}