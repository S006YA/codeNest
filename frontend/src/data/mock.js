export const mockData = {
  hero: {
    title: "Building Digital Experiences",
    subtitle: "Frontend Developer Specializing in React",
    description: "Crafting responsive, performant, and user-centric web applications with modern technologies.",
    cta: "View My Work"
  },
  about: {
    title: "About Me",
    description: "I'm a passionate frontend developer specializing in React and modern web technologies. With a strong foundation in JavaScript, TypeScript, and Python, I create seamless user experiences that combine elegant design with robust functionality. My expertise extends to serverless architectures and Node.js backend integration, allowing me to build full-stack solutions when needed.",
    highlights: [
      "3+ years of React development experience",
      "Expert in modern JavaScript (ES6+) and TypeScript",
      "Strong understanding of UI/UX principles",
      "Experienced with serverless architectures (AWS Lambda)",
      "Passionate about clean code and best practices"
    ]
  },
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 95 },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "HTML5 & CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Redux/Context API", level: 80 }
      ]
    },
    {
      category: "Backend & Tools",
      items: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 70 },
        { name: "AWS Lambda", level: 65 },
        { name: "Git & GitHub", level: 85 },
        { name: "REST APIs", level: 80 },
        { name: "Webpack/Vite", level: 75 }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, and checkout flow. Built with React, TypeScript, and integrated with Stripe for payments.",
      technologies: ["React", "TypeScript", "Redux", "Stripe API", "Tailwind CSS"],
      features: [
        "Dynamic product filtering and search",
        "Real-time cart management",
        "Secure payment processing",
        "Responsive design for all devices"
      ],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop"
    },
    {
      id: 2,
      title: "Real-Time Analytics Dashboard",
      description: "Interactive analytics dashboard featuring real-time data visualization, WebSocket integration, and customizable widgets. Designed for monitoring business metrics.",
      technologies: ["React", "JavaScript", "Chart.js", "WebSocket", "Node.js"],
      features: [
        "Live data updates via WebSocket",
        "Customizable dashboard layouts",
        "Multiple chart types and visualizations",
        "Export data to CSV/PDF"
      ],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
    },
    {
      id: 3,
      title: "Task Management Application",
      description: "Collaborative task management tool with drag-and-drop functionality, team collaboration features, and deadline tracking. Built with React and Context API.",
      technologies: ["React", "TypeScript", "Context API", "DnD Kit", "LocalStorage"],
      features: [
        "Drag-and-drop task organization",
        "Priority and deadline management",
        "Team collaboration features",
        "Offline-first architecture"
      ],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "Elegant weather application with 7-day forecasts, location-based detection, and beautiful weather animations. Integrates with OpenWeather API.",
      technologies: ["React", "JavaScript", "OpenWeather API", "Geolocation API", "CSS Animations"],
      features: [
        "Current weather and 7-day forecast",
        "Auto-detect user location",
        "Search by city or zip code",
        "Animated weather conditions"
      ],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop"
    },
    {
      id: 5,
      title: "Serverless Portfolio CMS",
      description: "Content management system for portfolios built with serverless architecture. Features AWS Lambda functions for backend operations and S3 for media storage.",
      technologies: ["React", "TypeScript", "AWS Lambda", "API Gateway", "DynamoDB"],
      features: [
        "Serverless backend with AWS Lambda",
        "Dynamic content management",
        "Image optimization and CDN delivery",
        "Cost-effective scalable architecture"
      ],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    }
  ],
  contact: {
    email: "sooryacr07@gmail.com",
    phone:"6282783428",
    title: "Let's Work Together",
    description: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!"
  }
};