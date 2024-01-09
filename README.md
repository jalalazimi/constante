# constante

[![npm version](https://badge.fury.io/js/constante.svg)](https://badge.fury.io/js/constante)

A simple npm package that provides a collection of constant values as enums for various use cases, allowing you to easily access and use these constants in your JavaScript/TypeScript projects.

## Installation

You can install the package using npm or yarn:

```bash
npm install constante
```

or

```bash
yarn add constante
```

## Usage

```javascript
const { COLORS, DAYS_OF_WEEK } = require('constante');

console.log(COLORS.RED); // Outputs: 'Red'
console.log(DAYS_OF_WEEK.MONDAY); // Outputs: 'Monday'
```

## Available Enums

### COLORS

```javascript
const { COLORS } = constante;

console.log(COLORS.RED); // Outputs: 'Red'
console.log(COLORS.GREEN); // Outputs: 'Green'
console.log(COLORS.BLUE); // Outputs: 'Blue'
console.log(COLORS.YELLOW); // Outputs: 'Yellow'
```

## Contributing

Feel free to contribute to this package by opening issues or submitting pull requests on the [GitHub repository](https://github.com/jalalazimi/constante).

## License

This package is open-source and available under the [MIT License](LICENSE).

## Issues and Feedback

If you encounter any issues or have suggestions, please feel free to open an issue on the [GitHub repository](https://github.com/jalalazimi/constante).
