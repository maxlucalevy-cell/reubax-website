import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type InquiryFormProps = {
  audience: "business" | "partner";
  title: string;
  description: string;
};

export function InquiryForm({
  audience,
  title,
  description,
}: InquiryFormProps) {
  const isBusiness = audience === "business";
  const submitLabel = isBusiness ? "Request a match" : "Submit application";
  const helperText = isBusiness
    ? "Share enough context for REUBAX to assess the requirement and determine which consulting profiles may fit."
    : "Share enough detail for REUBAX to understand your firm, its strengths, and the kinds of opportunities that fit.";

  return (
    <Card className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_12px_32px_rgba(15,23,42,0.05)] md:p-10">
      <div className="max-w-2xl">
        <p className="card-kicker">Inquiry form</p>
        <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
        <p className="mt-3 leading-7">{description}</p>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">{helperText}</p>
      </div>
      <form
        className="mt-8 grid gap-6"
        data-hubspot-form={audience}
        data-lead-path={audience}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor={`${audience}-name`}>Full name</Label>
            <Input
              id={`${audience}-name`}
              name="full_name"
              placeholder="Jane Smith"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`${audience}-company`}>Company</Label>
            <Input
              id={`${audience}-company`}
              name="company"
              placeholder={isBusiness ? "Acme Corp" : "Northstar AI Consulting"}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor={`${audience}-email`}>Work email</Label>
            <Input
              id={`${audience}-email`}
              name="work_email"
              type="email"
              placeholder="jane@company.com"
            />
          </div>
          {isBusiness ? (
            <div className="grid gap-2">
              <Label htmlFor={`${audience}-company-size`}>Company size</Label>
              <Input
                id={`${audience}-company-size`}
                name="company_size"
                placeholder="201-500 employees"
              />
            </div>
          ) : (
            <div className="grid gap-2">
              <Label htmlFor={`${audience}-website`}>Website</Label>
              <Input
                id={`${audience}-website`}
                name="website"
                type="url"
                placeholder="https://www.example.com"
              />
            </div>
          )}
        </div>

        {isBusiness ? (
          <>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor={`${audience}-industry`}>Industry</Label>
                <Input
                  id={`${audience}-industry`}
                  name="industry"
                  placeholder="Financial services"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor={`${audience}-budget`}>Estimated budget</Label>
                <Input
                  id={`${audience}-budget`}
                  name="estimated_budget"
                  placeholder="$50k-$150k"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor={`${audience}-goal`}>
                What are you looking to solve with AI?
              </Label>
              <Textarea
                id={`${audience}-goal`}
                name="ai_goal"
                placeholder="Describe the business problem, the initiative under consideration, and the type of outcome you want to achieve."
              />
            </div>
          </>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor={`${audience}-team-size`}>Team size</Label>
                <Input
                  id={`${audience}-team-size`}
                  name="team_size"
                  placeholder="25 consultants"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor={`${audience}-industries`}>Industries served</Label>
                <Input
                  id={`${audience}-industries`}
                  name="industries_served"
                  placeholder="Healthcare, logistics, manufacturing"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor={`${audience}-services`}>Core AI services</Label>
              <Textarea
                id={`${audience}-services`}
                name="core_ai_services"
                placeholder="Describe your core services, delivery strengths, and the types of engagements you lead."
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor={`${audience}-projects`}>
                Example projects / case studies
              </Label>
              <Textarea
                id={`${audience}-projects`}
                name="example_projects_case_studies"
                placeholder="Share representative projects, client examples, or case studies that reflect your work."
              />
            </div>
          </>
        )}

        <div className="grid gap-2">
          <Label htmlFor={`${audience}-notes`}>Additional context</Label>
          <Textarea
            id={`${audience}-notes`}
            name="additional_context"
            placeholder={
              isBusiness
                ? "Budget context, stakeholders, timing, existing systems, or constraints."
                : "Anything else relevant to your firm, positioning, delivery model, or ideal client profile."
            }
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-slate-500">
            Field names are structured for straightforward mapping into HubSpot
            properties or form handlers.
          </p>
          <Button type="submit">
            {submitLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </Card>
  );
}
