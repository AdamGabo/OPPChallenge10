const Employee = require("../lib/Employee");
const id = 16; 
const email = "adam.gaboury@hotmail.com";
const name = "Adam";
const rValue = "Employee";

test("Create a instance of a Employee Test", () => {
    const e = new Employee(name, id, email);
    expect(e.id).toEqual(expect.any(Number));
    expect(e.email).toEqual(expect.any(String));
    expect(e.name).toEqual(expect.any(String));
})
test("Email Test", () => {
    const e = new Employee(name, id, email);
    expect(e.email).toBe(email);
})
test("ID Test", () => {
    const e = new Employee(name, id);
    expect(e.id).toEqual(expect.any(Number));
})
test("Name Test", () => {
    const e = new Employee(name);
    expect(e.name).toBe(name);
})
test("Get the name from the function/method", () => {
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
})
test("Get the email from the function/method", () => {
    const e = new Employee(name, id, email);
    expect(e.getEmail()).toBe(email);
})
test("Get the id from the function/method", () => {
    const e = new Employee(name, id);
    expect(e.getId()).toBe(id);
})
test("Get the role from the function/method", () => {
    const e = new Employee(name, id, email);
    expect(e.getRole()).toBe(rValue);
})