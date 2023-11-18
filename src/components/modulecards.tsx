interface Props {
  title: string;
  author: string;
}

export default function ModuleCard({ title, author }: Props) {
  return (
    <main className="container">
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="placeholder"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h2>{author}</h2>
        </div>

        <div className="card-actions justify-end p-3">
          <div className="rating">
            <input
              type="radio"
              title="s"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              title="s"
              className="mask mask-star-2 bg-orange-400"
              checked
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
