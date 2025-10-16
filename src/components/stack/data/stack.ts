export interface StackItem {
  name: string
  imageUrls?: string[]
}

export interface StackData {
  frontend: StackItem[]
  backend: StackItem[]
  databases: StackItem[]
  cloud_devops: StackItem[]
  system_networking: StackItem[]
  tooling_workflow: StackItem[]
  learning: StackItem[]
}

export const STACK_DATA: StackData = {
  frontend: [
    { name: "Next.js" },
    { name: "React" },
    { name: "Angular", imageUrls: ["https://res.cloudinary.com/ddhr4xgam/image/upload/v1760650571/certs/63181ef1-7389-431a-b9b7-5d1f5c46f322.png"] },
    { name: "TypeScript", imageUrls: ["https://res.cloudinary.com/ddhr4xgam/image/upload/v1760650887/certs/701d62d3-3170-42c5-8bd9-945936173e2e.png", "https://res.cloudinary.com/ddhr4xgam/image/upload/v1760650941/certs/b7ae000c-e82f-4ba7-a3fa-d0a2f23b8f1f.png"] },
    { name: "JavaScript" },
    { name: "TailwindCSS" },
    { name: "HTML" },
    { name: "CSS" }
  ],
  backend: [
    { name: "NodeJS" },
    { name: "NestJS", imageUrls: ["https://res.cloudinary.com/ddhr4xgam/image/upload/v1760650821/certs/9faabdd1-afe5-4ebb-ba2c-ae480bc37ad1.png"]}, // No s
    { name: "Express" }, 
    { name: "Python", imageUrls: ["https://res.cloudinary.com/ddhr4xgam/image/upload/v1760650849/certs/b474ea9f-a2b0-4bc1-b07c-76e2c71c7399.png"] },
    { name: "GraphQL" }, 
    { name: "REST" }, 
  ],
  databases: [
    { name: "PostgreSQL" },
    { name: "MySQL", imageUrls: ["https://res.cloudinary.com/ddhr4xgam/image/upload/v1760650828/certs/97abdaaa-a6f0-4cf4-b6a8-188f5a462423.png", "https://res.cloudinary.com/ddhr4xgam/image/upload/v1760650869/certs/ce8490ad-3889-42da-af48-aea550c4324c.png", "https://res.cloudinary.com/ddhr4xgam/image/upload/v1760650874/certs/bdf88d86-2ac7-4463-974c-3910cef0b5dd.png"] },
    { name: "MongoDB" },
    { name: "PostgreSQL" },
    { name: "Redis" },
    { name: "SQLite" }
  ],
  cloud_devops: [
    { name: "AWS" },
    { name: "Docker" },
    { name: "Vercel" },
    { name: "Firebase" }
  ],
  system_networking: [
    { name: "Linux" },
    { name: "Bash" },
    { name: "Networking Tools" },
    { name: "Firewall Setup" },
  ],
  tooling_workflow: [
    { name: "Git", imageUrls: ["https://res.cloudinary.com/ddhr4xgam/image/upload/v1760650956/certs/fbec4c89-4ed1-4a1f-b1d9-e442618b22e9.png"] },
    { name: "GitHub", imageUrls: ["https://res.cloudinary.com/ddhr4xgam/image/upload/v1760650956/certs/fbec4c89-4ed1-4a1f-b1d9-e442618b22e9.png"] },
    { name: "Gitlab" },
    { name: "Scrum" },
  ],
  learning: [
    { name: "Linux Administration" },
    { name: "Cybersecurity" },
  ]
}