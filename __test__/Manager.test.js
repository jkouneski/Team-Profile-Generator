const Manager = require("../lib/Manager");

test ("Can get office number", () => {
    const officeNumber = 123;
    const e = new Manager("Name", 1, "joey@testmail.com", officeNumber );
    expect(e.officeNumber).toEqual(officeNumber);
});

test ("getOfficeNumber() should return 123", () => {
    const officeNumber = 123;
    const e = new Manager("Name", 1, "joey@testmail.com", officeNumber);
    expect(e.getOfficeNumber()).toBe(officeNumber);
});

test ("getRole should return Manager", () => {
    const role = "Manager";
    const e = new Manager(role);
    expect(e.getRole()).toEqual(role);
});