export interface BrandProps {
  className?: string;
}

export function Brand({ className = "" }: BrandProps) {
  return (
    <span
      className={`group/brand font-bold transition-colors [&>span]:duration-300 ${className}`}
    >
      <span className="group-hover/brand:text-primary">Edu</span>
      <span className="text-primary group-hover/brand:text-base-content">
        Pont
      </span>
    </span>
  );
}
