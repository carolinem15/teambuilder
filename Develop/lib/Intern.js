// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
var employee = require("./Employee.js")

class Employee {
    constructor(manager, engineer, intern) {
        this.manager = manager
        this.engineer = engineer
        this.intern = intern
    }
}

// extend the class to include a new intern object
class Intern extends Employee {
    constructor(manager, engineer, intern, internName, internEmail, internId, internSchool) {
        super(manager, engineer, intern)
        this.internName = internName
        this.internEmail = internEmail
        this.internId = internId
        this.internSchool = internSchool
    }
}

module.exports = Intern