const { targetBook, sourceBook } = require("./parse-usfm");
const { getTargetQuoteFromSourceQuote } = require("uw-quote-helpers");

//Getting the target quote as a string from a source quote string.

const sourceQuote = "καὶ & καὶ";
const reference = "1:1-20";

console.log(
  `Generating target quote matching source quote: "${sourceQuote}", in: Titus "${reference}" `
);
const targetQuote = getTargetQuoteFromSourceQuote({
  quote: sourceQuote,
  ref: reference,
  sourceBook,
  targetBook,
  options: { occurrence: -1, fromOrigLang: true },
});
console.log("\nMatched target quote:\n", targetQuote);
