import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Oh My Cotton",
    siteUrl: `https://ohmycotton.gatsbyjs.io/`,
    description: `Oh My Cotton is a small business that sells organic cotton products`,
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
        preconnect: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
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
          formats: [`auto`, `webp`, `avif`],
          avifOptions: { quality: 60 },
          webpOptions: { quality: 70 },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OH MY COTTON`,
        short_name: `OhMyCotton`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#D1B792`,
        display: `minimal-ui`,
        icon: `src/images/kimono.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
  ],
};

export default config;
