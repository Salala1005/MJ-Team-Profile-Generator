const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/generateHTML.js");

const employees = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.
function createManager() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Manager access only: What is your Name?",
      },
      { type: "input", name: "id", message: "What is your ID?" },
      { type: "input", name: "email", message: "What is your email address?" },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
      /* Pass your questions in here */
    ])
    .then((answers) => {
      return new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
    });
}

function createEngineer() {
  return inquirer
    .prompt([
      { type: "input", name: "name", message: "What is engineer's name?" },
      { type: "input", name: "id", message: "What is engineer's ID?" },
      {
        type: "input",
        name: "email",
        message: "What is engineer's email address?",
      },
      {
        type: "input",
        name: "githubUserName",
        message: "What is engineer's Github username?",
      },
      /* Pass your questions in here */
    ])
    .then((answers) => {
      return new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.githubUserName
      );
    });
}

function createIntern() {
  return inquirer
    .prompt([
      { type: "input", name: "name", message: "What is intern's Name?" },
      { type: "input", name: "id", message: "What is intern's ID?" },
      {
        type: "input",
        name: "email",
        message: "What is intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What is intern's school?",
      },
      /* Pass your questions in here */
    ])
    .then((answers) => {
      return new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
    });
}

function chooseNextStep() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "nextStep",
        message: "What type of employee do you like to create or wish to exit?",
        choices: ["Intern", "Engineer", "Exit"],
      },

      /* Pass your questions in here */
    ])
    .then((answers) => {
      if (answers.nextStep === "Intern") {
        return createIntern().then((intern) => {
          employees.push(intern);
          return chooseNextStep();
        });
      }

      if (answers.nextStep === "Engineer") {
        return createEngineer().then((engineer) => {
          employees.push(engineer);
          return chooseNextStep();
        });
      }
      console.log(answers);
    });
}

createManager()
  .then((manager) => {
    console.log(manager);
    employees.push(manager);
    return chooseNextStep();
  })
  .then(() => {
    console.log(employees);
  });
