const Intern = require("../lib/Intern");

test ("Can get school", () => {
    const school = "MIT";
    const e = new Intern("Name", 1, "joey@testmail.com", school);
    expect(e.school).toEqual(school);
});

test ("getSchool() should return MIT", () => {
    const school = "MIT";
    const e = new Intern("Name", 1, "joey@testmail.com", school);
    expect(e.getSchool()).toBe(school);
});

test ("getRole() should return Intern", () => {
    const role = "Intern";
    const e = new Intern(role);
    expect(e.getRole()).toEqual(role);
});