const { watch } = require("fs");
const path = require("path");

module.exports = [
  {
    watch: true,
    entry: "./src/script/data.validator.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
  },
  {
    watch: true,
    entry: "./src/script/form.js",
    output: {
      filename: "form.bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
  },
];
