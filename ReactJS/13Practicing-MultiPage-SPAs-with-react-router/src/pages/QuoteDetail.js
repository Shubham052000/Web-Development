import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { DUMMY_QUOTES } from "./AllQuotes";
import HighLightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const match = useRouteMatch();
  const param = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === param.quoteId);
  if (!quote) {
    return <p>404 Quote not found!!</p>;
  }
  return (
    <>
      <HighLightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
