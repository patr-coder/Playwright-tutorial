import{expect, test} from "@playwright/test"
test("Frame interact", async ({page})=>{
    await page.goto("https://letcode.in/frame")
    const allFrames = page.frames();
    console.log("Number.of frames:" + allFrames.length);
    
    const myFrame = page.frame("firstFr");
    // if(myFrame != null){
    //     await myFrame.fill("","")
    // }
    await myFrame?.fill("input[name='fname']", "Mukadi")
    await myFrame?.fill("input[name='lname']", "Patrick");

    expect(await myFrame?.locator("p.title.has-text-info").textContent()).toContain("You have entered")
    
    await page.waitForTimeout(3000);

})