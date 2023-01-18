import { Page } from "@playwright/test";
export default class SpecialHotPage{

    constructor(public page:Page){

    }
    async addFirstProductToTheCart(){
        await this.page.hover("(//img[@class='lazy-load'])[1]",{
            strict:false,
        })
        await this.page.locator("(//button[@title='Add to Cart'])[1]").click();
        
    }
    async isToastVisible(){
        const toast =  this.page.locator("a.btn.btn-primary.btn-block");
        // const toast = this.page.locator("a.list-group-item.active");
        await toast.waitFor({state: "visible"})
        return toast;

    }
}
