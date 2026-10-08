module.exports = {
  siteMetadata: {
    title: `Han Lee - Product Designer`,
    description: `Product designer, illustrator, and front-end developer who values the visual narrative`,
    url: "https://hanlee25.github.io/",
    image: "/preview.png",
    author: `@hanlee`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-tailwind-by-HanLee`,
        short_name: `HanLee`,
        start_url: `/`,
        background_color: "#ffffff",
        theme_color: "#2dd4bf",
        display: `minimal-ui`,
        icon: `src/images/han-favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`@tailwindcss/postcss`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    ...(process.env.NODE_ENV === `production` ? [`gatsby-plugin-offline`] : []),
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        svgo: false,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: require.resolve("./plugins/gatsby-remark-default-html-attrs"),
            options: {
              h1: "h3",
              h2: ["h4", "bold"],
              p: "paragraph",
              strong: "strong",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${__dirname}/src/works`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-171803500-1",
        head: false,
      },
    },
  ],
};
