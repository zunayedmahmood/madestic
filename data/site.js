import {
  BrainCircuit,
  Code2,
  DatabaseZap,
  LineChart,
  Megaphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
  Zap
} from "lucide-react";

export const navItems = [
  { label: "Studio", href: "/studio" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Work", href: "/work" },
  { label: "Lab", href: "/lab" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Start", href: "/start" }
];

export const services = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Business Systems",
    slug: "ai-business-systems",
    text: "Chat-first ERP, intelligent workflows, decision support, automation assistants, and AI tools embedded directly into business operations.",
    deliverables: ["AI workflow design", "chat ERP interface", "automation assistant", "business intelligence layer"]
  },
  {
    icon: Code2,
    title: "Software & Product Engineering",
    slug: "software-product-engineering",
    text: "ERP, e-commerce, POS, inventory, dashboards, admin panels, internal tools, integrations, and production-grade web platforms.",
    deliverables: ["ERP modules", "custom dashboards", "web apps", "admin portals"]
  },
  {
    icon: Megaphone,
    title: "Marketing & Growth Systems",
    slug: "marketing-growth-systems",
    text: "Launch strategy, brand positioning, campaign architecture, creative direction, marketing assets, and conversion-focused digital systems.",
    deliverables: ["campaign decks", "launch plan", "content pillars", "growth funnel"]
  },
  {
    icon: Workflow,
    title: "Automation & Integrations",
    slug: "automation-integrations",
    text: "Courier APIs, marketplace monitoring, CRM flows, reporting pipelines, stock intelligence, and back-office automation that saves time every day.",
    deliverables: ["API integration", "data pipeline", "workflow automation", "scheduled reporting"]
  },
  {
    icon: LineChart,
    title: "Dashboards & Intelligence",
    slug: "dashboards-intelligence",
    text: "Executive dashboards, inventory intelligence, sales analytics, price matrices, availability tracking, and clear reporting for fast decisions.",
    deliverables: ["KPI dashboard", "analytics report", "data model", "decision interface"]
  },
  {
    icon: Sparkles,
    title: "Premium Interface Design",
    slug: "premium-interface-design",
    text: "Cinematic websites, clean product interfaces, conversion-first landing pages, and visual systems that make products feel expensive.",
    deliverables: ["landing page", "UI system", "motion design", "visual direction"]
  }
];

export const process = [
  {
    step: "01",
    title: "Decode",
    text: "We map the business model, users, operations, bottlenecks, data flows, and hidden friction before touching the design."
  },
  {
    step: "02",
    title: "Architect",
    text: "We convert messy business requirements into clean product flows, scalable modules, technical architecture, and launch strategy."
  },
  {
    step: "03",
    title: "Build",
    text: "We ship working systems fast, then improve them through real feedback, usage patterns, operational pressure, and measurable outcomes."
  },
  {
    step: "04",
    title: "Scale",
    text: "We turn the working product into a stronger engine through automation, reporting, optimization, and growth-focused improvements."
  }
];

export const projects = [
  {
    slug: "deshio-erp",
    title: "Deshio ERP Command Center",
    category: "Retail ERP / Inventory / POS",
    description: "A clothing business ERP covering inventory, barcode workflows, POS, branch transfers, returns, exchange, order packing, courier dispatch, and analytics.",
    image: "/images/projects/deshio-erp-dashboard.svg",
    tags: ["ERP", "POS", "Inventory", "Barcode", "Laravel", "Next.js"],
    impact: ["barcode-based fulfillment", "branch-wise stock visibility", "courier dispatch workflows", "return and exchange operations"],
    problem: "Retail teams need to control products, stock, sales, returns, branches, courier dispatch, and reports from one reliable system.",
    solution: "Madestic shaped a modular ERP flow with inventory intelligence, POS, order workflows, barcode operations, and operational dashboards.",
    gallery: ["/images/projects/deshio-erp-dashboard.svg", "/images/projects/deshio-erp-dashboard.svg", "/images/projects/deshio-erp-dashboard.svg"]
  },
  {
    slug: "errum-commerce",
    title: "Errum E-commerce Operations",
    category: "E-commerce / Campaigns / Fulfillment",
    description: "A commerce and operations system with product catalogs, campaign-aware pricing, checkout flows, order editing, fulfillment, invoices, and receipt printing.",
    image: "/images/projects/errum-commerce.svg",
    tags: ["E-commerce", "Campaigns", "Orders", "Checkout", "Invoices"],
    impact: ["campaign-aware storefront", "clean checkout flow", "order editing logic", "invoice and receipt workflows"],
    problem: "E-commerce operations often break when campaign pricing, checkout totals, order editing, payments, and fulfillment are not synchronized.",
    solution: "Madestic designed a commerce operation layer that keeps storefront, cart, checkout, backend order, and fulfillment logic aligned.",
    gallery: ["/images/projects/errum-commerce.svg", "/images/projects/errum-commerce.svg", "/images/projects/errum-commerce.svg"]
  },
  {
    slug: "unilever-availability-intelligence",
    title: "Unilever Availability Intelligence",
    category: "Data / Monitoring / Automation",
    description: "A marketplace monitoring engine that tracks product availability, pricing, and SKU coverage across Bangladeshi online retail platforms.",
    image: "/images/projects/unilever-availability.svg",
    tags: ["Monitoring", "Analytics", "Automation", "Data", "Marketplace"],
    impact: ["daily SKU availability checks", "account-wise price visibility", "structured price matrices", "faster restocking signals"],
    problem: "Large product portfolios become hard to monitor manually when SKUs are spread across multiple marketplaces and vendor branches.",
    solution: "Madestic built a monitoring workflow that turns marketplace product visibility into structured availability and pricing intelligence.",
    gallery: ["/images/projects/unilever-availability.svg", "/images/projects/unilever-availability.svg", "/images/projects/unilever-availability.svg"]
  },
  {
    slug: "myhotdeals-platform",
    title: "MyHotDeals Offer Platform",
    category: "Mobile App / Launch Experience",
    description: "A mobile-first offer discovery platform for restaurants, hospitals, and customer-side launch engagement.",
    image: "/images/projects/myhotdeals-app.svg",
    tags: ["Mobile App", "Offers", "Launch", "UX", "Marketplace"],
    impact: ["offer discovery interface", "merchant-side offer presentation", "launch event support", "customer engagement flow"],
    problem: "Customers need a simple way to discover offers while merchants need a polished platform to present deals clearly.",
    solution: "Madestic shaped the product presentation, customer flow, and launch-facing narrative for a mobile-first deals platform.",
    gallery: ["/images/projects/myhotdeals-app.svg", "/images/projects/myhotdeals-app.svg", "/images/projects/myhotdeals-app.svg"]
  }
];

export const decks = [
  {
    title: "The Positive One Strategy Deck 01",
    accent: "Strategy",
    description: "Embedded Canva strategy presentation for The Positive One, available directly inside the Strategy Lab.",
    embedUrl: "https://www.canva.com/design/DAGd98pvw3M/XzzhNCsRSQ1Ti0JCM8VibA/view?embed",
    link: "https://www.canva.com/design/DAGd98pvw3M/XzzhNCsRSQ1Ti0JCM8VibA/view?utm_content=DAGd98pvw3M&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
  },
  {
    title: "The Positive One Strategy Deck 02",
    accent: "Campaign",
    description: "Embedded Canva campaign and communication deck for reviewing strategy work without leaving the site.",
    embedUrl: "https://www.canva.com/design/DAGpDDMerZY/feCDcG7dqRGtUoim-uBRHQ/view?embed",
    link: "https://www.canva.com/design/DAGpDDMerZY/feCDcG7dqRGtUoim-uBRHQ/view?utm_content=DAGpDDMerZY&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
  },
  {
    title: "The Positive One Strategy Deck 03",
    accent: "Branding",
    description: "Embedded Canva branding deck for showcasing visual direction, planning, and execution thinking.",
    embedUrl: "https://www.canva.com/design/DAGtlwp2cL0/Ig1hAxSrWQsfGsCb3jHzvQ/view?embed",
    link: "https://www.canva.com/design/DAGtlwp2cL0/Ig1hAxSrWQsfGsCb3jHzvQ/view?utm_content=DAGtlwp2cL0&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
  },
  {
    title: "The Positive One Strategy Deck 04",
    accent: "Growth",
    description: "Embedded Canva growth strategy deck for presenting audience, engagement, and campaign planning work.",
    embedUrl: "https://www.canva.com/design/DAGuR0rohI0/BQ6AAgB_5CCI--Yf7foacQ/view?embed",
    link: "https://www.canva.com/design/DAGuR0rohI0/BQ6AAgB_5CCI--Yf7foacQ/view?utm_content=DAGuR0rohI0&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
  },
  {
    title: "The Positive One Strategy Deck 05",
    accent: "Playbook",
    description: "Embedded Canva playbook deck for keeping strategic assets visible in the Madestic Strategy Lab.",
    embedUrl: "https://www.canva.com/design/DAGnOrLd2V4/ALpdPSE3iLU2GyIqF6D53w/view?embed",
    link: "https://www.canva.com/design/DAGnOrLd2V4/ALpdPSE3iLU2GyIqF6D53w/view?utm_content=DAGnOrLd2V4&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
  },
  {
    title: "The Positive One Strategy Deck 06",
    accent: "Archive",
    description: "Embedded Canva archive deck for older strategic work that still belongs inside the lab portfolio.",
    embedUrl: "https://www.canva.com/design/DAHA8jRyTow/cY3wWw4qSQESVGQwUdaxWA/view?embed",
    link: "https://www.canva.com/design/DAHA8jRyTow/cY3wWw4qSQESVGQwUdaxWA/view?utm_content=DAHA8jRyTow&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
  }
];

export const manifesto = [
  {
    icon: Rocket,
    title: "Execution beats decoration.",
    text: "Beautiful design matters, but the system behind it must help the company sell, operate, decide, and grow."
  },
  {
    icon: TerminalSquare,
    title: "Software should understand the business.",
    text: "The best product is not the one with the most screens. It is the one that fits how the team actually works."
  },
  {
    icon: DatabaseZap,
    title: "Data should create action.",
    text: "Dashboards are not for decoration. They should expose reality and guide the next decision."
  },
  {
    icon: ShieldCheck,
    title: "Premium means reliable.",
    text: "A premium digital system should feel sharp, but it must also survive daily operational pressure."
  },
  {
    icon: Zap,
    title: "AI belongs inside workflows.",
    text: "AI is strongest when it is not a gimmick. It should reduce friction, speed decisions, and make complex systems easier to use."
  }
];


export const highlights = [
  "ERP for clothing and retail operations",
  "Marketplace availability intelligence",
  "E-commerce and POS architecture",
  "Operational dashboards for leaders",
  "AI workflows for business teams"
];

export const stack = [
  "Laravel",
  "Next.js",
  "React",
  "MySQL",
  "Vercel",
  "Tailwind",
  "Automation",
  "AI Workflows",
  "Dashboards",
  "Courier APIs",
  "E-commerce",
  "Operations"
];
