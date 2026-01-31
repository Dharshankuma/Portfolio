import React from "react";
import {
  FaServer,
  FaDatabase,
  FaCode,
  FaCloud,
  FaTerminal,
} from "react-icons/fa6";
import { PiMonitorFill } from "react-icons/pi";

export const SKILLS_DATA = [
  {
    id: "backend",
    title: "Backend & APIs",
    isPrimary: true,
    icon: FaServer,
    skills: [
      "RESTful APIs",
      "ASP.NET Core Web API",
      "Backend Architecture",
      "Authentication & Authorization",
      "API Integration",
    ],
  },
  {
    id: "languages",
    title: "Languages & Frameworks",
    icon: FaCode,
    skills: ["C#", ".NET (Core, .NET 6+)", "ASP.NET Core"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: FaDatabase,
    skills: ["Microsoft SQL Server", "Mongo DB", "Oracle DB"],
  },
  {
    id: "cloud",
    title: "Cloud & Platforms",
    icon: FaCloud,
    skills: ["Microsoft Azure", "SharePoint", "SPFx"],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: PiMonitorFill,
    skills: ["React.js", "JavaScript", "HTML", "CSS", "jQuery"],
  },
  {
    id: "tools",
    title: "Tools",
    icon: FaTerminal,
    skills: ["Git", "Postman"],
  },
];
