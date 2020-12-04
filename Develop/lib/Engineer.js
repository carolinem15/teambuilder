// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
var employee = require("./Employee.js")


// do i have to include this at the beginning of every employee's js file?
class Employee {
    constructor(manager, engineer, intern) {
        this.manager = manager
        this.engineer = engineer
        this.intern = intern
    }
}

// extend the class to include a new engineer object

class Engineer extends Employee {
    constructor(manager, engineer, intern, engineerName, engineerEmail, engineerId, engineerGitHub) {
        super(manager, engineer, intern)
        this.engineerName = engineerName
        this.engineerEmail = engineerEmail
        this.engineerId = engineerId
        this.engineerGitHub = engineerGitHub
    }
}

module.exports = Engineer