const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");
const directory = path.resolve(__dirname, "dist");
const thePath = path.join(directory, "index.html");
const makePage = require("./src/skeleton.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
//import inquirer from 'inquirer';
//const { writeFile, copyFile } = require('./utils/site-generator.js');

employeeArray = [];//store everything in array 

function getRGoing () {
  function createObjects () {
    inquirer.prompt([{
      type: "list",
      message: "Please choose an Employee type",
      name: "employeeChoices",
      choices: ["Engineer", "Manager", "Intern", "Proceed"]}]).then(function (input) {
      switch(input.employeeChoices) {  //switch case statement to interpret results and run required functions 
        case "Engineer":
          getEngineer();
          break;
        case "Manager":
          getManager();
          break;
        case "Intern":
          getIntern();
          break;
        default:
          html(); //if N/A just skip the chain and go to the default html page 
      }
    })
  }
  function getEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "eName",
        message: "Engineer Name?",
        validate: Input => {
            if (Input) {
              return true;
            } else {
              console.log('Please Try Again');
              return false;
            }
          }
      },
      {
        type: "input",
        name: "eID",
        message: "Engineer ID?",
        validate: Input => {
            if (Input) {
              return true;
            } else {
              console.log('Please Try Again');
              return false;
            }
          }
      },
      {
        type: "input",
        name: "eGithub",
        message: "Engineer Github?",
        validate: Input => {
            if (Input) {
              return true;
            } else {
              console.log('Please Try Again');
              return false;
            }
          }
      },
      {
        type: "input",
        name: "eEmail",
        message: "Engineer Email?",
        validate: Input => {
            if (Input) {
              return true;
            } else {
              console.log('Please Try Again');
              return false;
            }
          }
      }
    ]).then(results => {
      const engineer = new Engineer(results.eName, results.eID, results.eEmail, results.eGithub);
      employeeArray.push(engineer);
      createObjects();
    });

  }
function getManager() {
  inquirer.prompt ([
    {
      type: "input",
      name: "mName",
      message: "Manager Name?",
      validate: Input => {
        if (Input) {
          return true;
        } else {
          console.log('Please Try Again');
          return false;
        }
      }
    },
    {
      type: "input",
      name: "mID",
      message: "Manager ID?",
      validate: Input => {
        if (Input) {
          return true;
        } else {
          console.log('Please Try Again');
          return false;
        }
      }
    },
    {
        type: "input",
        name: "mOfficeNum",
        message: "Manager Office Number?",
        validate: Input => {
            if (Input) {
              return true;
            } else {
              console.log('Please Try Again');
              return false;
            }
          }
    },
    {
      type: "input",
      name: "mEmail",
      message: "Manager Email?",
      validate: Input => {
        if (Input) {
          return true;
        } else {
          console.log('Please Try Again');
          return false;
        }
      }
    }
  ]).then(results => {
    const manager = new Manager(results.mName, results.mID, results.mEmail, results.mOfficeNum);
    employeeArray.push(manager);
    createObjects();
  });
}
  function getIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "iName",
        message: "Intern Name?",
        validate: Input => {
            if (Input) {
              return true;
            } else {
              console.log('Please Try Again');
              return false;
            }
          }
      },
      {
        type: "input",
        name: "iId",
        message: "Intern ID?",
        validate: Input => {
            if (Input) {
              return true;
            } else {
              console.log('Please Try Again');
              return false;
            }
          }
      },
      {
        type: "input",
        name: "iEmail",
        message: "Intern Email?",
        validate: Input => {
            if (Input) {
              return true;
            } else {
              console.log('Please Try Again');
              return false;
            }
          }
      },
      {
        type: "input",
        name: "iSchool",
        message: "Intern School?",
        validate: Input => {
            if (Input) {
              return true;
            } else {
              console.log('Please Try Again');
              return false;
            }
          }
      }
    ]).then(results => {
      const intern = new Intern(results.iName, results.iId, results.iEmail, results.iSchool);
      employeeArray.push(intern);
      createObjects();
    });
  }
function html() {
    fs.writeFileSync(thePath, makePage(employeeArray), "UTF-8")
}
createObjects();
}
getRGoing();