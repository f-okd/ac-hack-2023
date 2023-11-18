import Link from "next/link";
interface Props {
  title: string;
  author: string;
}

export default function ModuleCard({ title, author }: Props) {
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
          <progress className="progress progress-primary w-11/12 ml-2" value={50} max="100"></progress>
          <div className="rating w-1/4 ml-2">
            <input
              type="radio"
              title="s"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              title="s"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked={true}
            />
            <input
              type="radio"
              title="s"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              title="s"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              title="s"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
