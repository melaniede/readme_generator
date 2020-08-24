const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
// const questions = [
// ];


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
        message: "Mention your Contributors:"
      },
      {
        type: "input",
        name: "test",
        message: "Share the Test Instructions:"
      },
      {
        type: "list",
        name: "Choose a License:",
        choices: [
            "MIT License",
            "GNU GPLv3",
            "Mozilla Public License 2.0",
            "The Unlicense"
        ]
      }
    ]);
  }

promptUser();

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();