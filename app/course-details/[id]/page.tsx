"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../course-details.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { COURSES } from "../../data/courses";
import { notFound } from "next/navigation";

export default function CourseDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const course = COURSES.find(c => c.id === parseInt(resolvedParams.id));
  
  const [activeTab, setActiveTab] = useState("About");

  if (!course) return notFound();

  return (
    <main className="course-details-page">
      <header className="course-details-header">
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 100 }}>
          <Navbar />
        </div>
        
        {/* Grid overlay */}
        <div className="course-details-grid-overlay" aria-hidden="true" />

        <div className="course-details-container">
          <div className="course-details-top-row">
            <div className="course-details-info">
              <h1 className="course-title">{course.title}</h1>
              <h2 className="course-subtitle">{course.subtitle}</h2>
              
              <p className="course-creator">
                by <span>{course.creator}</span>
              </p>
              
              <div className="course-badges">
                <div className="course-badge">
                  <svg className="course-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                  {course.level}
                </div>
                
                <div className="course-badge">
                  <svg className="course-badge-icon" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
                  </svg>
                  {course.rating} ({course.comments} reviews)
                </div>
                
                <div className="course-badge">
                  <svg className="course-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  {course.students} Students
                </div>
              </div>
            </div>
            
            <button className="course-share-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              Share
            </button>
          </div>
        </div>
      </header>
      
      {/* Course Content Section */}
      <section className="course-content-section">
        
        {/* Left Column (Content) */}
        <div className="course-content-left">
          
          <div className="course-video-container">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Course Video Thumbnail" 
              className="course-video-thumb"
            />
            <button className="course-play-btn" aria-label="Play video">
              <svg className="course-play-icon" viewBox="0 0 24 24">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </button>
          </div>

          <div className="course-tabs">
            <button 
              className={`course-tab ${activeTab === "About" ? "active" : ""}`}
              onClick={() => setActiveTab("About")}
            >
              About
            </button>
            <button 
              className={`course-tab ${activeTab === "Lessons" ? "active" : ""}`}
              onClick={() => setActiveTab("Lessons")}
            >
              Lessons
            </button>
            <button 
              className={`course-tab ${activeTab === "Reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("Reviews")}
            >
              Reviews
            </button>
          </div>

        {activeTab === "About" && (
          <>
            <div className="course-description">
              <h2 className="course-section-title">Description</h2>
              <p className="course-description-text">
                Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
              </p>
              <p className="course-description-text">
                In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
              </p>
              <p className="course-description-text">
                As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
              </p>
            </div>

            <div className="sneak-peak-section">
              <h2 className="course-section-title">Sneak Peak</h2>
              <div className="sneak-peak-grid">
                <div className="sneak-peak-thumb-wrapper">
                  <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Sneak Peek 1" className="sneak-peak-thumb" />
                </div>
                <div className="sneak-peak-thumb-wrapper">
                  <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Sneak Peek 2" className="sneak-peak-thumb" />
                </div>
                <div className="sneak-peak-thumb-wrapper">
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Sneak Peek 3" className="sneak-peak-thumb" />
                </div>
                <div className="sneak-peak-thumb-wrapper">
                  <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Sneak Peek 4" className="sneak-peak-thumb" />
                </div>
              </div>
            </div>

            <div className="key-points-section">
              <h2 className="course-section-title">Key Points</h2>
              <ul className="key-points-list">
                {[
                  "Foundational Concepts",
                  "Design Principles Mastery",
                  "Advanced Techniques in Digital Creation",
                  "Project Showcase and Critique",
                  "Optimizing for Various Platforms",
                  "Digital Asset Management Best Practices",
                  "Monetization Strategies",
                  "Capstone Project: Building Your Portfolio"
                ].map((point, index) => (
                  <li key={index} className="key-point-item">
                    <svg className="key-point-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#1400ff" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {activeTab === "Lessons" && (
          <div className="lessons-tab-content">
            <h2 className="course-section-title">Explore the Modules</h2>
            <p className="course-description-text" style={{ marginBottom: "2rem" }}>
              Immerse yourself in the course curriculum through seven detailed modules. Each module is carefully crafted to deliver actionable insights and hands-on experience.
            </p>

            <h3 className="course-section-title" style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Lesson List</h3>
            <div className="lessons-list">
              {[
                {
                  title: "Module 1: Introduction to Digital Assets",
                  desc: "Lay the groundwork with lessons like \"Understanding Digital Elements\" and \"Navigating Design Software Tools,\" diving into the essentials of digital asset practice."
                },
                {
                  title: "Module 2: Design Principles for Impact",
                  desc: "Master the principles that drive impactful designs with lessons such as \"Color Theory in Digital Design\" and \"Typography Essentials,\" elevating your visual communication skills."
                },
                {
                  title: "Module 3: User-Centric Design Strategies",
                  desc: "Understand \"Design Thinking in Digital Creation\" and delve into \"User Experience (UX) Essentials,\" crafting digital assets with a focus on user-centric design."
                },
                {
                  title: "Module 4: Interactive Media and Engagement",
                  desc: "Engage your audience with modules like \"Creating Interactive Presentations\" and \"Integrating Multimedia Elements,\" discovering the art of creating immersive digital experiences."
                },
                {
                  title: "Module 5: Project Showcase and Critique",
                  desc: "Refine your presentation skills with \"Effective Presentation Techniques\" and embrace collaboration with \"Peer Critique and Collaboration,\" showcasing your work on these platforms."
                },
                {
                  title: "Module 6: Optimizing Digital Assets for Various Platforms",
                  desc: "Adapt your digital creations for \"Mobile Platforms\" and optimize for \"Social Media,\" ensuring widespread accessibility and engagement across diverse digital landscapes."
                }
              ].map((mod, i) => (
                <div key={i} className="module-item">
                  <div className="module-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                      <line x1="7" y1="2" x2="7" y2="22"></line>
                      <line x1="17" y1="2" x2="17" y2="22"></line>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <line x1="2" y1="7" x2="7" y2="7"></line>
                      <line x1="2" y1="17" x2="7" y2="17"></line>
                      <line x1="17" y1="17" x2="22" y2="17"></line>
                      <line x1="17" y1="7" x2="22" y2="7"></line>
                    </svg>
                  </div>
                  <div className="module-info">
                    <span className="module-title">{mod.title}</span>
                    <span className="module-desc">{mod.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="course-section-title" style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Lesson Content</h3>
            <p className="course-description-text" style={{ marginBottom: "2rem" }}>
              Engage with each lesson through captivating video tutorials, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
            </p>

            <h3 className="course-section-title" style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Lesson Progress Tracking</h3>
            <p className="course-description-text">
              Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
            </p>

            <div className="progress-card">
              <div className="progress-header">Learning Progress</div>
              <div className="progress-percent">55%</div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: "55%" }}></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Reviews" && (
          <div className="reviews-tab-content">
            <h2 className="course-section-title">What Learners Are Saying</h2>
            <p className="course-description-text" style={{ marginBottom: "2rem" }}>
              Discover what our learners think! Read real experiences with "Build Digital Assets: A Comprehensive Guide." Find reviews and ratings from individuals who have embarked on this transformative journey of mastering digital asset creation.
            </p>

            <div className="rating-summary-box">
              <div className="rating-score-box">
                <span className="rating-score-label">Ratings</span>
                <span className="rating-score-value">4.7</span>
              </div>
              <div className="rating-bars-container">
                {[
                  { stars: 5, pct: "90%", count: 120 },
                  { stars: 4, pct: "30%", count: 30 },
                  { stars: 3, pct: "10%", count: 21 },
                  { stars: 2, pct: "5%", count: 12 },
                  { stars: 1, pct: "8%", count: 15 }
                ].map((bar, i) => (
                  <div key={i} className="rating-bar-row">
                    <div className="rating-bar-track">
                      <div className="rating-bar-fill" style={{ width: bar.pct }}></div>
                    </div>
                    <div className="rating-stars">
                      {[1, 2, 3, 4, 5].map(s => (
                        <svg key={s} viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill={s <= bar.stars ? "#4b5563" : "#e5e7eb"} /></svg>
                      ))}
                    </div>
                    <div className="rating-count">{bar.count}</div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="course-section-title" style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Individual Reviews</h3>
            
            <div className="review-filters">
              <button className="review-filter-btn active">All rating</button>
              {[5, 4, 3, 2, 1].map(num => (
                <button key={num} className="review-filter-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#4b5563"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg>
                  {num}
                </button>
              ))}
            </div>

            <div className="reviews-list">
              {[
                {
                  name: "PurePearl Studio",
                  role: "UI/UX Designer",
                  time: "a year ago",
                  avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80",
                  text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"
                },
                {
                  name: "Albert Flores",
                  role: "UI/UX Designer",
                  time: "a year ago",
                  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80",
                  text: "This course transformed my approach to digital design. The combination of theory, hands-on exercise, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!"
                },
                {
                  name: "Cody Fisher",
                  role: "UI/UX Designer",
                  time: "a year ago",
                  avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80",
                  text: "Excellent content and well-structured modules. The pacing was just right, and the examples used were very relevant to current industry standards."
                }
              ].map((review, i) => (
                <div key={i} className="review-card">
                  <div className="review-card-header">
                    <div className="review-user-info">
                      <img src={review.avatar} alt={review.name} className="review-avatar" />
                      <div>
                        <div className="review-user-name">{review.name}</div>
                        <div className="review-user-role">{review.role}</div>
                      </div>
                    </div>
                    <div className="review-date">{review.time}</div>
                  </div>
                  <div className="review-stars-given">
                    {[1, 2, 3, 4, 5].map(s => (
                      <svg key={s} viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="#1a1a1a" /></svg>
                    ))}
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        </div>

        {/* Right Column (Sidebar) */}
        <div className="course-sidebar-right">
          <div className="course-sidebar-sticky">
            <div className="sidebar-card">
              <h3 className="sidebar-heading">{course.lessons} Lessons ({course.duration})</h3>
              
              <div className="sidebar-lessons-list">
                <div className="sidebar-lesson">
                  <span className="sidebar-lesson-num">01</span>
                  <span className="sidebar-lesson-title">Introduction to Digital Assets</span>
                  <span className="sidebar-lesson-time">12 mins</span>
                </div>
                <div className="sidebar-lesson">
                  <span className="sidebar-lesson-num">02</span>
                  <span className="sidebar-lesson-title">Design Principles for Impacts</span>
                  <span className="sidebar-lesson-time">21 mins</span>
                </div>
                <div className="sidebar-lesson">
                  <span className="sidebar-lesson-num">03</span>
                  <span className="sidebar-lesson-title">Advanced Techniques in Digital Creation</span>
                  <span className="sidebar-lesson-time">16 mins</span>
                </div>
              </div>
              
              <span className="sidebar-more-videos">99 more videos</span>

              <p className="sidebar-text-prompt">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
              </p>

              <div className="sidebar-price-row">
                <span className="sidebar-price">${course.price}</span>
                <span className="sidebar-price-period">/lifetime</span>
              </div>

              <button className="sidebar-enroll-btn">Enroll Now</button>

              <h4 className="sidebar-heading" style={{ fontSize: "1.1rem" }}>This course include</h4>
              
              <div className="sidebar-features-list">
                <div className="sidebar-feature">
                  <svg className="sidebar-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                  Learning Resources
                </div>
                <div className="sidebar-feature">
                  <svg className="sidebar-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
                  Quality Lesson Videos
                </div>
                <div className="sidebar-feature">
                  <svg className="sidebar-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2" ry="2" /><path d="M7 8V6a5 5 0 0 1 10 0v2" /></svg>
                  Certificate of Completion
                </div>
                <div className="sidebar-feature">
                  <svg className="sidebar-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z" /><path d="M12 12L2.1 7.1" /><path d="M12 12l9.9 4.9" /></svg>
                  Private Consultation
                </div>
              </div>

              <hr className="sidebar-divider" />

              <div className="sidebar-creator-profile">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80" alt="Creator" className="sidebar-creator-avatar" />
                <div className="sidebar-creator-info">
                  <h4>PurePearl Studio</h4>
                  <p>Professional Creator</p>
                </div>
              </div>
              
              <p className="sidebar-text-prompt">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
              </p>

              <button className="sidebar-profile-btn">See Full Profile</button>

            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
