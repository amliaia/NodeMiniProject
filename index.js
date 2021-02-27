const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Where are you located?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Give me a brief bio:',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'github',
        },
    ])
    .then((response) =>
        response.confirm === response.password
            ? console.log('Success!')
            : console.log('You forgot your password already?!')
    );
