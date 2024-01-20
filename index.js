const Manager = require("./MJ-Team-profile-generator/lib/Manager.js");
const Engineer = require("./MJ-Team-profile-generator/lib/Engineer.js");
const Intern = require("./MJ-Team-profile-generator/lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

