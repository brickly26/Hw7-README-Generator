// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');
let fileName = "./README/generatedREADME.md"


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What would you like the Title to be?",
    name: "title",
  },
  {
    type: "input",
    message: "Include a Description?",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install this project?",
    name: "install",
  },
  {
    type: "input",
    message: "How is this project used?",
    name: "usage",
  },
  {
    type: "input",
    message: "How does one Contribute to this project?",
    name: "contribute",
  },
  {
    type: "input",
    message: "Provide a Test?",
    name: "test",
  },
  {
    type: "input",
    message: "Acknowledgments?",
    name: "acknowledgment",
  },
  {
    type: "list",
    message: "Choose a License?",
    name: "license",
    choices: ["MIT", "Apache", "MozillaPublic", "GNUGeneralPublic", "None"],
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your Email?",
    name: "email",
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    err ? console.error(err) : console.log('Success!')
  })
}

inquirer
.prompt(questions)
.then((answers) => writeToFile(fileName, answers))
.catch((error) => {
  if (error.isTtyError) {
    console.log("error");
  } else {
    console.log("error");
  }
});

