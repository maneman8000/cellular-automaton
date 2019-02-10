module.exports = {
  siteMetadata: {
    title: `Cellular Automaton Test Site`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`${__dirname}/node_modules/`],
      },
    },
  ],
};
