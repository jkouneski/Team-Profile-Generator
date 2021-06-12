const Engineer = require("../lib/Engineer");

test ("Can get GitHub user", () => {
    const gitHub = "code4Lyfe";
    const e = new Engineer("Name", 1, "joey@testmail.com", gitHub);
    expect(e.github).toEqual(gitHub);
});

test ("getGithub() should return code4Lyfe", () => {
    const gitHub = "code4Lyfe";
    const e = new Engineer("Name", 1, "joey@testmail.com", gitHub);
    expect(e.getGithub()).toBe(gitHub);
});

test ("getRole() should return Enginer", () => {
    const role = "Engineer";
    const e = new Engineer(role);
    expect(e.getRole()).toEqual(role);
});