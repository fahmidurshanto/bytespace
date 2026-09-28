export default function LogoBar() {
  return (
    <section id="logo-bar" className="logo-bar">
      <div className="logo-bar-inner">
        {/* Logo 1 — Waves/Globe */}
        <div className="logo-bar-item">
          <svg
            className="logo-bar-icon"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="20" cy="20" r="18" fill="#B0B0B0" opacity="0.25" />
            <path
              d="M8 18c4-6 10-6 12-2s8 4 12-2"
              stroke="#9CA3AF"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M8 24c4-6 10-6 12-2s8 4 12-2"
              stroke="#9CA3AF"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M10 30c3-5 8-5 10-1s7 3 10-1"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <span className="logo-bar-text">Logoipsum</span>
        </div>

        {/* Logo 2 — Starburst/Sun */}
        <div className="logo-bar-item">
          <svg
            className="logo-bar-icon"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="20" cy="20" r="5" fill="#9CA3AF" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line
                key={angle}
                x1="20"
                y1="20"
                x2={20 + 14 * Math.cos((angle * Math.PI) / 180)}
                y2={20 + 14 * Math.sin((angle * Math.PI) / 180)}
                stroke="#9CA3AF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            ))}
          </svg>
          <span className="logo-bar-text">Logoipsum</span>
        </div>

        {/* Logo 3 — Lightning bolt in circle */}
        <div className="logo-bar-item">
          <svg
            className="logo-bar-icon"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="20" cy="20" r="16" fill="#9CA3AF" opacity="0.2" />
            <circle cx="20" cy="20" r="16" stroke="#9CA3AF" strokeWidth="2" />
            <path
              d="M22 10l-6 11h5l-2 9 7-12h-5l1-8z"
              fill="#9CA3AF"
            />
          </svg>
          <span className="logo-bar-text">Logoipsum</span>
        </div>

        {/* Logo 4 — Crosshair/Atom */}
        <div className="logo-bar-item">
          <svg
            className="logo-bar-icon"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="20" cy="20" r="6" stroke="#9CA3AF" strokeWidth="2.5" />
            <circle cx="20" cy="20" r="2.5" fill="#9CA3AF" />
            <circle cx="20" cy="8" r="3" fill="#9CA3AF" />
            <circle cx="20" cy="32" r="3" fill="#9CA3AF" />
            <circle cx="8" cy="20" r="3" fill="#9CA3AF" />
            <circle cx="32" cy="20" r="3" fill="#9CA3AF" />
          </svg>
          <span className="logo-bar-text">Logoipsum</span>
        </div>

        {/* Logo 5 — Concentric circles/Radar */}
        <div className="logo-bar-item">
          <svg
            className="logo-bar-icon"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="20" cy="20" r="16" stroke="#9CA3AF" strokeWidth="1.8" />
            <circle cx="20" cy="20" r="12" stroke="#9CA3AF" strokeWidth="1.8" />
            <circle cx="20" cy="20" r="8" stroke="#9CA3AF" strokeWidth="1.8" />
            <circle cx="20" cy="20" r="4" stroke="#9CA3AF" strokeWidth="1.8" />
            <circle cx="20" cy="20" r="1.5" fill="#9CA3AF" />
          </svg>
          <span className="logo-bar-text">Logoipsum</span>
        </div>
      </div>
    </section>
  );
}
