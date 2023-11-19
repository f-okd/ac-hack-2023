import { Course } from "@/types/model_interfaces";
import Link from "next/link";

const SearchResultsList = ({ courses }: { courses: Course[] }) => {
  return (
    <div className="absolute mt-15 max-h-60 overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg">
      {courses.map((course) => (
        <Link href={`/course/${course.id}`} key={course.id}>
          <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            {course.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default SearchResultsList;
