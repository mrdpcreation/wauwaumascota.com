module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:sonarjs/recommended",
    "plugin:security/recommended"
  ],
  plugins: [
    "@typescript-eslint",
    "import",
    "sonarjs",
    "security"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc" }
      }
    ],
    "sonarjs/cognitive-complexity": ["error", 15],
    "security/detect-object-injection": "warn",
    "security/detect-non-literal-regexp": "warn"
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  }
}
