"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Activi() {
  const { ref } = useSectionInView("Activities", 0.5);

  return (
    <section ref={ref} id="activities" className="scroll-mt-28">
      <SectionHeading>My Activities</SectionHeading>
    </section>
  );
}
