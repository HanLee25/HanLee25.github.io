const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
	siteMetadata: {
		title: `Han Lee`,
		description: `Product Designer, Illustrator, and Front-end Developer`,
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
			resolve: "gatsby-plugin-react-svg",
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
	],
};
