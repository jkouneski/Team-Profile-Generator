const Employee = require("../lib/Employee");

test("Can run employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object")
});

