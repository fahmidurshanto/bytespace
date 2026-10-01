import React from "react";
import Navbar from "./Navbar";
import "./GridBackground.css";

interface GridBackgroundProps {
  children: React.ReactNode;
  minHeight?: string | number;
}

export default function GridBackground({ children, minHeight = "100vh" }: GridBackgroundProps) {
  return (
    <div className="grid-background-wrapper" style={{ minHeight }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 100 }}>
        <Navbar />
      </div>
      {children}
    </div>
  );
}
