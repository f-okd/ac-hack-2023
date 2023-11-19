import Link from "next/link";
interface Props {
  id: number;
  title: string;
  author: string;
  thumbnail: string;
  rating: number;
  completed?: boolean;
}

export default function ModuleCard({
  id,
  title,
  author,
  thumbnail,
  rating,
  completed,
}: Props) {
  const progressValue = completed ? 100 : 50;

  return (
    <main className="container p-3">
      <div className="card bg-base-100 shadow-2xl h-64 mt-4">
      <figure><img src={thumbnail} alt="1" /></figure>
        <div className="card-body">
          <Link href="">
            <p className="card-title text-base">{title}</p>
          </Link>
          <p className="text-sm">Created by {author}</p>
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
