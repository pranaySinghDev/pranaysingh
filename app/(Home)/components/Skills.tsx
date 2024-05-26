import { HoverEffect } from "@/components/ui/CardHover";
import React from "react";
import Title from "./Title";

export default function Skills() {
  const projects = [
    {
      title: "Cloud Proficiency",
      description: "Proficient in AWS, GCP, and Azure cloud platforms. Hands-on experience in deploying and managing cloud infrastructure, serverless computing, containerization, and cloud-native application development.",
      link: "https://github.com/pranaySingDev",
    },
    {
      title: "AI & LLM",
      description: "Experienced in developing and integrating AI and large language models (LLMs) into applications. Worked with models like GPT-3, BERT, and XLNet for various natural language processing tasks.",
      link: "https://netflix.com",
    },
    {
      title: "Product Management",
      description: "Skilled in product management methodologies, including Agile and Lean Startup. Experienced in defining product vision, roadmaps, and leading cross-functional teams.",
      link: "https://google.com",
    },
    {
      title: "Risk & Governance",
      description: "Knowledgeable in risk management frameworks, compliance regulations, and governance best practices. Implemented risk assessment, mitigation strategies, and security controls.",
      link: "https://meta.com",
    },
    {
      title: "DevOps & SRE",
      description: "Proficient in DevOps practices, including CI/CD pipelines, infrastructure as code, monitoring, and automation. Skilled in Site Reliability Engineering (SRE) principles, observability, incident response, and chaos engineering.",
      link: "https://amazon.com",
    },
    {
      title: "Software Engineering",
      description: "Experienced in full-stack development with a focus on backend engineering using Go and Node.js, working with protocols like HTTP, gRPC, and MQTT. Familiar with messaging formats like JSON and Protocol Buffers. Proficient in Test-Driven Development (TDD), Hexagonal Architecture, SOLID principles, and building distributed systems. Comfortable with front-end development as well.",
      link: "https://microsoft.com",
    }
  ];
  return (
    <div>
      <Title text="Core Competencies"></Title>
      <div className="min-h-[60vh] flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-between">
      <HoverEffect items={projects}></HoverEffect>
    </div>
    </div>
  );
}
