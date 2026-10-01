"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COURSES } from "../data/courses";
import CourseCard from "./CourseCard";
import CategorySelector from "./CategorySelector";

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

const LEARNING_PATHS = [
  { name: "Design", icon: "/courses/categories/design.png" },
  { name: "Development", icon: "/courses/categories/development.png" },
  { name: "IT & Software", icon: "/courses/categories/it&software.png" },
  { name: "Business", icon: "/courses/categories/business.png" },
  { name: "Marketing", icon: "/courses/categories/marketing.png" },
  { name: "Photography", icon: "/courses/categories/photography.png" },
];

export default function DiscoverSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="courses" className="discover-section">
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
        <CategorySelector 
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          containerClassName="discover-tags"
          baseClassName="discover-tag"
          activeClassName="discover-tag--active"
          limitInitial={14}
          showMoreButton={true}
          moreButtonClassName="discover-tag discover-tag--more"
        />

        {/* ── Course Cards Grid ── */}
        <div className="course-grid">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* ── Learning Paths Section ── */}
        <div className="learning-paths">
          <h2 className="learning-paths__heading">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="learning-paths__subtitle">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>

          <div className="learning-paths__grid">
            {LEARNING_PATHS.map((path) => (
              <div key={path.name} className="learning-path-card">
                <div className="learning-path-card__icon-wrapper">
                  <Image
                    src={path.icon}
                    alt={path.name}
                    width={28}
                    height={28}
                    className="learning-path-card__icon"
                  />
                </div>
                <span className="learning-path-card__name">{path.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

