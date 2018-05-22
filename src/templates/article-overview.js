import React from 'react';
import Link from 'gatsby-link';

const ArticleOverview = props => (
  <div>
    <h1>Articles!</h1>
    <ul>
      {props.pathContext.articles.map(({ node }) => (
        <li>
          <h2>{node.title}</h2>
          {node.header ? <img src={node.header.file.url} alt={node.header.description} /> : null}
          <Link to={`/articles/${node.slug}`}>Read article...</Link>
        </li>
      ))}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default ArticleOverview;
