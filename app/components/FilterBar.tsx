import React from "react";
import Icon from "./Icon";

interface FilterBarProps {
  style?: React.CSSProperties;
  rightAction?: React.ReactNode;
}

export default function FilterBar({ style, rightAction }: FilterBarProps) {
  return (
    <div className="filters-row" style={style}>
      <div className="filter-controls">
        <button className="filter-btn">
          <Icon name="filter" />
          Filter
        </button>
        <button className="filter-btn">
          <Icon name="level" />
          Level
        </button>
        <button className="filter-btn">
          <Icon name="category" />
          Category
        </button>
      </div>
      
      {rightAction}
    </div>
  );
}
