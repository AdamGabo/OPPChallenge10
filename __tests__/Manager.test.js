const Manager = require("../lib/Manager");
const id = 16; 
const email = "adam.gaboury@hotmail.com";
const name = "Adam";
const oN = 1-800-555-5555;
const rValue = "Manager";
test("can create office number object", () => {
    const e = new Manager(name, id, email, oN);
    expect(e.officeNumber).toBe(oN);
});
test("Get the office number from the function/method", () => {
    const e = new Manager(name, id, email, oN);
    expect(e.getOfficeNumber()).toBe(oN);
});
test("Get the role from the function/method", () => {
    const e = new Manager(name, id, email, oN);
    expect(e.getRole()).toBe(rValue);
});