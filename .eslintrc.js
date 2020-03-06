module.exports = {
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["~components", "./src/components"],
          ["~store", "./src/store"],
          ["~screens", "./src/screens"],
          ["~lib", "./src/lib"]
        ]
      }
    }
  },
  "rules": {
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": "off",
      "no-param-reassign": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "import/prefer-default-export": "off"
  },
  "extends": ["airbnb"]
};