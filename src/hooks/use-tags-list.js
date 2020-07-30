import { useStaticQuery, graphql } from "gatsby";

const useTagsList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query TagsListQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};

export default useTagsList;
