"use client";
import React from "react";
import { motion } from "framer-motion";

const EXPERIENCE = {
  company: "Atrium",
  role: "Data Scientist & AI/ML Engineer", // Update with your actual title
  period: "Present", // Update with your actual dates
  bullets: [
    "Designed and maintained end-to-end ELT pipelines for hospitality properties (occupancy, utility, and usage data)",
    "Extended data models to support credential-based ELT flows across multiple property types",
    "Implemented TimeScaleDB ColumnStore and resolved production issues (memory optimization, schema migration errors)",
    "Migrated scrapers to time-series databases and deployed to cloud infrastructure",
    "Productized occupancy data pipeline: ingested time-series into database and automated recurring loads",
    "Fixed data quality issues: DAG parsing errors, incorrect spikes in usage visualizations, forecast data overwrites, and prioritization logic for new vs stored data",
    "Integrated MongoDB (geospatial/timezone lookups), Google Drive API, and third-party APIs for IoT integrations",
    "Set up scheduled reporting and automated data refreshes at configurable intervals",
    "Documented git branching and PR workflow for engineering team",
    "Contributed to ML pipeline work: model refinement and performance graph tuning for DAG orchestration",
  ],
};

const ExperienceSection = () => {
  return (
    <section className="text-[var(--color-foreground)] py-8 px-4 xl:px-16" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-8">Experience</h2>
        <div className="experience-card rounded-xl p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
            <h3 className="text-2xl font-semibold experience-card-title">{EXPERIENCE.company}</h3>
            <span className="text-[var(--muted)] text-sm mt-1 sm:mt-0">{EXPERIENCE.period}</span>
          </div>
          <p className="text-[var(--color-primary)] font-medium mb-4">{EXPERIENCE.role}</p>
          <ul className="list-disc list-inside space-y-2 experience-card-list">
            {EXPERIENCE.bullets.slice(0, 7).map((bullet, idx) => (
              <li key={idx} className="text-base lg:text-lg">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
