import React, { useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { fetchArticlesdata } from "../redux/actions/fetchArticles";

function Articles() {
  const articles = useSelector((state) => state.journal.articles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticlesdata());
  }, []);
  return (
    <Container>
      <ul>
        {articles.results.map((article) => (
          <>
            <li className="fs-6 list-articles" key={article.id}>
              {article.title}
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="link-hover">
                <p className="lead">{article.news_site}</p>
              </a>
            </li>
          </>
        ))}
      </ul>
    </Container>
  );
}

export default Articles;
