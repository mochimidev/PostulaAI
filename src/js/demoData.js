export const demoResume = `Maya Chen
Senior Product Analyst
San Francisco, CA | maya.chen@example.com | linkedin.com/in/mayachen

SUMMARY
Product analyst with 6 years of experience helping SaaS teams improve activation, retention, and monetization. Strong background in SQL, experimentation, dashboard design, executive storytelling, and cross-functional product discovery.

EXPERIENCE
Senior Product Analyst, Brightlane Cloud
2022 - Present
- Partnered with product managers and lifecycle marketers to increase new-user activation by 18% through funnel analysis, cohort segmentation, and onboarding experiments.
- Built self-serve dashboards in Looker and Tableau used weekly by product, sales, and customer success leadership.
- Designed A/B tests for pricing page changes, trial nudges, and onboarding milestones; improved trial-to-paid conversion by 11%.
- Created a retention health model using SQL, dbt, and warehouse event data to identify accounts at risk.

Product Data Analyst, Northstar Labs
2019 - 2022
- Analyzed feature adoption and customer journeys for a B2B collaboration platform with 45k monthly active users.
- Standardized KPI definitions and partnered with engineering to improve analytics instrumentation.
- Presented insights to senior stakeholders and influenced roadmap prioritization.

SKILLS
SQL, Python, dbt, Looker, Tableau, Amplitude, Mixpanel, A/B testing, cohort analysis, product analytics, lifecycle analytics, stakeholder communication, experimentation, data storytelling`;

export const demoJobDescription = `Senior Product Analyst - Growth

We are hiring a Senior Product Analyst to partner with our Growth and Lifecycle teams. This person will identify opportunities across acquisition, activation, conversion, and retention, then translate insights into experiments and product recommendations.

Responsibilities:
- Analyze product funnels, cohorts, user behavior, and retention patterns.
- Design experiment readouts and partner with product managers on A/B testing strategy.
- Build dashboards and recurring reporting for executive and operating teams.
- Work with engineering to define analytics instrumentation and event tracking.
- Communicate recommendations clearly to technical and non-technical stakeholders.

Requirements:
- 5+ years in product analytics, growth analytics, or business intelligence.
- Advanced SQL and experience with cloud data warehouses.
- Experience with experimentation, statistical thinking, and product metrics.
- Familiarity with Looker, Tableau, Amplitude, Mixpanel, dbt, and Python.
- Strong communication, business judgment, and executive storytelling.

Nice to have:
- Experience with PLG SaaS, lifecycle marketing, churn analysis, reverse ETL, and customer segmentation.
- Certifications in Google Analytics, Tableau, or cloud data platforms.`;

export const baseAnalysis = {
  score: 84,
  strengths: [
    "Strong alignment with product analytics, growth funnels, and lifecycle experimentation.",
    "Resume includes measurable business outcomes for activation and conversion.",
    "Tooling overlaps well with SQL, Looker, Tableau, dbt, Amplitude, and Mixpanel.",
    "Clear evidence of stakeholder communication and executive-facing reporting."
  ],
  missingSkills: ["Reverse ETL", "Cloud data warehouse naming", "Formal statistical testing language"],
  keywords: [
    "growth analytics",
    "PLG SaaS",
    "activation",
    "retention",
    "event tracking",
    "customer segmentation",
    "churn analysis",
    "executive storytelling"
  ],
  improvements: [
    "Add one bullet naming the cloud warehouse environment used, such as Snowflake, BigQuery, or Redshift.",
    "Mention statistical confidence, power, or experiment design methods where relevant.",
    "Add a concise tools line near the top for ATS scanning.",
    "Use the exact phrase growth analytics if it accurately represents recent work."
  ],
  technologies: ["Snowflake", "BigQuery", "Hightouch", "Census", "dbt Metrics", "Segment"],
  certifications: [
    "Tableau Certified Data Analyst",
    "Google Analytics Certification",
    "SnowPro Core Certification",
    "dbt Analytics Engineering Certification"
  ],
  progress: [
    { label: "Keyword coverage", value: 78 },
    { label: "Experience match", value: 92 },
    { label: "Tools alignment", value: 86 },
    { label: "Impact clarity", value: 88 },
    { label: "ATS structure", value: 81 }
  ],
  skills: [
    { name: "SQL", status: "matched", fit: "Advanced" },
    { name: "A/B testing", status: "matched", fit: "Strong" },
    { name: "Looker/Tableau", status: "matched", fit: "Strong" },
    { name: "Product metrics", status: "matched", fit: "Strong" },
    { name: "Reverse ETL", status: "missing", fit: "Add proof" },
    { name: "Cloud warehouse", status: "missing", fit: "Name tool" }
  ],
  radar: [
    { label: "Skills", value: 86 },
    { label: "Tools", value: 82 },
    { label: "Impact", value: 90 },
    { label: "Keywords", value: 78 },
    { label: "Seniority", value: 88 },
    { label: "Clarity", value: 84 }
  ],
  ai: {
    summary:
      "The resume presents a senior product analyst with strong SaaS growth experience, measurable product outcomes, and solid analytics tooling.",
    compatibility:
      "The profile matches the core role requirements well, especially around funnel analysis, experimentation, dashboards, and stakeholder communication. The main gaps are explicit cloud warehouse language and reverse ETL exposure.",
    suggestions:
      "Add a sharper technical summary, mirror important job keywords naturally, and strengthen experiment bullets with statistical framing where accurate.",
    recruiter:
      "A recruiter would likely see this candidate as qualified for a first screen. The resume would become stronger if it named the data stack more explicitly and connected growth work to PLG SaaS outcomes."
  }
};
