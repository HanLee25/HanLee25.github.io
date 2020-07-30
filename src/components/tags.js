import React from "react";
import { Link } from "gatsby";
import { useTagsList } from "../hooks";
import { kebabCase } from "lodash";

const Tags = () => {
  const tags = useTagsList();
  return (
    <ul className="filter inline-list">
      <li className="inline-list__item">
        <Link
          to="/works"
          className="button button--ghost button--sm"
          activeClassName="button--active"
          partiallyActive={true}
        >
          All{" "}
          <span className="badge">
            <span className="badge__value">8</span>
          </span>
        </Link>
      </li>
      {tags.map((tag) => (
        <li key={tag.fieldValue} className="inline-list__item">
          <Link
            to={`/tags/${kebabCase(tag.fieldValue)}`}
            className="button button--ghost button--sm"
            activeClassName="button--active"
            partiallyActive={true}
          >
            {tag.fieldValue}{" "}
            <span className="badge">
              <span className="badge__value">{tag.totalCount}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
