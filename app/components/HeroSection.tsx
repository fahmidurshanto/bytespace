import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section id="hero-section" className="hero-section">
      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Hero Content ── */}
      <div className="hero-content">
        {/* Grid overlay */}
        <div className="hero-grid-overlay" aria-hidden="true" />

        {/* Decorative elements */}
        <div className="hero-decorations" aria-hidden="true">
          {/* Main top-left 3D element */}
          <div className="deco deco-element-1">
            <img src="/elements/element.png" alt="" />
          </div>
          {/* Top-right 3D element */}
          <div className="deco deco-element-2">
            <img src="/elements/element_2.png" alt="" />
          </div>
          {/* Mid-right 3D element */}
          <div className="deco deco-element-3">
            <img src="/elements/element_3.png" alt="" />
          </div>
          {/* Floating 3D Cone right */}
          <div className="deco deco-cone-right">
            <img src="/elements/cone_1.png" alt="" />
          </div>
          {/* Floating 3D Ellipse ring */}
          <div className="deco deco-ellipse">
            <img src="/elements/Ellipse.png" alt="" />
          </div>
        </div>

        {/* Main headline */}
        <h1 className="hero-headline">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        {/* Subtext */}
        <p className="hero-subtext">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search bar */}
        <div className="hero-search">
          <div className="hero-search-input-wrapper">
            <svg
              className="hero-search-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              id="hero-search-input"
              type="text"
              placeholder="Course, topic, creator"
              className="hero-search-input"
              aria-label="Search courses"
            />
          </div>
          <button id="hero-search-btn" className="hero-search-btn" type="button">
            Search
          </button>
        </div>

        {/* Hero image area */}
        <div className="hero-image-area">
          {/* Lime 3D Ellipse behind the person */}
          <div className="hero-blob-wrapper" aria-hidden="true">
            <img src="/elements/Ellipse.png" alt="" className="hero-blob-ellipse" />
          </div>

          {/* 3D Cone floating in front of the Ellipse backdrop */}
          <div className="hero-cone-floating" aria-hidden="true">
            <img src="/elements/Cone.png" alt="" />
          </div>

          {/* Person image */}
          <div className="hero-person">
            <Image
              src="/hero-student.png"
              alt="Student wearing headphones holding a laptop"
              width={1024}
              height={1024}
              preload
              className="hero-person-img"
            />
          </div>

          {/* Floating card: UI/UX Design */}
          <div className="float-card float-card-uiux">
            <div className="float-card-title">UI/UX Design</div>
            <div className="float-card-meta">200 Courses &nbsp;·&nbsp; 1000+ Students</div>
          </div>

          {/* Floating card: Learning Progress */}
          <div className="float-card float-card-progress">
            <div className="float-card-label">Learning Progress</div>
            <div className="float-card-percent">55%</div>
            <div className="float-card-bar">
              <div className="float-card-bar-fill" />
            </div>
          </div>

          {/* Floating card: Happy Students */}
          <div className="float-card float-card-students">
            <div className="float-card-title">Happy Students</div>
            <div className="float-card-rating">
              4.5 <span className="float-card-rating-count">(240)</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#C8FF00"
                className="float-card-star"
              >
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            </div>
            <div className="float-card-avatars">
              <div className="avatar-stack">
                <div className="avatar">
                  <img src="/avatars/avatar_1.png" alt="Student" />
                </div>
                <div className="avatar">
                  <img src="/avatars/avatar_2.png" alt="Student" />
                </div>
                <div className="avatar">
                  <img src="/avatars/avatar_3.png" alt="Student" />
                </div>
                <div className="avatar">
                  <img src="/avatars/avatar_5.png" alt="Student" />
                </div>
                <div className="avatar">
                  <img src="/avatars/avatar_7.png" alt="Student" />
                </div>
              </div>
              <span className="avatar-badge">2K+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
