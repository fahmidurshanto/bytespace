"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import CreatorHeader from "../components/CreatorHeader";
import Footer from "../components/Footer";
import { COURSES, AVATAR_IMAGES } from "../data/courses";
import "../search/search.css"; // Reuse the styling for filters and course cards

export default function CreatorsPage() {
  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* Header Section */}
      <div className="creator-page-bg">
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 100 }}>
          <Navbar />
        </div>
        {/* We add some top padding so it clears the absolute navbar */}
        <div style={{ paddingTop: "60px" }}>
          <CreatorHeader />
        </div>
      </div>

      {/* Courses Section (similar to Search page) */}
      <section className="search-results-section">
        {/* Filters Row */}
        <div className="filters-row" style={{ marginBottom: "3rem" }}>
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
          
          <button className="filter-btn" style={{ borderRadius: "100px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="3" y2="10" /><line x1="21" y1="6" x2="3" y2="6" /><line x1="21" y1="14" x2="3" y2="14" /><line x1="21" y1="18" x2="3" y2="18" /></svg>
            Most relevant
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="course-grid">
          {COURSES.slice(0, 6).map((course) => (
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
                      {course.lessons} Lessons
                    </span>
                    <span className="course-card__meta-tag">
                      {course.duration}
                    </span>
                    <span className="course-card__meta-tag">
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
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#a1a1aa">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                      </svg>
                    </div>
                  </div>

                  {/* Creator */}
                  <p className="course-card__creator">
                    by <span className="course-card__creator-name" style={{ color: "#3b82f6" }}>purepearl studio</span>
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
                    <span className="course-card__price-amount" style={{ color: "#0631F8", fontWeight: 700 }}>${course.price}</span>
                    <span className="course-card__price-period" style={{ color: "#71717a", fontSize: "0.85rem" }}>/lifetime</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
