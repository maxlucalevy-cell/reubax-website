import type { Metadata } from "next";
import { BriefcaseBusiness, CheckCircle2, Filter, Handshake, TrendingUp } from "lucide-react";

import { InquiryForm } from "@/components/inquiry-form";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "For Partners",
  description:
    "For consulting firms seeking relevant introductions to companies pursuing AI implementation.",
};

export default function ForPartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Partners"
        title="Join a network built for relevant introductions."
        description="REUBAX works with consulting firms that want access to relevant AI implementation opportunities without relying entirely on broad outbound activity."
      />

      <section className="section-shell pt-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: TrendingUp,
              title: "Qualified demand",
              description:
                "Connect with companies actively assessing AI implementation work.",
            },
            {
              icon: Filter,
              title: "Better-fit opportunities",
              description:
                "Introductions are shaped by specialization, use case, and delivery fit.",
            },
            {
              icon: BriefcaseBusiness,
              title: "More focused business development",
              description:
                "Spend less time on broad outreach and more time on relevant client conversations.",
            },
            {
              icon: Handshake,
              title: "Aligned incentives",
              description:
                "REUBAX earns when an introduction leads to a selected partner engagement.",
            },
          ].map((item) => (
            <MotionSection key={item.title}>
              <Card className="grid-card h-full">
                <item.icon className="h-9 w-9 text-cyan-700" />
                <h2 className="mt-5 text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 leading-7">{item.description}</p>
              </Card>
            </MotionSection>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Who We Look For"
          title="Consulting firms with clear strengths and a credible delivery profile."
          description="REUBAX is best suited to firms that can define where they add value, what they deliver, and which client situations they fit best."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            "Consulting teams focused on AI implementation and related advisory work.",
            "Firms with demonstrable capability in specific industries or use cases.",
            "Partners looking for a selective channel for relevant introductions.",
          ].map((item) => (
            <MotionSection key={item}>
              <Card className="grid-card h-full">
                <p className="text-lg leading-8 text-slate-700">{item}</p>
              </Card>
            </MotionSection>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="eyebrow">Partner Application</span>
            <h2 className="section-title">
              Apply to join the REUBAX partner network.
            </h2>
            <p className="section-copy">
              Share your firm profile, areas of specialization, and delivery
              strengths for consideration.
            </p>
            <div className="trust-list mt-8">
              {[
                "This route is intended for consulting firms, not individual freelancers.",
                "A concise overview of services, sectors, and representative work is sufficient.",
                "REUBAX uses the submission to understand where your firm fits and which opportunities are relevant.",
              ].map((item) => (
                <div key={item} className="trust-item">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <MotionSection>
            <InquiryForm
              audience="partner"
              title="Partner application"
              description="For consulting firms seeking relevant introductions to AI projects."
            />
          </MotionSection>
        </div>
      </section>
    </>
  );
}
