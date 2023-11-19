import { Course } from "@/types/model_interfaces";
import {useState} from "react"
import SearchResultsList from "./SearchResultsList";

const courses = [
      {
        "courseId": 1,
        "title": "Introduction to Python",
        "thumbnail": "https://example.com/image.png",
        "creator": "user1",
        "tags": ["programming", "python"],
        "videos": [],
        "rating": 4.5,
        "comments": []
      },
      {
        "courseId": 2,
        "title": "Data Structures and Algorithms",
        "thumbnail": "https://example.com/image2.png",
        "creator": "user1",
        "tags": ["programming", "algorithms"],
        "videos": [],
        "rating": 4.8,
        "comments": []
      }
    ]

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("")
    const [searchResults, setSearchResults] = useState<Course[]>([])

    

    return (
        <>
            <input className="rounded-lg border border-gray-300 p-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search for courses"></input>
            {searchResults && <SearchResultsList courses={searchResults}/>}
        </>
    );
}

export default SearchBar