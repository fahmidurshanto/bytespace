"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COURSES, AVATAR_IMAGES } from "../data/courses";

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
            <Link href={`/course-details/${course.id}`} key={course.id} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <article className="course-card">
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
                        {AVATAR_IMAGES.slice((course.id - 1) % AVATAR_IMAGES.length, (course.id - 1) % AVATAR_IMAGES.length + 4).concat(
                          AVATAR_IMAGES.slice(0, Math.max(0, 4 - (AVATAR_IMAGES.length - (course.id - 1) % AVATAR_IMAGES.length)))
                        ).slice(0, 4).map((src, i) => (
                          <div key={i} className="course-card__avatar">
                            <img src={src} alt="Student" />
                          </div>
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
            </Link>
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

