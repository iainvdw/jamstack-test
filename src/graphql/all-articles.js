module.exports = {
  AllArticlesQuery: `query AllArticlesQuery {
    allContentfulArticle{
      edges{
        node {
          id,
          title,
          slug,
          node_locale,
          header {
            id,
            file {
              url
              fileName
              contentType
            }
          },
          content {
            id,
            content
          }
        }
      }
    }
  }`,
};
