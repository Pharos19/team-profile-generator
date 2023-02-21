const inquirer = require('inquirer')

const fs = require('fs')

const generateHTML = require('./src/generateHTML')

const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manger = require('./lib/Manager')

const team = []

const addEmployee = () => {
    inquirer.createPromptModule([
        {
            type: 'list',
            name: 'position',
            message: 'What is your position in the company?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter employee name.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email address.'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number?',
            when: (input => input.position === 'Manager')
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Github username of this engineer?',
            when: (input => input.position === 'Engineer')
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does this intern attend?',
            when: (input => input.position === 'Intern')
        },
        {
            type: 'confirm',
            name: 'addMoreEmployees',
            message: 'Would you like to add another employee to the team?',
            default: false
        }
    ])
    .then(employeeInfo => {
        
    })
}