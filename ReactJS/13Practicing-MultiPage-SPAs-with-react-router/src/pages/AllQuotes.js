import React from "react";
import QuoteList from "../components/quotes/QuoteList";
export const DUMMY_QUOTES = [
  { id: "q1", author: "Shubham", text: "Self-improvement is fun" },
  { id: "q2", author: "Shubhu", text: "Love yourself" },
  { id: "q3", author: "Satyawali", text: "Don't be a Jeffrey" },
  { id: "q4", author: "Satya", text: "Adonisss..." },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
