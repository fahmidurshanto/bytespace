"use client";

import { useState } from "react";
import Link from "next/link";
import "./login.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="login-page">
      {/* Full-page square grid overlay */}
      <div className="login-page-grid-overlay" aria-hidden="true" />

      <div className="login-container">
        {/* ── Left Side: Visual Showcase Banner ── */}
        <div className="login-visual">
          <div className="login-visual-grid" aria-hidden="true" />

          {/* Floating 3D Cones */}
          <div className="login-cone cone-top">
            <img src="/login_page/Cone.png" alt="" />
          </div>
          <div className="login-cone cone-bottom">
            <img src="/login_page/Cone (1).png" alt="" />
          </div>

          {/* Image & Course Cards Showcase Stack */}
          <div className="login-card-stack">
            {/* Backdrop Card */}
            <div className="login-thumb-back">
              <img src="/login_page/thumb_back.jpg" alt="ByteSpace course background" />
            </div>

            {/* Main Course Card */}
            <div className="login-course-card">
              <div className="login-card-image-wrapper">
                <img src="/login_page/thumb.jpg" alt="UX/UI Design Course" className="login-card-img" />
                <div className="login-card-badge-row">
                  <span className="card-pill">Beginner</span>
                  <span className="card-pill">UI/UX</span>
                </div>
              </div>
              <div className="login-card-details">
                <div className="login-card-title-row">
                  <h3 className="login-card-course-title">UX/UI Design Course</h3>
                  <div className="login-card-star-rating">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#C8FF00">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                    <span>4.8 (240)</span>
                  </div>
                </div>
                <p className="login-card-author">By Sarah Jenkins</p>
                <div className="login-card-footer-row">
                  <div className="login-card-avatars">
                    <img src="/avatars/avatar_1.png" alt="" />
                    <img src="/avatars/avatar_2.png" alt="" />
                    <img src="/avatars/avatar_3.png" alt="" />
                    <span className="avatar-count">26+</span>
                  </div>
                  <span className="login-card-price">$49.00</span>
                </div>
              </div>
            </div>

            {/* Auto Layout Vertical Image Card Overlay */}
            <div className="login-auto-layout-card">
              <img src="/login_page/Auto Layout Vertical.png" alt="Card Showcase" />
            </div>
          </div>

          {/* Visual Overlay Heading */}
          <div className="login-visual-text">
            <h2>Welcome Back to ByteSpace</h2>
            <p>Access your premium learning tools, connect with your audience, and keep growing.</p>
          </div>
        </div>

        {/* ── Right Side: Login Form ── */}
        <div className="login-form-wrapper">

          <div className="login-form-box">
            <h1 className="login-title">Sign In</h1>
            <p className="login-sub">Welcome back! Please enter your details.</p>

            {submitted ? (
              <div className="login-success">
                <div className="success-icon">✓</div>
                <h3>Logged In Successfully!</h3>
                <p>Welcome back! Redirecting to your dashboard...</p>
                <Link href="/" className="btn-return-home">
                  Return to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="login-form">

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* Password */}
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="password-input-wrapper">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                
                <div className="form-forgot-password">
                  <Link href="/forgot-password">Forgot password?</Link>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">
                  Sign In
                </button>

                <p className="switch-text">
                  Don't have an account? <Link href="/register">Sign up</Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
