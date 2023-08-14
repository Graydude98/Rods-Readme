// node modules
const inquirer = require('inquirer');
const fs = require('fs');

//inquirer to generate questions
inquirer.prompt(
    [
        {
            type: 'input',
            message:"What's the readme title?",
            name:'rodsreadme',
            //validate property to check that the user provided a value
            validate: (value)=>{if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type:'input',
            message:'How do you install this application?',
            name:'installation',
            validate: (value)=>{if(value){return true} else {return 'i need a value to continue'}},
        },
        {   
            type:'input',
            message:'Process for installation?',
            name:'process',
            validate: (value)=>{if(value){return true} else {return 'i need a value to continue'}},
        }, 
        {    
            type:'input',
            message:'What are the credentials?',
            name:'installation',
            validate: (value)=>{if(value){return true} else {return 'i need a value to continue'}},
        },
        {    
            type:'input',
            message:'How to utilize application?',
            name:'usage',
            validate: (value)=>{if(value){return true} else {return 'i need a value to continue'}},
        },
        {    
            //list of licenses
            type:'list',
            message:'What license was used?',
            name:'license',
            choices:['The MIT License', 'The GPL License','Apache license','GNU license','N/A'],
            validate: (value)=>{if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type:'input',
            message:'GitHub username:',
            name:'git',
            validate:(value)=>{if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type:'input',
            message:'E-mail:',
            name:'email',
            validate:(value)=>{if(value){return true} else {return 'i need a value to continue'}},
        }
 ]
).then(({
    title,
    installation,
    process,
    credentials,
    license,
    graydude98,
    linkedin,
    email,
    usage,
    contribution,
})=>{
//template to be used
const template = `* # ${title}

* [installation](#installation)
* [usage](#usage)
* [contribution](#contribution)
* [credits](#credits)
* [license](#license)
* # installation
${installation}
## usage
${usage}
## contribution
${contribution}
### process
${process}
## credentials
${credentials}
## license
${license}

# Contact
* Github :${git}
* Linkedin :${linkedin}
* E-mail :${email}`;
//Function to create our readme using fs
createNewFile(title,template);
}
);
//createing our createNewFile function
function createNewFile(fileName,data){
//fs
fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('Your README has been generated');
})
}

///Alright skippy lets install that package