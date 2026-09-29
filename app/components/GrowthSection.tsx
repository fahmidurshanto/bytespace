import Image from "next/image";

export default function GrowthSection() {
  return (
    <section id="creators" className="growth-section">
      <div className="growth-container">
        {/* ════════════════════════════════════════
           Block 1: Professional Growth (Text Left, Image Right)
           ════════════════════════════════════════ */}
        <div className="growth-block growth-block--1">
          {/* Content Left */}
          <div className="growth-content">
            <h2 className="growth-headline">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="growth-subtext">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Metrics */}
            <div className="growth-stats">
              <div className="growth-stat-item">
                <span className="growth-stat-number">12K</span>
                <span className="growth-stat-label">Students</span>
              </div>
              <div className="growth-stat-item">
                <span className="growth-stat-number">70+</span>
                <span className="growth-stat-label">Courses</span>
              </div>
              <div className="growth-stat-item">
                <span className="growth-stat-number">16</span>
                <span className="growth-stat-label">Creators</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Right */}
          <div className="growth-visual growth-visual--1">
            {/* Background Course Card mockup positioned behind creator */}
            <div className="growth-card-backdrop">
              <div className="growth-card-thumb">
                <Image
                  src="/courses/course-1.webp"
                  alt="Learn Figma from Basic"
                  width={320}
                  height={180}
                  className="growth-card-img"
                />
                <div className="growth-card-tags">
                  <span>17 Lessons</span>
                  <span>2 hours 16 mins</span>
                </div>
              </div>
              <div className="growth-card-info">
                <div className="growth-card-title-row">
                  <span className="growth-card-title">Learn Figma from Basic</span>
                  <span className="growth-card-rating">
                    4.5 <span className="star">★</span>
                  </span>
                </div>
                <div className="growth-card-creator">by purepearl studio</div>
                <div className="growth-card-meta">
                  <span className="growth-card-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                    Beginner
                  </span>
                  <span className="growth-card-price">$25<small>/lifetime</small></span>
                </div>
              </div>
            </div>

            {/* Floating Learning Progress Card */}
            <div className="growth-float-card float-progress">
              <span className="float-progress-label">Learning Progress</span>
              <span className="float-progress-val">55%</span>
              <div className="float-progress-bar">
                <div className="float-progress-fill" />
              </div>
            </div>

            {/* Decorative 3D Squiggle */}
            <div className="growth-squiggle squiggle-top" aria-hidden="true">
              <svg viewBox="0 0 100 120" fill="none">
                <path
                  d="M20,20 C80,10 90,40 40,50 C-10,60 80,80 30,100"
                  stroke="#C8FF00"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Person Cutout Image */}
            <div className="growth-person-wrapper">
              <Image
                src="/creators/creator-1.png"
                alt="Student with laptop"
                width={500}
                height={550}
                className="growth-person-img"
              />
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════
           Block 2: Create & Manage (Image Left, Text Right)
           ════════════════════════════════════════ */}
        <div className="growth-block growth-block--2">
          {/* Visual Showcase Left */}
          <div className="growth-visual growth-visual--2">
            {/* Blue Card 1: Total Revenue */}
            <div className="growth-float-card float-revenue">
              <div className="float-card-subtitle">Total Revenue</div>
              <div className="float-card-date">July 1-28</div>
              <div className="float-card-amount">$120.29</div>
              <div className="float-card-bar-mini">
                <div className="float-card-bar-fill-mini" />
              </div>
            </div>

            {/* Blue Card 2: Year to Date */}
            <div className="growth-float-card float-ytd">
              <div className="float-card-subtitle">Year to Date</div>
              <div className="float-card-date">2023</div>
              <div className="float-card-amount">$1,200.38</div>
              <span className="float-card-pill-tag">+12$</span>
            </div>

            {/* Decorative 3D Squiggle */}
            <div className="growth-squiggle squiggle-bottom" aria-hidden="true">
              <svg viewBox="0 0 100 120" fill="none">
                <path
                  d="M20,20 C80,10 90,40 40,50 C-10,60 80,80 30,100"
                  stroke="#C8FF00"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Floating Happy Students Card */}
            <div className="growth-float-card float-students">
              <div className="float-students-title">Happy Students</div>
              <div className="float-students-rating">
                4.5 <span className="float-students-count">(240)</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#C8FF00">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              </div>
              <div className="float-students-avatars">
                <div className="avatar-stack">
                  <div className="avatar">
                    <img src="/avatars/avatar_1.png" alt="Student" />
                  </div>
                  <div className="avatar">
                    <img src="/avatars/avatar_3.png" alt="Student" />
                  </div>
                  <div className="avatar">
                    <img src="/avatars/avatar_5.png" alt="Student" />
                  </div>
                  <div className="avatar">
                    <img src="/avatars/avatar_6.png" alt="Student" />
                  </div>
                </div>
                <span className="avatar-badge">2K+</span>
              </div>
            </div>

            {/* Person Cutout Image */}
            <div className="growth-person-wrapper">
              <Image
                src="/creators/creator-2.png"
                alt="Creator with tablet"
                width={500}
                height={550}
                className="growth-person-img"
              />
            </div>
          </div>

          {/* Content Right */}
          <div className="growth-content">
            <h2 className="growth-headline">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="growth-subtext">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            {/* Feature Checklist */}
            <ul className="growth-checklist">
              <li className="growth-check-item">
                <div className="check-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Share Your Expertise</span>
              </li>
              <li className="growth-check-item">
                <div className="check-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Monetize Your Passion</span>
              </li>
              <li className="growth-check-item">
                <div className="check-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Flexibility and Autonomy</span>
              </li>
              <li className="growth-check-item">
                <div className="check-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Build a Community</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
