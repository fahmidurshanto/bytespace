"use client";

import { useState } from "react";
import Link from "next/link";
import "./register.css";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    role: "creator",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="register-page">
      {/* Full-page square grid overlay */}
      <div className="register-page-grid-overlay" aria-hidden="true" />

      <div className="register-container">
        {/* ── Left Side: Visual Showcase Banner ── */}
        <div className="register-visual">
          <div className="register-visual-grid" aria-hidden="true" />

          {/* Floating 3D Cones */}
          <div className="register-cone cone-top">
            <img src="/register_page/Cone.png" alt="" />
          </div>
          <div className="register-cone cone-bottom">
            <img src="/register_page/Cone (1).png" alt="" />
          </div>

          {/* Image & Course Cards Showcase Stack */}
          <div className="register-card-stack">
            {/* Backdrop Card */}
            <div className="register-thumb-back">
              <img src="/register_page/thumb_back.jpg" alt="ByteSpace course background" />
            </div>

            {/* Main Course Card */}
            <div className="register-course-card">
              <div className="register-card-image-wrapper">
                <img src="/register_page/thumb.jpg" alt="UX/UI Design Course" className="register-card-img" />
                <div className="register-card-badge-row">
                  <span className="card-pill">Beginner</span>
                  <span className="card-pill">UI/UX</span>
                </div>
              </div>
              <div className="register-card-details">
                <div className="register-card-title-row">
                  <h3 className="register-card-course-title">UX/UI Design Course</h3>
                  <div className="register-card-star-rating">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#C8FF00">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                    <span>4.8 (240)</span>
                  </div>
                </div>
                <p className="register-card-author">By Sarah Jenkins</p>
                <div className="register-card-footer-row">
                  <div className="register-card-avatars">
                    <img src="/avatars/avatar_1.png" alt="" />
                    <img src="/avatars/avatar_2.png" alt="" />
                    <img src="/avatars/avatar_3.png" alt="" />
                    <span className="avatar-count">26+</span>
                  </div>
                  <span className="register-card-price">$49.00</span>
                </div>
              </div>
            </div>

            {/* Auto Layout Vertical Image Card Overlay */}
            <div className="register-auto-layout-card">
              <img src="/register_page/Auto Layout Vertical.png" alt="Card Showcase" />
            </div>
          </div>

          {/* Visual Overlay Heading */}
          <div className="register-visual-text">
            <h2>Unlock Your Full Creative Potential with ByteSpace</h2>
            <p>Gain access to premium learning tools, build your audience, and share your expertise worldwide.</p>
          </div>
        </div>

        {/* ── Right Side: Register Form ── */}
        <div className="register-form-wrapper">
          {/* Logo */}
          <Link href="/" className="register-logo">
            <span className="register-logo-icon">B</span>
            <span className="register-logo-text">ByteSpace</span>
          </Link>

          <div className="register-form-box">
            <h1 className="register-title">Create your Account</h1>
            <p className="register-sub">Welcome! Please fill in your details to get started.</p>

            {submitted ? (
              <div className="register-success">
                <div className="success-icon">✓</div>
                <h3>Account Created Successfully!</h3>
                <p>Welcome to ByteSpace, {formData.fullName || "Creator"}! Check your email to verify your account.</p>
                <Link href="/" className="btn-return-home">
                  Return to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="register-form">

                {/* Role Selector Tabs */}
                <div className="role-selector">
                  <button
                    type="button"
                    className={`role-tab ${formData.role === "creator" ? "active" : ""}`}
                    onClick={() => setFormData({ ...formData, role: "creator" })}
                  >
                    Join as Creator
                  </button>
                  <button
                    type="button"
                    className={`role-tab ${formData.role === "student" ? "active" : ""}`}
                    onClick={() => setFormData({ ...formData, role: "student" })}
                  >
                    Join as Student
                  </button>
                </div>

                {/* Name Fields Row */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>

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

                {/* Password Fields Row */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="password-input-wrapper">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        placeholder="Create password"
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
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    />
                  </div>
                </div>

                {/* Checkbox Agreement */}
                <div className="form-checkbox">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      required
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    />
                    <span>
                      I agree to the <Link href="/terms">Terms of Service</Link> and{" "}
                      <Link href="/privacy">Privacy Policy</Link>
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">
                  Create Account
                </button>

                <p className="switch-text">
                  Already have an account? <Link href="/login">Sign in</Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
