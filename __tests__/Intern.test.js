const Intern = require("../lib/Intern");
const item = "School";
const id = 16; 
const email = "adam.gaboury@hotmail.com";
const name = "Adam";
const rValue = "Intern";
test("create a school object", () => {
    const e = new Intern(name, id, email, item);
    expect(e.school).toBe(item);
});
test("Get the school from the function/method", () => {
    const e = new Intern(name, id, email, item);
    expect(e.getSchool()).toBe(item);
});
test("Get the role from the function/method", () => {
    const e = new Intern(name, id, email, item);
    expect(e.getRole()).toBe(rValue);
});
