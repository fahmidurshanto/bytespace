import React from "react";
import Image from "next/image";
import "./CreatorHeader.css";

interface CreatorHeaderProps {
  creatorName?: string;
  tagline?: string;
  bio?: React.ReactNode;
  productsCount?: number;
  followersCount?: number;
  avatarUrl?: string;
}

export default function CreatorHeader({
  creatorName = "PurePearl Studio",
  tagline = "Passionate UI/UX, Web designer",
  bio = (
    <>
      Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
      <br /><br />
      ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
    </>
  ),
  productsCount = 3,
  followersCount = 12,
  avatarUrl,
}: CreatorHeaderProps) {
  return (
    <section className="creator-header">
      <div className="creator-header-inner">
        <div className="creator-profile-section">
          <div className="creator-avatar">
            {avatarUrl ? (
              <Image 
                src={avatarUrl} 
                alt={`${creatorName} Profile`} 
                width={160} 
                height={160} 
                className="creator-avatar-img"
              />
            ) : (
              <div className="creator-avatar-placeholder">
                Profile
              </div>
            )}
          </div>
          <div className="creator-info">
            <div className="creator-title-row">
              <h1 className="creator-name">{creatorName}</h1>
              <span className="creator-badge">Creator</span>
            </div>
            <p className="creator-tagline">{tagline}</p>
          </div>
        </div>
        
        <div className="creator-bio">
          <p>{bio}</p>
        </div>
        
        <div className="creator-stats-actions">
          <div className="creator-stats">
            <div className="creator-stat-pill">
              <span className="creator-stat-number">{productsCount}</span> Products
            </div>
            <div className="creator-stat-pill">
              <span className="creator-stat-number">{followersCount}</span> Followers
            </div>
          </div>
          <button className="creator-follow-btn">Follow</button>
        </div>
      </div>
    </section>
  );
}
