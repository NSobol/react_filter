import React from "react";
import propTypes from "prop-types";

function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  return (
    <nav className="toolbar">
      <ul className="toolbar-list">
        {filters.map((filter, index) => {
          return (
            <li className="toolbar-list-item" key={index}>
              <button
                className={
                  filter === selected ? "toolbar-btn active" : "toolbar-btn"
                }
                onClick={() => onSelectFilter(filter)}
              >
                {filter}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Toolbar.propTypes = {
  filters: propTypes.array,
  selected: propTypes.string,
  onSelectFilter: propTypes.func,
};

export default Toolbar;
