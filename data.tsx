/** @jsxImportSource react */
import React from "react"
import { Code, Globe, Layers } from "lucide-react"

export const featuredProjects = [
  {
    id: "asmitabhate",
    title: "Asmitabhate.co.in",
    category: "Web Development",
    description:
      "A clean, responsive blogging website with modern design and optimal performance. Features include a custom CMS, responsive layouts, and SEO optimization.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
    liveLink: "https://asmitabhate.co.in",
    githubLink: null,
  },
  {
    id: "staff-management",
    title: "Staff Management System",
    category: "Web Application",
    description:
      "A custom-built internal tool for managing staff and workflows. This application streamlines HR processes, attendance tracking, and performance management.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    liveLink: null,
    githubLink: "https://github.com/webwhizz/staff-management",
  },
]

export const allProjects = [
  ...featuredProjects,
  {
    id: "e-commerce",
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-featured e-commerce platform with real-time inventory management and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveLink: "https://ecommerce-demo.webwhizz.dev",
    githubLink: "https://github.com/webwhizz/ecommerce",
    challenge:
      "The client needed a scalable e-commerce solution that could handle a large inventory and provide a seamless shopping experience across devices.",
    solution:
      "I built a custom e-commerce platform using Next.js for optimal performance and SEO. The application features server-side rendering for fast page loads, a responsive design for all devices, and integration with Stripe for secure payments.",
    features: [
      "Responsive product catalog with filtering and search",
      "User authentication and account management",
      "Shopping cart with persistent storage",
      "Secure checkout with Stripe integration",
      "Admin dashboard for inventory management",
      "Order tracking and history",
    ],
    results:
      "The platform increased conversion rates by 35% and reduced cart abandonment by 25% compared to the client's previous solution.",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    client: "RetailX",
    timeline: "3 months",
    role: "Full-stack Developer",
  },
  {
    id: "finance-dashboard",
    title: "Finance Dashboard",
    category: "UI/UX Design",
    description: "An intuitive dashboard for financial analytics with interactive charts and data visualization.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "D3.js", "Framer Motion", "Firebase"],
    liveLink: "https://finance-dashboard.webwhizz.dev",
    githubLink: "https://github.com/webwhizz/finance-dashboard",
    challenge:
      "The client needed a way to visualize complex financial data in an intuitive and accessible manner for non-technical users.",
    solution:
      "I designed and developed a dashboard that transforms raw financial data into meaningful visualizations using D3.js. The interface is clean and user-friendly, with interactive elements that allow users to explore data at different levels of detail.",
    features: [
      "Real-time data updates",
      "Interactive charts and graphs",
      "Customizable dashboard layouts",
      "Data export functionality",
      "User permission management",
      "Mobile-responsive design",
    ],
    results:
      "The dashboard reduced the time spent on financial analysis by 60% and improved decision-making accuracy by providing clearer insights into financial trends.",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    client: "FinTech Solutions",
    timeline: "2 months",
    role: "UI/UX Designer & Frontend Developer",
  },
  {
    id: "social-media",
    title: "Social Media App",
    category: "Mobile Development",
    description: "A cross-platform social media application with real-time messaging and content sharing.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    liveLink: null,
    githubLink: "https://github.com/webwhizz/social-app",
    challenge:
      "The startup needed a social media platform that could compete with established players by offering unique features while maintaining familiar user experience patterns.",
    solution:
      "I developed a cross-platform mobile application using React Native that focuses on community building and content discovery. The app includes real-time messaging, content sharing, and a recommendation algorithm that helps users discover relevant content.",
    features: [
      "User profiles and authentication",
      "Real-time messaging with read receipts",
      "Content sharing with privacy controls",
      "Personalized content feed",
      "Push notifications",
      "Offline support",
    ],
    results: "The app achieved 10,000 downloads in the first month and maintains a 4.7-star rating on app stores.",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    client: "ConnectX",
    timeline: "4 months",
    role: "Mobile App Developer",
  },
  {
    id: "ai-content",
    title: "AI Content Generator",
    category: "AI/ML",
    description: "An AI-powered content generation tool for creating marketing copy and social media posts.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "TensorFlow", "Next.js", "OpenAI"],
    liveLink: "https://ai-content.webwhizz.dev",
    githubLink: "https://github.com/webwhizz/ai-content-generator",
    challenge:
      "The marketing agency needed to scale their content production without compromising quality or brand consistency.",
    solution:
      "I built an AI-powered content generation tool that uses natural language processing to create marketing copy and social media posts. The system is trained on the client's brand voice and industry-specific content to ensure relevance and consistency.",
    features: [
      "AI-generated marketing copy",
      "Social media post generation",
      "Brand voice customization",
      "Content editing and refinement",
      "Performance analytics",
      "Content scheduling",
    ],
    results: "The tool increased content production capacity by 300% while reducing content creation costs by 40%.",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    client: "MarketingPro",
    timeline: "3 months",
    role: "AI Developer & Frontend Engineer",
  },
  {
    id: "real-estate",
    title: "Real Estate Platform",
    category: "Web Development",
    description: "A property listing and management platform with virtual tours and appointment scheduling.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Three.js", "Prisma", "PostgreSQL"],
    liveLink: "https://realestate.webwhizz.dev",
    githubLink: "https://github.com/webwhizz/real-estate-platform",
    challenge:
      "The real estate agency needed a modern platform that could showcase properties effectively in a competitive market, especially during times when in-person viewings were limited.",
    solution:
      "I developed a comprehensive real estate platform that features virtual 3D tours, detailed property listings, and an appointment scheduling system. The platform uses Three.js for immersive property visualization and includes a robust backend for property management.",
    features: [
      "Interactive 3D virtual tours",
      "Advanced property search and filtering",
      "Appointment scheduling system",
      "Agent profiles and messaging",
      "Property comparison tool",
      "Mortgage calculator",
    ],
    results: "The platform led to a 45% increase in qualified leads and a 30% reduction in the sales cycle length.",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    client: "HomeFind Realty",
    timeline: "5 months",
    role: "Full-stack Developer",
  },
  {
    id: "health-fitness",
    title: "Health & Fitness App",
    category: "Mobile Development",
    description: "A comprehensive health tracking application with workout plans and nutrition guidance.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Flutter", "Firebase", "GraphQL", "TensorFlow Lite"],
    liveLink: "https://health-app.webwhizz.dev",
    githubLink: "https://github.com/webwhizz/health-fitness-app",
    challenge:
      "The fitness company wanted to expand their digital presence with a mobile app that could provide personalized workout and nutrition plans while tracking user progress.",
    solution:
      "I built a cross-platform mobile application using Flutter that offers personalized workout plans, nutrition tracking, and progress monitoring. The app uses machine learning to adapt recommendations based on user performance and preferences.",
    features: [
      "Personalized workout plans",
      "Nutrition tracking and meal suggestions",
      "Progress tracking with visual charts",
      "Exercise form detection using device camera",
      "Community challenges and leaderboards",
      "Integration with wearable devices",
    ],
    results:
      "The app has maintained an 80% user retention rate after 3 months and has facilitated over 500,000 workout sessions.",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    client: "FitLife",
    timeline: "6 months",
    role: "Mobile App Developer",
  },
]

export const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-featured e-commerce platform with real-time inventory management and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    link: "#",
  },
  {
    title: "Finance Dashboard",
    category: "UI/UX Design",
    description: "An intuitive dashboard for financial analytics with interactive charts and data visualization.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "D3.js", "Framer Motion", "Firebase"],
    link: "#",
  },
  {
    title: "Social Media App",
    category: "Mobile Development",
    description: "A cross-platform social media application with real-time messaging and content sharing.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    link: "#",
  },
  {
    title: "AI Content Generator",
    category: "AI/ML",
    description: "An AI-powered content generation tool for creating marketing copy and social media posts.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "TensorFlow", "Next.js", "OpenAI"],
    link: "#",
  },
  {
    title: "Real Estate Platform",
    category: "Web Development",
    description: "A property listing and management platform with virtual tours and appointment scheduling.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Three.js", "Prisma", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Health & Fitness App",
    category: "Mobile Development",
    description: "A comprehensive health tracking application with workout plans and nutrition guidance.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Flutter", "Firebase", "GraphQL", "TensorFlow Lite"],
    link: "#",
  },
]

export const services = [
  {
    title: "Web Development",
    price: "1999",
    icon: React.createElement(Globe, { className: "h-6 w-6 text-blue-500" }),
    features: [
      "Responsive website design",
      "Frontend development",
      "Backend development",
      "API integration",
      "Performance optimization",
      "SEO implementation",
    ],
  },
  {
    title: "UI/UX Design",
    price: "1499",
    icon: React.createElement(Layers, { className: "h-6 w-6 text-blue-500" }),
    features: [
      "User interface design",
      "User experience optimization",
      "Wireframing and prototyping",
      "Design system creation",
      "Accessibility compliance",
      "Design documentation",
    ],
  },
  {
    title: "Custom Solutions",
    price: "2499",
    icon: React.createElement(Code, { className: "h-6 w-6 text-blue-500" }),
    features: [
      "Custom web applications",
      "E-commerce solutions",
      "Content management systems",
      "API development",
      "Database design",
      "Cloud integration",
    ],
  },
]

export const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Working with Dev was a game-changer for our business. The website he built not only looks stunning but has significantly improved our conversion rates.",
  },
  {
    name: "Michael Chen",
    position: "Founder, DesignHub",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The attention to detail and creative solutions provided were exceptional. Our project was delivered ahead of schedule and exceeded all expectations.",
  },
  {
    name: "Priya Sharma",
    position: "Marketing Director, GrowthX",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Dev's technical expertise combined with an eye for design resulted in a platform that has transformed our digital presence. Highly recommended!",
  },
]

export const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "REST API",
  "UI/UX Design",
  "Figma",
  "Adobe XD",
  "Responsive Design",
  "Firebase",
  "AWS",
  "Vercel",
  "Git",
  "CI/CD",
  "Testing (Jest, Cypress)",
  "Performance Optimization",
  "SEO",
]

export const experiences = [
  {
    role: "CEO & Founder",
    company: "WebWhizz",
    period: "2020 - Present",
    description:
      "Founded and lead a creative studio specializing in digital experiences. Oversee all aspects of the business including client acquisition, project management, and delivery of high-quality web solutions.",
  },
  {
    role: "Senior Frontend Developer",
    company: "TechInnovate",
    period: "2018 - 2020",
    description:
      "Led frontend development for enterprise clients. Implemented modern JavaScript frameworks and responsive design principles. Mentored junior developers and established coding standards.",
  },
  {
    role: "UI/UX Designer",
    company: "DesignForward",
    period: "2016 - 2018",
    description:
      "Created user-centered designs for web and mobile applications. Conducted user research and usability testing. Collaborated with development teams to ensure design implementation fidelity.",
  },
  {
    role: "Web Developer",
    company: "DigitalCraft",
    period: "2014 - 2016",
    description:
      "Developed responsive websites and web applications for clients across various industries. Worked with HTML, CSS, JavaScript, and PHP. Implemented content management systems and e-commerce solutions.",
  },
]

export const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Mumbai University",
    period: "2012 - 2014",
    description:
      "Specialized in web technologies and software development. Graduated with distinction. Completed thesis on responsive web design methodologies.",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Delhi University",
    period: "2009 - 2012",
    description:
      "Focused on programming fundamentals, data structures, and algorithms. Participated in coding competitions and hackathons. Developed a student management system as final year project.",
  },
  {
    degree: "UI/UX Design Certification",
    institution: "Design Academy",
    period: "2016",
    description:
      "Intensive program covering user research, wireframing, prototyping, and visual design. Created a portfolio of design projects demonstrating proficiency in user-centered design principles.",
  },
  {
    degree: "Advanced React & Next.js",
    institution: "Frontend Masters",
    period: "2019",
    description:
      "Comprehensive course on advanced React patterns, state management, server-side rendering with Next.js, and performance optimization techniques.",
  },
]
