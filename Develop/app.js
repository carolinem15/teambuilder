const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const teamMembers = []

function makeTeam() {
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        message: "What is your manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is your manager's ID?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "managerOffice"
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "addTeamMember",
        choices: ['Engineer', 'Intern', 'I am done adding team members']
    },
    
  ]).then(userChoice => {
// added switch case to execute code blocks based on user input
    switch(userChoice.addTeamMember) {

        case "Engineer":
            addEngineer();
            break;

        case "Intern":
            addIntern();
            break;

        case "I am done adding team members":
            render(teamMembers);
    }
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
      console.log('Oh no! Something else is wrong with makeTeam')
    }
  });
}

function addEngineer() {
        inquirer.prompt ([
            {
                type: "input",
                message: "What is your engineer's name?",
                name: "engineerName"
            },
            {
                type: "input",
                message: "What is your engineer's ID?",
                name: "engineerId"
            },
            {
                type: "input",
                message: "What is your engineer's email?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is your engineer's GitHub username?",
                name: "engineerGitHub"
            },
            {
                type: "list",
                message: "Which type of team member would you like to add?",
                name: "addTeamMember",
                choices: ['Engineer', 'Intern', 'I am done adding team members']
            },
        ])
        // should it be userChoice here or answers?
        .then(userChoice => {
            console.log(userChoice);

            const engineer = new Engineer(userChoice.engineerName, userChoice.engineerID, userChoice.engineerEmail, userChoice.engineerGitHub)

            teamMembers.push(engineer)

            makeTeam();

        })
        .catch(error => {
            if(error.isTtyError) {
              // Prompt couldn't be rendered in the current environment
            } else {
              // Something else when wrong
              console.log('Oh no! Something else is wrong with addEngineer')
            }
          });
    }
    function addIntern() {
        inquirer.prompt ([
            {
                type: "input",
                message: "What is your intern's name?",
                name: "internName"
            },
            {
                type: "input",
                message: "What is your intern's ID?",
                name: "internId"
            },
            {
                type: "input",
                message: "What is your intern's email?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "What is your intern's school?",
                name: "internSchool"
            },
            {
                type: "list",
                message: "Which type of team member would you like to add?",
                name: "addTeamMember",
                choices: ['Engineer', 'Intern', 'I am done adding team members']
            },
        ])
        // should it be userChoice here or answers?
        .then(userChoice => {
            console.log(userChoice);

            const intern = new Intern(userChoice.internName, userChoice.internID, userChoice.internEmail, userChoice.internSchool)

            teamMembers.push(intern)

            makeTeam();

        })
        .catch(error => {
            if(error.isTtyError) {
              // Prompt couldn't be rendered in the current environment
            } else {
              // Something else when wrong
              console.log('Oh no! Something else is wrong with addIntern')
            }
          });
    }
  
  

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
var engineer = {
    name = engineerName.answers,
    id = engineerId.answers,
    email = engineerEmail.answers,
    github = engineerGitHub.answers,
}
var intern = {
    name = internName.answers,
    id = internId.answers,
    email = internEmail.answers,
    school = internSchool.answers,
}
var manager = {
    name = managerName.answers,
    id = managerId.answers,
    email = managerEmail.answers,
    office = managerOffice.answers,
}

engineer.forEach(render)
intern.forEach(render)
manager.forEach(render)


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
