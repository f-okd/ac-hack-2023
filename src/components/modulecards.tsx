import Link from "next/link";
import { useState } from "react";
interface Props {
  title: string;
  author: string;
  rating: number;
  completed?: boolean;
}

export default function ModuleCard({
  title,
  author,
  rating,
  completed,
}: Props) {
  const progressValue = completed ? 100 : 50;

  return (
    <main className="container p-3">
      <div className="card bg-base-100 shadow-2xl">
        <div className="card-body">
          <Link href="">
            <p className="card-title text-base">{title}</p>
          </Link>
          <p className="text-sm">{author}</p>
        </div>

        <div className="card-actions">
          <p className="ml-4">{progressValue + "%"}</p>
          <progress
            className="progress progress-primary ml-4 w-11/12"
            value={progressValue}
            max="100"
          ></progress>

          <div className="rating ml-4 w-1/4">
            {Array.from({ length: 5 }).map((_, index) => (
              <input
                key={index}
                type="radio"
                title={rating.toString()}
                className="mask mask-star-2 bg-orange-400"
                defaultChecked={index + 1 === rating}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
