import { Course } from "@/types/model_interfaces";
import {useState} from "react"
import SearchResultsList from "./SearchResultsList";

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