# Project Name

This project aims to provide a set of ESLint configurations to ensure code quality and consistency in JavaScript and TypeScript projects.

## Available Rules

- @celsodias12/eslint-config/a11y
- @celsodias12/eslint-config/helpers
- @celsodias12/eslint-config/javascript
- @celsodias12/eslint-config/react
- @celsodias12/eslint-config/react-native
- @celsodias12/eslint-config/typescript

## How to Use

### Installation

```bash
npm i -D @celsodias12/eslint-config/javascript
```

### Configuration

In your ESLint configuration file, add the following content:

```json
{
  "extends": ["@celsodias12/eslint-config/javascript"]
}
```

or add more than one set of rules:

```json
{
  "extends": [
    "@celsodias12/eslint-config/javascript",
    "@celsodias12/eslint-config/react",
    "@celsodias12/eslint-config/typescript"
  ]
}
```