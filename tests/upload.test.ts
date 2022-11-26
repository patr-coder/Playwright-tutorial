import {test} from "@playwright/test";

test.describe("Upload  files", function (){
    test.beforeEach(async({page})=>{ 
        await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo")
    })
    test("Upload ", async ({page})=>{               

        await page.type("#textbox","File.txt ");
        await page.click("id=create")  
        const [download] = await Promise.all([
            page.waitForEvent("download"),
            page.click("a[download='Lambdainfo.txt']")
        ])
        const path = await download.path();
        console.log(path);
        await page.waitForTimeout(2000);
        await download.saveAs('File.txt') 
    })

    test("Upload  and save", async ({page})=>{  
        await page.type("#textbox","File name is lorem The HTML input input is an input element to enter an array of different values. Eash input type checkbox has value attribute which is used to define the value submitted by the checkbox."); 
        await page.click("id=create")  
        const [download] = await Promise.all([
            page.waitForEvent("download"),
            page.click("a[download='Lambdainfo.txt']")
        ])
        const fileName =  download.suggestedFilename()  
        await download.saveAs(fileName);
        // console.log(fileName);
        // await page.waitForTimeout(2000);
    })
})
test.describe("Download files", function (){
    test.beforeEach(async({page})=>{ 
        await page.goto("https://blueimp.github.io/jQuery-File-Upload/") 
    })
    test("download ", async({page})=>{
        await page.setInputFiles("input[type='file']",
        ["/Users/Patrick/Desktop/Learn_plyawright/uploadItems/laravel.png",
        "/Users/Patrick/Desktop/Learn_plyawright/uploadItems/RPA.png"]
        )
        await page.waitForTimeout(3000);

    })
    test("download multiples files ", async({page})=>{  
        const [uploadFiles] = await Promise.all([
            page.waitForEvent("filechooser"),
            page.click("input[name='files[]']")
        ]);
        const isMultiple = uploadFiles.isMultiple();
        console.log(isMultiple);
        await uploadFiles.setFiles(["/Users/Patrick/Desktop/Learn_plyawright/uploadItems/laravel.png","/Users/Patrick/Desktop/Learn_plyawright/uploadItems/RPA.png"])
        await page.waitForTimeout(3000);

    })

})