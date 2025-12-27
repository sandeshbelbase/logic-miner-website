       


import Image from "next/image";
import styles from "./page.module.css";
import ProjectCard from "./components/ProjectCard";
import ServiceCard from "./components/ServiceCard";

// This page uses SSR by default in the app directory (Next.js 13+)
// Simulate server-side data fetching
export default async function Home() {


  return (
    <div className={styles.container}>
      <main>
        {/* Home Section */}
        <section id="home" className="mb-16 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="text-center p-8 bg-white rounded shadow">
              <h1 className="text-4xl font-bold mb-4">Welcome to Logic Miners</h1>
              <p className="text-gray-600 mb-6">Mining Smarters Solutions.</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/Images/homeImage.jpg" alt="Team working" className="rounded-xl shadow-lg w-full max-w-md h-auto object-cover" />
          </div>
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
            <ServiceCard
              image="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1000"
              title="Website Development"
              description="Responsive websites, performance optimised, SEO-ready, and accessible."
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000"
              title="Custom Software"
              description="Custom applications, APIs, integrations and scalable backend systems."
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1000"
              title="Social Media & Marketing"
              description="Content strategy, production, campaign management and growth tracking."
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000"
              title="Scheduling & Automation"
              description="In-house scheduling systems, workflow automation, and calendar integrations."
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1526322725553-7f8df5a0b9e6?w=1000"
              title="Logos & Branding"
              description="Brand strategy, identity systems, and design assets for launch."
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1559027615-ce3bfe09f565?w=1000"
              title="UX / UI Design"
              description="User-centred design, prototypes, user testing, and design systems."
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16 p-8 bg-white rounded shadow">
          <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
          <p className="mb-8 text-gray-600">Explore some of the projects completed by Logic Miners.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ProjectCard
              image="https://images.unsplash.com/photo-1508385082359-fb0d3f0f7f0a?w=600"
              title="AI Mining Dashboard"
              description="A real-time dashboard for monitoring mining operations using AI and IoT sensors."
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
              title="Smart Scheduling App"
              description="Automated scheduling and resource allocation platform for mining teams."
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600"
              title="Data Analytics Portal"
              description="A portal for visualizing and analyzing mining data to optimize performance."
            />
          </div>
        </section>
         {/* Contact Section */}
        <section id="contact" className="mb-16 p-8 bg-white rounded shadow">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 mb-6">Reach out and we’ll get back in 1 business day.</p>
          <form className="max-w-xl mx-auto flex flex-col gap-4 bg-gray-50 p-6 rounded-lg shadow">
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
