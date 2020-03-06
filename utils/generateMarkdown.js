function generateMarkdown(data) {

  return `
  ${data.username}
  
  const email = git.Info.email || "kachumahara@gmail.com"

  # My bio
  ## Bio Image
  
  ![gitHub-med](${profile})
  
  !(https://img.shields.io/badge/license-${data.license}-blue.svg)
  ## Project Name
  ${data.title}
  ## Table of Contents
  * [Installation](#installation)
  // * [Usage](#usage)
  // * [License](#license)
  // * [Tests](#test)
  // * [Questions](#questions)
  
  // ## Installation
  // ${user.installation}
  // ## Usage
  // ${userInput.usage}

  // ## License
  // This project is licensed under the ${userInput.license} license.
  // <img src="https://img.sheilds.io/badge/License-${user.Input.license}-orange"

  // ## Contributions
  // ${user.Input.credits}

  // ## Tests
  // ${userInput.tests}

  // ## Questions
  // For questions regarding the repo contact: ${email}
  //  `;
}

module.exports = generateMarkdown;
