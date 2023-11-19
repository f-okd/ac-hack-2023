import { useEffect, useState } from "react";
import { Course } from "../types/model_interfaces";
import React from "react";

function RatingSection({ rating, handler }: { rating: null | number, handler: (i: number) => void }) {
    return (
        <div className="py-5">
            <div className="px-7 pb-4">
                <p className="font-semibold">Ratings</p>
            </div>
            <div className="grid grid-rows-4">
                {[3, 3.5, 4, 4.5].map((score, i) => (
                    <div className="grid grid-cols-5 px-3" key={i}>
                        <div className="col-span-1">
                            <input checked={rating === i} type="radio" onClick={(_) => handler(i)} />
                        </div>
                        <div>{score}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function ResultsWrack({ courses }: { courses: Course[] }) {
    return (
        <div className="flex flex-col space-y-3">
            {courses.map((course, i) => (
                <div key={i}>
                    <div className="grid grid-cols-6 pt-3 pb-7">
                    <div className="col-span-1" />
                        <div className="flex flex-col col-span-5">
                            <p className="font-semibold text-2xs">{course.title}</p>
                            <p className="text-sm">Tags: {course.tags.join(", ")}</p>
                            <p className="font-light text-sm">Created by {course.creator}</p>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default function SearchResults({ query="" }:{ query: string }) {
    const [courses, setCourses] = useState<Course[]>();
    const [loading, setLoading] = useState<Boolean>(true);
    const [rating, setRating] = useState<null | number>(null);
    var [showingCourses, setShowingCourses] = useState<>();
    const handleRating = (i: number) => {
        if (rating === i) {
            setRating(null)
        } else {
            setRating(i)
        }

        if (rating) {
            c
        }
    }
    
    useEffect(() => {
        fetch("./api/getCoursesBySubstring/", {
            body: JSON.stringify({
                query: query.toLowerCase()
            }),
            method: 'POST',
        })
        .then(async res => await res.json())
        .then(data => {
            setCourses(data.courses);
            setLoading(false)
        });
    }, [query]);

    if (loading || !courses) {
        return <></>
    }

    return (
        <div className="h-full">
            <div className="px-10 py-10">
                <p className="font-bold text-xl">{courses.length} results for `{query}`</p>
            </div>
            <div className="grid grid-cols-6">
                <div className="col-span-1">
                    <hr />
                    <RatingSection rating={rating} handler={handleRating} />
                </div>
                <div className="col-span-5">
                    <ResultsWrack courses={courses} />
                </div>
            </div>
        </div>
    );

}