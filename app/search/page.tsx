"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./search.css";
import "../components/DiscoverSection.css"; // Import styles for course cards
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Link from "next/link";
import { COURSES } from "../data/courses";
import CourseCard from "../components/CourseCard";
import FilterBar from "../components/FilterBar";
import Icon from "../components/Icon";
import Pagination from "../components/Pagination";
import CategorySelector from "../components/CategorySelector";

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
        <FilterBar 
          rightAction={
            <button className="reset-btn">
              <Icon name="reset" />
              Reset all filters
            </button>
          }
        />

        {/* Categories Row */}
        <CategorySelector 
          categories={CATEGORIES} 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />

        {/* Course Cards Grid */}
        <div className="course-grid">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Pagination Section */}
        <Pagination />
      </section>
      <Footer />
    </main>
  );
}
