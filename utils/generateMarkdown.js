const licenseBadgeList = {
  "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "GNU GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  "The Unlicense":"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
}


// function to generate markdown for README
function generateMarkdown(data) {
  data.licenseBadge = licenseBadgeList[data.license];
  return `
  # ${data.title}
  ${data.licenseBadge}
  ## Description
  ${data.description}  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
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