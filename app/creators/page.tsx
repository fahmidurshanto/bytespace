"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import CreatorHeader from "../components/CreatorHeader";
import Footer from "../components/Footer";
import { COURSES } from "../data/courses";
import CourseCard from "../components/CourseCard";
import FilterBar from "../components/FilterBar";
import Icon from "../components/Icon";
import GridBackground from "../components/GridBackground";
import "../search/search.css"; // Reuse the styling for filters and course cards

export default function CreatorsPage() {
  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <GridBackground minHeight="380px">
        {/* We add some top padding so it clears the absolute navbar */}
        <div style={{ paddingTop: "60px" }}>
          <CreatorHeader />
        </div>
      </GridBackground>

      {/* Courses Section (similar to Search page) */}
      <section className="search-results-section">
        {/* Filters Row */}
        <FilterBar 
          style={{ marginBottom: "3rem" }}
          rightAction={
            <button className="filter-btn" style={{ borderRadius: "100px" }}>
              <Icon name="most-relevant" />
              Most relevant
            </button>
          }
        />

        {/* Course Cards Grid */}
        <div className="course-grid">
          {COURSES.slice(0, 6).map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              creatorNameStyle={{ color: "#3b82f6" }}
              priceAmountStyle={{ color: "#0631F8", fontWeight: 700 }}
              pricePeriodStyle={{ color: "#71717a", fontSize: "0.85rem" }}
            />
          ))}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
