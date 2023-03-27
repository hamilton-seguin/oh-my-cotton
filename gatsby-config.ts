import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `OhMyCotton`,
    siteUrl: `https://ohmycotton.gatsbyjs.io/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "async",
        enableListener: true,
        preconnect: ["https://fonts.gstatic.com"],
        web: [
          {
            name: "Rosario",
            file: "https://fonts.googleapis.com/css2?family=Rosario:wght@300;700&display=swap",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          quality: 70,
        },
      },
    },
  ],
};

export default config;
