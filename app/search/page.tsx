"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./search.css";
import "../components/DiscoverSection.css"; // Import styles for course cards
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const COURSES = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    creator: "purepearl studio",
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
    creator: "purepearl studio",
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
    creator: "purepearl studio",
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
    creator: "purepearl studio",
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
    creator: "purepearl studio",
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
    creator: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    students: "26+",
    image: "/courses/course-6.webp",
  },
  {
    id: 7,
    title: "Learn Figma from Basic",
    creator: "purepearl studio",
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
    id: 8,
    title: "Build Digital Asset",
    creator: "purepearl studio",
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
    id: 9,
    title: "the Power of Big Data",
    creator: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    students: "26+",
    image: "/courses/course-3.webp",
  }
];

const AVATAR_IMAGES = [
  "/avatars/avatar_1.png",
  "/avatars/avatar_2.png",
  "/avatars/avatar_3.png",
  "/avatars/avatar_4.png",
  "/avatars/avatar_5.png",
  "/avatars/avatar_6.png",
  "/avatars/avatar_7.png",
];

export default function SearchPage() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  return (
    <main className="search-page-main">
      <header className="search-header">
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 100 }}>
          <Navbar />
        </div>
        
        {/* Grid overlay */}
        <div className="search-page-grid-overlay" aria-hidden="true" />

        <div className="search-container">
          <h1 className="search-title">Find Your Next Course</h1>
          
          <div className="search-input-group">
            <div className="search-icon-wrapper">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search" 
            />
            
            <button className="search-category-btn">
              Courses
              <svg 
                className="search-category-icon"
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* The rest of the page content will go here */}
      <section className="search-results-section">
        {/* Filters Row */}
        <div className="filters-row">
          <div className="filter-controls">
            <button className="filter-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
              Filter
            </button>
            <button className="filter-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>
              Level
            </button>
            <button className="filter-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
              Category
            </button>
          </div>
          
          <button className="reset-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.92-10.44l5.58 5.58" /></svg>
            Reset all filters
          </button>
        </div>

        {/* Categories Row */}
        <div className="categories-row">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`category-pill ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
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
          ))}
        </div>

        {/* Pagination Section */}
        <div className="pagination-container">
          <button className="pagination-btn" aria-label="Previous Page">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <div className="pagination-numbers">
            <button className="pagination-number active">1</button>
            <button className="pagination-number">2</button>
            <button className="pagination-number">3</button>
            <button className="pagination-number">4</button>
            <button className="pagination-number">5</button>
          </div>

          <button className="pagination-btn" aria-label="Next Page">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
