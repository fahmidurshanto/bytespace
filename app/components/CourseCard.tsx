import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AVATAR_IMAGES } from "../data/courses";
import Icon from "./Icon";
import AvatarStack from "./AvatarStack";

export interface Course {
  id: number;
  title: string;
  subtitle: string;
  creator: string;
  rating: number;
  level: string;
  lessons: number;
  duration: string;
  comments: number;
  price: number;
  students: string;
  image: string;
}

interface CourseCardProps {
  course: Course;
  creatorNameStyle?: React.CSSProperties;
  priceAmountStyle?: React.CSSProperties;
  pricePeriodStyle?: React.CSSProperties;
}

export default function CourseCard({
  course,
  creatorNameStyle,
  priceAmountStyle,
  pricePeriodStyle,
}: CourseCardProps) {
  return (
    <Link href={`/course-details/${course.id}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
      <article className="course-card">
        {/* Thumbnail */}
        <div className="course-card__thumb">
          <Image
            src={course.image}
            alt={course.title}
            width={400}
            height={240}
            className="course-card__img"
          />
          {/* Overlay meta tags */}
          <div className="course-card__meta-overlay">
            <span className="course-card__meta-tag">
              <Icon name="lessons" size="12" />
              {course.lessons} Lessons
            </span>
            <span className="course-card__meta-tag">
              <Icon name="duration" size="12" />
              {course.duration}
            </span>
            <span className="course-card__meta-tag">
              <Icon name="comments" size="12" />
              {course.comments} Comments
            </span>
          </div>
        </div>

        {/* Card body */}
        <div className="course-card__body">
          {/* Title row */}
          <div className="course-card__title-row">
            <h3 className="course-card__title">{course.title}</h3>
            <div className="course-card__rating">
              {course.rating}
              <Icon name="star" size="14" className="text-blue-500" style={{ fill: "#3b82f6" }} />
            </div>
          </div>

          {/* Creator */}
          <p className="course-card__creator">
            by <span className="course-card__creator-name" style={creatorNameStyle}>{course.creator}</span>
          </p>

          {/* Level + Avatars row */}
          <div className="course-card__info-row">
            <div className="course-card__level">
              <Icon name="level" size="14" />
              {course.level}
            </div>
            <AvatarStack 
              images={AVATAR_IMAGES} 
              courseId={course.id} 
              countText={course.students} 
            />
          </div>

          {/* Price */}
          <div className="course-card__price">
            <span className="course-card__price-amount" style={priceAmountStyle}>${course.price}</span>
            <span className="course-card__price-period" style={pricePeriodStyle}>/lifetime</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
