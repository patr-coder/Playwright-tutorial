import { Page } from "@playwright/test";
export default class Home{
    // Home Page Dashboard and Click button , Wait Navigation 
    constructor(public page:Page){ }
    async HomeClickHot(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.click(".badge.mx-1.mz-menu-label-27")

        ])
    }
}