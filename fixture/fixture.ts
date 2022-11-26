import{test as myTest} from "@playwright/test";

// type Patrick = {
//     age: number,
//     email:string
// }

const MyFixtureTest = myTest.extend<{age:number,email:string}>({
    age: 50,
    email: "patrick@gmail.com"
})
export const test = MyFixtureTest;
