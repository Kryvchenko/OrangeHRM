module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    },
        "globals": {
          "$": true, 
          "$$": true,
          "browser": true, 
          "it": true,
          "describe": true,
          "process": true
        }
}
