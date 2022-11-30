const { sourceBook } = require("./parse-usfm");
const { getQuoteMatchesInBookRef } = require("uw-quote-helpers");

//Generating selections from source book and source quote.

const sourceQuote = "καὶ & καὶ";
const reference = "1:1-20";

console.log(
  `Generating selections for source quote: "${sourceQuote}", in: Titus "${reference}" `
);
const quoteMatches = getQuoteMatchesInBookRef({
  quote: sourceQuote,
  bookObject: sourceBook,
  ref: reference,
  isOrigLang: true,
});

console.log("\n", { quoteMatches }, "\n");
