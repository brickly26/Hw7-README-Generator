// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description

${data.description}

## Licensing

[![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Acknowledgments](#acknowledgments)

## Installation

${data.install}

## Usage

${data.usage}

## Contributing

${data.contribute}

## Tests

${data.test}

## Acknowledgments

${data.acknowledgment}

## Questions

- Check my GitHub [${data.github}](https://github.com/${data.github})
- If you have any quetions don't hesitate to email at ${data.email}
`;
}

module.exports = generateMarkdown;
