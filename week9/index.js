const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

function init() {
  // ask user for app name
  inquirer.prompt([
    {
      type: 'input',
      message: "What is your app name?",
      name: "app_name",
    },
    // ask user for
    //  description, installation instructions, usage information, contribution guidelines, and test instructions
    {
      type: 'input',
      message: "What is your app about?",
      name: "description",
    },
    // ask for license (list)
    {
      type: 'list',
      message: "What is your license?",
      name: "license",
      choices: [
        'MIT',
        'WTF'
      ]
    }
  ]).then(function(ans){
    // generate readme file based on the ans collected
    console.log({ans});

    const readme = generateMarkdown(ans);
    
    // put this readme into a file in the output folder

    const outputPath = path.join(__dirname, 'output', 'README.md');

    fs.writeFileSync(outputPath, readme, 'utf-8');

  });






}

// Function call to initialize app
init();
