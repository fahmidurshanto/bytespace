import React, { useState } from "react";

interface CategorySelectorProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  baseClassName?: string;
  activeClassName?: string;
  containerClassName?: string;
  limitInitial?: number;
  showMoreButton?: boolean;
  moreButtonClassName?: string;
}

export default function CategorySelector({
  categories,
  activeCategory,
  onSelectCategory,
  baseClassName = "category-pill",
  activeClassName = "active",
  containerClassName = "categories-row",
  limitInitial,
  showMoreButton = false,
  moreButtonClassName = "category-pill more-btn"
}: CategorySelectorProps) {
  const [showAll, setShowAll] = useState(false);

  const isLimited = limitInitial !== undefined && !showAll;
  const visibleCategories = isLimited ? categories.slice(0, limitInitial) : categories;
  
  return (
    <div className={containerClassName}>
      {visibleCategories.map((cat) => (
        <button
          key={cat}
          type="button"
          className={`${baseClassName}${activeCategory === cat ? ` ${activeClassName}` : ""}`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}

      {isLimited && showMoreButton && (
        <button
          type="button"
          className={moreButtonClassName}
          onClick={() => setShowAll(true)}
        >
          + More
        </button>
      )}
    </div>
  );
}
