
function generateBadge(license){
  return `![${license}](https://img.shields.io/badge/License-${license}-red)`
}

function generateMarkdown(data) {
  return `# ${data.app_name}

## Description
${data.description}


## License ${generateBadge(data.license)}
This project is licensed under ${data.license}

`;
}

module.exports = generateMarkdown;
