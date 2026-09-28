"use client";

import { useState } from "react";
import Image from "next/image";

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

const COURSES = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    creator: "purplepurl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    students: "26+",
    image: "/courses/course-1.webp",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    creator: "purplepurl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    students: "26+",
    image: "/courses/course-2.webp",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    creator: "purplepurl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    students: "26+",
    image: "/courses/course-3.webp",
  },
  {
    id: 4,
    title: "Balancing Productivity an…",
    creator: "purplepurl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    students: "26+",
    image: "/courses/course-4.webp",
  },
  {
    id: 5,
    title: "Mastering Money Manage…",
    creator: "purplepurl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    students: "26+",
    image: "/courses/course-5.webp",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ…",
    creator: "purplepurl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    students: "26+",
    image: "/courses/course-6.webp",
  },
];

/* Placeholder avatar colours */
const AVATAR_COLORS = ["#E8D5B7", "#D4A574", "#8B6F47", "#C4956A"];

export default function DiscoverSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [showAll, setShowAll] = useState(false);

  /* Show first 14 tags by default, all on "+ More" */
  const visibleCategories = showAll ? CATEGORIES : CATEGORIES.slice(0, 14);

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

        {/* ── Course Cards Grid ── */}
        <div className="course-grid">
          {COURSES.map((course) => (
            <article key={course.id} className="course-card">
              {/* Thumbnail */}
              <div className="course-card__thumb">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={240}
                  className="course-card__img"
                />
                {/* Overlay meta tags */}
                <div className="course-card__meta-overlay">
                  <span className="course-card__meta-tag">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /></svg>
                    {course.lessons} Lessons
                  </span>
                  <span className="course-card__meta-tag">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    {course.duration}
                  </span>
                  <span className="course-card__meta-tag">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    {course.comments} Comments
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="course-card__body">
                {/* Title row */}
                <div className="course-card__title-row">
                  <h3 className="course-card__title">{course.title}</h3>
                  <div className="course-card__rating">
                    {course.rating}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#3b82f6">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  </div>
                </div>

                {/* Creator */}
                <p className="course-card__creator">
                  by <span className="course-card__creator-name">{course.creator}</span>
                </p>

                {/* Level + Avatars row */}
                <div className="course-card__info-row">
                  <div className="course-card__level">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                    {course.level}
                  </div>
                  <div className="course-card__avatars">
                    <div className="course-card__avatar-stack">
                      {AVATAR_COLORS.map((color, i) => (
                        <div
                          key={i}
                          className="course-card__avatar"
                          style={{ background: color }}
                        />
                      ))}
                    </div>
                    <span className="course-card__avatar-count">{course.students}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="course-card__price">
                  <span className="course-card__price-amount">${course.price}</span>
                  <span className="course-card__price-period">/lifetime</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

