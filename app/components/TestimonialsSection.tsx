"use client";

import { useState } from "react";
import "./TestimonialsSection.css";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  course: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "UI/UX Designer at Figma",
    avatar: "/avatars/avatar_1.png",
    rating: 5,
    course: "UI/UX Design Masterclass",
    quote:
      "ByteSpace completely transformed how I approach digital product design. The course quality and community feedback helped me land my dream role!",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Frontend Developer",
    avatar: "/avatars/avatar_2.png",
    rating: 5,
    course: "Fullstack Web Development",
    quote:
      "The practical projects and hands-on exercises made learning complex Next.js patterns so intuitive. Highly recommend to anyone looking to level up.",
  },
  {
    id: 3,
    name: "Marcus Vance",
    role: "Digital Content Creator",
    avatar: "/avatars/avatar_3.png",
    rating: 5,
    course: "Monetize Your Knowledge",
    quote:
      "Publishing my first course on ByteSpace was effortless. Within two months, I built a community of over 3,000 active students!",
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="testimonials-section">
      {/* Grid background overlay */}
      <div className="testimonials-grid-overlay" aria-hidden="true" />

      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <span className="testimonials-badge">TESTIMONIALS</span>
          <h2 className="testimonials-headline">
            What Our Students & Creators Say
          </h2>
          <p className="testimonials-subtext">
            Join thousands of satisfied learners and successful creators who have
            transformed their careers with ByteSpace.
          </p>

          <div className="testimonials-rating-bar">
            <div className="testimonials-stars">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#C8FF00"
                >
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ))}
            </div>
            <span className="testimonials-rating-text">
              <strong>4.9 / 5.0</strong> rating from over 10,000+ reviews
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="testimonials-grid">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="testimonial-card-header">
                <div className="testimonial-avatar-wrapper">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="testimonial-avatar"
                  />
                </div>
                <div className="testimonial-user-info">
                  <h3 className="testimonial-name">{item.name}</h3>
                  <p className="testimonial-role">{item.role}</p>
                </div>
              </div>

              <div className="testimonial-rating">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={i}
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="#C8FF00"
                  >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>

              <p className="testimonial-quote">"{item.quote}"</p>

              <div className="testimonial-card-footer">
                <span className="testimonial-course-tag">{item.course}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
