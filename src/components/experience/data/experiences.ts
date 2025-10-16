export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  projectUrl?: string
  githubUrl?: string
  startDate: string
  endDate?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate?: string
  projects: Project[]
}

export const experiences: Experience[] = [
  {
      "id": "developstoday",
      "company": "DevelopsToday",
      "position": "Full-Stack Developer",
      "location": "Remote",
      "startDate": "2024-09",
      "endDate": "2025-03",
      "projects": [
        {
          "id": "plotr",
          "title": "Plotr – Geospatial Business Analytics Platform",
          "description": "Developed geospatial data visualizations and backend APIs for a business analytics platform. Integrated Mapbox, Martin Tile Server, and AWS for dynamic map rendering and optimized PostgreSQL spatial queries for high-performance data visualization.",
          "technologies": ["MongoDB", "TypeScript", "Mapbox", "Martin Tile Server", "AWS", "PostgreSQL", "Nextjs"],
          "imageUrl": "https://res.cloudinary.com/ddhr4xgam/image/upload/v1760572654/4bdab1fb-a406-4fa0-b8b9-d3c4a452f510.png",
          "projectUrl": "https://www.plotr.com/",
          "startDate": "2024-11",
          "endDate": "2025-03"
        },
        {
          "id": "dimmo",
          "title": "Dimmo – AI Demo Creation Platform",
          "description": "Contributed to Dimmo’s backend and API design, improving data flows and enhancing developer experience through structured service layers and better endpoint design.",
          "technologies": ["Nextjs", "Strapi Headless CMS", "Docker", "Typescript"],
          "projectUrl": "https://www.dimmo.ai/",
          "imageUrl": "https://res.cloudinary.com/ddhr4xgam/image/upload/v1760572682/c43d53a1-3d60-4bc4-9b56-b0fbbe24ab37.png",
          "startDate": "2024-09",
          "endDate": "2024-11"
        }
      ]
    },
  {
    "id": "eldorado",
    "company": "El Dorado Research Group",
    "position": "Full-Stack Developer",
    "location": "Remote",
      "startDate": "2024-03",
      "endDate": "2024-09",
      "projects": [
        {
          "id": "cleatus",
          "title": "Cleatus – AI Government Contracting Tool",
          "description": "Led backend development and database design for Cleatus during a full system migration from Django to a modern architecture. Built APIs, user session flows, and data-driven UI components supporting AI-powered contract analysis.",
          "technologies": ["Next.js", "MySQL", "Planetscale", "TypeScript", "Firebase", "Django", "Python"],
          "imageUrl": "https://res.cloudinary.com/ddhr4xgam/image/upload/v1760572679/7d57db3f-8657-47a5-a719-39924d78e558.png",
          "projectUrl": "https://www.cleat.ai/",
          "startDate": "2024-05",
          "endDate": "2024-09"
        }
      ]
    },
    {
      "id": "freelance",
      "company": "Freelance",
      "position": "Full-Stack Developer",
      "location": "Remote",
      "startDate": "2023-01-01",
      "projects": [
        {
          "id": "farmavet",
          "title": "Farmavet – E-commerce for Veterinary Products",
          "description": "Developed a complete e-commerce platform for veterinary medicine distribution across Argentina, focusing on clean UI/UX, database architecture, and backend development.",
          "technologies": ["Nextjs", "Supabase", "PostgreSQL", "Tailwind", "Resend"],
          "imageUrl": "https://res.cloudinary.com/ddhr4xgam/image/upload/v1760573416/baaf91a0-2cde-4944-a207-09b7d943ef19.png",
          "githubUrl": "TODO: add repo URL",
          "startDate": "2023-02-01",
          "endDate": "2023-07-01"
        },
        {
          "id": "promo-site",
          "title": "Promotional Website (Freelance)",
          "description": "Delivered a responsive promotional website for a key client, managing design, deployment, and SEO optimization to ensure strong first impressions and fast performance.",
          "technologies": ["Next.js", "TailwindCSS", "Vercel"],
          "imageUrl": "images/projects/placeholder.svg",
          "projectUrl": "TODO: add live project URL",
          "startDate": "2023-05-01",
          "endDate": "2023-06-01"
        }
      ]
    },
    {
      "id": "nocountry",
      "company": "NoCountry",
      "position": "Full-Stack Developer (Team Practice Program)",
      "location": "Remote",
      "startDate": "2022-02",
      "endDate": "2023-09",
      "projects": [
        {
          "id": "americana",
          "title": "Americana – E-commerce Platform",
          "description": "Collaborated in a multidisciplinary team to build an e-commerce application, focusing on frontend UI/UX improvements and backend service integration.",
          "technologies": ["React", "Node.js", "MySQL"],
          "imageUrl": "images/projects/placeholder.svg",
          "startDate": "2022-02",
          "endDate": "2022-08"
        },
        {
          "id": "managym",
          "title": "Managym – Gym Management App",
          "description": "Developed features for a gym management web app, including membership tracking, scheduling, and internal data tools.",
          "technologies": ["React", "Node.js", "MongoDB"],
          "imageUrl": "images/projects/placeholder.svg",
          "startDate": "2022-04",
          "endDate": "2022-10"
        },
        {
          "id": "wave",
          "title": "Wave – Dating Application",
          "description": "Built social app features such as profile matching and real-time messaging while collaborating with a distributed development team.",
          "technologies": ["React", "Node.js", "GraphQL"],
          "imageUrl": "images/projects/placeholder.svg",
          "startDate": "2022-07",
          "endDate": "2022-12"
        }
      ]
    }
  ]

