const fs = require("fs");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
let teamElArr;

const renderTeam = (employees) => {
    teamElArr = employees?.map((element) => {
        if (element instanceof Manager) {
            return renderManager(element);
        } else if (element instanceof Engineer) {
            return renderEngineer (element);
        } else if (element instanceof Intern) {
            return renderIntern (element);
        }
    });

    const writeHTML = html(teamElArr);
    fs.writeFile("dist/index.html", writeHTML, (err) =>
    console.log("Your HTML output is now available in the dist folder")

    );
};

const html = (teamElArr) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class = "text-center">
            <h1>My Team</h1>
        </div>
    </header>
    <main class="container">
        <div class="row">
            ${teamElArr.join("")}
        </div>
    </main>
</body>
</html>`;

const renderManager = ({ name, id, email, officeNumber }) =>
    `<div class="col-md-6 col-lg-4">
    <div class="card">
        <div class="card-header">
            <h2>${name}</h2>
            <h3><i class="fas fa-glasses"></i> Manager</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">Office Number: ${officeNumber}</li>
        </ul>
    </div>
</div>`;

const renderEngineer = ({ name, id, email, github }) =>
    `<div class="col-md-6 col-lg-4">
    <div class="card">
        <div class="card-header">
            <h2>${name}</h2>
            <h3><i class="fas fa-mug-hot"></i> Engineer</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">GitHub: ${github}</li>
        </ul>
    </div>
</div>`;

const renderIntern = ({ name, id, email, school }) =>
    `<div class="col-md-6 col-lg-4">
    <div class="card">
        <div class="card-header">
            <h2>${name}</h2>
            <h3><i class="fas fa-user-graduate"></i> Intern</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">School: ${school}</li>
        </ul>
    </div>
</div>`;

module.exports = renderTeam;

