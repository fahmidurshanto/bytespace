export default function CTASection() {
  return (
    <section id="join-creator" className="cta-section">
      {/* Dot grid overlay */}
      <div className="cta-grid-overlay" aria-hidden="true" />

      {/* ── Decorative Shapes ── */}
      <div className="cta-shapes" aria-hidden="true">

        {/* TOP-LEFT: Lime thick wavy ribbon (tall S-curve stroke) */}
        <div className="cta-shape cta-shape--ribbon-lime-tl">
          <svg viewBox="0 0 90 160" fill="none">
            <path
              d="M60,15 Q90,30 70,60 Q50,85 75,110 Q90,130 65,148"
              stroke="#C8FF00" strokeWidth="28" strokeLinecap="round"
            />
          </svg>
        </div>

        {/* TOP-LEFT (inner): White triple-bump squiggle */}
        <div className="cta-shape cta-shape--squiggle-white-tl">
          <svg viewBox="0 0 70 120" fill="none">
            <path
              d="M35,12 Q10,28 35,44 Q60,60 35,76 Q10,92 35,108"
              stroke="white" strokeWidth="13" strokeLinecap="round"
            />
          </svg>
        </div>

        {/* LEFT-CENTER: White cone / ice-cream cone triangle */}
        <div className="cta-shape cta-shape--cone-white-l">
          <svg viewBox="0 0 100 140" fill="white">
            <path d="M50,0 Q90,100 80,130 Q50,145 20,130 Q10,100 50,0Z" />
          </svg>
        </div>

        {/* BOTTOM-LEFT: Lime thick C/U arc */}
        <div className="cta-shape cta-shape--arc-lime-bl">
          <svg viewBox="0 0 180 180" fill="none">
            <path
              d="M155,90 A75,75 0 1,1 90,15"
              stroke="#C8FF00" strokeWidth="34" strokeLinecap="round" fill="none"
            />
          </svg>
        </div>

        {/* TOP-RIGHT: Lime solid equilateral triangle */}
        <div className="cta-shape cta-shape--triangle-lime-tr">
          <svg viewBox="0 0 100 88" fill="#C8FF00">
            <polygon points="50,0 100,88 0,88" />
          </svg>
        </div>

        {/* RIGHT: White tall capsule / cylinder pill */}
        <div className="cta-shape cta-shape--capsule-white-r">
          <svg viewBox="0 0 70 150" fill="white">
            <rect x="0" y="0" width="70" height="150" rx="35" ry="35" />
          </svg>
        </div>

        {/* BOTTOM-RIGHT: Lime compact S/Z squiggle */}
        <div className="cta-shape cta-shape--squiggle-lime-br">
          <svg viewBox="0 0 80 110" fill="none">
            <path
              d="M40,14 Q10,30 40,55 Q70,80 40,96"
              stroke="#C8FF00" strokeWidth="18" strokeLinecap="round"
            />
          </svg>
        </div>

      </div>

      {/* ── Main Content ── */}
      <div className="cta-content">
        <h2 className="cta-headline">
          Unlock Your Potential as a<br />
          Creator with ByteSpace
        </h2>

        <p className="cta-subtext">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <a href="/join" className="cta-btn" id="cta-join-creator-btn">
          Join as Creator
        </a>
      </div>
    </section>
  );
}
