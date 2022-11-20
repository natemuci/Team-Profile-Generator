const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

function addEmp(){
    inquirer
        .prompt([
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

            },

        ])
        .then((data) => {
            fs.writeFile("profile.html", layOut(data), (err) =>
                (err) ? console.log(err) : console.log('Success!'));
        });
        const layOut = ({name, email, id, role}) =>
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
                      
                    </div>
                  </div>
            </header>
            <div class="card" style="width: 18rem;">
                
                <div class="card-body" style="background-color: blue; color:white;">
                  <h4 class="card-title">${name}</h4>
                  <h3>${role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Id: ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">${role}</li>
                    </ul>
                </div>    
                
              </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>`
};
addEmp();