import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

function SEO({ description, image, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          siteUrl: url
          defaultImage: image
          description
          author
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  const imageUrl = image || site.siteMetadata.defaultImage;
  const metadata = [
    { name: "description", content: metaDescription },
    { property: "og:title", content: title },
    { property: "og:url", content: site.siteMetadata.siteUrl },
    { property: "og:description", content: metaDescription },
    { property: "og:type", content: "website" },
    { property: "og:image", content: imageUrl },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:creator", content: site.siteMetadata.author },
    { name: "twitter:title", content: title },
    { name: "twitter:url", content: site.siteMetadata.siteUrl },
    { name: "twitter:description", content: metaDescription },
    { name: "twitter:image", content: imageUrl },
    ...(keywords.length > 0
      ? [{ name: "keywords", content: keywords.join(", ") }]
      : []),
    ...meta,
  ];

  return (
    <>
      <html lang={lang} />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      {metadata.map((item) => (
        <meta key={item.name || item.property} {...item} />
      ))}
    </>
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  meta: [],
  image: null,
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default SEO;
