import React from 'react';
import Link from 'gatsby-link';

const HomePage = ({ data }) => (
  <div>
    <h1>This is the homepage</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/articles/">Go to articles</Link>
  </div>
);

export default HomePage;
