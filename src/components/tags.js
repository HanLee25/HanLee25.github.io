import React, { useState } from "react";
import { Link } from "gatsby";
import { useTagsList } from "../hooks";
import { kebabCase } from "lodash";

function Tags() {
  const tags = useTagsList();
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div className="filter">
      <button
        className="filter__toggle button button--ghost button--sm xl:hidden"
        onClick={() => toggleExpansion(!isExpanded)}
      >
        by skill
        <span className={`filter__arrow${
          isExpanded ? ` filter__arrow--flipped` : ``
        }`}>&or;</span>
      </button>

      <ul
        className={`filter__list inline-list${
          isExpanded ? ` filter__list--opened` : ``
        }`}
      >
        <li className="inline-list__item">
          <Link
            to="/works"
            className="button button--ghost button--sm"
            activeClassName="button--active"
            partiallyActive={true}
          >
            All{" "}
            <span className="badge">
              <span className="badge__value">11</span>
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
    </div>
  );
}

export default Tags;