import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
const QuoteDetail = () => {
  const param = useParams();
  return (
    <>
      <h1>QuoteDetail page</h1>
      <p>{param.quoteId}</p>
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
