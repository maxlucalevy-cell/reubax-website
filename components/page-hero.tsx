import { MotionSection } from "@/components/motion-section";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="section-shell overflow-hidden pb-10 pt-10 md:pt-14">
      <MotionSection className="max-w-4xl">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-6 max-w-5xl font-[family:var(--font-display)] text-[2.95rem] leading-[0.94] text-slate-950 md:text-[4.9rem]">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-[1.05rem] leading-8 text-slate-600 md:text-[1.2rem]">
          {description}
        </p>
      </MotionSection>
    </section>
  );
}
