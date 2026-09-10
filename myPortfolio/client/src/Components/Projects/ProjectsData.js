export const PROJECTS_DATA = [
  {
    id: "eduflow-ai",

    title: "EduFlow AI",

    category: "AI-Powered Full-Stack SaaS",

    featured: true,

    tagline:
      "AI-powered study planning platform that transforms goals, deadlines, priorities, and availability into personalized schedules.",

    problemSolved:
      "Students often struggle to convert long-term academic goals into realistic day-to-day schedules. EduFlow AI automates this process by analyzing user goals, priorities, deadlines, tasks, and weekly availability to generate and continuously adapt personalized study plans.",

    architecture:
      "Domain-Driven Clean Architecture with decoupled Presentation, Application, Domain, and Infrastructure layers. The platform uses ASP.NET Core Web API for business logic and APIs, Entity Framework Core with SQL Server for transactional data, MongoDB for flexible AI-related/document data, and dedicated planner and AI services for intelligent schedule generation.",

    techStack: [
      "ASP.NET Core",
      "C#",
      "React.js",
      "SQL Server",
      "MongoDB",
      "Entity Framework Core",
      "REST APIs",
      "JWT Authentication",
      "Azure",
      "Google Gemini API",
      "Ollama",
      "LLMs"
    ],

    highlights: [
      "Built a cloud-based SaaS platform that helps students convert academic goals into actionable study plans.",

      "Designed a planner engine that evaluates user goals, priorities, deadlines, tasks, and weekly availability to generate personalized day-to-day schedules.",

      "Implemented an availability-driven planning workflow where the planner engine generates schedules based on the user's available study hours.",

      "Designed goal and task lifecycle management, allowing users to create goals, break them into tasks, schedule work, track progress, and complete daily activities.",

      "Developed secure ASP.NET Core REST APIs with JWT authentication, refresh tokens, role-based authorization, dependency injection, and centralized business logic.",

      "Implemented Clean Architecture with separate Presentation, Application, Domain, and Infrastructure layers to keep business rules independent from frameworks and infrastructure.",

      "Used SQL Server and Entity Framework Core for structured transactional data such as users, goals, tasks, schedules, availability, and progress.",

      "Integrated MongoDB for flexible document-oriented data and AI-related information where a relational schema is less suitable.",

      "Built responsive React.js dashboards for managing goals, tasks, schedules, availability, and academic progress.",

      "Integrated Google Gemini API for cloud-based AI capabilities and Ollama for running local LLMs, enabling AI-assisted planning, recommendations, and study guidance.",

      "Designed the system with Azure deployment and cloud infrastructure in mind to support scalable SaaS workloads."
    ],

    githubUrl: "https://github.com/Dharshankuma/EduFlowAI",

    liveDemo: null,

    badge: "AI SaaS"
  },

];
