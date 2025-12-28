       


import Image from "next/image";
import styles from "./page.module.css";
import ProjectCard from "./components/ProjectCard";
import ServiceCard from "./components/ServiceCard";
import servicesData from "./data/services.json";
import projectsData from "./data/projects.json";

// This page uses SSR by default in the app directory (Next.js 13+)
// Simulate server-side data fetching
export default async function Home() {


  return (
    <div className={styles.container}>
      <main>
        {/* Home Section */}
        <section id="home" className="mb-16 flex flex-col md:flex-row items-center gap-8 animate-fade-in-up">
          <div className="flex-1 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <div className="text-center p-8 bg-white rounded shadow animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <h1 className="text-4xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>Welcome to Logic Miners</h1>
              <p className="text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>Mining Smarters Solutions.</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <video src="/Images/homepageVideo.mp4" controls autoPlay loop muted className="rounded-xl shadow-lg w-full max-w-md h-80 object-cover" />          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16 p-8 bg-white rounded shadow">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4 text-gray-700">Logic Miners is a forward-thinking technology company specializing in digital solutions for the mining industry. Our mission is to empower mining operations with smart software, automation, and data analytics, driving efficiency and innovation. We combine deep industry expertise with cutting-edge engineering to deliver reliable, scalable, and user-friendly products that help our clients thrive in a rapidly evolving landscape.</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Custom software and web development for mining businesses</li>
            <li>Automation tools to streamline operations and scheduling</li>
            <li>Data analytics portals for actionable insights</li>
            <li>Branding, design, and digital marketing services</li>
            <li>Dedicated support and partnership for long-term success</li>
          </ul>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-16 p-8 bg-white rounded shadow">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="mb-8 text-gray-600">Here are the services we offer at Logic Miners.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servicesData.map((service, idx) => (
              <ServiceCard
                key={idx}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16 p-8 bg-white rounded shadow">
          <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
          <p className="mb-8 text-gray-600">Explore some of the projects completed by Logic Miners.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projectsData.map((project, idx) => (
              <ProjectCard
                key={idx}
                image={project.image}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </section>
         {/* Contact Section */}
        <section id="contact" className="mb-16 p-8 bg-white rounded shadow">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 mb-6">Reach out and we’ll get back in 1 business day.</p>
          <form action="https://formspree.io/f/xpqzlqyb" method="POST" className="max-w-xl mx-auto flex flex-col gap-4 bg-gray-50 p-6 rounded-lg shadow">
            <input type="text" name="name" placeholder="Your name" required className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="email" name="email" placeholder="Email address" required className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
            <textarea name="message" placeholder="Your message" required className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px] resize-vertical" />
            <button type="submit" className="bg-primary text-white font-bold py-3 rounded hover:bg-primary/90 transition">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  );
}
