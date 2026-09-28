"use client";

import { useState } from "react";

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export default function DiscoverSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [showAll, setShowAll] = useState(false);

  /* Show first 14 tags by default, all on "+ More" */
  const visibleCategories = showAll ? CATEGORIES : CATEGORIES.slice(0, 14);

  return (
    <section id="discover-section" className="discover-section">
      <div className="discover-inner">
        {/* Heading */}
        <h2 className="discover-heading">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>

        {/* Subtitle */}
        <p className="discover-subtitle">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        {/* Category Tags */}
        <div className="discover-tags">
          {visibleCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`discover-tag${activeCategory === cat ? " discover-tag--active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}

          {!showAll && (
            <button
              type="button"
              className="discover-tag discover-tag--more"
              onClick={() => setShowAll(true)}
            >
              + More
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
