const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const renderTeam = require("./src/template");
let employees = [];

// input validations

const validateInput = (input) => !input ? "Oops! We are missing a response." : true;
const validateLetters = (input) => !/^[A-Za-z]+$/gi.test(input) ? "Oops! Letters only please." : true;
const validateNumbers = (input) => !/^[0-9]*$/g.test(input) ? "Oops! Numbers only please.":true;
const validateEmail = (input) => !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(input) ? "Oops! This is not a valid email address.":true;
 
init = () => {

// Create Manager Function
    createManager = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Manager's name?",
                validate: validateLetters
            },
            {
                type: "input",
                name: "id",
                message: "Manager's employee ID?",
                validate: validateNumbers
            },
            {
                type: "input",
                name: "email",
                message: "Manager's email?",
                validate: validateEmail,
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Manager's office number?",
                validate: validateNumbers

            },
            
            
        ]).then(({name, id, email, officeNumber}) => {
            const manager = new Manager(name, id, email, officeNumber);
            employees.push(manager);
            addNewRole();
        })
    };
    createManager();

    // Create Engineer Function
    createEngineer = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Engineer's name?",
                validate: validateLetters
            },
            {
                type: "input",
                name: "id",
                message: "Engineer's ID?",
                validate: validateNumbers
            },
            {
                type: "input",
                name: "email",
                message: "Engineer's email?",
                validate: validateEmail
            },
            {
                type: "input",
                name: "gitHub",
                message: "Engineer's GitHub?",
                validate: validateInput
            }
        ]).then(({name, id, email, gitHub}) => {
            const engineer = new Engineer(name, id, email, gitHub);
            employees.push(engineer);
            addNewRole();
        });
    };

    //Create Intern Function
    createIntern = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Intern's name?",
                validate: validateLetters
            },
            {
                type: "input",
                name: "id",
                message: "Intern's ID?",
                validate: validateNumbers
            },
            {
                type: "input",
                name: "email",
                message: "Intern's email?",
                validate: validateEmail
            },
            {
                type: "input",
                name: "school",
                message: "Intern's school?",
                validate: validateInput
            }
        ]).then(({name, id, email, school}) => {
            const intern = new Intern(name, id, email, school);
            employees.push(intern);
            addNewRole();
        });
    };

    // Prompt user to add another team member. 
    addNewRole = () => {
        inquirer.prompt([
            {
                type: "list",
                name: "newMember",
                message: "Would you like to add a new role?",
                choices: ["Engineer", "Intern", "No, generate my HTML"]
            }
        ]).then(({newMember}) => {
        
            if (newMember === "Engineer") {
                createEngineer();
            } else if (newMember === "Intern"){
                createIntern();
            }
            else {
                renderTeam(employees);
            };
        });
    }
};

init();