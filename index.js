// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

/* Chuck's Questions from class:
-What is your GitHub username?
-What is your email address?
-What is your project's name?
-Please write a short description of your project.
-What kind of license should your project have?
-What command should be run to install dependencies?
-What command should be run to run tests?
-What does the user need to know about using the repo?
What does the user need to know about contributing to the repo?
*/

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project? (Required)"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username? (Required)",
        //validation
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address? (Required)",
    },
    {
        type: 'input',
        name: 'projectName',
        message: "What is the name of your project? (Required)",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please write a short description of your project. (Required)",
    },
    {
        type: 'list',
        name: 'license',
        message: "What kind of license should your project have? (Required)",
        //allow user to choose other
        choices: ['Apache', 'Boost', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'dependencies',
        message: "What command should be run to install dependencies? (Required)",
        default: 'npm install',
    }

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log(fileName);
    // console.log(data);
    fs.writeFile(`./generated/${fileName}`, generateMarkdown(data), err => {
        if (err) {
            throw err
        };
        console.log('README has been successfully created!')
    });

};

// Write the user response to a file by chaining the below callback method to the prompt above.
//   .then(function(data) {
//     // Bonus: Generate the name of your user file from their input
//     const filename =
//       data.name
//         .toLowerCase()
//         .split(' ')
//         .join('') + '.json';

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
//       if (err) {
//         return console.log(err);
//       }

//       console.log('Success!');
//     });
//   });

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        //console.log(data);
        let fileName = "generatedREADMEFile.md"
        writeToFile(fileName, data);
    })
};

// Function call to initialize app
init();
