const Engineer = require("../lib/Engineer");
const test = "AdamGabo";
const id = 16; 
const email = "adam.gaboury@hotmail.com";
const name = "Adam";
const rValue = "Engineer";

test("create a github object", () => {
    const e = new Engineer(name, id, email, test);
    expect(e.github).toBe(test);
});

test("Get the github from the function/method", () => {
    const e = new Engineer(name, id, email, test);
    expect(e.getGithub()).toBe(test);
});

test("Get the role from the function/method", () => {
    const e = new Engineer(name, id, email, test);
    expect(e.getRole()).toBe(rValue);
});