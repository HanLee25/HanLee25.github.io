const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Han Lee - Product Designer`,
    description: `Product designer, illustrator, and front-end developer who values the visual narrative`,
    url: "https://hanlee25.github.io/",
    image: "/preview.png",
    author: `@hanlee`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-tailwind-by-HanLee`,
        short_name: `HanLee`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/han-favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/, // See below to configure properly
          options: {
            props: {
              className: `svg-img`, // Default class name
              role: `img`,
            },
          },
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-default-html-attrs`,
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
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        appElement: "#___gatsby",
        modalProps: {
          portalClassName: `modal`,
          overlayClassName: `modal__overlay`,
          className: `modal__content`,
          bodyOpenClassName: `modal-body--opened`,
          htmlOpenClassName: `modal-html--opened`,
        },
      },
    },
  ],
};
