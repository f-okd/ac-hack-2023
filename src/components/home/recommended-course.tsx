import Link from "next/link";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

import type { Course } from "@/types/model_interfaces";
import { Rating } from "@/components/rating";

export type RecommendedCourseProps = Course;

function CourseThumbnail({
  thumbnail,
  title,
}: Pick<Course, "thumbnail" | "title">) {
  return (
    <div className="relative h-full w-60 bg-red-600 text-center text-white">
      <button
        type="button"
        className="btn btn-circle absolute left-1/2 top-1/2 z-10
       -translate-x-1/2 -translate-y-1/2 !border-white bg-white text-black hover:bg-white/70"
        aria-label={`Open course: '${title}'`}
      >
        <FaPlay />
      </button>

      {/* darkening */}
      <div className="absolute inset-0 bg-black/30" aria-hidden />

      <div className="relative h-full w-full max-w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          sizes="240px"
          className="h-full w-full object-cover"
          fill
          priority
        />
      </div>
    </div>
  );
}

export function RecommendedCourse({
  id,
  title,
  thumbnail,
  creator,
  tags,
  rating,
}: RecommendedCourseProps) {
  return (
    <div className="flex h-60 md:h-40 w-full flex-row outline outline-1">
      <CourseThumbnail thumbnail={thumbnail} title={title} />

      <div className="flex flex-grow flex-col justify-between">
        <div className="flex flex-grow flex-col px-4 pb-1 pt-4">
          <h3 className="font-bold">
            {id}. {title}
          </h3>
          <p className="text-sm opacity-75">By {creator}</p>

          <Rating id={String(id)} rating={rating} className="mt-auto" />
        </div>
        {/* width: set by course complete %? */}
        <div className="h-2 bg-primary text-primary-content" aria-hidden />
      </div>
    </div>
  );
}
