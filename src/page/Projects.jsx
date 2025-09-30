import ProjectCard from "../components/ProjectCard";
import gymImg from "../assets/gymWebsite.png";
import digitalImg from "../assets/digitalAgency.png";
import TicketGenerator from "../assets/TicketGenerator.png";
import Logistics from "../assets/logistics.png";
import BookDashboard from "../assets/bookManagementDashboard.png";
import BookImg from "../assets/bookManagement.png";
import ParticlesBackground from "../components/Particle";

export default function Projects() {
  const projects = [
    {
      image: gymImg,
      title: "Gym Website",
      description:
        "A responsive and fully functional fitness website featuring workout plans, membership options, and contact forms. Built with HTML, SASS, and JavaScript for dynamic UI, and Firebase for authentication, hosting, and data storage. Showcases skills in responsive design, interactivity, and integration of backend services..",
        link: "https://gym-website-gamma-three.vercel.app",
    },
    {
      image: digitalImg,
      title: "Digital Agency Website",
      description:
        "A modern and responsive website for a creative agency, built with React for dynamic components and smooth navigation. Integrated EmailJS for functional contact forms without a backend. Highlights skills in React development, component design, state management, and third-party API integration for real-world projects.",
        link: "https://digital-marketing-agency-mauve.vercel.app",
    },
    {
      image: TicketGenerator,
      title: "Ticket Generator",
      description:
        "A web app that generates custom event tickets using React for dynamic UI and Cloudinary for image upload and management. Users can create, preview, and download personalized tickets. Demonstrates skills in React, API integration, image handling, and building practical, user-focused applications.",
        link: "https://hngx-stage2-conference-ticket-generator-nine.vercel.app",
    },
    {
      image: Logistics,
      title: "Logistics Website",
      description:
        "A full-stack logistics management platform built with React and TypeScript on the frontend, and Node.js/Express with a database backend. Real-time updates are powered by Socket.IO. Features shipment tracking, user management, and secure data handling. Showcases skills in full-stack development, real-time communication, and scalable web architecture.",
        link: "https://logistics-clientcom.vercel.app",
    },
    {
      image: BookDashboard,
      title: "Book Management Dashboard",
      description:
        "An admin-side dashboard for managing books, users, and borrowing records. Built with modern UI components for easy navigation and control. Features include CRUD operations, real-time updates, and analytics. Demonstrates skills in dashboard design, data management, and building efficient admin tools for library or book management systems.",
        link: "https://your-gym-demo-link.com",
    },
    {
      image: BookImg,
      title: "Full-Stack Book Management",
      description:
        "A complete book management system with user and admin roles. Users can browse, borrow, and review books, while admins manage inventory, reservations, and notifications. Built with React, Node.js, Express, and a database backend. Highlights skills in full-stack development, authentication, CRUD operations, and scalable application design.",
      link: "https://book-managementcom.vercel.app",
    },
  ];

  return (
    <>
        <div className="relative min-h-screen">
        <ParticlesBackground/>
    <div className="relative z-1 text-white pt-28 pb-16 px-6">
      <h2 className="text-3xl font-bold text-center text-ActionColor">My Recent Works
</h2>
<p className="pt-6 text-center mb-10">Here are few Projects i have worked on recently</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            image={proj.image}
            title={proj.title}
            description={proj.description}
            link={proj.link}
          />
        ))}
      </div>
    </div>
    </div>
    </>
  );
}
