import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { DUMMY_QUOTES } from "./AllQuotes";
import HighLightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const param = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === param.quoteId);
  if (!quote) {
    return <p>404 Quote not found!!</p>;
  }
  return (
    <>
      <HighLightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
