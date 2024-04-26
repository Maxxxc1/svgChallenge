const inquirer = require("inquirer");
const fs = require('fs')


// First Step is to PROMPT the USER and CAPTURE DATA/ USER INPUT
//inquirer.prompt([
let questions = ([
    {
        type: 'input',
        name: 'shapeText',
        message: 'Please enter up to three characters'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What type of shape would you like?',
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape?'
    },
])
inquirer.prompt(questions)
.then(function(answers) {
    console.log("Data: ", answers);
    console.log("Text: ", answers.shapeText);
    console.log("Color: ", answers.shapeColor);
    console.log("Shape: ", answers.shape);
    const svgContent = generateSvgContent(answers);
    writeToFile('logo.svg', svgContent);

});

// Your implementation to generate SVG content based on user answers //
function generateSvgContent(answers) {
    let selectedShapeSvg;

    switch (answers.shape) {
        case 'Circle':
            selectedShapeSvg = `<circle cx="150" cy="100" r="100" height="100%" width="100%"  fill="${answers.shapeColor}" />`;
            break;
        case 'Triangle':
            selectedShapeSvg = `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${answers.shapeColor}" />`;
            break;
        case 'Square':
            selectedShapeSvg = `<rect x="50" width="200" height="200" fill="${answers.shapeColor}" />`;
            break;
        default:
            selectedShapeSvg = '';
    }

    return `<svg width="300" height="200">
        ${selectedShapeSvg}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.shapeText}</text>
    </svg>`;
}


//function to writefile //
function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, function(error) {
        if (error) {
            return console.log(error);
        }
            console.log('Generated logo.svg');
    });
}
