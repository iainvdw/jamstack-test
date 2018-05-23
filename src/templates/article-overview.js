import React from 'react';
import Link from 'gatsby-link';

const ArticleOverview = props => (
  <div>
    <h1>Articles!</h1>
    <ul>
      {props.pathContext.articles.map(({ title, header, slug }) => (
        <li>
          <h2>{title}</h2>
          {header ? <img src={header.file.url} alt={header.description} /> : null}
          <Link to={`/articles/${slug}`}>Read article...</Link>
        </li>
      ))}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default ArticleOverview;
