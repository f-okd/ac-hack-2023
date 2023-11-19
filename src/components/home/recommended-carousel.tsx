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
      <ul
        className="item grid w-full grid-cols-2 grid-rows-1 gap-x-4 overflow-hidden md:gap-x-16 lg:grid-cols-3"
        style={{
          // Limit to only 1 visible row https://stackoverflow.com/a/63607607
          gridAutoRows: "0px",
        }}
      >
        {courses.slice(start, start + 3).map((course) => (
          <li key={course.id} className="m-0.5">
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
