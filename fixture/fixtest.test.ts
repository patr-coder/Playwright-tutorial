import {test} from "./fixture"

test("fixture demo", async({age,email })=>{
    console.log(age,email.toUpperCase())
})