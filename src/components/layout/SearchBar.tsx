import { Course } from "@/types/model_interfaces";
import {useState} from "react"
import SearchResultsList from "./SearchResultsList";

const courses = [
  {
    id: 1,
    courseId: 1,
    title: "Introduction to Python",
    thumbnail: "https://example.com/image.png",
    creator: "user1",
    tags: ["programming", "python"],
    videos: [],
    rating: 4.5,
    comments: [],
  },
  {
    id: 2,
    courseId: 2,
    title: "Data Structures and Algorithms",
    thumbnail: "https://example.com/image2.png",
    creator: "user1",
    tags: ["programming", "algorithms"],
    videos: [],
    rating: 4.8,
    comments: [],
  },
];

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<Course[]>([]);

  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e?.currentTarget.value;
    setSearchValue(value);

    const filteredCourses:Course[] = courses.filter((course) =>
      course.title.toLowerCase().includes(value.toLowerCase()),
    );
    setSearchResults(filteredCourses);
  };

  return (
    <>
      <input
        className="rounded-lg border border-gray-300 p-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search for courses"
        value={searchValue}
        onChange={handleSearchChange}
      />
      {searchResults.length > 0 && searchValue && <SearchResultsList courses={searchResults} />}
    </>
  );
};

export default SearchBar;