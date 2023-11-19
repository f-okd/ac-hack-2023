import { Course } from "@/types/model_interfaces";
import {useState} from "react"
import SearchResultsList from "./SearchResultsList";
import { useRouter } from "next/router";

const courses = [
  {
    id: 1,
    courseId: 1,
    title: "Introduction to Python",
    thumbnail: "https://via.placeholder.com/150/92c952",
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
    thumbnail: "https://via.placeholder.com/150/771796",
    creator: "user1",
    tags: ["programming", "algorithms"],
    videos: [],
    rating: 4.8,
    comments: [],
  },
  {
    id: 3,
    courseId: 3,
    title: "Web Development Basics",
    thumbnail: "https://via.placeholder.com/150/24f355",
    creator: "user2",
    tags: ["web development", "html", "css"],
    videos: [],
    rating: 4.2,
    comments: [],
  },
  {
    id: 4,
    courseId: 4,
    title: "Advanced JavaScript",
    thumbnail: "https://via.placeholder.com/150/d32776",
    creator: "user3",
    tags: ["programming", "javascript"],
    videos: [],
    rating: 4.6,
    comments: [],
  },
  {
    id: 5,
    courseId: 5,
    title: "Machine Learning Fundamentals",
    thumbnail: "https://via.placeholder.com/150/f66b97",
    creator: "user4",
    tags: ["data science", "machine learning"],
    videos: [],
    rating: 4.7,
    comments: [],
  },
  {
    id: 6,
    courseId: 6,
    title: "Introduction to Databases",
    thumbnail: "https://via.placeholder.com/150/56a8c2",
    creator: "user2",
    tags: ["databases", "sql"],
    videos: [],
    rating: 4.3,
    comments: [],
  },
  {
    id: 7,
    courseId: 7,
    title: "React for Beginners",
    thumbnail: "https://via.placeholder.com/150/b0f7cc",
    creator: "user3",
    tags: ["web development", "react"],
    videos: [],
    rating: 4.4,
    comments: [],
  },
  {
    id: 8,
    courseId: 8,
    title: "Introduction to Cloud Computing",
    thumbnail: "https://via.placeholder.com/150/54176f",
    creator: "user1",
    tags: ["cloud computing", "aws"],
    videos: [],
    rating: 4.5,
    comments: [],
  },
  {
    id: 9,
    courseId: 9,
    title: "Mobile App Development with Flutter",
    thumbnail: "https://via.placeholder.com/150/51aa97",
    creator: "user8",
    tags: ["mobile development", "flutter"],
    videos: [],
    rating: 4.6,
    comments: [],
  },
  {
    id: 10,
    courseId: 10,
    title: "Cybersecurity Basics",
    thumbnail: "https://via.placeholder.com/150/810b14",
    creator: "user9",
    tags: ["cybersecurity", "network security"],
    videos: [],
    rating: 4.2,
    comments: [],
  },
  {
    id: 11,
    courseId: 11,
    title: "Digital Marketing Essentials",
    thumbnail: "https://via.placeholder.com/150/1ee8a4",
    creator: "user10",
    tags: ["marketing", "digital marketing"],
    videos: [],
    rating: 4.1,
    comments: [],
  },
  {
    id: 12,
    courseId: 12,
    title: "Graphic Design Fundamentals",
    thumbnail: "https://via.placeholder.com/150/66b7d2",
    creator: "user11",
    tags: ["graphic design", "design"],
    videos: [],
    rating: 4.5,
    comments: [],
  },
  {
    id: 13,
    courseId: 13,
    title: "UI/UX Design for Beginners",
    thumbnail: "https://via.placeholder.com/150/197d29",
    creator: "user12",
    tags: ["design", "ui/ux"],
    videos: [],
    rating: 4.6,
    comments: [],
  },
  {
    id: 14,
    courseId: 14,
    title: "Blockchain Basics",
    thumbnail: "https://via.placeholder.com/150/61a65",
    creator: "user13",
    tags: ["blockchain", "cryptocurrency"],
    videos: [],
    rating: 4.7,
    comments: [],
  },
];

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<Course[]>([]);
  const router = useRouter()

  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e?.currentTarget.value;
    setSearchValue(value);

    const filteredCourses:Course[] = courses.filter((course) =>
      course.title.toLowerCase().includes(value.toLowerCase()),
    );
    setSearchResults(filteredCourses);
  };

  const goToSearchResults = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e?.currentTarget.value;
    router.push(`/searchresults/${value}`)
  };

  return (
    <div className="relative">
      <input
        className="rounded-lg border border-gray-300 p-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search for courses"
        value={searchValue}
        onChange={handleSearchChange}
        onSubmit={goToSearchResults}
      />
      {searchResults.length > 0 && searchValue && (
        <SearchResultsList courses={searchResults} />
      )}
    </div>
  );
};

export default SearchBar;