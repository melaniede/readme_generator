// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contribution)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  ## Installation
  ${data.installation} 
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.test}
  ## License
  ${data.license}
  ## Questions
  Contact email for questions: ${data.email}\n
  GitHub Account: [${data.github}](https://github.com/${data.github})\n
  `;
  }

module.exports = generateMarkdown;