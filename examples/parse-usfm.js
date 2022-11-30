const fs = require("fs");
const path = require("path");
const { getParsedUSFM } = require("uw-quote-helpers");

//Fetching resources (Orignal USFM, GL USM)

const sourceUsfm = fs.readFileSync(
  path.join(__dirname, "../data/", "orig-PHP.usfm"),
  "utf8"
);
const targetUsfm = fs.readFileSync(
  path.join(__dirname, "../data/", "aligned-PHP.usfm"),
  "utf8"
);

console.log("\n--- USING THE LIBRARY ---");

//Parsing source/original and target/gl books
const sourceBook = getParsedUSFM(sourceUsfm).chapters;
const targetBook = getParsedUSFM(targetUsfm).chapters;

module.exports = { sourceBook, targetBook };
