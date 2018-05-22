const path = require('path');
const { AllArticlesQuery } = require('./src/graphql/all-articles');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  createPage({
    path: '/',
    component: path.resolve('src/pages/homepage.js'),
  });

  return new Promise((resolve, reject) => {
    graphql(AllArticlesQuery).then(({
      data: {
        allContentfulArticle: { edges: articles },
      },
      errors,
    }) => {
      if (errors) {
        reject(errors);
      }

      // Create overview page
      createPage({
        path: '/articles/',
        component: path.resolve('src/templates/article-overview.js'),
        context: {
          articles,
        },
      });

      articles.forEach((article) => {
        const { slug } = article.node;

        createPage({
          path: `/articles/${slug}`,
          component: path.resolve('src/templates/article-detail.js'),
          context: article.node,
        });
      });

      resolve();
    });
  });
};
