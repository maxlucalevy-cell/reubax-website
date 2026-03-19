"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MotionSection({
  children,
  className,
  delay = 0,
}: MotionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
