const inquirer = require('inquirer');
const fs = require('fs');
const { profile } = require('console');

const user = {
    name: "",
    location: "",
    github: "",
    bio: "",
    linkedin: ""
  };

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

    /*profile.then((data) => {
  //  profile.then(function(data){
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <link rel="stylesheet" type="text/css" href="./style.css">
        </head>
        <body>
        <h1 class="profile">${data.name}</h1>
        <div class="profile">${data.location}</div>
        <div class="profile">${data.bio}</div>
        <div class="profile">${data.linkedin}</div>
        <div class="profile">${data.github}</div>

        <script type="text/javascript" src="script.js"></script>
        </body>
        </html>  
    `;
        fs.writeFile('index.html', html, function (err) {
            if (err) {
                return console.log(err);
            }
    
            console.log('Success!');
        });
    })
*/


    .then((response) => {
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <link rel="stylesheet" type="text/css" href="./style.css">
        </head>
        <body>
        <h1 class="profile">${response.name}</h1>
        <div class="profile">${response.location}</div>
        <div class="profile">${response.bio}</div>
        <div class="profile">${response.linkedin}</div>
        <div class="profile">${response.github}</div>

        <script type="text/javascript" src="script.js"></script>
        </body>
        </html>  
    `;
        fs.writeFile('index.html', html, function (err) {
            if (err) {
                return console.log(err);
            }
    
            console.log('Success!');
        });

      //const element = document.querySelectorAll("#user");
    //  element.innerHTML = userInfo;
    }
);

