import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Zap,
  Code2,
  Layers,
  Rocket,
  Palette,
  Database,
  Cpu,
  Globe,
  Download,
  ArrowRight,
} from "lucide-react";

import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";

import heroPortrait from "@/assets/hero-portrait.jpg";
import orbImg from "@/assets/orb-1.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "Product Builder",
  "Founder @ Vintvate",
  "Interface Craftsman",
];

const STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "TanStack",
  "PostgreSQL",
  "Tailwind",
  "GSAP",
  "Framer Motion",
  "AWS",
  "Supabase",
  "Prisma",
  "tRPC",
  "Docker",
];

const PROJECTS = [
  {
    id: "01",
    year: "2026",
    title: "Vintvate Studio",
    tag: "Web Studio · Founding",
    desc: "A modern web studio building fast, conversion-focused websites and full-stack products for startups, creators, and growing businesses.",
    stack: ["Next.js", "TypeScript", "Postgres", "Motion"],
    img: project1,
    href: "https://www.linkedin.com/company/vintvate",
    accent: "from-emerald-glow/40 to-cyan-glow/20",
  },
  {
    id: "02",
    year: "2025",
    title: "Barket — Community Layer",
    tag: "Marketplace · Contribution",
    desc: "Contributing engineering & community efforts to Barket, an internet marketplace platform based in India. Focused on velocity and reliability.",
    stack: ["React", "Node", "REST", "AWS"],
    img: project2,
    href: "https://www.linkedin.com/company/bark-et",
    accent: "from-amber-glow/40 to-destructive/20",
  },
  {
    id: "03",
    year: "2025",
    title: "Product Engineering Sandbox",
    tag: "Full-stack Playground",
    desc: "A rotating lab of shipped experiments — SaaS starters, AI interfaces, and micro-tools built to sharpen product intuition and engineering craft.",
    stack: ["TypeScript", "Supabase", "AI SDK", "Edge"],
    img: project3,
    href: "#",
    accent: "from-violet-glow/40 to-accent/20",
  },
];

const EXPERIENCE = [
  {
    when: "2026 — Now",
    role: "Founder & Engineer",
    org: "Vintvate",
    where: "Bhopal, India",
    text: "Building Vintvate — a studio for startups and creators. Product thinking, clean engineering, and outcomes over output.",
  },
  {
    when: "2026 — Now",
    role: "Community Volunteer",
    org: "Barket",
    where: "Bhopal, India",
    text: "Contributing to Barket, an internet marketplace platform. Helping ship features and support the community around it.",
  },
  {
    when: "2024 — 2025",
    role: "Independent Developer",
    org: "Freelance",
    where: "Remote",
    text: "Shipped MVPs, landing pages and full-stack products for early-stage founders. Learned the craft by shipping — a lot.",
  },
];

const SERVICES = [
  { icon: Rocket, title: "MVPs, fast.", text: "Zero-to-one products, wired end-to-end in weeks — not quarters." },
  { icon: Layers, title: "Full-stack builds.", text: "Type-safe React/Next.js frontends on scalable Node & Postgres." },
  { icon: Palette, title: "Interfaces that sell.", text: "Editorial, motion-forward marketing sites that convert." },
  { icon: Cpu, title: "AI features.", text: "LLM interfaces, agents and RAG plumbing embedded in real products." },
];

function Portfolio() {
  return (
    <div className="dark relative min-h-screen overflow-x-clip bg-background text-foreground">
      <SmoothScroll />
      <CustomCursor />
      <BackgroundFX />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- Background FX ---------- */
function BackgroundFX() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: "url('/grain-overlay.svg')",
          backgroundSize: "200px 200px",
        }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(ellipse_at_top,transparent_60%,var(--ink)_100%)]" />
    </>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const items = [
    ["Work", "#work"],
    ["About", "#about"],
    ["Stack", "#stack"],
    ["Services", "#services"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-6"
      }`}
    >
      <nav
        className={`glass flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-500 ${
          scrolled ? "shadow-elevated" : ""
        }`}
      >
        <a
          href="#top"
          data-cursor="Home"
          className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-display font-semibold">Rajat.</span>
        </a>
        <span className="mx-1 hidden h-4 w-px bg-white/10 md:block" />
        <ul className="hidden items-center md:flex">
          {items.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                data-cursor="Go"
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          data-cursor="Let's talk"
          className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
        >
          Hire me <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </nav>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tx = useTransform(sx, (v) => v * 20);
  const ty = useTransform(sy, (v) => v * 20);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden pt-32"
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      {/* floating orb */}
      <motion.img
        src={orbImg}
        alt=""
        aria-hidden
        style={{ x: tx, y: ty }}
        className="animate-float pointer-events-none absolute -right-40 top-20 h-[560px] w-[560px] rounded-full opacity-70 blur-[2px] md:right-[-6rem]"
      />
      {/* portrait */}
      <motion.div
        style={{ x: useTransform(sx, (v) => v * -14), y: useTransform(sy, (v) => v * -14) }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 md:block"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/40 to-background" />
        <img
          src={heroPortrait}
          alt="Rajat Jhade portrait"
          width={1024}
          height={1280}
          className="h-full w-full object-cover object-center opacity-70 mix-blend-screen"
        />
      </motion.div>

      <div className="relative mx-auto w-full max-w-[110rem] px-6 pb-16 md:px-12 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="inline-flex h-2 w-2 animate-pulse-glow rounded-full bg-primary" />
          Available for select projects · 2026
        </motion.div>

        <h1 className="font-display text-[clamp(3.2rem,11vw,12rem)] font-semibold leading-[0.86] tracking-tighter">
          <RevealLine delay={0.1}>
            <span className="text-gradient">Rajat</span>
          </RevealLine>
          <RevealLine delay={0.25}>
            <span className="text-foreground">Jhade.</span>
          </RevealLine>
        </h1>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="max-w-xl text-lg text-muted-foreground md:text-xl"
          >
            I'm a{" "}
            <span className="relative inline-block h-[1.2em] w-[13ch] overflow-hidden align-bottom text-foreground">
              {ROLES.map((r, idx) => (
                <span
                  key={r}
                  className="absolute inset-0 transition-all duration-700"
                  style={{
                    transform: `translateY(${(idx - i) * 100}%)`,
                    opacity: idx === i ? 1 : 0,
                  }}
                >
                  {r}
                </span>
              ))}
            </span>
            {" "}building Vintvate from Bhopal — shipping fast, conversion-focused
            products and interfaces that feel expensive on purpose.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#work" primary data-cursor="See work">
              See selected work <ArrowRight className="ml-1 h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#contact" data-cursor="Contact">
              <Download className="mr-1 h-4 w-4" /> Resume
            </MagneticButton>
          </motion.div>
        </div>

        <div className="mt-14 flex items-end justify-between gap-6 border-t border-white/5 pt-6">
          <div className="grid grid-cols-3 gap-8 text-sm md:gap-16">
            <Stat k="1+" v="Years shipping" />
            <Stat k="15+" v="Products built" />
            <Stat k="100%" v="Async-ready" />
          </div>
          <div className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex">
            <span>Scroll</span>
            <span className="relative flex h-8 w-4 items-start justify-center rounded-full border border-white/20 p-1">
              <span className="h-1.5 w-0.5 animate-pulse-glow rounded-full bg-white" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {k}
      </div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{v}</div>
    </div>
  );
}

function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ---------- Magnetic button ---------- */
function MagneticButton({
  children,
  href,
  primary,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
  [k: string]: unknown;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    };
    const onLeave = () => (el.style.transform = "translate(0,0)");
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return (
    <a
      ref={ref}
      href={href}
      {...rest}
      className={`inline-flex items-center rounded-full px-5 py-3 text-sm font-medium transition-[background,box-shadow] duration-300 ${
        primary
          ? "bg-primary text-primary-foreground hover:shadow-[0_10px_40px_-10px_var(--primary)]"
          : "glass text-foreground hover:bg-white/10"
      }`}
    >
      {children}
    </a>
  );
}

/* ---------- Marquee ---------- */
function Marquee() {
  const words = ["Product Engineer", "Interface Craft", "Founder Mindset", "Ship Fast", "Type-Safe", "Motion-First"];
  const line = [...words, ...words];
  return (
    <section aria-hidden className="relative border-y border-white/5 bg-gradient-to-b from-transparent to-white/[0.02] py-8">
      <div className="flex animate-marquee whitespace-nowrap">
        {line.map((w, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8 font-display text-4xl font-medium text-muted-foreground md:text-6xl">
            {w}
            <Sparkles className="h-6 w-6 text-primary md:h-8 md:w-8" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineer by craft, founder by instinct.">
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            <p>
              I'm <span className="text-foreground">Rajat Jhade</span> — a full-stack developer
              based in Bhopal, currently building <span className="text-foreground">Vintvate</span>,
              a studio helping startups and creators turn ideas into scalable digital products.
            </p>
            <p>
              My approach blends product thinking, clean engineering, and pragmatic business
              outcomes — not just code delivery. I care about interfaces that feel considered,
              backends that don't wake you up at 3AM, and MVPs that ship in weeks.
            </p>
            <p className="text-foreground">
              I move fast. I care about the details. I ship.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass relative overflow-hidden rounded-3xl p-8">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/30 blur-3xl" />
            <ul className="relative space-y-5">
              {[
                ["Based in", "Bhopal, MP · India"],
                ["Focus", "Product engineering · Web platforms"],
                ["Currently", "Building Vintvate"],
                ["Open to", "Founding roles · High-agency teams"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline justify-between gap-6 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{k}</span>
                  <span className="text-right font-display text-lg text-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- Experience ---------- */
function Experience() {
  return (
    <Section eyebrow="Trajectory" title="A short, honest timeline.">
      <div className="relative">
        <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-primary/40 via-accent/30 to-transparent md:left-1/2" />
        <div className="space-y-14">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className={`relative grid gap-6 md:grid-cols-2 md:gap-14 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="pl-10 md:pl-0 md:text-right md:pr-14">
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{e.when}</div>
                  <div className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    {e.role}
                  </div>
                  <div className="mt-1 text-primary">{e.org}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{e.where}</div>
                </div>
                <div className="pl-10 md:pl-14">
                  <p className="text-muted-foreground md:text-lg">{e.text}</p>
                </div>
                <span className="absolute left-1 top-2 h-5 w-5 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Skills ---------- */
function Skills() {
  return (
    <Section id="stack" eyebrow="Stack" title="Tools I reach for, daily.">
      <div className="grid gap-3 md:grid-cols-6">
        {STACK.map((s, i) => (
          <Reveal key={s} delay={i * 0.03}>
            <div
              data-cursor={s}
              className="glass group relative flex items-center justify-center overflow-hidden rounded-2xl px-4 py-6 text-center text-sm text-muted-foreground transition hover:text-foreground"
            >
              <span className="absolute inset-0 -translate-y-full bg-gradient-to-br from-primary/20 to-accent/10 transition-transform duration-500 group-hover:translate-y-0" />
              <span className="relative font-mono">{s}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {[
          { icon: Code2, title: "Frontend", text: "React, Next.js, TanStack Start, Tailwind, GSAP, Motion." },
          { icon: Database, title: "Backend", text: "Node, tRPC, Postgres, Prisma, Supabase, Edge functions." },
          { icon: Globe, title: "Craft", text: "Type-safety, DX, motion design, performance budgets, SEO." },
        ].map(({ icon: Icon, title, text }) => (
          <Reveal key={title}>
            <div className="glass rounded-3xl p-8">
              <Icon className="h-6 w-6 text-primary" />
              <div className="mt-6 font-display text-2xl font-semibold">{title}</div>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Projects ---------- */
function Projects() {
  return (
    <Section id="work" eyebrow="Selected work" title="Things I've shipped." wide>
      <div className="space-y-24">
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.id} p={p} idx={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectRow({ p, idx }: { p: (typeof PROJECTS)[number]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [idx % 2 ? 2 : -2, idx % 2 ? -2 : 2]);
  return (
    <div
      ref={ref}
      className={`grid gap-10 md:grid-cols-2 md:items-center md:gap-16 ${
        idx % 2 ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Reveal>
        <a
          href={p.href}
          target="_blank"
          rel="noreferrer"
          data-cursor="View"
          className="group relative block"
        >
          <motion.div
            style={{ y, rotate }}
            className="relative overflow-hidden rounded-3xl border border-white/10 shadow-elevated"
          >
            <div className={`absolute inset-0 z-10 bg-gradient-to-tr ${p.accent} opacity-70 mix-blend-overlay`} />
            <img
              src={p.img}
              alt={p.title}
              loading="lazy"
              width={1280}
              height={800}
              className="w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between p-5 text-xs uppercase tracking-widest text-white/90">
              <span className="font-mono">{p.tag}</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </motion.div>
        </a>
      </Reveal>
      <Reveal delay={0.1}>
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span>{p.id}</span>
            <span className="h-px w-8 bg-white/20" />
            <span>{p.year}</span>
          </div>
          <h3 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {p.title}
          </h3>
          <p className="mt-5 max-w-lg text-muted-foreground md:text-lg">{p.desc}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/* ---------- Services ---------- */
function Services() {
  return (
    <Section id="services" eyebrow="How I help" title="Ways we can work together.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 0.06}>
            <div
              data-cursor={title}
              className="glass group relative h-full overflow-hidden rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <Icon className="h-6 w-6 text-primary" />
              <div className="mt-8 font-display text-2xl font-semibold leading-tight">{title}</div>
              <p className="mt-3 text-sm text-muted-foreground">{text}</p>
              <ArrowUpRight className="mt-6 h-4 w-4 opacity-40 transition-transform duration-500 group-hover:translate-x-1 group-hover:opacity-100" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Philosophy ---------- */
function Philosophy() {
  return (
    <Section eyebrow="Philosophy" title="">
      <Reveal>
        <blockquote className="mx-auto max-w-5xl font-display text-4xl font-medium leading-[1.1] tracking-tight md:text-7xl">
          <span className="text-muted-foreground/50">"</span>
          Great software is <span className="text-gradient">felt</span> before it's understood.
          I build products people trust in the first three seconds.
          <span className="text-muted-foreground/50">"</span>
        </blockquote>
        <div className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="h-px w-10 bg-white/20" />
          Rajat Jhade
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-44">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70" style={{ background: "var(--gradient-hero)" }} />
      <div className="mx-auto max-w-[100rem] px-6 md:px-12">
        <Reveal>
          <div className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <Zap className="mr-2 inline h-3 w-3 text-primary" /> Let's build
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(3rem,12vw,12rem)] font-semibold leading-[0.86] tracking-tighter">
            <span className="text-gradient">Have an idea?</span>
            <br />
            <span>Let's ship it.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <Reveal delay={0.1}>
            <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
              I take on a small number of founder-led projects each quarter. If you're
              building something you care about, I'd love to hear about it.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <MagneticButton
                href="mailto:hello@vintvate.com"
                primary
                data-cursor="Email"
              >
                <Mail className="mr-2 h-4 w-4" /> hello@vintvate.com
              </MagneticButton>
              <MagneticButton
                href="https://linkedin.com/in/rajat-jhade-5b928730a"
                data-cursor="LinkedIn"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/5 pt-10 md:grid-cols-3">
          <ContactCard icon={MapPin} k="Based" v="Bhopal, MP · India" />
          <ContactCard icon={Sparkles} k="Availability" v="Booking Q2 · 2026" />
          <ContactCard icon={Rocket} k="Best for" v="MVPs, marketing sites, product engineering" />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, k, v }: { icon: typeof MapPin; k: string; v: string }) {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <Icon className="h-3 w-3 text-primary" /> {k}
      </div>
      <div className="mt-3 font-display text-lg text-foreground">{v}</div>
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-[100rem] flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground md:flex-row md:px-12">
        <div className="font-mono uppercase tracking-widest">© 2026 Rajat Jhade — Built with intent.</div>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/in/rajat-jhade-5b928730a" data-cursor="LinkedIn" className="hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" data-cursor="GitHub" className="hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href="mailto:hello@vintvate.com" data-cursor="Email" className="hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Section shell + Reveal ---------- */
function Section({
  id,
  eyebrow,
  title,
  children,
  wide,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section id={id} className="relative py-28 md:py-40">
      <div className={`mx-auto px-6 md:px-12 ${wide ? "max-w-[110rem]" : "max-w-[100rem]"}`}>
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              — {eyebrow}
            </div>
          </Reveal>
          {title && (
            <Reveal delay={0.05}>
              <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1] tracking-tight md:text-6xl">
                {title}
              </h2>
            </Reveal>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
