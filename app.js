const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");

const employees = []
let id=1

function askQuestion() {
    inquirer.prompt([
        {
            type: "list",
            message: "what do you want to do",
            choices: ["add manager", "add engineer", "add intern","quit"],
            name: "selection"
        }
    ]).then(function (userInput) {
        switch (userInput.selection) {
            case "add manager":
                addManager()
                break
            case "add engineer":
                addEngineer()
                break
            case "add intern":
                addIntern()
                break
              case "quit":
                  quit()
                  break

        }
    })
}
function quit(){
    const team=render(employees)
    fs.writeFile(outputPath,team,function(){
        console.log("success")
    })
}

function addManager(){
   inquirer.prompt([
        {
            type:"input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your email",
            name: "email"
        },
        {
            type:"input",
            message: "whats your office number",
            name: "officeNumber"
        }
   ]).then(function(userInput){
       const manager=new Manager(userInput.name,id++,userInput.email,userInput.officeNumber)
      employees.push(manager)
      askQuestion()
    })
}

function addEngineer(){
    inquirer.prompt([
        {
            type:"input",
            massage:"what is your name",
            name: "name"
        },
        {
            type:"input",
            message:"what is your email",
            name: "email"
        },
        {
            type:"input",
            message:"what is your git hub",
            name:"github" 
        }
    ]).then(function(userInput){
       const engineer=new Engineer (userInput.name,id++,userInput.email,userInput.github)
        employees.push(engineer)
        askQuestion()
    })

}

function addIntern(){
    inquirer.prompt([
        {
            type:"input",
            message:"what is your name",
            name:"name"
        },
        {
            type:"input",
            message:"what is your email",
            name:"email"
        },
        {
            type:"input",
            message:"what is your school",
            name:"school"
        }
    ]).then(function(userInput){
        const intern=new Intern(userInput.name,id++,userInput.email,userInput.school)
      employees.push(intern)
      askQuestion()
    })
}
askQuestion()
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
