import Link from "next/link";
import "./Navbar.css";

interface NavbarProps {
  hideLinks?: boolean;
}

export default function Navbar({ hideLinks = false }: NavbarProps) {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-inner">
        {/* Logo */}
        <Link href="/" className="navbar-logo" aria-label="ByteSpace Home">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="32" height="32" rx="8" fill="#C8FF00" />
            <path
              d="M10 8h6a5 5 0 0 1 0 10h-6V8Zm2 3v4h4a2 2 0 1 0 0-4h-4Zm-2 7h7a5 5 0 0 1 0 10h-7V18Zm2 3v4h5a2 2 0 1 0 0-4h-5Z"
              fill="#1400FF"
            />
          </svg>
          <span className="navbar-logo-text">ByteSpace</span>
        </Link>

        {/* Center Links */}
        {!hideLinks && (
          <ul className="navbar-links">
            <li>
              <Link href="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#courses" className="navbar-link">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/creators" className="navbar-link">
                Creators
              </Link>
            </li>
          </ul>
        )}

        {/* Right Actions */}
        <div className="navbar-actions">
          <Link href="/login" className="navbar-action-link">
            Sign In
          </Link>
          <Link href="/register" className="navbar-action-link">
            Join Us
          </Link>
          <button
            className="navbar-cart"
            aria-label="Shopping cart"
            type="button"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <line x1="3" x2="21" y1="6" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-mobile-toggle"
          aria-label="Toggle menu"
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
