import React from 'react';
import Link from 'gatsby-link';

const ContactPage = () => (
  <div>
    <h1>This is the homepage</h1>
    <form netlify="netlify" asdf="asdf" encType="multipart/form-data" name="contact-form">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <br />
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" />
      <br />
      <label htmlFor="file">File</label>
      <input type="file" id="file" />
      <br />
      <button type="submit">Send</button>
    </form>
    <Link to="/">Go to homepage</Link>
  </div>
);

export default ContactPage;
