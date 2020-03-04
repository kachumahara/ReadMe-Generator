function generateMarkdown(data) {
	return `
  # My bio
  ## Bio Image
  ![gitHub-med](${profile})
  !(https://img.shields.io/badge/license-${data.license}-blue.svg)
  ## Project Name
  ${data.title}
  ## Table of Content

`;
}

module.exports = generateMarkdown;
