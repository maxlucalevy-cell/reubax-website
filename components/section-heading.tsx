type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-4xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy max-w-[42rem]">{description}</p>
    </div>
  );
}
