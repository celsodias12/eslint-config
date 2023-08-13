# Eslint config

This project aims to provide a set of ESLint configurations to ensure code quality and consistency in JavaScript and TypeScript projects.

## Available Packages

- @celsodias12/eslint-config-a11y
- @celsodias12/eslint-config-helpers
- @celsodias12/eslint-config-javascript
- @celsodias12/eslint-config-react
- @celsodias12/eslint-config-react-native
- @celsodias12/eslint-config-typescript

## Installation

Install the desired package and its dependencies:

@celsodias12/eslint-config-a11y

```bash
npm i -D @celsodias12/eslint-config-a11y eslint-plugin-jsx-a11y
```

---

@celsodias12/eslint-config-helpers

```bash
npm i -D @celsodias12/eslint-config-helpers eslint-plugin-import-helpers eslint-plugin-unused-imports
```

---

@celsodias12/eslint-config-javascript

```bash
npm i -D @celsodias12/eslint-config-javascript eslint-plugin-import eslint-plugin-n eslint-plugin-promise eslint-plugin-security
```

---

@celsodias12/eslint-config-react

```bash
npm i -D @celsodias12/eslint-config-react eslint-plugin-react eslint-plugin-react-hooks
```

---

@celsodias12/eslint-config-react-native

```bash
npm i -D @celsodias12/eslint-config-react-native eslint-plugin-react-native
```

---

@celsodias12/eslint-config-typescript

```bash
npm i -D @celsodias12/eslint-config-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

For typescript add this in your ESLint configuration file:

```json
{
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## Configuration

In your ESLint configuration file, add the following content:

```json
{
  "extends": ["@celsodias12/eslint-config-javascript"]
}
```

or add more than one set of rules:

```json
{
  "extends": [
    // ... other configs
    "@celsodias12/eslint-config-a11y",
    "@celsodias12/eslint-config-helpers",
    "@celsodias12/eslint-config-javascript"
    "@celsodias12/eslint-config-react"
    "@celsodias12/eslint-config-react-native"
    "@celsodias12/eslint-config-typescript"
  ]
}
```
