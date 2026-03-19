import Link from "next/link";

import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

export function InquiryFormsPreview() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Conversion Paths"
        title="Separate routes for companies and consulting partners."
        description="Each audience has a dedicated path, with messaging and forms tailored to its role."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {[
          {
            title: "Business inquiry route",
            description:
              "For companies seeking an AI consulting or implementation partner.",
            href: "/for-businesses",
          },
          {
            title: "Partner application route",
            description:
              "For consulting firms seeking relevant client introductions.",
            href: "/for-partners",
          },
        ].map((item, index) => (
          <MotionSection key={item.title} delay={index * 0.08}>
            <Link href={item.href} className="block">
              <Card className="grid-card h-full">
                <p className="card-kicker">Conversion path</p>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 max-w-xl leading-7">{item.description}</p>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  Explore route
                </p>
              </Card>
            </Link>
          </MotionSection>
        ))}
      </div>
    </section>
  );
}
