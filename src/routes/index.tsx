import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Moon, Sun, Download, Mail, Menu, X, Github, Linkedin, Instagram,
  MessageCircle, Code2, BookOpen, Palette, Bot, ArrowRight, Send, Phone,
} from "lucide-react";
import profileImg from "@/assets/profile.jpeg";
import logoImg from "@/assets/logo.png";
import proj1 from "@/assets/proj_634.png";
import proj2 from "@/assets/proj_633.png";
import proj3 from "@/assets/proj_635.png";
import proj4 from "@/assets/proj_636.png";
import proj5 from "@/assets/proj_637.png";
export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Henry Pamela — Front-End Engineer" },
      { name: "description", content: "Portfolio of Henry Pamela, a front-end engineer building fast, user-friendly, scalable web apps." },
      { property: "og:title", content: "Henry Pamela — Front-End Engineer" },
      { property: "og:description", content: "Front-end engineer building user-friendly, reliable, scalable web apps." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const PHONE = "2348130428822";
const WHATSAPP = "https://api.whatsapp.com/send?phone=2348130428822";
const EMAIL = "uzlivinus@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/chinagorom-pamela-henry-5a9300380";
const GITHUB = "https://github.com/p-github-coder";
const INSTAGRAM = "https://www.instagram.com/pamzy_ella/";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefers = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-background text-foreground animate-fade-in">
      <Nav dark={dark} toggleTheme={toggleTheme} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Loader() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background">
      <div className="relative grid place-items-center">
        <span className="absolute h-24 w-24 rounded-full border-2 border-primary/40 animate-pulse-ring" />
        <span className="absolute h-24 w-24 rounded-full border-2 border-primary/20 animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
        <div className="relative h-16 w-16 rounded-2xl bg-primary/10 grid place-items-center animate-spin-slow">
          <span className="font-display text-3xl font-bold text-primary">P</span>
        </div>
      </div>
      <p className="mt-8 font-display text-sm tracking-[0.3em] text-muted-foreground uppercase">Loading Portfolio</p>
    </div>
  );
}

function Nav({ dark, toggleTheme, menuOpen, setMenuOpen }: {
  dark: boolean; toggleTheme: () => void; menuOpen: boolean; setMenuOpen: (v: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src={logoImg} alt="Pamela Henry logo" className="h-9 w-9 rounded-lg object-cover" />
          <span className="font-display text-lg font-bold">Pamela<span className="text-primary">.</span></span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map(n => (
            <a key={n.href} href={n.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface transition-colors hover:bg-primary/10 hover:text-primary">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden">
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col p-4">
            {NAV.map(n => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium hover:bg-primary/10 hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        {/* Left: profile */}
        <div className="order-2 flex justify-center lg:order-1">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative rounded-full p-2 animate-float" style={{ background: "var(--gradient-primary)" }}>
              <div className="rounded-full bg-background p-2">
                <img src={profileImg} alt="Henry Pamela" className="h-64 w-64 rounded-full object-cover sm:h-80 sm:w-80" />
              </div>
            </div>
            {/* floating stat cards */}
            <StatCard className="absolute -left-4 top-8 sm:-left-10" value="3+" label="Years Experience" delay="0s" />
            <StatCard className="absolute -right-4 top-1/2 sm:-right-10" value="98%" label="Client Satisfaction" delay="0.4s" />
            <StatCard className="absolute -bottom-2 left-1/2 -translate-x-1/2" value="25+" label="Projects Completed" delay="0.8s" />
          </div>
        </div>

        {/* Right: intro */}
        <div className="order-1 lg:order-2">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for freelance
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Hello, I'm <span className="text-primary">Henry Pamela</span>
          </h1>
          <p className="mt-3 text-xl font-medium text-muted-foreground sm:text-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A Front-End Engineer
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground animate-fade-up" style={{ animationDelay: "0.3s" }}>
            I am a web developer passionate about building user-friendly, reliable, and scalable web applications with modern frontend technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5">
              Hire Me <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/resume.pdf" download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, className = "", delay = "0s" }: { value: string; label: string; className?: string; delay?: string }) {
  return (
    <div className={`animate-float rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur transition-transform hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] ${className}`}
      style={{ animationDelay: delay }}>
      <div className="font-display text-2xl font-bold text-primary">{value}</div>
      <div className="text-xs text-muted-foreground whitespace-nowrap">{label}</div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

const SKILLS = [
  { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
];

function Skills() {
  return (
    <section id="skills" className="bg-surface/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Toolkit" title="Skills & Technologies" subtitle="Core stack I use to craft delightful frontend experiences." />
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {SKILLS.map(s => (
            <div key={s.name}
              className="group rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]">
              <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-2xl bg-primary/10 transition-transform group-hover:scale-110">
                <img src={s.src} alt={s.name} className="h-12 w-12" />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  { title: "Smart Conference Room Reservation", desc: "A simple website that helps users reserve meeting rooms, check real-time availability, and manage office bookings efficiently.", tech: "HTML, CSS, JavaScript", link: "https://p-github-coder.github.io/OFFICE_RESERVATION/", img: proj1 },
  { title: "Ticket Generator", desc: "An application for generating conference tickets.", tech: "HTML, CSS, JavaScript", link: "https://p-github-coder.github.io/CONFERENCE_TICKET/", img: proj2 },
  { title: "Logistico", desc: "A cargo transportation web application.", tech: "HTML, CSS", link: "https://p-github-coder.github.io/LABCLASS2/", img: proj3 },
  { title: "Consula", desc: "A business consulting agency website.", tech: "HTML, CSS", link: "https://p-github-coder.github.io/LABCLASS1/", img: proj4 },
  { title: "HireHub", desc: "A job search web application.", tech: "HTML, CSS", link: "https://p-github-coder.github.io/WEEKENDASSIGNMENT/", img: proj5 },
];

function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Portfolio" title="Featured Projects" subtitle="A selection of recent work." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <article key={i}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]">
              <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                <img src={p.img} alt={p.title} loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <p className="mt-2 text-xs font-medium text-primary/80">{p.tech}</p>
                <a href={p.link} target="_blank" rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                  View Live Demo <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: Code2, title: "Web Development", desc: "Responsive, performant websites and web apps built with modern frontend stacks." },
  { icon: BookOpen, title: "Amazon Kindle Publishing", desc: "Publishing services from formatting to launch on Amazon Kindle." },
  { icon: Palette, title: "Graphic Designing", desc: "Clean visual assets — logos, social graphics, and brand elements." },
  { icon: Bot, title: "AI Automation", desc: "Automate repetitive workflows with AI-powered tools and integrations." },
];

function Services() {
  return (
    <section id="services" className="bg-surface/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What I Offer" title="Services" subtitle="Solutions tailored for modern brands and creators." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(s => (
            <div key={s.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      `Full Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Get in touch" title="Let's Work Together" subtitle="Send a message and I'll get back within 24 hours." />
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <ContactItem icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactItem icon={Phone} label="Phone" value="08130428822" href={`tel:+2348130428822`} />
            <ContactItem icon={MessageCircle} label="WhatsApp" value="Chat with me" href={WHATSAPP} />
          </div>
          <form onSubmit={submit} className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full Name</label>
              <input required value={name} onChange={e => setName(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
              <input required type="email" value={email} onChange={e => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea required rows={4} placeholder="Type your message here" value={message} onChange={e => setMessage(e.target.value)}
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <button type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5">
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/50">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <img src={logoImg} alt="logo" className="h-9 w-9 rounded-lg object-cover" />
              <span className="font-display text-lg font-bold">Pamela<span className="text-primary">.</span></span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Front-end engineer building user-friendly, reliable, scalable web apps.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Navigate</h4>
            <ul className="space-y-2">
              {NAV.map(n => (
                <li key={n.href}><a href={n.href} className="text-sm hover:text-primary transition-colors">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Connect</h4>
            <div className="flex gap-2">
              <SocialIcon href={GITHUB} icon={Github} label="GitHub" />
              <SocialIcon href={LINKEDIN} icon={Linkedin} label="LinkedIn" />
              <SocialIcon href={WHATSAPP} icon={MessageCircle} label="WhatsApp" />
              <SocialIcon href={INSTAGRAM} icon={Instagram} label="Instagram" />
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Henry Pamela. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon: Icon, label }: { href: string; icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground">
      <Icon className="h-4 w-4" />
    </a>
  );
}
