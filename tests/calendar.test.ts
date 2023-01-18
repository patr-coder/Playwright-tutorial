import { test} from "@playwright/test";
// install moment for calendar format dateTime format npm install moment
import moment from "moment";

test.describe('calendar', function(){
    test.beforeEach(async({page})=>{
        await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
    })
    test("calendar demo using fill function", async({page})=>{
        let date = "2022-11-15"
    

    await page.fill("id=birthday", date)
    await page.waitForTimeout(3000)

    })
    // First way 
    test('calendar demo using moment First way ', async({page})=>{
        let date = "1989-02-18"
        await page.click("input[placeholder='Start date']")
        await page.fill("input[placeholder='Start date']",date)
        await page.waitForTimeout(3000)

    })
    test('calendar demo using moment Second way', async({page})=>{      

        let date = "1989-02-18"
        const month = page.locator("input[placeholder='Start date']")
        await month.click();

        const monthLabel = page.locator("//table[@class='table-condensed']/thead[1]/tr[2]/th[2]")
        const prev = page.locator("div[class='datepicker-days'] th[class='prev']")
        const  next = page.locator(".active.selected.range-start.range-end.day")

        await prev.click()
        // await page.click("td[data-date='1665360000000']") 
        // await page.waitForTimeout(3000)

           
    })
    // While loop is selected month and year 
    test("Calendar selector month ", async({page})=>{ 
        await page.click("input[placeholder='Start date']")
       
        const monthLabel = page.locator("div[class='datepicker-days'] th[class='datepicker-switch']")
        const prev = page.locator("div[class='datepicker-days'] th[class='prev']")
        const  next = page.locator(".active.selected.range-start.range-end.day")


        let dateSelected : string = "March 2022"
        while( await monthLabel.textContent() != dateSelected){  
            await prev.click();

        }
    }) 
    test("Calendar selector month with moment package  format and isBefore ", async({page})=>{ 
        await page.click("input[placeholder='Start date']")
       
        const monthLabel = page.locator("div[class='datepicker-days'] th[class='datepicker-switch']")
        const prev = page.locator("div[class='datepicker-days'] th[class='prev']")
        // const  next = page.locator(".active.selected.range-start.range-end.day")
        const nextClick = page.locator("div[class='datepicker-days'] th[class='next']")


        let dateSelected : string = "October 2022"
        const ThisMonth = moment(dateSelected, "MMMM YYYY").isBefore();
               console.log("This month " + ThisMonth)

        while( await monthLabel.textContent() != dateSelected){  
        
            if(ThisMonth){
                await prev.click(); 
              
            }else{
                await nextClick.click();  
               
            }
        }
        await page.click("td[data-date='1665360000000']")
        await page.waitForTimeout(3000)
    }) 
    test("Calendar selector month with moment package  format  and isAfter", async({page})=>{ 
        await page.click("input[placeholder='Start date']")
       
        const monthLabel = page.locator("div[class='datepicker-days'] th[class='datepicker-switch']")
        const prev = page.locator("div[class='datepicker-days'] th[class='prev']")
        // const  next = page.locator(".active.selected.range-start.range-end.day")
        const nextClick = page.locator("div[class='datepicker-days'] th[class='next']")


        
        let dateSelected : string = "December 2022"
        // let dateSelected : string = "January 2025"
        const ThisMonth = moment(dateSelected, "MMMM YYYY").isAfter();
               console.log("This month " + ThisMonth)

        while( await monthLabel.textContent() != dateSelected){  
        
            if(ThisMonth){
                await nextClick.click();  
             
              
            }else{
               
                await prev.click(); 
                 
            }
        }
        await page.click("tbody tr:nth-child(5) td:nth-child(7)")
        await page.waitForTimeout(3000);
    }) 
    
    // using function 
    test("Calendar Using Function", async({page})=>{    
       
        await SelectDay(5,"December 2019");
        await page.reload();
        // await SelectDay("july 2022");
        await page.waitForTimeout(3000);

        async function SelectDay(date:number,dateSelected: string) {
            await page.click("input[placeholder='Start date']")
            const monthLabel = page.locator("div[class='datepicker-days'] th[class='datepicker-switch']");
            const prev = page.locator("div[class='datepicker-days'] th[class='prev']");
            const nextClick = page.locator("div[class='datepicker-days'] th[class='next']");



        
            const ThisMonth = moment(dateSelected, "MMMM YYYY").isBefore();
            console.log("This month " + ThisMonth);
            while (await monthLabel.textContent() != dateSelected) {  
                if (ThisMonth) {
                    await prev.click();                  
                } else {
                    await nextClick.click();  
                }
            }
            // await page.click("tbody tr:nth-child(5) td:nth-child(7)");
            // await page.click("//td[@class='day'][text()='${date}']"); 
            // await page.click("//td[@class='active selected range-start range-end day'])[${date}]")
            
        }
    }) 
})  