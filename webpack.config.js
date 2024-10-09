const path = require("path");

module.exports = [
  {
    entry: "./src/script/data.validator.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
  },
  {
    entry: "./src/script/form.js",
    output: {
      filename: "form.bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
  },
];
