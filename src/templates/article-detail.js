import React from 'react';
import Link from 'gatsby-link';
import { Converter } from 'showdown';

const converter = new Converter();

const ArticlePage = ({ pathContext: article }) => (
  <div>
    {article.header ? <img src={article.header.file.url} alt={article.header.description} /> : null}
    <h1>{article.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(article.content.content) }} />
    <Link to="/">Go back to the homepage</Link>
    <br />
    <Link to="/articles/">Go back to the overview</Link>
  </div>
);

export default ArticlePage;
