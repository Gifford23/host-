import { Project } from "./projectsInterface";

// Mock projects data
export const projectsData: Project[] = [
  {
    id: 1,
    title: "Modern Lakeside Residence",
    description:
      "A custom lake house built with sustainable prefab modules, featuring energy-efficient design and seamless integration with natural surroundings.",
    imageUrl:
      "https://camcoprefabricatedstructures.com/wp-content/uploads/2025/02/Crispy-King-scaled.webp",
    status: "Completed",
    progress: 100,
    modules: 12,
    completionDate: "2023-12-15",
    location: "Laguna Lake, Philippines",
    category: "Residential",
  },
  {
    id: 2,
    title: "Urban Office Complex",
    description:
      "Multi-story office building with modular design, incorporating modern workspace solutions and sustainable construction practices.",
    imageUrl:
      "https://camcoprefabricatedstructures.com/wp-content/uploads/2025/02/dji_fly_20231223_134056_601_1703310081003_photo_optimized.webp",
    status: "Completed",
    progress: 100,
    modules: 48,
    completionDate: "2024-03-20",
    location: "Makati, Philippines",
    category: "Commercial",
  },
  {
    id: 3,
    title: "Mountain Retreat",
    description:
      "Off-grid vacation home with solar power integration, designed for sustainable living in remote mountainous terrain.",
    imageUrl:
      "https://camcoprefabricatedstructures.com/wp-content/uploads/2025/02/22.webp",
    status: "Completed",
    progress: 100,
    modules: 8,
    completionDate: "2023-06-10",
    location: "Baguio, Philippines",
    category: "Residential",
  },
  {
    id: 4,
    title: "Retail Shopping Center",
    description:
      "Modular retail units with customizable storefronts, designed for flexibility and efficient commercial operations.",
    imageUrl:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    status: "Completed",
    progress: 100,
    modules: 24,
    completionDate: "2024-01-15",
    location: "Quezon City, Philippines",
    category: "Commercial",
  },
  {
    id: 5,
    title: "Suburban Community Development",
    description:
      "Master planned community of prefab homes, featuring sustainable design principles and modern living amenities.",
    imageUrl:
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    status: "Completed",
    progress: 100,
    modules: 120,
    completionDate: "2025-06-30",
    location: "Tagaytay, Philippines",
    category: "Residential",
  },
  {
    id: 6,
    title: "Sustainable School Campus",
    description:
      "Educational facility built with eco-friendly modules, promoting environmental consciousness and modern learning environments.",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    status: "Completed",
    progress: 100,
    modules: 36,
    completionDate: "2023-08-25",
    location: "Cebu City, Philippines",
    category: "Commercial",
  },
  {
    id: 7,
    title: "Claveria Beach Resort",
    description:
      "Luxury beachfront resort with prefab cabins, designed for hospitality excellence and environmental harmony.",
    imageUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    status: "Completed",
    progress: 100,
    modules: 24,
    completionDate: "2022-11-15",
    location: "Claveria, Philippines",
    category: "Commercial",
  },
  {
    id: 8,
    title: "Tuguegarao Office Tower",
    description:
      "Modern office building with modular construction, featuring state-of-the-art facilities and energy-efficient systems.",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    status: "Completed",
    progress: 100,
    modules: 60,
    completionDate: "2023-01-20",
    location: "Tuguegarao, Philippines",
    category: "Commercial",
  },
  {
    id: 9,
    title: "Dinagat Agricultural Center",
    description:
      "Sustainable farming facility with prefab structures, optimized for agricultural operations and food production efficiency.",
    imageUrl:
      "https://images.unsplash.com/photo-1463620695885-8a91d87c53d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    status: "Completed",
    progress: 100,
    modules: 18,
    completionDate: "2023-05-05",
    location: "Dinagat Islands, Philippines",
    category: "Industrial",
  },
  {
    id: 10,
    title: "Zamboanga Commercial Complex",
    description:
      "Mixed-use development with modular design elements, combining retail, office, and service facilities in one integrated complex.",
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    status: "Completed",
    progress: 100,
    modules: 42,
    completionDate: "2022-09-10",
    location: "Zamboanga, Philippines",
    category: "Commercial",
  },
  {
    id: 11,
    title: "Bohol Eco-Resort",
    description:
      "Environmentally friendly prefab holiday retreat, showcasing sustainable tourism and eco-conscious design principles.",
    imageUrl:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    status: "Completed",
    progress: 100,
    modules: 16,
    completionDate: "2023-02-28",
    location: "Bohol, Philippines",
    category: "Commercial",
  },
  {
    id: 12,
    title: "Iligan Modern Hospital",
    description:
      "Healthcare facility built with prefabricated modules, designed to meet stringent medical standards and patient care requirements.",
    imageUrl:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    status: "Completed",
    progress: 100,
    modules: 64,
    completionDate: "2022-12-08",
    location: "Iligan, Lanao, Philippines",
    category: "Commercial",
  },
  {
    id: 13,
    title: "GenSan Convention Center",
    description:
      "Large-scale events venue with modular construction, featuring flexible spaces for conferences, exhibitions, and cultural events.",
    imageUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    status: "Completed",
    progress: 100,
    modules: 72,
    completionDate: "2023-04-15",
    location: "General Santos, Philippines",
    category: "Commercial",
  },
  {
    id: 14,
    title: "Davao Tech Hub",
    description:
      "Innovation center with flexible modular office spaces, designed to foster technological advancement and business collaboration.",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    status: "Completed",
    progress: 100,
    modules: 45,
    completionDate: "2023-03-01",
    location: "Davao, Philippines",
    category: "Commercial",
  },
  {
    id: 15,
    title: "CDO River View Apartments",
    description:
      "Apartment complex with prefabricated units overlooking the river, combining residential comfort with scenic waterfront living.",
    imageUrl:
      "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    status: "Completed",
    progress: 100,
    modules: 32,
    completionDate: "2023-07-20",
    location: "Cagayan de Oro, Philippines",
    category: "Residential",
  },
  {
    id: 16,
    title: "Manufacturing Facility Complex",
    description:
      "Industrial manufacturing plant with modular production units, designed for efficiency and scalable operations.",
    imageUrl:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    status: "Completed",
    progress: 100,
    modules: 85,
    completionDate: "2023-09-15",
    location: "Batangas, Philippines",
    category: "Industrial",
  },
  {
    id: 17,
    title: "Logistics and Warehousing Center",
    description:
      "Large-scale storage and distribution facility utilizing prefab construction for rapid deployment and operational efficiency.",
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    status: "Completed",
    progress: 100,
    modules: 96,
    completionDate: "2023-11-30",
    location: "Laguna, Philippines",
    category: "Industrial",
  },
];
