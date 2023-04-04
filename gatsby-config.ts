import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Oh My Cotton",
    siteUrl: `https://ohmycotton.gatsbyjs.io/`,
    description: `Oh My Cotton is a small business that sells organic cotton products`
  },
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
      resolve: "@nathanpate/gatsby-omni-font-loader",
      options: {
        mode: "async",
        enableListener: true,
        preconnect: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
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
