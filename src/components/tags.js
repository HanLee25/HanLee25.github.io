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
        <span
          className={`filter__arrow${
            isExpanded ? ` filter__arrow--flipped` : ``
          }`}
        >
          &or;
        </span>
      </button>

      <ul
        className={`filter__list inline-list${
          isExpanded ? ` filter__list--opened` : ``
        }`}
      >
        <li className="inline-list__item">
          <Link
            to="/works"
            className="tag"
            activeClassName="tag--active"
            partiallyActive={true}
          >
            All skills{" "}
            <span className="tag__addon-right badge">
              <span className="badge__value">11</span>
            </span>
          </Link>
        </li>
        {tags.map((tag) => (
          <li key={tag.fieldValue} className="inline-list__item">
            <Link
              to={`/tags/${kebabCase(tag.fieldValue)}`}
              className="tag"
              activeClassName="tag--active"
              partiallyActive={true}
            >
              {tag.fieldValue}{" "}
              <span className="tag__addon-right badge">
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
