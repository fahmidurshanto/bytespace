"use client";

import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      {/* Grid overlay */}
      <div className="footer-grid-overlay" aria-hidden="true" />

      <div className="footer-container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="/" className="footer-logo">
              <span className="footer-logo-icon">B</span>
              <span className="footer-logo-text">ByteSpace</span>
            </a>
            <p className="footer-brand-desc">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses and expert creators.
            </p>
            <div className="footer-socials">
              <a href="https://twitter.com" aria-label="Twitter" className="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                </svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Column 1: Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#discover" className="footer-link">Discover Courses</a></li>
              <li><a href="#growth" className="footer-link">Why ByteSpace</a></li>
              <li><a href="#join-creator" className="footer-link">Join as Creator</a></li>
              <li><a href="#testimonials" className="footer-link">Testimonials</a></li>
            </ul>
          </div>

          {/* Nav Column 2: Popular Categories */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Top Categories</h4>
            <ul className="footer-links">
              <li><a href="/courses/uiux" className="footer-link">UI/UX Design</a></li>
              <li><a href="/courses/webdev" className="footer-link">Web Development</a></li>
              <li><a href="/courses/motion" className="footer-link">Motion Graphics</a></li>
              <li><a href="/courses/ai" className="footer-link">AI & Machine Learning</a></li>
              <li><a href="/courses/business" className="footer-link">Digital Business</a></li>
            </ul>
          </div>

          {/* Nav Column 3: Newsletter */}
          <div className="footer-newsletter-col">
            <h4 className="footer-col-title">Stay Updated</h4>
            <p className="footer-newsletter-sub">
              Subscribe to get the latest course releases and creator insights.
            </p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-email-input"
                required
              />
              <button type="submit" className="footer-subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>
          <div className="footer-bottom-actions">
            <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
            <span className="footer-dot">•</span>
            <a href="/terms" className="footer-bottom-link">Terms of Service</a>
            <button className="footer-back-to-top" onClick={scrollToTop} aria-label="Back to top">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
