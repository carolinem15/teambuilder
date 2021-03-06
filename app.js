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

const teamMembers = [];
makeTeam()
function makeTeam() {
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "addTeamMember",
        choices: ['Manager', 'Engineer', 'Intern', 'I am done adding team members']
    },
    
  ]).then(userChoice => {
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// added switch case to execute code blocks based on user input
    switch(userChoice.addTeamMember) {

        case "Manager":
            addManager();
            break;

        case "Engineer":
            addEngineer();
            break;

        case "Intern":
            addIntern();
            break;

        case "I am done adding team members":
            renderTeams();
            break;
    };
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
      console.log('Oh no! Something else is wrong with makeTeam')
    }
  });
};

// function to add a new manager 

function addManager() {
    inquirer.prompt ([
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
    ])
    // should it be userChoice here or answers?
    .then(userChoice => {
        console.log(userChoice);

        // new manager object that includes user's responses
        const manager = new Manager(userChoice.managerName, userChoice.managerId, userChoice.managerEmail, userChoice.managerOffice)
        console.log(manager)
        // push the new manager object to the teamMembers array
        teamMembers.push(manager)
        console.log(teamMembers)
        
        //run makeTeam function to run the primary inquirer questions again so the user can add a new employee if they want
        makeTeam();

    })
    .catch(error => {
        if(error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
          console.log('Oh no! Something else is wrong with addManager')
        }
      });
};

// function to add a new engineer 
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
        ])
        // should it be userChoice here or answers?
        .then(userChoice => {
            console.log(userChoice);

            // new engineer object that includes user's responses
            const engineer = new Engineer(userChoice.engineerName, userChoice.engineerId, userChoice.engineerEmail, userChoice.engineerGitHub)

            // push the new engineer object to the teamMembers array
            teamMembers.push(engineer)
            
            //run makeTeam function to run the primary inquirer questions again so the user can add a new employee if they want
            makeTeam();

        })
        .catch(error => {
            if(error.isTtyError) {
              // Prompt couldn't be rendered in the current environment
            } else {
              // Something else went wrong
              console.log('Oh no! Something else is wrong with addEngineer')
            }
          });
    };
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
        ])
        // should it be userChoice here or answers?
        .then(userChoice => {
            console.log(userChoice);

            const intern = new Intern(userChoice.internName, userChoice.internId, userChoice.internEmail, userChoice.internSchool)

            teamMembers.push(intern)

            makeTeam();

        })
        .catch(error => {
            if(error.isTtyError) {
              // Prompt couldn't be rendered in the current environment
            } else {
              // Something else went wrong
              console.log('Oh no! Something else is wrong with addIntern')
            }
          });
    };

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
function renderTeams() {
    fs.writeFile("output/team.html", render(teamMembers), function (error) {
        if (error) return console.log(error);
        console.log('Success!');
    });
}

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

renderTeams();

module.exports = teamMembers


// okay soooo it makes the teams html in the output folder, but it doesnt run the node cli inquirer questions ..... probably has to do with the employee js files. i think i added the constructors wrong (see testing with jest class vid at 25min)