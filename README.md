# readme-generator

### Description
Use this Node CLI app to quickly generate a project README. This quality README generator allows you to focus more time on building your application, and saves you time when creating the README file.

## README Prompt Questions
<img src="/assets/images/readme_questions.png" width="300" height="300"/>

## README Result
<img src="/assets/images/readme_demo.png">
All 17 unit test cases passed! 

### User Story
```
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project
```

### Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

### Dependencies
* [Inquirer](https://www.npmjs.com/package/inquirer)

### Contact
Melanie DeBarros