import React from "react";
import Card from "../components/Card";
function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with product management, cart functionality, and secure payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveDemo: "https://demo.example.com/ecommerce",
      github: "https://github.com/username/ecommerce-platform",
      image: "https://via.placeholder.com/600x400?text=E-Commerce+Platform",
    },
    {
      title: "Real-time Chat App",
      description:
        "A messaging application with real-time communication, user authentication, and message history.",
      technologies: ["Socket.io", "Express", "React", "JWT"],
      liveDemo: "https://demo.example.com/chat-app",
      github: "https://github.com/username/realtime-chat-app",
      image: "https://via.placeholder.com/600x400?text=Chat+App",
    },
    {
      title: "Analytics Dashboard",
      description:
        "A comprehensive dashboard for visualizing business metrics with customizable charts and reports.",
      technologies: ["D3.js", "React", "Node.js", "PostgreSQL"],
      liveDemo: "https://demo.example.com/analytics-dashboard",
      github: "https://github.com/username/analytics-dashboard",
      image: "https://via.placeholder.com/600x400?text=Analytics+Dashboard",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase projects, skills, and contact information in a modern layout.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveDemo: "https://demo.example.com/portfolio",
      github: "https://github.com/username/portfolio-website",
      image: "https://via.placeholder.com/600x400?text=Portfolio+Website",
    },
    {
      title: "Task Manager App",
      description:
        "A productivity app for managing daily tasks, deadlines, and project timelines with drag-and-drop support.",
      technologies: ["React", "Redux", "Firebase"],
      liveDemo: "https://demo.example.com/task-manager",
      github: "https://github.com/username/task-manager-app",
      image: "https://via.placeholder.com/600x400?text=Task+Manager+App",
    },
    {
      title: "Blog CMS",
      description:
        "A content management system for creating, editing, and publishing blog posts with markdown support.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Auth.js"],
      liveDemo: "https://demo.example.com/blog-cms",
      github: "https://github.com/username/blog-cms",
      image: "https://via.placeholder.com/600x400?text=Blog+CMS",
    },
  ];

  return (
    <div className="w-full  px-15 py-10">
      <h2 className="text-5xl font-semibold mb-2">My Projects</h2>
      <p>Here are some of the projects I've worked on:</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
