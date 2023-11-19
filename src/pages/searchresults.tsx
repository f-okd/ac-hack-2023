import { useEffect, useState } from "react";
import { Course } from "../types/model_interfaces";
import React from "react";

export default function SearchResults(query: string="I") {
    const [courses, setCourses] = useState<Course[]>();
    const [loading, setLoading] = useState<Boolean>(true);
    
    useEffect(() => {
        const url = new URL("http://localhost:3000/api/getCoursesBySubstring/");

        url.searchParams.append("substring", query);
        fetch(url)
        .then(async res => await res.json())
        .then(data => {
            setCourses(data);
            setLoading(false)
        });
    });

    if (loading) {
        return <><p>xqoppo</p></>
    }

    return <>{courses}</>

}