# Installation

Install the package and its dependencies:

```bash
npm i -D @celsodias12/eslint-config-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Configuration

In your ESLint configuration file, add the following content:

```json
{
  "extends": [
    // ... other configs
    "@celsodias12/eslint-config-typescript"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
