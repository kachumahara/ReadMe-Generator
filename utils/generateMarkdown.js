function generateMarkdown(userInput, gitInfo) {

  return `
  # ${userInput.title}

  ## Description

  ${userInput.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  ${userInput.installation}

  ## Usage

  ${userInput.usage}

  ## License

  THis project is licensed under the ${userInput.license}
  <img src="https://img.shields.io/badge/License-${userInput.license}-orange" alt="badge"/>

  ## Contributing

  ${userInput.credits}

  ## Test

  ${userInput.test}

  ## Questions


  Github username: ${gitInfo.login}

  <img src="${gitInfo.avatar_url}" alt="avatar" height="200" width="200"/>
 `;
};

module.exports = generateMarkdown;
