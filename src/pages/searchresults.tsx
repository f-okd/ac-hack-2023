import { useEffect, useState } from "react";
import { Course } from "../types/model_interfaces";
import React from "react";

export default function SearchResults({ query="I" }:{ query: string }) {
    const [courses, setCourses] = useState<Course[]>();
    const [loading, setLoading] = useState<Boolean>(true);
    
    useEffect(() => {
        fetch("./api/getCoursesBySubstring/", {
            body: JSON.stringify({
                substring: query.toLowerCase()
            }),
            method: 'POST',
        })
        .then(async res => await res.json())
        .then(data => {
            setCourses(data.courses);
            setLoading(false)
        });
    }, [query]);

    if (loading) {
        return <><p>xqoppo</p></>
    }

    console.log(courses);

    return <>{courses?.map(course => <p>{course.title}</p>)}</>

}