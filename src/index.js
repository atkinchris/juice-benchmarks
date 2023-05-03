const fs = require("fs");
const juice = require("juice");
const path = require("path");

const html = fs
  .readFileSync(path.resolve(__dirname, "./index.html"))
  .toString();

juice(html);
