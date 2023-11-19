export interface RatingProps {
  id: string;
  rating: number;
  className?: string;
}

function between(x: number, min: number, max: number) {
  return min < x && x <= max;
}

export function Rating({ id, rating, className = "" }: RatingProps) {
  return (
    <div className={`rating ${className}`}>
      <input
        type="radio"
        name={`rating-${id}`}
        className="mask mask-star bg-orange-400"
        defaultChecked={rating <= 1}
        aria-label="1 star"
      />
      <input
        type="radio"
        name={`rating-${id}`}
        className="mask mask-star bg-orange-400"
        defaultChecked={between(rating, 1, 2)}
        aria-label="2 stars"
      />
      <input
        type="radio"
        name={`rating-${id}`}
        className="mask mask-star bg-orange-400"
        defaultChecked={between(rating, 2, 3)}
        aria-label="3 stars"
      />
      <input
        type="radio"
        name={`rating-${id}`}
        className="mask mask-star bg-orange-400"
        defaultChecked={between(rating, 3, 4)}
        aria-label="4 stars"
      />
      <input
        type="radio"
        name={`rating-${id}`}
        className="mask mask-star bg-orange-400"
        defaultChecked={between(rating, 4, 5)}
        aria-label="5 stars"
      />
    </div>
  );
}
