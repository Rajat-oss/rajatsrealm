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
} from "lucide-react";

import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";

import project1 from "@/assets/project-vintvate.png";
import project2 from "@/assets/project-stackhouse.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Route = createFileRoute("/")({
  component: Portfolio,
});

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
    href: "http://vintvate.vercel.app/",
    accent: "from-emerald-glow/40 to-cyan-glow/20",
  },
  {
    id: "02",
    year: "2025",
    title: "Stackhouse",
    tag: "Developer Network · Founding",
    desc: "Building Stackhouse, a curated community and career accelerator for serious developers and founders to connect, collaborate, and grow.",
    stack: ["React", "Node.js", "TailwindCSS", "Supabase"],
    img: project2,
    href: "https://www.stackhouse.social/",
    accent: "from-amber-glow/40 to-amber-glow/10",
  },
];

const SHIPPED_ITEMS = [
  {
    title: "Vintvate Studio",
    tag: "Web Studio",
    desc: "A modern web studio building fast, conversion-focused websites.",
    img: project1,
  },
  {
    title: "Stackhouse",
    tag: "Developer Network",
    desc: "A curated community and career accelerator for serious developers.",
    img: project2,
  },
  {
    title: "Nexus Dashboard",
    tag: "Internal Tool",
    desc: "A comprehensive analytics dashboard for managing user metrics.",
    img: project1,
  },
];

const EXPERIENCE = [
  {
    when: "Jul 2026 — Present",
    role: "Software Developer",
    org: "Cikka",
    where: "Remote",
    text: "Developing core product features across the frontend, backend, and infrastructure for Cikka's fintech platform.",
    tag: "Full-time",
    iconName: "Code2" as const,
  },
  {
    when: "Jan 2026 — Present",
    role: "Co-Founder",
    org: "Vintvate",
    where: "Bhopal, India",
    text: "Building Vintvate, a modern web studio creating scalable digital products and platforms.",
    tag: "Full-time",
    iconName: "Rocket" as const,
  },
  {
    when: "Sep 2025 — Present",
    role: "Community Member",
    org: "GDG Bhopal",
    where: "Bhopal, India",
    text: "Active participant in the Google Developers Group Bhopal, engaging with the local developer community.",
    tag: "Volunteering",
    iconName: "Globe" as const,
  },
  {
    when: "Dec 2025 — May 2026",
    role: "Full-stack Developer",
    org: "CodeWebX",
    where: "Remote",
    text: "Developed and maintained full-stack web applications, collaborating with the team to ship features.",
    tag: "Internship",
    iconName: "Layers" as const,
  },
  {
    when: "May 2025 — Jul 2025",
    role: "Full Stack Intern",
    org: "Creomind Innovations",
    where: "Remote",
    text: "Worked on full-stack development tasks, assisting in building and testing product features.",
    tag: "Internship",
    iconName: "Database" as const,
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
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Shipped />
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
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: "url('/grain-overlay.svg')",
          backgroundSize: "200px 200px",
        }}
      />
      {/* Centered radial gradient and top ellipse to frame the matte black UI and keep colors extremely subtle */}
      <div className="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(circle_at_center,transparent_30%,var(--background)_95%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(ellipse_at_top,transparent_50%,var(--ink)_100%)]" />
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
      className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 transition-all duration-500 ${scrolled ? "pt-3" : "pt-6"
        }`}
    >
      <nav
        className={`glass flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-500 ${scrolled ? "shadow-elevated" : ""
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
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for 3D tilt of the card
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Spring settings for physical responsiveness
  const springConfig = { stiffness: 100, damping: 20 };
  const rX = useSpring(rotateX, springConfig);
  const rY = useSpring(rotateY, springConfig);

  // Coordinates of the cursor inside the card for holographic reflection
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const smoothGlowX = useSpring(glowX, springConfig);
  const smoothGlowY = useSpring(glowY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    // Normalize mouse coordinates from -0.5 to 0.5
    const xVal = (e.clientX - rect.left) / rect.width - 0.5;
    const yVal = (e.clientY - rect.top) / rect.height - 0.5;

    // Convert to tilt degrees
    rotateX.set(-yVal * 12);
    rotateY.set(xVal * 12);

    // Relative coordinates for the lighting effects
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    // Return to default level values
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden py-24 [perspective:1000px]"
    >
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rX,
          rotateY: rY,
          transformStyle: "preserve-3d",
        }}
        className="group relative z-10 mx-auto w-full max-w-[52rem] min-h-[30rem] py-14 md:py-20 flex items-center justify-center select-none"
      >
        {/* The Glass Card (Back layer - absolute inset-0) */}
        <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-white/[0.01] backdrop-blur-2xl transition-shadow duration-500 group-hover:shadow-elevated pointer-events-none -z-10" />

        {/* Holographic light refraction following mouse */}
        <motion.div
          className="pointer-events-none absolute -inset-[1px] rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          style={{
            background: useTransform(
              [smoothGlowX, smoothGlowY],
              ([cx, cy]) => `radial-gradient(400px circle at ${cx}px ${cy}px, rgba(120,119,198,0.14), rgba(0,242,254,0.06), transparent 70%)`
            ),
          }}
        />

        {/* Micro-border light reflection following mouse */}
        <motion.div
          className="pointer-events-none absolute -inset-[1px] rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20 border border-white/20"
          style={{
            background: useTransform(
              [smoothGlowX, smoothGlowY],
              ([cx, cy]) => `radial-gradient(120px circle at ${cx}px ${cy}px, rgba(255,255,255,0.18) 0%, transparent 100%)`
            ),
          }}
        />

        {/* Content Container (Sits on top, not cropped by backdrop-blur overlay) */}
        <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center">



          {/* Introductory micro-label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transform: "translateZ(50px)" }}
            className="mb-3 text-[10px] md:text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground/60 select-none pointer-events-none"
          >
            who the fuck is
          </motion.div>

          {/* Typographical Header - Free to overflow on left and right */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transform: "translateZ(80px)" }}
            className="font-display text-[clamp(3.5rem,15vw,18rem)] font-extrabold leading-none tracking-tighter uppercase mb-6 whitespace-nowrap bg-gradient-to-b from-white via-white/85 to-white/10 bg-clip-text text-transparent filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)] select-none pointer-events-none z-20"
          >
            Rajat Jhade
          </motion.h1>

          {/* Subtitle / Details */}
          <p
            style={{ transform: "translateZ(30px)" }}
            className="max-w-md mx-auto text-sm md:text-base text-muted-foreground font-mono leading-relaxed z-10"
          >
            Founder & Product Builder @ <span className="text-foreground font-semibold">Vintvate</span>
            <br />
            Crafting conversion-focused products in Bhopal, India.
          </p>
        </div>
      </motion.div>
    </section>
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
      className={`inline-flex items-center rounded-full px-5 py-3 text-sm font-medium transition-[background,box-shadow] duration-300 ${primary
        ? "bg-primary text-primary-foreground hover:shadow-[0_10px_40px_-10px_var(--primary)]"
        : "glass text-foreground hover:bg-white/10"
        }`}
    >
      {children}
    </a>
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

/* ---------- Experience Helper & Redesign ---------- */
const getIconComponent = (name: string) => {
  switch (name) {
    case "Code2":
      return Code2;
    case "Layers":
      return Layers;
    case "Rocket":
      return Rocket;
    default:
      return Code2;
  }
};

function ExperienceCard({ e }: { e: typeof EXPERIENCE[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = getIconComponent(e.iconName);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 15 };
  const rX = useSpring(rotateX, springConfig);
  const rY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const xVal = (event.clientX - rect.left) / rect.width - 0.5;
    const yVal = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-yVal * 8); // subtle tilt
    rotateY.set(xVal * 8);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsHovered(false);
      }}
      style={{
        rotateX: rX,
        rotateY: rY,
        transformStyle: "preserve-3d",
      }}
      animate={{
        maxWidth: isHovered ? "860px" : "780px"
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 24
      }}
      className="timeline-card glass rounded-[2rem] p-6 md:p-8 shadow-2xl flex flex-col justify-between border border-white/5 bg-black backdrop-blur-xl group hover:border-white/10 transition-colors duration-500 select-none cursor-grab active:cursor-grabbing w-full mx-auto"
    >
      <div style={{ transform: "translateZ(30px)" }}>
        <div className="flex justify-between items-start mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60">{e.tag}</span>
          <div
            className="p-2.5 rounded-2xl bg-white/[0.02] border border-white/10 text-foreground group-hover:scale-110 transition-transform duration-500 shadow-inner"
            style={{
              boxShadow: `inset 0 0 12px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.15)`
            }}
          >
            <Icon className="w-5 h-5" />
          </div>
        </div>
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 uppercase tracking-tight leading-tight">{e.role}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{e.text}</p>
      </div>
      <div
        className="border-t border-white/5 pt-5 flex justify-between items-center text-xs font-mono text-muted-foreground"
        style={{ transform: "translateZ(20px)" }}
      >
        <span>{e.where}</span>
        <span className="text-muted-foreground font-semibold">{e.when}</span>
      </div>
    </motion.div>
  );
}

function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const yearsRef = useRef<HTMLDivElement>(null);
  const rolesRef = useRef<HTMLDivElement>(null);
  const orgsRef = useRef<HTMLDivElement>(null);

  // Color/Glow state for Canvas Blob interpolation
  const blobStateRef = useRef({
    r1: 255, g1: 255, b1: 255,    // white start
    r2: 150, g2: 150, b2: 150,  // gray start
    r3: 0, g3: 0, b3: 0,
    amplitude: 20,
    speed: 1.0,
  });

  // Canvas render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawBlob = (
      cx: number,
      cy: number,
      baseRadius: number,
      time: number,
      amplitude: number,
      speedMultiplier: number,
      pointsCount: number,
      scale: number,
      c1: string,
      c2: string
    ) => {
      ctx.beginPath();
      const angleStep = (2 * Math.PI) / pointsCount;
      const points = [];

      for (let i = 0; i < pointsCount; i++) {
        const angle = i * angleStep;
        const waveOffset =
          Math.sin(angle * 3 + time * speedMultiplier * 1.2) * amplitude +
          Math.cos(angle * 5 - time * speedMultiplier * 0.8) * (amplitude * 0.5) +
          Math.sin(angle * 7 + time * speedMultiplier * 1.5) * (amplitude * 0.3);

        const r = (baseRadius + waveOffset) * scale;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        points.push({ x, y });
      }

      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 0; i < points.length; i++) {
        const p0 = points[i];
        const p1 = points[(i + 1) % points.length];
        const xc = (p0.x + p1.x) / 2;
        const yc = (p0.y + p1.y) / 2;
        ctx.quadraticCurveTo(p0.x, p0.y, xc, yc);
      }
      ctx.closePath();

      const grad = ctx.createRadialGradient(cx, cy, baseRadius * 0.1, cx, cy, baseRadius * 1.5);
      grad.addColorStop(0, c1);
      grad.addColorStop(0.6, c2);
      grad.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = grad;
      ctx.fill();
    };

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      // Transparent clear to create fluid trailing
      ctx.fillStyle = "rgba(8, 8, 8, 0.12)";
      ctx.fillRect(0, 0, w, h);

      const state = blobStateRef.current;
      time += 0.015 * state.speed;

      const cx = w / 2;
      const cy = h / 2;

      const color1 = `rgba(${Math.round(state.r1)}, ${Math.round(state.g1)}, ${Math.round(state.b1)}, 0.35)`;
      const color2 = `rgba(${Math.round(state.r2)}, ${Math.round(state.g2)}, ${Math.round(state.b2)}, 0.12)`;

      // Outer Layer
      drawBlob(cx, cy, w * 0.35, time, state.amplitude, 0.7, 12, 1.0, color1, color2);
      // Middle Layer
      drawBlob(cx, cy, w * 0.28, time + 20, state.amplitude * 0.8, 1.2, 8, 1.12, color1, color2);
      // Inner Layer
      drawBlob(cx, cy, w * 0.2, time + 40, state.amplitude * 0.6, 1.6, 6, 1.25, color1, color2);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Helper to activate left-side metadata and canvas blob state for a given Era index
  const activateEra = (idx: number) => {
    const e = EXPERIENCE[idx];
    if (!e) return;

    // Odometer Roll Text
    gsap.to(yearsRef.current, { yPercent: -idx * 20, duration: 0.7, ease: "power2.out", overwrite: "auto" });
    gsap.to(rolesRef.current, { yPercent: -idx * 20, duration: 0.7, ease: "power2.out", overwrite: "auto" });
    gsap.to(orgsRef.current, { yPercent: -idx * 20, duration: 0.7, ease: "power2.out", overwrite: "auto" });

    // Morph blob colors (Grayscale)
    let targetColors = { r1: 255, g1: 255, b1: 255, r2: 150, g2: 150, b2: 150, amplitude: 20, speed: 1.0 }; // Era 01
    if (idx === 1) {
      targetColors = { r1: 220, g1: 220, b1: 220, r2: 120, g2: 120, b2: 120, amplitude: 28, speed: 1.4 }; // Era 02
    } else if (idx === 2) {
      targetColors = { r1: 200, g1: 200, b1: 200, r2: 100, g2: 100, b2: 100, amplitude: 25, speed: 1.2 }; // Era 03
    }

    gsap.to(blobStateRef.current, {
      r1: targetColors.r1,
      g1: targetColors.g1,
      b1: targetColors.b1,
      r2: targetColors.r2,
      g2: targetColors.g2,
      b2: targetColors.b2,
      amplitude: targetColors.amplitude,
      speed: targetColors.speed,
      duration: 0.7,
      ease: "power2.out"
    });

    // Ambient background glow (Grayscale stops)
    const bgGlow = idx === 0
      ? `radial-gradient(circle at 30% 50%, color-mix(in oklab, white 5%, transparent) 0%, transparent 60%)`
      : `radial-gradient(circle at 30% 50%, color-mix(in oklab, white 8%, transparent) 0%, transparent 60%)`;

    gsap.to(".dynamic-glow-bg", {
      background: bgGlow,
      duration: 0.7,
      ease: "power2.out"
    });
  };

  // GSAP ScrollTrigger timeline to interpolate state and text scrolling
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    let ctx = gsap.context(() => {
      if (!mediaQuery.matches) {
        // Mobile Animation: Simple scroll reveal for each card
        const cards = gsap.utils.toArray(".mobile-card");
        cards.forEach((card: any) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        // Mobile line drawing
        gsap.fromTo(
          ".mobile-line-progress",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".mobile-timeline-container",
              start: "top 75%",
              end: "bottom 60%",
              scrub: true,
            },
          }
        );
        return;
      }

      // Desktop ScrollTriggers for each card
      const cards = gsap.utils.toArray(".desktop-scroll-card");
      if (cards.length === 0) return;

      cards.forEach((card: any, idx: number) => {
        const glow = card.querySelector(".desktop-glow-bg");

        const isLastCard = idx === cards.length - 1;

        // A single timeline handles entering, staying focused, and leaving to avoid property conflicts
        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 30%",
            scrub: 0.5,
          }
        });

        if (isLastCard) {
          cardTl
            .fromTo(card,
              { opacity: 0.15, scale: 0.9 },
              { opacity: 1, scale: 1.08, ease: "power1.inOut", duration: 1 }
            )
            .to(card, { opacity: 1, scale: 1.08, duration: 3 });
        } else {
          cardTl
            .fromTo(card,
              { opacity: 0.15, scale: 0.9 },
              { opacity: 1, scale: 1.08, ease: "power1.inOut", duration: 1 }
            )
            .to(card, { opacity: 1, scale: 1.08, duration: 2.5 })
            .to(card, { opacity: 0.15, scale: 0.9, ease: "power1.inOut", duration: 1 });
        }

        if (glow) {
          cardTl
            .fromTo(glow,
              { opacity: 0 },
              { opacity: 0.35, ease: "power1.inOut", duration: 1 },
              0
            )
            .to(glow, { opacity: 0.35, duration: 1 })
            .to(glow, { opacity: 0, ease: "power1.inOut", duration: 1 });
        }

        // Trigger to change active state (left column rolling text and canvas colors)
        ScrollTrigger.create({
          trigger: card,
          start: "top 65%",   // when top of card crosses 65% of viewport
          end: "bottom 35%",  // when bottom of card crosses 35% of viewport
          onEnter: () => activateEra(idx),
          onEnterBack: () => activateEra(idx),
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Desktop layout */}
      <section id="trajectory" ref={containerRef} className="relative z-10 hidden md:grid grid-cols-12 gap-12 max-w-[100rem] mx-auto px-6 md:px-12 py-32 overflow-x-clip">
        <div
          className="dynamic-glow-bg pointer-events-none absolute inset-0 -z-10 transition-colors duration-500"
          style={{ background: "radial-gradient(circle at 30% 50%, color-mix(in oklab, white 5%, transparent) 0%, transparent 60%)" }}
        />

        {/* Left Sticky Column */}
        <div className="col-span-5 sticky top-0 h-screen flex flex-col justify-center select-none overflow-hidden pr-8">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground/60 mb-6">— Trajectory</span>

          {/* Rolling Years Display */}
          <div className="h-16 overflow-hidden mb-2">
            <div ref={yearsRef} className="flex flex-col">
              {EXPERIENCE.map((e, idx) => (
                <div key={idx} className="h-16 shrink-0 font-mono text-2xl font-semibold tracking-wider flex items-center text-foreground">
                  {e.when}
                </div>
              ))}
            </div>
          </div>

          {/* Rolling Roles Display */}
          <div className="h-20 overflow-hidden mb-1">
            <div ref={rolesRef} className="flex flex-col">
              {EXPERIENCE.map((e, idx) => (
                <div key={idx} className="h-20 shrink-0 font-display text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight flex items-center uppercase leading-none">
                  {e.role}
                </div>
              ))}
            </div>
          </div>

          {/* Rolling Orgs Display */}
          <div className="h-10 overflow-hidden mb-12">
            <div ref={orgsRef} className="flex flex-col">
              {EXPERIENCE.map((e, idx) => (
                <div key={idx} className="h-10 shrink-0 text-muted-foreground font-mono text-lg flex items-center">
                  @ {e.org} · {e.where}
                </div>
              ))}
            </div>
          </div>

          {/* HTML5 Canvas Liquid Wave Blob */}
          <div className="relative w-72 h-72 flex items-center justify-center border border-white/5 rounded-full bg-white/[0.01] backdrop-blur-md shadow-inner overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-white/5 text-[150px] font-display font-black leading-none uppercase tracking-tighter select-none">
              R
            </div>
          </div>
        </div>

        {/* Right Column (Scrolling Cards) */}
        <div className="col-span-7 flex flex-col gap-[35vh] py-[30vh]">
          {EXPERIENCE.map((e, idx) => (
            <div
              key={idx}
              className="desktop-scroll-card w-full origin-center relative flex justify-center"
              style={{
                opacity: idx === 0 ? 1 : 0.15,
                transform: idx === 0 ? "scale(1.08)" : "scale(0.9)",
              }}
            >
              {/* Giant glowing background behind the glass card - spanning half of the screen with grayscale gradient */}
              <div
                className="desktop-glow-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] rounded-full blur-[110px] -z-10 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, color-mix(in oklab, white 15%, transparent) 0%, color-mix(in oklab, white 5%, transparent) 45%, transparent 70%)`,
                  opacity: idx === 0 ? 0.35 : 0,
                }}
              />
              <ExperienceCard e={e} />
            </div>
          ))}
        </div>
      </section>

      {/* Mobile layout */}
      <section id="trajectory-mobile" className="block md:hidden py-24 px-6 relative mobile-timeline-container overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-white/5 blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-2/4 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-white/5 blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-white/5 blur-3xl -z-10 pointer-events-none" />

        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground/60">— Trajectory</span>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-foreground uppercase">A short, honest timeline.</h2>
        </div>

        <div className="relative pl-6">
          {/* Vertical progress line */}
          <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-white/5">
            <div className="mobile-line-progress w-full h-full bg-white/20 origin-top scale-y-0" />
          </div>

          <div className="space-y-10">
            {EXPERIENCE.map((e, idx) => {
              const Icon = getIconComponent(e.iconName);
              return (
                <div key={idx} className="mobile-card glass rounded-3xl p-5 border border-white/5 bg-black backdrop-blur-md relative overflow-hidden">
                  {/* Glowing background behind mobile glass card */}
                  <div
                    className="absolute -inset-10 rounded-full blur-[60px] -z-10 pointer-events-none opacity-[0.08]"
                    style={{
                      background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 75%)`,
                    }}
                  />

                  <div
                    className="absolute -left-[27px] top-5 w-3 h-3 rounded-full border border-background shadow-lg"
                    style={{
                      borderColor: "var(--background)",
                      backgroundColor: "var(--foreground)",
                      boxShadow: `0 0 10px rgba(255,255,255,0.3)`
                    }}
                  />

                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60">{e.tag}</span>
                    <span className="font-mono text-[10px] font-semibold text-muted-foreground">{e.when}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="p-1.5 rounded-xl bg-white/[0.02] border border-white/10"
                      style={{
                        boxShadow: `inset 0 0 8px rgba(255,255,255,0.05)`
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground uppercase tracking-tight">{e.role}</h3>
                  </div>

                  <div className="font-mono text-[10px] text-muted-foreground mb-3">@ {e.org} · {e.where}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{e.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
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
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} p={p} idx={i} />
        ))}
      </div>
      <Reveal delay={0.2}>
        <div className="mt-14 flex justify-center">
          <MagneticButton href="#" data-cursor="Show more">
            Show more <ArrowUpRight className="ml-2 inline h-4 w-4" />
          </MagneticButton>
        </div>
      </Reveal>
    </Section>
  );
}

function ProjectCard({ p, idx }: { p: (typeof PROJECTS)[number]; idx: number }) {
  return (
    <Reveal delay={idx * 0.1}>
      <a
        href={p.href}
        target="_blank"
        rel="noreferrer"
        data-cursor="View"
        className="group block glass rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] transition duration-500 hover:shadow-elevated"
      >
        {/* Image Container with zoom aspect ratio */}
        <div className="relative overflow-hidden aspect-[1.6/1]">
          <div className={`absolute inset-0 z-10 bg-gradient-to-tr ${p.accent} opacity-40 mix-blend-overlay`} />
          <img
            src={p.img}
            alt={p.title}
            loading="lazy"
            width={1280}
            height={800}
            className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between p-4 text-[10px] md:text-xs uppercase tracking-widest text-white/90">
            <span className="font-mono bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/5">{p.tag}</span>
            <span className="font-mono bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/5 flex items-center justify-center">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        {/* Content details */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>{p.id}</span>
            <span className="h-px w-6 bg-white/20" />
            <span>{p.year}</span>
          </div>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-foreground transition group-hover:text-primary">
            {p.title}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {p.desc}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/5 bg-white/[0.02] px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground group-hover:text-foreground group-hover:border-white/10 transition duration-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Reveal>
  );
}

/* ---------- Shipped ---------- */
interface ShippedCardProps {
  item: (typeof SHIPPED_ITEMS)[number];
  idx: number;
  isActive: boolean;
  angleStep: number;
  yStep: number;
  innerRef: (el: HTMLDivElement | null) => void;
}

function ShippedCard({ item, idx, isActive, angleStep, yStep, innerRef }: ShippedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for local 3D tilt (hover)
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 20 };
  const rX = useSpring(rotateX, springConfig);
  const rY = useSpring(rotateY, springConfig);
  const smoothGlowX = useSpring(glowX, springConfig);
  const smoothGlowY = useSpring(glowY, springConfig);

  const holographicGlow = useTransform(
    [smoothGlowX, smoothGlowY],
    ([cx, cy]) => `radial-gradient(350px circle at ${cx}px ${cy}px, rgba(255,255,255,0.06), rgba(0,242,254,0.03), transparent 70%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    // Tilt angle calculations (max 12 degrees)
    const xVal = (e.clientX - rect.left) / rect.width - 0.5;
    const yVal = (e.clientY - rect.top) / rect.height - 0.5;

    rotateX.set(-yVal * 12);
    rotateY.set(xVal * 12);

    // Glow position
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
      style={{
        transformStyle: "preserve-3d",
        transform: `rotateY(${idx * angleStep}deg) translateY(${idx * yStep}px) translateZ(var(--helix-radius))`,
      }}
    >
      <motion.div
        ref={(el) => {
          cardRef.current = el;
          innerRef(el);
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`shipped-card-inner w-[88vw] max-w-[480px] h-[380px] md:h-[430px] rounded-[2rem] overflow-hidden border bg-black/60 relative group transition-colors duration-500 flex flex-col justify-between p-6 md:p-8 ${
          isActive 
            ? "border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.8)] cursor-grab active:cursor-grabbing" 
            : "border-white/5 pointer-events-none"
        }`}
        style={{
          rotateX: rX,
          rotateY: rY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Holographic light refraction following mouse */}
        {isActive && (
          <motion.div
            className="pointer-events-none absolute -inset-[1px] rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
            style={{
              background: holographicGlow,
            }}
          />
        )}

        {/* Ambient top border reflection */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none z-10" />

        {/* Background Image with depth translation */}
        <div 
          className="absolute inset-0 overflow-hidden z-0"
          style={{ transform: "translateZ(-20px)" }}
        >
          <div className="absolute inset-0 bg-black/50 z-10 transition-colors duration-700" />
          <img 
            src={item.img} 
            alt={item.title} 
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out opacity-85" 
          />
        </div>
        
        {/* Card Header (Tag) */}
        <div 
          className="self-end relative z-20"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/90 font-semibold bg-black/60 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            {item.tag}
          </div>
        </div>

        {/* Card Footer (Title & Description & Button) */}
        <div 
          className="relative z-20 flex flex-col items-start gap-4 w-full"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="bg-black/50 backdrop-blur-md p-5 rounded-2xl border border-white/10 w-full">
            <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2 leading-tight tracking-tight">
              {item.title}
            </h3>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-4">
              {item.desc}
            </p>
            <MagneticButton href="#" data-cursor="Explore">
              View Project <ArrowUpRight className="ml-2 inline h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Shipped() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cylinderRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const angleStep = 80; // separation angle for cards (helical spacing)
  const yStep = 200;    // vertical offset separating cards

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cylinder = cylinderRef.current;
    const container = containerRef.current;
    if (!cylinder || !container) return;

    const cards = cardRefs.current;
    const total = SHIPPED_ITEMS.length;

    // Register scrolltrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initial setup of cards and static cylinder tilt
    gsap.set(cylinder, { rotationX: 6 });
    cards.forEach((card, idx) => {
      if (!card) return;
      if (idx === 0) {
        gsap.set(card, { opacity: 1, scale: 1.05 });
      } else {
        gsap.set(card, { opacity: 0.25, scale: 0.85 });
      }
    });

    // Main scroll timeline - completely continuous & linear
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8, // smooth scrubbing delay
        onUpdate: (self) => {
          const rawIndex = self.progress * (total - 1);
          const index = Math.round(rawIndex);
          setActiveCardIndex(index);
        }
      }
    });

    // 1. Rotate and translate the cylinder structure continuously from 0 to 1
    tl.to(cylinder, {
      rotationY: -(total - 1) * angleStep,
      y: -(total - 1) * yStep,
      ease: "none",
      duration: 1.0,
    }, 0);

    // 2. Animate card opacity/scale transitions continuously using only .to() tweens (prevents fromTo glitches)
    SHIPPED_ITEMS.forEach((_, idx) => {
      const card = cards[idx];
      if (!card) return;

      if (idx === 0) {
        // First card starts at 1.0, fades out from progress 0 to 0.5
        tl.to(card, {
          opacity: 0.25,
          scale: 0.85,
          ease: "sine.inOut",
          duration: 0.5,
        }, 0);
      } else if (idx === total - 1) {
        // Last card starts at 0.25, fades in from progress 0.5 to 1.0
        tl.to(card, {
          opacity: 1,
          scale: 1.05,
          ease: "sine.inOut",
          duration: 0.5,
        }, 0.5);
      } else {
        // Middle card starts at 0.25, fades in from 0 to 0.5, then fades out from 0.5 to 1.0
        tl.to(card, {
          opacity: 1,
          scale: 1.05,
          ease: "sine.inOut",
          duration: 0.5,
        }, 0);
        tl.to(card, {
          opacity: 0.25,
          scale: 0.85,
          ease: "sine.inOut",
          duration: 0.5,
        }, 0.5);
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} id="shipped" className="relative bg-black w-full h-[300vh]">
      <style>{`
        .helix-stage {
          --helix-radius: 120px;
        }
        @media (min-width: 640px) {
          .helix-stage {
            --helix-radius: 200px;
          }
        }
        @media (min-width: 1024px) {
          .helix-stage {
            --helix-radius: 380px;
          }
        }
      `}</style>

      {/* Background Radial Gradient */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay" 
        style={{ background: "radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 60%)" }} 
      />
      
      {/* Sticky Stage Wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center helix-stage [perspective:1200px]">
        
        {/* Float-in Section Header */}
        <div className="absolute top-10 left-6 md:left-12 z-30 pointer-events-none select-none">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-3">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/80">Shipped Portfolio</span>
          </div>
          <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-white uppercase">
            Things I've shipped.
          </h2>
        </div>

        {/* Central Core Glowing neon beam */}
        <div className="absolute w-[180px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0 animate-pulse-glow" />

        {/* 3D Helix Cylinder */}
        <div
          ref={cylinderRef}
          className="relative w-full h-[50vh] flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {SHIPPED_ITEMS.map((item, idx) => (
            <ShippedCard
              key={idx}
              item={item}
              idx={idx}
              isActive={idx === activeCardIndex}
              angleStep={angleStep}
              yStep={yStep}
              innerRef={(el) => {
                cardRefs.current[idx] = el;
              }}
            />
          ))}
        </div>

        {/* Progress Odometer Display in bottom corner */}
        <div className="absolute bottom-10 right-6 md:right-12 z-30 font-mono text-xs text-muted-foreground flex items-center gap-2 select-none">
          <span className="text-white font-semibold">0{activeCardIndex + 1}</span>
          <span className="w-8 h-px bg-white/20" />
          <span>0{SHIPPED_ITEMS.length}</span>
        </div>
      </div>
    </section>
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
                href="mailto:jhaderajat@gmail.com"
                primary
                data-cursor="Email"
              >
                <Mail className="mr-2 h-4 w-4" /> jhaderajat@gmail.com
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
          <a href="mailto:jhaderajat@gmail.com" data-cursor="Email" className="hover:text-foreground">
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
