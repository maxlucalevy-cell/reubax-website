import * as React from "react";

import { cn } from "@/lib/utils";

function Label({
  className,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label
      className={cn("text-sm font-semibold text-slate-900", className)}
      {...props}
    />
  );
}

export { Label };
