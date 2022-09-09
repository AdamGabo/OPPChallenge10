const Engineer = require("../lib/Engineer");
const item = "AdamGabo";
const id = 16; 
const email = "adam.gaboury@hotmail.com";
const name = "Adam";
const rValue = "Engineer";

test("create a github object", () => {
    const e = new Engineer(name, id, email, item);
    expect(e.github).toBe(item);
});

test("Get the github from the function/method", () => {
    const e = new Engineer(name, id, email, item);
    expect(e.getGithub()).toBe(item);
});

test("Get the role from the function/method", () => {
    const e = new Engineer(name, id, email, item);
    expect(e.getRole()).toBe(rValue);
});