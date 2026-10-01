import React from "react";

interface AvatarStackProps {
  images: string[];
  maxDisplay?: number;
  courseId?: number; // Used to stagger which images are shown
  countText?: string | number;
}

export default function AvatarStack({ 
  images, 
  maxDisplay = 4, 
  courseId = 1, 
  countText 
}: AvatarStackProps) {
  // Logic to cycle the starting image based on courseId for visual variety
  const startIndex = (courseId - 1) % images.length;
  let displayImages = images.slice(startIndex, startIndex + maxDisplay);
  
  // Wrap around if we don't have enough images from the slice
  if (displayImages.length < maxDisplay) {
    displayImages = displayImages.concat(
      images.slice(0, maxDisplay - displayImages.length)
    );
  }
  
  // Ensure we definitely only show maxDisplay
  displayImages = displayImages.slice(0, maxDisplay);

  return (
    <div className="course-card__avatars">
      <div className="course-card__avatar-stack">
        {displayImages.map((src, i) => (
          <div key={i} className="course-card__avatar">
            <img src={src} alt="Student" />
          </div>
        ))}
      </div>
      {countText && <span className="course-card__avatar-count">{countText}</span>}
    </div>
  );
}
