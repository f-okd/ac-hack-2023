import Head from "next/head";

import type { Course } from "@/types/model_interfaces";
import { CourseCarousel } from "@/components/home/recommended-carousel";

import faye from "./faye.jpg";

// TODO: display current course
// TODO: handle when they havent started a course (just dont show)
const currentCourse: Course | undefined = undefined;

const recommendedCourses: Course[] = [
  {
    thumbnail: faye,
    creator: "Faye Okude",
    tags: ["tag1", "tag2", "tag3"],
    videos: [],
    rating: 5,
    comments: [],
    id: 1,
    title: "Accessible Learning: Navigating EduPont with Ease",
  },
  {
    thumbnail:
      "https://www.efrontlearning.com/blog/wp-content/uploads/2019/05/accessible-eLearning-why-how-design-it.png",
    creator: "Jeffrey Way",
    tags: ["tag1", "tag2", "tag3"],
    videos: [],
    rating: 5,
    comments: [],
    id: 2,
    title: "Accessibility in E-Learning: A Practical Approach",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Dorf8i6lCuk/maxresdefault.jpg",
    creator: "Jeffrey Way",
    tags: ["tag1", "tag2", "tag3"],
    videos: [],
    rating: 4,
    comments: [],
    id: 455,
    title: "Learn React",
  },
  {
    thumbnail:
      "https://www.mhsgmoodle.org.uk/pluginfile.php/2923/course/overviewfiles/history.jpg",
    creator: "John Doe",
    tags: ["tag1", "tag2", "tag3"],
    videos: [],
    rating: 1,
    comments: [],
    id: 103,
    title: "Modern Civilization History",
  },
  // TODO: 2 or 3 more
];

export default function Home() {
  return (
    <main className="container flex flex-grow flex-col gap-y-4">
      <Head>
        <title>Home | EduPont</title>
      </Head>

      <div>CURRENT GOES HERE (TODO)</div>

      <section className="mx-4 space-y-2">
        <h2 className="font-serif text-3xl">
          Let{"'"}s start learning,{" "}
          <span className="text-primary">Babatunde</span>
        </h2>

        <CourseCarousel courses={recommendedCourses} />
      </section>
    </main>
  );
}
