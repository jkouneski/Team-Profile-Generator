const Employee = require("../lib/Employee");

test("Can run employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object")
});

test ("Can get name", () => {
    const name = "Joey";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test ("Can get id", () => {
    const id = 1;
    const e = new Employee("Name", id);
    expect(e.id).toBe(id);
});

test ("Can get email", () => {
    const email = "joey@testmail.com";
    const e = new Employee("Name", 1, email);
    expect(e.email).toBe(email);
});


test ("getName() should return Joey", () => {
    const name = "Joey";
    const e = new Employee(name);
    expect(e.getName()).toEqual(name);
});

test ("getId() should return 1", () => {
    const id = 1;
    const e = new Employee("Name", id);
    expect(e.getId()).toEqual(id);
});

test ("getemail() should return joey@testmail.com", () => {
    const email = "joey@testmail.com";
    const e = new Employee("Name", 1, "joey@testmail.com");
    expect(e.getEmail()).toEqual(email);
});

test ("getRole() should return Employee", () => {
    const role = "Employee";
    const e = new Employee(role);
    expect(e.getRole()).toEqual(role);
});
