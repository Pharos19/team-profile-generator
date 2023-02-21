const inquirer = require('inquirer')

const fs = require('fs')

const generateHTML = require('./src/generateHTML')

const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manger = require('./lib/Manager')

const team = []

const 