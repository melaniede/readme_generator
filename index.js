const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./util/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
// const questions = [
// ];

// Prompt Questions to user to generate ReadMe file
function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "Choose your Project Title:"
      },
      {
        type: "input",
        name: "description",
        message: "Describe your Project:"
      },
      {
        type: "input",
        name: "installation",
        message: "Share the Installation Instructions:"
      },
      {
        type: "input",
        name: "usage",
        message: "Share the Usage Information:"
      },
      {
        type: "input",
        name: "contribution",
        message: "Provide Contribution Guidelines:"
      },
      {
        type: "input",
        name: "test",
        message: "Share the Test Instructions:"
      },
      {
        type: "list",
        name: "license",
        message: "Choose a License:",
        choices: [
            "MIT License",
            "GNU GPLv3",
            "Mozilla Public License 2.0",
            "The Unlicense"
        ],
        default: "MIT License"
      },
      {
        type: 'input',
        name: 'email',
        message: 'Provide your email address'
      },
    {
        type: 'input',
        name: 'github',
        message: 'Provide your GitHub username.'
    }
    ]);
  }

promptUser();

// function to write README file
function writeToFile(fileName, data) {
}



//   promptUser()
//   .then(function(answers) {
//     const html = generateHTML(answers);

//     return writeFileAsync("index.html", html);
//   })
//   .then(function() {
//     console.log("Successfully wrote to index.html");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

// function to initialize program
function init() {

}

// function call to initialize program
init();