const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

init = () => {
    createManager = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Manager's name?",
                //validate:
            },
            {
                type: "input",
                name: "id",
                message: "Manager's ID?",
                //validate:
            },
            {
                type: "input",
                name: "email",
                message: "Manager's email?",
                //validate:
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Manager's office number?",
                //validate:
            }
        ]).then(({name, id, email, officeNumber }) => {
            const manager = new Manager(name, id, email, officeNumber);
            console.log(manager);
        });
    };
    createManager();
};

init();