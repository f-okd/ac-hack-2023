import { Course } from "@/types/model_interfaces";
import Link from "next/link";

const SearchResultsList = ({ courses }: { courses: Course[] }) => {
  return (
    <div className="mt-15 absolute max-h-60 overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg">
      {courses.map((course) => (
        <Link href={`/course/${course.id}`} key={course.id}>
          <div className="flex items-center border-b border-gray-200 hover:bg-gray-100">
            <img
              alt={`image of course ${course.title}`}
              src={course.thumbnail}
              className="block h-20 w-20 object-cover"
            />
            <p className="flex-grow px-4 py-2 text-sm text-gray-700">
              {course.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResultsList;
