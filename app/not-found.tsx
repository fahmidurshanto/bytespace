import Link from "next/link";
import Footer from "./components/Footer";
import GridBackground from "./components/GridBackground";
import "./not-found.css";

export default function NotFound() {
  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <GridBackground minHeight="calc(100vh - 350px)">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">
            The page you are looking<br />for doesn&apos;t exist
          </h2>
          <p className="not-found-text">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Link href="/" className="not-found-btn">
            Back to Home
          </Link>
        </div>
      </GridBackground>
      
      <Footer />
    </main>
  );
}
