import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { MotionSection } from "@/components/motion-section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CTASection() {
  return (
    <section className="section-shell">
      <MotionSection>
        <Card className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-slate-950 px-8 py-12 shadow-[0_18px_48px_rgba(15,23,42,0.16)] md:px-12 md:py-16">
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                Start Here
              </span>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.02] text-white md:text-[3.35rem]">
                Start with a better introduction.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                REUBAX helps companies identify the right consulting partner and
                helps consulting firms access relevant demand.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Get matched <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="/for-partners">Partner application</Link>
              </Button>
            </div>
          </div>
        </Card>
      </MotionSection>
    </section>
  );
}
