export interface Project {
  id: string
  title: string
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
          "technologies": ["MongoDB", "TypeScript", "Mapbox", "Martin Tile Server", "AWS", "PostgreSQL", "Nextjs"],
          "imageUrl": "https://res.cloudinary.com/ddhr4xgam/image/upload/v1760572654/4bdab1fb-a406-4fa0-b8b9-d3c4a452f510.png",
          "projectUrl": "https://www.plotr.com/",
          "startDate": "2024-11",
          "endDate": "2025-03"
        },
        {
          "id": "dimmo",
          "title": "Dimmo – AI Demo Creation Platform",
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
          "technologies": ["Nextjs", "Supabase", "PostgreSQL", "Tailwind", "Resend"],
          "imageUrl": "https://res.cloudinary.com/ddhr4xgam/image/upload/v1760573416/baaf91a0-2cde-4944-a207-09b7d943ef19.png",
          "githubUrl": "https://github.com/lazasa/farmavet",
          "startDate": "2023-02-01",
          "endDate": "2023-07-01"
        },
        {
          "id": "promo-site",
          "title": "Promotional Website",
          "technologies": ["TailwindCSS"],
          "imageUrl": "https://res.cloudinary.com/ddhr4xgam/image/upload/v1760592295/2e078755-64de-405c-b30f-1eccc0f39763.png",
          "projectUrl": "https://eyishazyer.netlify.app/",
          "startDate": "2023-05-01",
          "endDate": "2023-06-01"
        }
      ]
    },
  ]

