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
  const [selectedStars, setSelectedStars] = useState(rating);

  const handleRating = (starIndex: number) => {
    setSelectedStars(starIndex);
  };

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
          {completed ? (
            <p className="ml-4">100%</p>
          ) : (
            <p className="ml-4">In Progress</p>
          )}

          {completed ? (
            <progress
              className="progress progress-primary ml-4 w-11/12"
              value={100}
              max="100"
            ></progress>
          ) : (
            <progress
              className="progress progress-primary ml-4 w-11/12"
              value={50}
              max="100"
            ></progress>
          )}

          <div className="rating ml-4 w-1/4">
            {Array.from({ length: 5 }).map((_, index) => (
              <input
                key={index}
                type="radio"
                title={rating.toString()}
                className="mask mask-star-2 bg-orange-400"
                defaultChecked={index+1 === rating}
              />
            ))}
          </div>

          {/*<div className="rating w-1/4 ml-4">
            <input
              type="radio"
              title={rating.toString()}
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              title={rating.toString()}
              className="mask mask-star-2 bg-orange-400"
              defaultChecked={true}
            />
            <input
              type="radio"
              title={rating.toString()}
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              title={rating.toString()}
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              title={rating.toString()}
              className="mask mask-star-2 bg-orange-400"
            />
          </div>*/}
        </div>
      </div>
    </main>
  );
}
