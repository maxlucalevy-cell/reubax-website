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

  const helperText = isBusiness
    ? "Share enough context for REUBAX to assess the requirement and determine which consulting profiles may fit."
    : "Share enough detail for REUBAX to understand your firm, its strengths, and the kinds of opportunities that fit.";

  const formUrl = isBusiness
    ? "https://5o9e9q.share-na3.hsforms.com/270CSsZuOQJW9cZUGLQALMQ"
    : "https://5o9e9q.share-na3.hsforms.com/2u7aRggTFRIGrcnRV9VnsQQ";

  const buttonLabel = isBusiness
    ? "Get matched with an AI partner"
    : "Apply to join the REUBAX network";

  return (
    <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_12px_32px_rgba(15,23,42,0.05)] md:p-10">
      <div className="max-w-2xl">
        <p className="card-kicker">Inquiry form</p>

        <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>

        <p className="mt-3 leading-7 text-slate-950">{description}</p>

        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
          {helperText}
        </p>

        <div className="mt-8">
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
