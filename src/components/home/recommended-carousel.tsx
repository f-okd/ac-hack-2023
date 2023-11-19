import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

import type { Course } from "@/types/model_interfaces";
import { RecommendedCourse } from "./recommended-course";

export interface CourseCarouselProps {
  courses: Course[];
}

export function CourseCarousel({ courses }: CourseCarouselProps) {
  const [start, setStart] = useState(0);

  const handleClick = () => {
    // -2 because we want to show 3 courses at a time
    setStart((start + 1) % (courses.length - 2));
  };

  return (
    <div className="relative flex w-full items-center gap-x-2">
      <ul className="item flex w-full gap-x-16">
        {courses.slice(start, start + 3).map((course) => (
          <li key={course.id} className="w-1/3">
            <RecommendedCourse {...course} />
          </li>
        ))}
      </ul>

      {courses.length > 3 && (
        <button
          type="button"
          className="btn btn-circle btn-primary"
          onClick={handleClick}
          aria-label="Show next course"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
}
