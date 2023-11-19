// TODO?: props: { course: Course } ????
// (or maybe props = Course)
import Link from "next/link";

import { Course } from "@/types/model_interfaces";

// TODO

export type RecommendedCourseProps  =Course;

export function RecommendedCourse({
  title,
  thumbnail,
  creator,
  tags,
  rating,
}: RecommendedCourseProps) {
  return <div>{title}</div>;
}
