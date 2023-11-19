import Image from "next/image";
import Link from "next/link";

import type { Course } from "@/types/model_interfaces";
import { Rating } from "../rating";

import webdev from "@/pages/webdev.png";

const currentCourse: Course = {
  thumbnail: webdev,
  creator: "class central",
  tags: ["tag1", "tag2", "tag3"],
  videos: [],
  rating: 4,
  comments: [],
  id: 999,
  title: "Web Development Tutorial For Beginners - how to make a website",
};

export function ContinueCourse() {
  return (
    <section>
      <h2 className="font-serif text-3xl">Pick up where you left off</h2>

      <div className="card card-side w-full max-w-3xl bg-base-100 shadow-xl">
        <figure>
          <Image src={currentCourse.thumbnail} alt={currentCourse.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {currentCourse.id}. {currentCourse.title}
          </h2>
          <p className="text-sm opacity-75">
            By <span className="font-semibold">{currentCourse.creator}</span>
          </p>
          <p className="-mt-2 text-sm opacity-75">
            Updated <span className="font-semibold">October 2023</span>
          </p>

          <Rating id={String(currentCourse.id)} rating={4.7} />

          <p>
            Learn Web Dev the way professionals do! This FULL course covers it
            all. We{"'"}ll learn HTML, CSS, Javascript and the
            workspace/computer setup that professionals use...
          </p>
          <div className="card-actions justify-end">
            <Link href="/coursepage" className="btn btn-primary btn-sm">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
