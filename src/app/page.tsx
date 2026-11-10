import Image from "next/image";


type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string; 
};
const fullStackProjects: Project[] = [
  {
  title: "Patra Store (Grocery E-Commerce)",
  description: "A complete e-commerce platform with product management, shopping cart, customer checkout, orders tracking, and an admin dashboard.",
  tech: ["Next.js", "React","Supabase","HTML5 / CSS3","GitHub","vercel","React Context API","TypeScript", "Tailwind CSS"],
  github: "https://github.com/swadip0007/Patra-Store-",
  demo: "https://patra-store.vercel.app/", 
  image: "/projects/patra-store.png", 
},
  {
    title: "Blood Bank Management",
    description:
      "A healthcare management system for blood donors, hospitals, appointment scheduling, blood inventory tracking, and urgent requests.",
    tech: ["Next.js", "React","Supabase","HTML5","GitHub","vercel","TypeScript", "Tailwind CSS"],
    github: "https://github.com/swadip0007/blood-bank-management",
    demo: "https://swadip0007-blood-bank-management.vercel.app/",
     image: "/projects/blood-bank.png", 
  },

  {
    title: "Invoice Generator",
    description:
      "A practical web application for generating, calculating taxes and discounts, and exporting clean customizable invoices.",
    tech: ["Next.js", "React","Supabase","HTML5","GitHub","vercel","TypeScript", "Tailwind CSS"],
    github: "https://github.com/swadip0007/invoice-generator-",
    demo: "https://invoice-generator-flax-five.vercel.app/",
     image: "/projects/invoice-Gen.png", 
  },
];

const webProjects: Project[] = [
  {
    title: "Taste Happiness",
    description:
      "A responsive restaurant and food website featuring interactive ordering menus, hero showcases, and mobile-first layouts.",
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    github: "https://github.com/swadip0007/project-1-bootstrap",
    demo: "https://swadip0007.github.io/project-1-bootstrap/"
  },
  {
    title: "Light Up",
    description:
      "A creative web interface converted from Figma design, demonstrating precision styling, animations, and responsive components.",
    tech: ["HTML5", "CSS3", "JavaScript", "Figma"],
    github: "https://github.com/swadip0007/light-up-Figma",
     demo: "https://swadip0007.github.io/light-up-Figma/"
  },
  {
    title: "Gym & Fitness Portal",
    description:
      "A modern fitness website featuring workout regimes, personal trainer schedules, membership packages, and contact forms.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/swadip0007/gym-fitness",
    demo: "https://swadip0007.github.io/gym-fitness/"
   
  },
  {
    title: "CRYPTOX-PROJECT",
    description:
      "A modern fitness website featuring workout regimes, personal trainer schedules, membership packages, and contact forms.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/swadip0007/CRYPTOX-PROJECT",
     demo: "https://swadip0007.github.io/CRYPTOX-PROJECT/"
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
       <article className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:bg-white/[0.06] hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.15)]">
      <div>
        {/* 📸 Project Screenshot */}
        {project.image && (
          <div className="mb-5 overflow-hidden rounded-xl border border-white/10 bg-black/40">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-2xl font-bold text-cyan-400">&lt;/&gt;</span>
          <span className="rounded-md border border-white/10 bg-white/[0.05] px-2 py-0.5 font-mono text-[11px] font-medium tracking-wider text-gray-400">
            PROJECT
          </span>
        </div>
        <h3 className="mb-3 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-cyan-300">
          {project.title}
        </h3>
        <p className="mb-6 leading-relaxed text-gray-400">
          {project.description}
        </p>
      </div>

      <div>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-200"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 border-t border-white/10 pt-4 text-sm font-medium">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="inline-flex items-center gap-1.5 text-gray-200 transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            GitHub
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">↗</span>
          </a>

          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              className="inline-flex items-center gap-1.5 text-cyan-400 transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Live Demo
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectSection({
  title,
  subtitle,
  projects,
  id,
  tag,
}: {
  title: string;
  subtitle: string;
  projects: Project[];
  id: string;
  tag?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-20">
      <div className="mb-10">
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Portfolio // {tag || id}
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>

        <p className="mt-3 max-w-2xl text-base text-gray-400">{subtitle}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default async function Home() {
  'use cache';

  return (
    <main className="min-h-screen bg-[#080b12] text-white selection:bg-cyan-400/20 selection:text-cyan-300">
      {/* Sticky Header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#080b12]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#"
            className="text-lg font-bold tracking-tight transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Swadip<span className="text-cyan-400">.dev</span>
          </a>

          <div className="flex items-center gap-4 text-sm font-medium text-gray-300 sm:gap-6">
            <a href="#about" className="transition-colors hover:text-cyan-300">
              About
            </a>
            <a href="#fullstack" className="transition-colors hover:text-cyan-300">
              Full Stack
            </a>
            <a href="#web-pages" className="transition-colors hover:text-cyan-300">
              Web Pages
            </a>
            <a href="#contact" className="transition-colors hover:text-cyan-300">
              Contact
            </a>
            <a
              href="https://github.com/swadip0007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Swadip's GitHub Profile"
              className="hidden rounded-lg border border-white/15 bg-white/[0.05] px-3 py-1.5 text-xs text-gray-200 transition-all hover:border-cyan-400 hover:text-cyan-300 sm:inline-flex sm:items-center sm:gap-1.5"
            >
              GitHub ↗
            </a>
          </div>
        </nav>
      </header>

    
{/* Hero Section */}
<section className="relative mx-auto flex min-h-[85vh] max-w-6xl items-center px-5 py-16 sm:px-8 sm:py-20">

  {/* Background Glow */}
  <div className="pointer-events-none absolute right-0 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
  <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

  <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1fr)_380px]">

    {/* LEFT CONTENT */}
    <div className="max-w-3xl">

      {/* Availability Badge */}
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300">
        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
        Available for opportunities
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
        Hi, I&apos;m{" "}
        <span className="text-white">Swadip</span>.
        <br />
        I build modern{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
          web experiences.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
        Frontend developer specializing in building responsive,
        production-ready web applications with Next.js, React,
        TypeScript, and Supabase.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap items-center gap-4">

        <a
          href="#fullstack"
          className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-black transition-all hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
        >
          Explore Projects ↓
        </a>

        <a
          href="https://github.com/swadip0007"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
        >
          GitHub Profile ↗
        </a>

        <a
          href="#contact"
          className="px-2 py-3 text-sm font-semibold text-gray-300 transition-colors hover:text-cyan-300"
        >
          Get in Touch →
        </a>

      </div>

      {/* Technologies */}
      <div className="mt-12">

        <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
          Technologies I Work With
        </p>

        <div className="flex flex-wrap gap-3">

          {[
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Advanced JavaScript",
            "React.js",
            "Next.js",
            "Supabase",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-xl border border-cyan-400/25 bg-cyan-400/[0.08] px-4 py-2.5 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
            >
              {tech}
            </span>
          ))}

        </div>
      </div>

    </div>

    {/* RIGHT PROFILE IMAGE */}
    <div className="relative mx-auto w-full max-w-[340px] lg:max-w-[380px]">

      {/* Outer Glow */}
      <div className="absolute -inset-4 rounded-[35px] bg-gradient-to-br from-cyan-400/30 via-sky-500/10 to-blue-600/30 opacity-80 blur-2xl" />

      {/* Image Card */}
      <div className="group relative aspect-[4/5] overflow-hidden rounded-[30px] border border-cyan-300/30 bg-[#0c1727] shadow-[0_20px_70px_-25px_rgba(34,211,238,0.35)]">

        <Image
          src="/images/swadip-profile.png"
          alt="Swadip Patra - Developer"
          fill
          priority
          sizes="(max-width: 768px) 85vw, 380px"
          className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
        />

        {/* Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/90 via-transparent to-transparent" />

        {/* Profile Information */}
        <div className="absolute bottom-0 left-0 z-10 w-full p-6">

          <p className="text-2xl font-bold tracking-tight text-white">
            Swadip Patra
          </p>

          <p className="mt-2 text-sm font-medium text-cyan-300">
            Frontend  Developer
          </p>

          <div className="mt-4 h-1 w-14 rounded-full bg-cyan-400" />

        </div>

      </div>

      {/* Image Caption */}
      <p className="mt-6 text-center font-mono text-[11px] tracking-[0.2em] text-cyan-300/80">
        DEVELOPER  • CREATIVE  • EXPLORER    </p>

    </div>

  </div>
</section>

      {/* Main Content Area */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* About Section */}
        <section id="about" className="scroll-mt-24 border-t border-white/10 py-16 md:py-20">
          
<div className="relative">
  <p className="mb-3 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
    <span className="h-px w-8 bg-cyan-400" />
    About Me
    <span className="text-gray-500">/ 01</span>
  </p>

  <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
    Crafting Digital
    <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
      Experiences That
    </span>
    Inspire & Engage.
  </h2>

  <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
    I'm a Frontend Developer passionate about transforming creative ideas
    into engaging digital experiences. I specialize in building sleek,
    responsive interfaces, bringing designs to life with smooth interactions,
    thoughtful details, and clean, maintainable code.
  </p>

  <div className="mt-6 flex flex-wrap gap-3">
    {["Frontend Development", "Responsive Design", "API Integration"].map((item) => (
      <span
        key={item}
        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400"
      >
        {item}
      </span>
    ))}
  </div>
</div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-3 font-mono text-xl text-cyan-400">01</div>
              <h3 className="text-base font-semibold text-white">Full Stack Engineering</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                End-to-end web apps with Next.js, TypeScript, authentication, APIs, and Supabase / SQL databases.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-3 font-mono text-xl text-cyan-400">02</div>
              <h3 className="text-base font-semibold text-white">Modern Frontend & UI</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Translating Figma designs into accessible, responsive websites with Tailwind CSS, React, and Bootstrap.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-3 font-mono text-xl text-cyan-400">03</div>
              <h3 className="text-base font-semibold text-white">Performance & Standards</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Strict type safety with TypeScript, fast page loads, SEO optimization, and clean version control.
              </p>
            </div>
          </div>
        </section>

        {/* Full Stack Projects */}
        <ProjectSection
          id="fullstack"
          tag="Full Stack"
          title="Full Stack Projects"
          subtitle="Full-fledged applications with database management, state control, and modern architectures."
          projects={fullStackProjects}
        />

        {/* Web Pages (HTML Pages) */}
        <ProjectSection
          id="web-pages"
          tag="Web Pages"
          title="Web Pages (HTML Pages)"
          subtitle="Web interfaces and creative designs demonstrating UI precision, clean HTML structure, and styling."
          projects={webProjects}
        />

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 border-t border-white/10 py-20">
          <div className="max-w-2xl">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Get In Touch
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Have a project or opportunity in mind?
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
              I am open to web development opportunities, freelance collaborations, and project discussions.
              Feel free to reach out via email or connect with me on GitHub.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:swadippatra@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                Send Email ↗
              </a>

              <a
                href="https://github.com/swadip0007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-400 hover:text-cyan-300"
              >
                Connect on GitHub ↗
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-gray-400 sm:flex-row sm:text-sm">
          <p>© {new Date().getFullYear()} Swadip Patra. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-cyan-300">
              Back to top ↑
            </a>
            <span>•</span>
            <a
              href="https://github.com/swadip0007"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
