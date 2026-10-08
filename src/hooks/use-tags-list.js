import { useStaticQuery, graphql } from "gatsby";

const useTagsList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`query TagsListQuery {
  allMarkdownRemark(sort: {frontmatter: {date: ASC}}) {
    group(field: {frontmatter: {tags: SELECT}}) {
      fieldValue
      totalCount
    }
  }
}`
  );

  return allMarkdownRemark.group;
};

export default useTagsList;
