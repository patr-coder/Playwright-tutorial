import{expect, test} from "@playwright/test"
// Frame Fisrt way with two frames and find numbers of frames on page 
test("First way Frame interact", async ({page})=>{             
    await page.goto("https://letcode.in/frame") 
    const allFrames = page.frames();
    console.log("Number.of frames:" + allFrames.length);

    const frame = page.frameLocator("#firstFr");
    await frame.locator("input[name='fname']").fill("Patrick Mukadi")
    await frame.locator("input[name='lname']").fill("Lumbala")
    expect(await frame?.locator("p.title.has-text-info").textContent()).toContain("You have entered")
    

   
    const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill("patrick@gmail.com")       
    await page.waitForTimeout(3000);
})

// Frame second way 
test(" Second way Frame interact", async ({page})=>{
    await page.goto("https://letcode.in/frame")
    const allFrames = page.frames();
    console.log("Number.of frames:" + allFrames.length);

    const myFrame = page.frame("firstFr");
    await myFrame?.fill("input[name='fname']", "Mukadi")
    await myFrame?.fill("input[name='lname']", "Patrick");
    expect(await myFrame?.locator("p.title.has-text-info").textContent()).toContain("You have entered")
    await page.waitForTimeout(3000);
})

// Frame with conditions
test(" Second way Frame interact with conditions", async ({page})=>{
    await page.goto("https://letcode.in/frame")
    const allFrames = page.frames();
    console.log("Number.of frames:" + allFrames.length);

    const myFrame = page.frame("firstFr");
    if(myFrame != null){
        await myFrame.fill("input[name='fname']","")
        await myFrame.fill("input[name='lname']", "");
    }
    await myFrame?.fill("input[name='fname']", "Mukadi")
    await myFrame?.fill("input[name='lname']", "Patrick");
    await page.waitForTimeout(3000);
    expect(await myFrame?.locator("p.title.has-text-info").textContent()).toContain("You have entered") 
})