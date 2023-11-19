import Head from "next/head";

import type { Course } from "@/types/model_interfaces";
import { RecommendedCourse } from "@/components/home/recommended-course";

// TODO: disaply current course
// TODO: display recommended courses

// TODO: handle when they havent started a course
const currentCourse: Course | undefined = undefined;

// TODO
const recommendedCourses: Course[] = [];

export default function Home() {
  return (
    <main className="container flex flex-grow flex-col gap-y-4">
      <Head>
        <title>Home | EduPont</title>
      </Head>

      <div>
        CURRENT GOES HERE
      </div>

      <section className="mx-4 space-y-2">
        <h2 className="font-serif text-3xl">
          Let{"'"}s start learning,{" "}
          <span className="text-primary">{"<NAME>"}</span>
        </h2>
        <ul className="flex w-full justify-between">
          <li><RecommendedCourse /></li>
          <li><RecommendedCourse /></li>
          <li><RecommendedCourse /></li>
          <li><RecommendedCourse /></li>
          <li><RecommendedCourse /></li>
        </ul>
      </section>
    </main>
  );
}
