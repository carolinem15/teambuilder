// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
var employee = require("./Employee.js")

class Employee {
    constructor(manager, engineer, intern) {
        this.manager = manager
        this.engineer = engineer
        this.intern = intern
    }
}

// extend the class to include a new manager object
class Manager extends Employee {
    constructor(manager, engineer, intern, managerName, managerEmail, managerId, managerOffice) {
        super(manager, engineer, intern)
        this.managerName = managerName
        this.managerEmail = managerEmail
        this.managerId = managerId
        this.managerGitHub = managerOffice
    }
}

module.exports = Manager