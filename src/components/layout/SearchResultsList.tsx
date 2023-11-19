import { Course } from "@/types/model_interfaces"
import Link from "next/link"

const SearchResultsList = ({courses}: {courses:Course[]}) => {
  return (
    <div>{courses.map((course)=> <Link href={`/course/${course.id}`} key={course.id}>{course.title}</Link>)}</div>
  )
}

export default SearchResultsList