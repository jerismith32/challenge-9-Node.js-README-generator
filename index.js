// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//MUST HAVE at least: type, name and message
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
        name: 'description',
        message: "Please write a short description of your project. (Required)",
    },
    {
        type: 'list',
        name: 'license',
        message: "What kind of license should your project have? (Required)",
        //allow user to choose other
        choices: ['Apache', 'Boost', 'BSD', 'Eclipse', 'IBM', 'ISC', 'MIT', 'Mozilla', 'SIL', 'Unlicense', 'Zlib', 'None'],
    },
    {
        type: 'input',
        name: 'dependencies',
        message: "What command should be run to install dependencies? (Required)",
        default: 'npm install',
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide instructions and examples for use. Include screenshots if needed. (Required)",
    },
    {
        type: 'input',
        name: 'credits',
        message: "Please list your collaborators (including links to their Github profiles), any third-party assets used (list the creaters with links to their primary web presence), and any tutorials utilized (include the links here)."
    },
    {
        type: 'confirm',
        name: 'contributing',
        message: "Did you create an application or package that you would like others to contribute to?",
        //allow user to choose other (y/N)
    },

// inquirer
//   .prompt([
//     {
//       name: "wants_pizza",
//       type: "confirm",
//       message: "Do you want a free pizza?",
//     },
//     {
//       name: "confirm_answer",
//       type: "confirm",
//       message: "Are you sure?",
//       when: (answers) => answers.wants_pizza === false,
//     },
//   ])
//   .then((answers) => {
//     if (answers.wants_pizza) {
//       console.log("The user wants free pizza");
//     } else if (answers.confirm_answer) {
//       // the user definitely doesn't want pizza
//     } else {
//       // the user changed their mind
//       // run the function to ask this question again
//     } 
//   });
    {
        type: 'input',
        name: 'contributorCovenant',
        message: "If you answered yes to the previous question, please feel free to include contributing guidelines."
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please include any tests and examples for your application."
    },

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
