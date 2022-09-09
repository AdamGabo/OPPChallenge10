const Intern = require("../lib/Intern");
const test = "School";
const id = 16; 
const email = "adam.gaboury@hotmail.com";
const name = "Adam";
const rValue = "Intern";
test("create a school object", () => {
    const e = new Intern(name, id, email, test);
    expect(e.school).toBe(test);
});
test("Get the school from the function/method", () => {
    const e = new Intern(name, id, email, test);
    expect(e.getSchool()).toBe(test);
});
test("Get the role from the function/method", () => {
    const e = new Intern(name, id, email, test);
    expect(e.getRole()).toBe(rValue);
});
