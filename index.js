const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const { resolve } = require("path");

function init(){
    addHtml();
    createEmp();
};
const employees = [];
function createEmp() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's id number?"
        },
        {
            type: 'list',
            name: 'role',
            message: 'Please choose a role.',
            choices: ['Engineer', 'Intern', 'Manager'],

        }])
        .then(function ({name, id, email, role }){ 
            let addInfo = "";
            if (role === 'Engineer') {
                addInfo = "GitHub username";
            } else if (role === 'Intern') {
                addInfo = 'school name';
            } else {
                addInfo = 'office number';
            }
            inquirer.prompt([{
                type: 'input',
                name: 'addInfo',
                message: `Enter employee's ${addInfo}`
            },
            {
                type: 'list',
                name: 'addMore',
                message: "Would you like to add more employees?",
                choices: ["Yes", "No"]
            }])

                .then(function ({ addInfo, addMore}) {
                    let newEmp;
                    if (role === 'Engineer') {
                        newEmp = new Engineer(name, id, email, addInfo);
                    } else if (role === 'Intern') {
                        newEmp =  new Intern(name, id, email, addInfo);
                    } else {
                        newEmp = new Manager(name, id, email, addInfo);
                    }
                    employees.push(newEmp);
                    memHtml(newEmp)
                    .then(function () {
                        if (addMore === "Yes"){
                            createEmp();
                        } else {
                        endApp();
                    }
                });
        });
    });
};
function addHtml(){
    const layout = 
    `<!DOCTYPE html>
                 <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
                </head>
                <body>
                <header>
                <div class="jumbotron jumbotron-fluid" style="background-color: salmon;">
                <div class="container">
                <h1 class="display-4">My Team</h1>
                </header>

                   
            
                </div>`
                ;
    fs.appendFile("profile.html", layout, function (err){
        if (err){
            console.log(err);
        }
    })
};
function memHtml(emp){
    return new Promise(function(resolve, reject){
        const name = emp.getName();
        const role = emp.getRole();
        const id = emp.getId();
        const email = emp.getEmail();
        let layout = "";
        if (role === 'Engineer'){
            const gitHub = emp.getGithub();
            layout =  `<div class="card" style="width: 18rem; ">
            <div class="card-body" style="background-color: blue; color:white;">
            <h3 class="card-title">${name}</h3>
            <h4>${role}</h4>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">${gitHub}</li>
            </ul>
            </div>`;
        } else if (role === 'Intern'){
            const school = emp.getSchool();
            layout =  `<div class="card" style="width: 18rem; ">
            <div class="card-body" style="background-color: blue; color:white;">
            <h3 class="card-title">${name}</h3>
            <h4>${role}</h4>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">${school}</li>
            </ul>
            </div>`;
        } else {
            const officeNum = emp.getOfficenum();
            layout =  `<div class="card" style="width: 18rem; ">
            <div class="card-body" style="background-color: blue; color:white;">
            <h3 class="card-title">${name}</h3>
            <h4>${role}</h4>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">${officeNum}</li>
            </ul>
            </div>`
        }
        fs.appendFile('profile.html', layout, function (err){
            if (err){
                return reject(err);
            };
            return resolve();
        })
        });
    };
function endApp(){
    const eHtml = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>`;
    fs.appendFile('profile.html', eHtml, function (err){
        if (err) {
            console.log(err);
        };
    } )
};
  



init();



