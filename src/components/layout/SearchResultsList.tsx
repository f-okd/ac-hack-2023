import { Course } from "@/types/model_interfaces"

const SearchResultsList = ({courses}: {courses:Course[]}) => {
  return (
    <div>{courses.map((course)=> <p key={course.id}>{course.title}</p>)}</div>
  )
}

export default SearchResultsList