# Constante - Your Constant Value Collection

[![npm version](https://badge.fury.io/js/constante.svg)](https://badge.fury.io/js/constante)

Constante is a convenient npm package that offers a comprehensive collection of constant values as enums for diverse applications. It simplifies the process of accessing and utilizing these constants in your JavaScript/TypeScript projects.

## Installation

To integrate Constante into your project, you can use either npm or yarn:

```bash
npm install constante
```

or

```bash
yarn add constante
```

## Usage

```javascript
const { COLORS, POSITION, DATE, CONTINENTS, LANGUAGE, CURRENCY, PROGRAMMING_LANGUAGE, COUNTRY_FLAGS, WEB_NAMESPACES, HTML_TAG_NAMES, SVG_TAG_NAMES, MATHML_TAG_NAMES, ARIA_ATTRIBUTES, JAVASCRIPT_TYPES, HTTP_STATUS_CODES } = require('constante');

console.log(COLORS.RED); // Outputs: 'Red'
console.log(POSITION.TOP); // Outputs: 'Top'
console.log(DATE.MONTHS.JANUARY); // Outputs: 'January'
console.log(CONTINENTS.AFRICA); // Outputs: 'Africa'
console.log(LANGUAGE.ENGLISH); // Outputs: 'English'
console.log(CURRENCY.USD); // Outputs: 'USD'
console.log(PROGRAMMING_LANGUAGE.JAVASCRIPT); // Outputs: 'JavaScript'
console.log(COUNTRY_FLAGS.US); // Outputs: '🇺🇸'
console.log(WEB_NAMESPACES.SVG); // Outputs: 'http://www.w3.org/2000/svg'
console.log(HTML_TAG_NAMES.DIV); // Outputs: 'div'
console.log(SVG_TAG_NAMES.CIRCLE); // Outputs: 'circle'
console.log(MATHML_TAG_NAMES.MI); // Outputs: 'mi'
console.log(ARIA_ATTRIBUTES.ROLE); // Outputs: 'role'
console.log(JAVASCRIPT_TYPES.OBJECT); // Outputs: 'object'
console.log(HTTP_STATUS_CODES.OK); // Outputs: 200
```

## Available Enums

The following table lists the available constants along with their descriptions:

| Constant           | Description                                               |
|--------------------|-----------------------------------------------------------|
| COLORS             | Enum for colors                                           |
| POSITION           | Enum for positions                                        |
| DATE               | Enum for months and days of the month                     |
| CONTINENTS         | Enum for continents                                       |
| LANGUAGE           | Enum for languages                                        |
| CURRENCY           | Enum for currency codes                                   |
| PROGRAMMING_LANGUAGE| Enum for programming languages                            |
| COUNTRY_FLAGS      | Enum for country flags (Unicode emoji representations)    |
| WEB_NAMESPACES     | Enum for web namespaces (URLs)                            |
| HTML_TAG_NAMES     | Enum for HTML tag names                                   |
| SVG_TAG_NAMES      | Enum for SVG tag names                                    |
| MATHML_TAG_NAMES   | Enum for MathML tag names                                 |
| ARIA_ATTRIBUTES    | Enum for ARIA (Accessible Rich Internet Applications) attributes |
| JAVASCRIPT_TYPES   | Enum for JavaScript data types                            |
| HTTP_STATUS_CODES  | Enum for HTTP status codes                                |

These enums provide easy access to constant values related to various aspects of web development, data representation, and more, making Constante a versatile tool for different use cases.

## Contribution

We welcome contributions to Constante. If you encounter any issues or have suggestions, please don't hesitate to open issues or submit pull requests on our [GitHub repository](https://github.com/jalalazimi/constante).

## License

Constante is an open-source project released under the [MIT License](LICENSE).

## Feedback and Support

For any questions or feedback, please feel free to reach out on our [GitHub repository](https://github.com/jalalazimi/constante). Your input is highly valued.
