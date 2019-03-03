const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const page = path.resolve(`./src/templates/page.js`)
  for (let i = 0; i < 256; i++) {
    createPage({
      path: String(i),
      component: page,
      context: {
      },
    });
  }
};
