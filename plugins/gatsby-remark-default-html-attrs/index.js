function getClassNames(value) {
  if (Array.isArray(value)) return value;
  return typeof value === "string" ? [value] : [];
}

function addClassNames(node, classNames) {
  if (!classNames.length) return;

  node.data = node.data || {};
  node.data.hProperties = node.data.hProperties || {};

  const existing = node.data.hProperties.className || [];
  const existingClassNames = Array.isArray(existing) ? existing : [existing];
  node.data.hProperties.className = [...existingClassNames, ...classNames];
}

module.exports = ({ markdownAST }, options) => {
  const visit = (node) => {
    if (node.type === "heading") {
      addClassNames(node, getClassNames(options[`h${node.depth}`]));
    } else if (node.type === "paragraph") {
      addClassNames(node, getClassNames(options.p));
    } else if (node.type === "strong") {
      addClassNames(node, getClassNames(options.strong));
    }

    (node.children || []).forEach(visit);
  };

  visit(markdownAST);
};
