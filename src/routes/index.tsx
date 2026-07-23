import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence, useVelocity } from "framer-motion";
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
  Film,
  Coffee,
  Gauge,
  Compass,
  Tv,
  Flame,
  Activity,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";

import project1 from "@/assets/project-vintvate.png";
import project2 from "@/assets/project-stackhouse.png";
import projectMeow from "@/assets/project-meow.png";
import projectPixelPilgrim from "@/assets/project-pixelpilgrim.jpg";

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



const SHIPPED_ITEMS = [
  {
    title: "Vintvate Studio",
    tag: "Web Studio",
    desc: "A modern web studio building fast, conversion-focused websites.",
    img: project1,
    href: "http://vintvate.vercel.app/",
  },
  {
    title: "Stackhouse",
    tag: "Developer Network",
    desc: "A curated community and career accelerator for serious developers.",
    img: project2,
    href: "https://www.stackhouse.social/",
  },
  {
    title: "Pixel Pilgrim",
    tag: "Gaming Hub",
    desc: "The ultimate hub to track, discover, and share your gaming journey — all in one beautiful place.",
    img: projectPixelPilgrim,
    href: "http://pixelpilgrim.tech/",
  },
  {
    title: "MEOW",
    tag: "Community Platform",
    desc: "Host events, collect RSVPs, spark conversations, and turn moments into movements.",
    img: projectMeow,
    href: "https://meow-lac-chi.vercel.app/",
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
    role: "Software Developer",
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
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <div className="dark relative min-h-screen overflow-x-clip bg-background text-foreground">
      <SmoothScroll />
      <CustomCursor />
      <BackgroundFX />
      <Nav onOpenContact={() => setIsContactOpen(true)} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Shipped />
      <Designs />
      <KononenkoSequence />
      <Services />
      <Philosophy />
      <Contact />
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
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
interface NavProps {
  onOpenContact: () => void;
}

function Nav({ onOpenContact }: NavProps) {
  return (
    <div className="fixed top-6 right-12 md:top-8 md:right-16 z-50">
      <button
        onClick={onOpenContact}
        data-cursor="Let's talk"
        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-neutral-400 via-neutral-300 to-neutral-900 text-black hover:from-neutral-900 hover:via-neutral-800 hover:to-neutral-400 hover:text-white px-5 py-2.5 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
      >
        Let's Talk <ArrowUpRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

/* ---------- Contact Modal ---------- */
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setIdea("");
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-xl bg-black/90 border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative pointer-events-auto overflow-hidden"
            >
              {/* Decorative background glows */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer p-2 rounded-full hover:bg-white/5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 mb-6 text-primary animate-pulse">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60 text-sm">I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white">Let's craft something real.</h3>
                    <p className="text-white/50 text-sm">Have an idea? Fill out the details below and let's align.</p>
                  </div>

                  <div className="space-y-6">
                    {/* Field 1: Name */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-widest text-white font-semibold">
                        How should I address you?
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>

                    {/* Field 2: Email */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-widest text-white font-semibold">
                        Where can I reply to?
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>

                    {/* Field 3: Idea */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-widest text-white font-semibold">
                        Tell me about the idea...
                      </label>
                      <textarea
                        required
                        value={idea}
                        onChange={(e) => setIdea(e.target.value)}
                        placeholder="Describe your project, timeline, or goals"
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-neutral-400 via-neutral-300 to-neutral-900 text-black hover:from-neutral-900 hover:via-neutral-800 hover:to-neutral-400 hover:text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-500 shadow-lg cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Sending..." : <>Send Message <ArrowUpRight className="w-4 h-4" /></>}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
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
              I'm <span className="text-foreground">Rajat Jhade</span> — a Software Developer
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



/* ---------- Shipped ---------- */
interface ShippedCardProps {
  item: (typeof SHIPPED_ITEMS)[number];
  idx: number;
  isActive: boolean;
  angleStep: number;
  yStep: number;
  innerRef: (el: HTMLDivElement | null) => void;
  onSelect: () => void;
}

function ShippedCard({ item, idx, isActive, angleStep, yStep, innerRef, onSelect }: ShippedCardProps) {
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
        onClick={() => {
          if (isActive) {
            onSelect();
          }
        }}
        className={`shipped-card-inner w-[88vw] max-w-[480px] h-[380px] md:h-[430px] rounded-[2rem] overflow-hidden border bg-black/60 relative group transition-colors duration-500 flex flex-col justify-between p-6 md:p-8 ${isActive
          ? "border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.8)] cursor-pointer"
          : "border-white/5 pointer-events-none"
          }`}
        style={{
          rotateX: rX,
          rotateY: rY,
          transformStyle: "preserve-3d",
        }}
        data-cursor={isActive ? "Click for info" : undefined}
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

        {/* Initial teaser overlay */}
        <div
          className="relative z-20 w-full bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/5 transition-opacity duration-300 group-hover:bg-black/60"
          style={{ transform: "translateZ(40px)" }}
        >
          <h3 className="font-display text-lg md:text-xl font-bold text-white mb-1 leading-tight tracking-tight">
            {item.title}
          </h3>
          <span className="text-[10px] font-mono text-muted-foreground/60 flex items-center gap-1">
            Click to view details
          </span>
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
  const [selectedItem, setSelectedItem] = useState<typeof SHIPPED_ITEMS[number] | null>(null);

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

    // Main scroll timeline with a tight transition for the last card (04)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8, // smooth scrubbing delay
        onUpdate: (self) => {
          const mappedP = Math.min(1, self.progress / 0.85);
          const rawIndex = mappedP * (total - 1);
          const index = Math.round(rawIndex);
          setActiveCardIndex(index);
        }
      }
    });

    // 1. Rotate and translate the cylinder structure, completing card 04 at 85% of section height
    tl.to(cylinder, {
      rotationY: -(total - 1) * angleStep,
      y: -(total - 1) * yStep,
      ease: (p) => {
        if (p <= 0) return 0;
        const mappedP = Math.min(1, p / 0.85);
        const x = mappedP * (total - 1);
        const i = Math.floor(x);
        const f = x - i;
        const smooth = f * f * (3 - 2 * f);
        return Math.min(1, (i + smooth) / (total - 1));
      },
      duration: 1.0,
    }, 0);

    // 2. Animate card opacity/scale transitions up to 85% of timeline
    const step = 0.85 / (total - 1);
    SHIPPED_ITEMS.forEach((_, idx) => {
      const card = cards[idx];
      if (!card) return;

      if (idx === 0) {
        // First card starts active, fades out
        tl.to(card, {
          opacity: 0.25,
          scale: 0.85,
          ease: "sine.inOut",
          duration: step,
        }, 0);
      } else if (idx === total - 1) {
        // Last card starts inactive, fades in and stays active for the remainder
        tl.to(card, {
          opacity: 1,
          scale: 1.05,
          ease: "sine.inOut",
          duration: step,
        }, (idx - 1) * step);
      } else {
        // Middle cards fade in, stay active, then fade out
        tl.to(card, {
          opacity: 1,
          scale: 1.05,
          ease: "sine.inOut",
          duration: step,
        }, (idx - 1) * step);
        tl.to(card, {
          opacity: 0.25,
          scale: 0.85,
          ease: "sine.inOut",
          duration: step,
        }, idx * step);
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    setSelectedItem(null);
  }, [activeCardIndex]);

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
              onSelect={() => setSelectedItem(item)}
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

      {/* Full Page Backdrop blur overlay */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedItem(null)}
        />
      )}

      {/* Full Page/Screen Drawer (Curved Top Details Box) */}
      <motion.div
        initial={{ y: "100%", x: "-50%" }}
        animate={{ y: selectedItem ? "0%" : "100%", x: "-50%" }}
        transition={{ type: "spring", damping: 25, stiffness: 180 }}
        className="fixed bottom-0 left-1/2 z-[60] bg-black/95 border-t border-x border-white/10 rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-[70vh] md:min-h-[75vh] max-h-[90vh] overflow-hidden w-[98vw] max-w-[1300px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Full-bleed background image container */}
        {selectedItem && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Dark gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/35 z-10" />
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.65 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={selectedItem.img}
              alt={selectedItem.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Absolute-positioned close button at top-right */}
        <button
          onClick={() => setSelectedItem(null)}
          className="absolute top-6 right-6 md:top-8 md:right-8 z-30 text-white/60 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/80 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center cursor-pointer shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col h-full justify-center items-center p-8 md:p-16">
          <div className="w-full max-w-3xl text-center space-y-8 select-none flex flex-col items-center">

            {/* Top Accent Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={selectedItem ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-center"
            />

            <div className="space-y-4">
              {/* Tag */}
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={selectedItem ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-primary font-bold block"
                >
                  {selectedItem?.tag}
                </motion.span>
              </div>

              {/* Title */}
              <div className="overflow-hidden py-2">
                <motion.h2
                  initial={{ y: "110%", opacity: 0 }}
                  animate={selectedItem ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
                  transition={{ duration: 0.7, ease: "circOut", delay: 0.3 }}
                  className="font-display text-4xl md:text-7xl font-extrabold text-white leading-none uppercase tracking-wider filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                >
                  {selectedItem?.title}
                </motion.h2>
              </div>
            </div>

            {/* Bottom Accent Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={selectedItem ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, ease: "circOut", delay: 0.1 }}
              className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-center"
            />

            {/* Description */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={selectedItem ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                className="text-white/90 text-base md:text-xl font-medium leading-relaxed max-w-2xl text-center filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-sans"
              >
                {selectedItem?.desc}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={selectedItem ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center w-full"
            >
              <MagneticButton
                href={selectedItem?.href || "#"}
                target={selectedItem?.href ? "_blank" : undefined}
                rel={selectedItem?.href ? "noopener noreferrer" : undefined}
                data-cursor="Explore"
                primary
                className="px-8 py-4 justify-center shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.6)] transition-shadow duration-300"
              >
                Launch Project <ArrowUpRight className="ml-2 inline h-4 w-4" />
              </MagneticButton>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-6 py-4 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-all duration-300 cursor-pointer backdrop-blur-md hover:border-white/40"
              >
                Close Details
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- Designs ---------- */
const CREATIVE_DESIGNS = [
  {
    title: "Arc Dezine",
    tag: "3D Architecture Portfolio",
    desc: "An immersive digital experience showcasing premium architecture and design concepts with smooth interaction models and high-end typography.",
    url: "https://arc-dezine02.vercel.app/",
  }
];

function Designs() {
  return (
    <Section id="designs" eyebrow="Creative Lab" title="Designs I've crafted." wide>
      <div className="space-y-20">
        {CREATIVE_DESIGNS.map((design, i) => (
          <Reveal key={design.url} delay={i * 0.1}>
            <div className="glass group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.01] p-6 md:p-12 transition duration-500 hover:border-white/10">
              <div className="grid gap-10 lg:grid-cols-[1fr_2fr] items-center">
                {/* Left side details */}
                <div className="space-y-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                    {design.tag}
                  </span>
                  <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
                    {design.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {design.desc}
                  </p>
                  <div className="flex gap-4">
                    <MagneticButton href={design.url} target="_blank" rel="noopener noreferrer" primary>
                      Launch Live Site <ArrowUpRight className="ml-2 h-4 w-4" />
                    </MagneticButton>
                  </div>
                </div>

                {/* Right side live preview mockup */}
                <div className="relative aspect-[16/10] w-full rounded-2xl border border-white/10 bg-black overflow-hidden shadow-2xl group">
                  {/* Browser frame decoration */}
                  <div className="flex items-center gap-1.5 bg-neutral-900 px-4 py-3 border-b border-b-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <div className="ml-4 bg-white/5 text-[10px] text-muted-foreground/60 px-3 py-1 rounded-md w-1/2 truncate font-mono">
                      {design.url}
                    </div>
                  </div>

                  {/* Iframe Wrapper to hide scrollbar */}
                  <div className="w-full h-[calc(100%-38px)] overflow-hidden relative">
                    <iframe
                      src={design.url}
                      title={design.title}
                      className="w-[calc(100%+20px)] h-full border-0 absolute left-0 top-0"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
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
    <section id={id} className="relative z-20 bg-background py-28 md:py-40">
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

/* =====================================================================
   INTERESTS — "KINETIC BIMODAL STUDIO DESK" (DIRECTION 3)
   Dark #080808 Studio Table with dual-tone bimodal cards & interactive scene tabs
   Left: 3-column parallax filmstrip with alternating cream & obsidian polaroid cards
   Right: Kinetic off-white magazine editorial card with live interest switcher tabs
   Center: Amber spotlight lightcone tracking cursor
   ===================================================================== */

const MEDIA_WALL_CARDS = [
  // Column 1 Cards (F1, Coffee, Thrillers)
  {
    id: "f1-telemetry",
    col: 1,
    category: "f1",
    badge: "1000 HP",
    topRight: "SORT BY ∨",
    imgTag: "SCUDERIA FERRARI",
    title: "SF-24 APEX HUNTING",
    desc: "Late-braking telemetry trace & tire strategy at 351 km/h.",
    priceOrMetric: "351 KM/H",
    actionText: "FILTER BY ∨",
    actionSub: "TELEMETRY →",
    cardTheme: "cream",
    accentColor: "#e53e3e",
    image: "/images/telemetry_f1.png",
    quote: "“If you no longer go for a gap that exists, you are no longer a racing driver.”",
    author: "— Ayrton Senna",
    stats: [
      { label: "Top Speed", value: "351 km/h" },
      { label: "G-Force", value: "5.4 G" },
      { label: "Team", value: "Scuderia Ferrari" },
    ],
    keywords: ["F1", "TELEMETRY", "APEX", "REDLINE"],
  },
  {
    id: "coffee-aeropress",
    col: 1,
    category: "coffee",
    badge: "93°C BREW",
    topRight: "ORDER NOW",
    imgTag: "AEROPRESS & ESPRESSO",
    title: "DOUBLE SHOT CAFFEINE",
    desc: "Essential fuel for 3:00 AM midnight commits & micro-interactions.",
    priceOrMetric: "€ 4.50",
    actionText: "ADD TO BREW",
    actionSub: "3 AM COMMITS →",
    cardTheme: "dark",
    accentColor: "#d97706",
    image: "/images/coffee_fuel.png",
    quote: "“I have measured out my life with coffee spoons.”",
    author: "— T.S. Eliot",
    stats: [
      { label: "Roast", value: "Medium-Dark" },
      { label: "Caffeine", value: "Critical (85%)" },
      { label: "Ritual", value: "3:00 AM" },
    ],
    keywords: ["COFFEE", "3AM", "ESPRESSO", "MIDNIGHT"],
  },
  {
    id: "thriller-dark",
    col: 1,
    category: "thriller",
    badge: "MIND-BENDING",
    topRight: "PLAY ▶ 03:14 AM",
    imgTag: "DARK / SEVERANCE",
    title: "PSYCHOLOGICAL ESCAPISM",
    desc: "Obsessed with puzzle narratives & neo-noir atmosphere.",
    priceOrMetric: "9.8 RATING",
    actionText: "FILTER BY: NOIR",
    actionSub: "INSPECT DOSSIER →",
    cardTheme: "cream",
    accentColor: "#7c3aed",
    image: "/images/thriller_noir.png",
    quote: "“There is no terror in the bang, only in the anticipation of it.”",
    author: "— Alfred Hitchcock",
    stats: [
      { label: "Fav Series", value: "Dark" },
      { label: "Fav Movie", value: "Shutter Island" },
      { label: "Genre", value: "Suspense" },
    ],
    keywords: ["THRILLER", "SUSPENSE", "NOIR", "MYSTERY"],
  },

  // Column 2 Cards (Y-3 Craft, Tech, Open World)
  {
    id: "y3-craft",
    col: 2,
    category: "gaming",
    badge: "Y-3 ESTHETIC",
    topRight: "POWERED BY BIA",
    imgTag: "FULL-STACK FOUNDER",
    title: "DIGITAL FLAGSHIP STORES",
    desc: "Cohesive & captivating web experiences built to convert.",
    priceOrMetric: "€ 280.00",
    actionText: "FILTER BY ∨",
    actionSub: "ADD TO BAG →",
    cardTheme: "dark",
    accentColor: "#ffffff",
    image: "/images/gaming_tech.png",
    quote: "“Great software is felt before it's understood.”",
    author: "— Rajat Jhade",
    stats: [
      { label: "Role", value: "Founder & Dev" },
      { label: "Stack", value: "React, GSAP, Next" },
      { label: "Impact", value: "Flagship Quality" },
    ],
    keywords: ["Y-3", "FLAGSHIP", "FULL-STACK", "CRAFT"],
  },
  {
    id: "ai-agents",
    col: 2,
    category: "f1",
    badge: "NEXT.JS 15",
    topRight: "SORT BY: SPEED",
    imgTag: "SYSTEM ARCHITECTURE",
    title: "AI AGENTS & WORKFLOWS",
    desc: "Autonomous workflow engines, real-time streaming, and deep integrations.",
    priceOrMetric: "100ms LATENCY",
    actionText: "INSPECT CODE ∨",
    actionSub: "VIEW PIPELINE →",
    cardTheme: "cream",
    accentColor: "#0284c7",
    image: "/images/telemetry_f1.png",
    quote: "“Simple things should be simple, complex things should be possible.”",
    author: "— Alan Kay",
    stats: [
      { label: "Framework", value: "Next.js & TanStack" },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "Motion", value: "Framer & GSAP" },
    ],
    keywords: ["AI AGENTS", "NEXT.JS", "TAILWIND", "GSAP"],
  },
  {
    id: "open-world",
    col: 2,
    category: "gaming",
    badge: "EXPLORER",
    topRight: "MAP: SECTOR 7",
    imgTag: "OPEN WORLD RPG",
    desc: "Immersive digital storytelling, strategy depth, and virtual worlds.",
    priceOrMetric: "LEVEL 99",
    actionText: "FILTER: STRATEGY",
    actionSub: "EXPLORE MAP →",
    cardTheme: "dark",
    accentColor: "#2563eb",
    image: "/images/gaming_tech.png",
    quote: "“Games give you a chance to excel, and if you're in good company, you don't mind if you lose.”",
    author: "— Gary Gygax",
    stats: [
      { label: "Mode", value: "Open World" },
      { label: "Focus", value: "Strategy" },
      { label: "Craft", value: "Future Tech" },
    ],
    keywords: ["GAMING", "ADVENTURE", "STRATEGY", "RPG"],
  },

  // Column 3 Cards (Monza, Code Commit, Noir Mystery)
  {
    id: "monza-redline",
    col: 3,
    category: "f1",
    badge: "REDLINE",
    topRight: "GEAR 8",
    imgTag: "MONZA SPEED TRAP",
    title: "1000 HP HORSEPOWER",
    desc: "Late braking zones, lateral G forces, and high-velocity apex execution.",
    priceOrMetric: "5.4 G PEAK",
    actionText: "SORT BY: RPM ∨",
    actionSub: "TELEMETRY →",
    cardTheme: "cream",
    accentColor: "#ef4444",
    image: "/images/telemetry_f1.png",
    quote: "“Straight lines are for fast cars, turns are for fast drivers.”",
    author: "— Colin McRae",
    stats: [
      { label: "Lateral G", value: "5.4 G" },
      { label: "Braking", value: "-160 km/h in 1.2s" },
      { label: "Team", value: "Ferrari" },
    ],
    keywords: ["REDLINE", "MONZA", "FERRARI", "HORSEPOWER"],
  },
  {
    id: "night-shift-commit",
    col: 3,
    category: "coffee",
    badge: "BUILD PASSED",
    topRight: "VS CODE // 3AM",
    imgTag: "NIGHT SHIFT PROTOCOL",
    title: "3:00 AM COMMITS",
    desc: "Dark mode editor, zero lint warnings, and pure intentional craft.",
    priceOrMetric: "0 BUGS",
    actionText: "FILTER BY: COMMITS",
    actionSub: "VIEW REPO →",
    cardTheme: "dark",
    accentColor: "#10b981",
    image: "/images/coffee_fuel.png",
    quote: "“Code is like humor. When you have to explain it, it’s bad.”",
    author: "— Cory House",
    stats: [
      { label: "Status", value: "100% Clean" },
      { label: "Commits", value: "Midnight Shift" },
      { label: "Quality", value: "Zero Compromise" },
    ],
    keywords: ["NIGHT SHIFT", "VS CODE", "BUILD", "CLEAN"],
  },
  {
    id: "puzzle-noir",
    col: 3,
    category: "thriller",
    badge: "PLOT TWIST",
    topRight: "RATING 9.9",
    imgTag: "NEO-NOIR ATMOSPHERE",
    title: "MIND-BENDING NARRATIVE",
    desc: "Shutter Island, Dark, Severance. Complex puzzles & unexpected turns.",
    priceOrMetric: "NOIR CLASSIC",
    actionText: "SORT BY: TWIST ∨",
    actionSub: "DECRYPT →",
    cardTheme: "cream",
    accentColor: "#a855f7",
    image: "/images/thriller_noir.png",
    quote: "“The world is full of obvious things which nobody by any chance ever observes.”",
    author: "— Sherlock Holmes",
    stats: [
      { label: "Pacing", value: "High Tension" },
      { label: "Atmosphere", value: "Neo-Noir" },
      { label: "Genre", value: "Psychological" },
    ],
    keywords: ["PUZZLE", "NOIR", "SEVERANCE", "DARK"],
  }
];

function MediaWallCard({ card, activeCategory, onClick }: { card: typeof MEDIA_WALL_CARDS[number]; activeCategory: string; onClick: () => void }) {
  const isCream = card.cardTheme === "cream";
  const isHighlighted = activeCategory === "all" || card.category === activeCategory;

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -6 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className={`group relative overflow-hidden rounded-2xl border cursor-pointer select-none transition-all duration-500 shadow-2xl flex flex-col justify-between min-h-[235px] p-4 ${
        isCream
          ? "bg-[#f0f0f2] text-black border-white/40 shadow-black/50"
          : "bg-[#0c0c0e] text-white border-white/10 shadow-black/90"
      } ${!isHighlighted ? "opacity-35 grayscale" : "opacity-100"}`}
    >
      {/* Background Media Image with Zoom & Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-110 ${
            isCream ? "opacity-25 group-hover:opacity-45" : "opacity-35 group-hover:opacity-65"
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${
          isCream ? "from-[#f0f0f2] via-[#f0f0f2]/80 to-transparent" : "from-[#0c0c0e] via-[#0c0c0e]/80 to-transparent"
        }`} />
      </div>

      {/* Accent Corner Glow */}
      <div
        className="absolute -right-10 -top-10 w-24 h-24 rounded-full opacity-30 blur-xl group-hover:opacity-70 transition-opacity duration-500 pointer-events-none z-10"
        style={{ backgroundColor: card.accentColor }}
      />

      {/* Top Header Bar */}
      <div className={`flex justify-between items-center text-[7.5px] font-mono tracking-wider z-10 border-b pb-2 ${
        isCream ? "border-black/10 text-black/70" : "border-white/10 text-white/70"
      }`}>
        <span className="font-semibold uppercase truncate max-w-[60%]">{card.imgTag}</span>
        <span className={`px-1.5 py-0.5 rounded font-bold uppercase ${
          isCream ? "bg-black/10 text-black/90" : "bg-white/10 text-white/90"
        }`}>{card.topRight}</span>
      </div>

      {/* Center Content */}
      <div className="my-3 space-y-1.5 z-10">
        <div className="flex justify-between items-start">
          <span className="font-mono text-[7px] tracking-widest uppercase px-1.5 py-0.5 rounded bg-black/70 text-white font-extrabold shadow-md" style={{ color: card.accentColor }}>
            {card.badge}
          </span>
          <span className={`font-mono text-[8px] font-extrabold tracking-tight px-1.5 py-0.5 rounded ${
            isCream ? "bg-black/10 text-black" : "bg-white/10 text-white"
          }`}>{card.priceOrMetric}</span>
        </div>
        <h5 className={`font-display text-sm font-extrabold uppercase tracking-tight leading-snug transition-colors ${
          isCream ? "text-black group-hover:text-amber-600" : "text-white group-hover:text-amber-400"
        }`}>
          {card.title}
        </h5>
        <p className={`text-[9.5px] leading-tight line-clamp-2 ${isCream ? "text-black/75" : "text-white/70"}`}>
          {card.desc}
        </p>
      </div>

      {/* Bottom Footer Bar */}
      <div className={`flex items-center justify-between text-[7.5px] font-mono tracking-wider pt-2 border-t z-10 transition-opacity ${
        isCream ? "border-black/10 opacity-85 group-hover:opacity-100" : "border-white/10 opacity-80 group-hover:opacity-100"
      }`}>
        <span className="uppercase">{card.actionText}</span>
        <div className="flex items-center gap-1 font-bold" style={{ color: card.accentColor }}>
          <span>{card.actionSub}</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- Live Graphical Video Canvas Overlay inside Dossier Modal ---------- */
function GraphicalVideoCanvas({ card }: { card: typeof MEDIA_WALL_CARDS[number] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let offset = 0;
    const particles: Array<{ x: number; y: number; vx: number; vy: number; alpha: number; size: number }> = [];

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 400;
      canvas.height = canvas.parentElement?.clientHeight || 240;
    };
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (card.id.includes("f1") || card.id.includes("monza")) {
        // F1 Live Telemetry trace line
        ctx.strokeStyle = card.accentColor;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = card.accentColor;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 3) {
          const noise = Math.sin(x * 0.025 + offset) * 20 + Math.cos(x * 0.05 - offset * 1.3) * 10;
          const y = canvas.height / 1.5 + noise;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // RPM Telemetry text HUD
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.font = "10px monospace";
        ctx.fillText(`LIVE TELEMETRY // GEAR ${Math.floor(6 + Math.sin(offset)*2)} // ${Math.round(330 + Math.sin(offset)*18)} KM/H`, 14, 24);
      } else if (card.id.includes("coffee") || card.id.includes("night-shift")) {
        // Steam Particle Visualizer
        if (particles.length < 35 && Math.random() < 0.25) {
          particles.push({
            x: canvas.width / 2 + (Math.random() - 0.5) * 25,
            y: canvas.height - 20,
            vx: (Math.random() - 0.5) * 0.5,
            vy: -Math.random() * 0.8 - 0.4,
            alpha: 1,
            size: Math.random() * 9 + 4
          });
        }
        particles.forEach((p, i) => {
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= 0.008;
          if (p.alpha <= 0 || p.y < 10) {
            particles.splice(i, 1);
            return;
          }
          ctx.beginPath();
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
          grad.addColorStop(0, `rgba(255, 255, 255, ${p.alpha * 0.35})`);
          grad.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.fillStyle = grad;
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      offset += 0.06;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(animId);
  }, [card]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-20" />;
}

function Interests() {
  const [selectedCard, setSelectedCard] = useState<typeof MEDIA_WALL_CARDS[number]>(MEDIA_WALL_CARDS[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const amberLensRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for amber spotlight lens
  const [lensPos, setLensPos] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setLensPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // GSAP Headline Word Mask Reveal
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = headlineRef.current;
    if (!el) return;

    const words = el.querySelectorAll(".word-mask span");
    gsap.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const col1 = MEDIA_WALL_CARDS.filter(c => c.col === 1);
  const col2 = MEDIA_WALL_CARDS.filter(c => c.col === 2);
  const col3 = MEDIA_WALL_CARDS.filter(c => c.col === 3);

  const categoryTabs = [
    { id: "all", label: "ALL SCENES" },
    { id: "f1", label: "FORMULA 1" },
    { id: "coffee", label: "CAFFEINE" },
    { id: "thriller", label: "SUSPENSE" },
    { id: "gaming", label: "GAMING" },
  ];

  return (
    <section
      id="interests"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#080808] text-white overflow-hidden border-t border-white/10 select-none py-12 md:py-20"
    >
      {/* Ambient Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      {/* Amber Lens Spotlight Orb tracking cursor near split boundary */}
      <motion.div
        ref={amberLensRef}
        animate={{
          x: lensPos.x - 28,
          y: lensPos.y - 28,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
        className="pointer-events-none absolute z-30 w-14 h-14 rounded-full bg-amber-500/90 shadow-[0_0_60px_rgba(245,158,11,0.85)] mix-blend-screen opacity-90 hidden lg:block"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen gap-8 max-w-[110rem] mx-auto px-4 md:px-8">
        {/* Left Column: 3-Column Vertical Auto-Scrolling Visual Media Wall with Dual-Tone Cards */}
        <div className="lg:col-span-6 bg-[#060608] text-white relative overflow-hidden flex flex-col justify-between h-[80vh] lg:h-[88vh] rounded-3xl group shadow-2xl">
          {/* Subtle noise/grid overlay */}
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-10" />

          {/* Top & Bottom gradient masks for smooth entry/exit */}
          <div className="pointer-events-none absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#060608] via-[#060608]/80 to-transparent z-20" />
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#060608] via-[#060608]/80 to-transparent z-20" />

          {/* Top Bar Header inside Left Wall */}
          <div className="relative z-30 flex items-center justify-between p-4 px-5 bg-[#060608]/80 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/70">
                KINETIC FILMSTRIP • 3 COLUMNS
              </span>
            </div>
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] bg-white text-black font-extrabold px-2.5 py-0.5 rounded-full shadow-lg">
              CERTIFIED SHOPIFY PLUS PARTNER
            </span>
          </div>

          {/* 3 Columns Vertical Infinite Marquee Grid Wall */}
          <div className="relative z-10 grid grid-cols-3 gap-3 px-3 h-full overflow-hidden">
            {/* Column 1 (Scrolls UP) */}
            <div className="flex flex-col gap-3 animate-marquee-up group-hover:[animation-play-state:paused] transition-all">
              {[...col1, ...col1, ...col1].map((card, idx) => (
                <MediaWallCard key={'col1-' + card.id + '-' + idx} card={card} activeCategory={activeCategory} onClick={() => { setSelectedCard(card); setModalOpen(true); }} />
              ))}
            </div>

            {/* Column 2 (Scrolls DOWN) */}
            <div className="flex flex-col gap-3 animate-marquee-down group-hover:[animation-play-state:paused] transition-all pt-10">
              {[...col2, ...col2, ...col2].map((card, idx) => (
                <MediaWallCard key={'col2-' + card.id + '-' + idx} card={card} activeCategory={activeCategory} onClick={() => { setSelectedCard(card); setModalOpen(true); }} />
              ))}
            </div>

            {/* Column 3 (Scrolls UP Fast) */}
            <div className="flex flex-col gap-3 animate-marquee-up-fast group-hover:[animation-play-state:paused] transition-all pt-5">
              {[...col3, ...col3, ...col3].map((card, idx) => (
                <MediaWallCard key={'col3-' + card.id + '-' + idx} card={card} activeCategory={activeCategory} onClick={() => { setSelectedCard(card); setModalOpen(true); }} />
              ))}
            </div>
          </div>

          {/* Bottom Bar inside Left Wall */}
          <div className="relative z-30 p-3 px-5 bg-[#060608]/80 backdrop-blur-md flex items-center justify-between font-mono text-[8.5px] text-white/50">
            <span>FILTER BY ∨ &nbsp; | &nbsp; SORT BY ∨</span>
            <span className="text-amber-400 font-semibold">HOVER TO PAUSE • CLICK CARD TO INSPECT</span>
          </div>
        </div>

        {/* Right Column: Floating Off-White Editorial Magazine Card with Interactive Scene Protocol Tabs */}
        <div className="lg:col-span-6 flex flex-col justify-center lg:sticky lg:top-10 lg:h-[88vh] z-10">
          <div className="bg-[#f0f0f2] text-black p-8 md:p-12 rounded-[2.5rem] shadow-[0_35px_100px_rgba(0,0,0,0.7)] border border-white/30 relative overflow-hidden flex flex-col justify-between h-full">
            {/* Subtle background watermark */}
            <div className="absolute -right-12 -bottom-12 font-display text-[12rem] font-extrabold text-black/[0.03] leading-none pointer-events-none select-none">
              STUDIO
            </div>

            {/* Top Micro Header & Category Switcher Tabs */}
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.3em] text-black/50 mb-6 flex items-center justify-between border-b border-black/10 pb-4">
                <span>CERTIFIED SHOPIFY PLUS PARTNER</span>
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              </div>

              {/* Interactive Scene Switcher Protocol Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categoryTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveCategory(tab.id);
                      if (tab.id !== "all") {
                        const matched = MEDIA_WALL_CARDS.find(c => c.category === tab.id);
                        if (matched) setSelectedCard(matched);
                      }
                    }}
                    className={`px-3 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-widest transition-all cursor-pointer border ${
                      activeCategory === tab.id
                        ? "bg-black text-white font-extrabold border-black shadow-lg"
                        : "bg-black/5 text-black/60 border-black/10 hover:bg-black/10 hover:text-black"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Giant Editorial Headline matching screenshot */}
              <h2
                ref={headlineRef}
                className="font-display text-[clamp(2.5rem,4.8vw,4.8rem)] font-extrabold tracking-tighter leading-[0.9] uppercase text-black mb-6 select-none"
              >
                <div className="word-mask block overflow-hidden pb-1">
                  <span className="block">WE BUILD</span>
                </div>
                <div className="word-mask block overflow-hidden pb-1">
                  <span className="block">BRANDS &</span>
                </div>
                <div className="word-mask block overflow-hidden pb-1">
                  <span className="block">DIGITAL</span>
                </div>
                <div className="word-mask block overflow-hidden pb-1">
                  <span className="block">FLAGSHIP</span>
                </div>
                <div className="word-mask block overflow-hidden pb-1 text-black/40">
                  <span className="block">STORES</span>
                </div>
              </h2>

              {/* Elegant Sub-description */}
              <p className="text-black/75 text-sm md:text-base font-serif italic leading-relaxed max-w-lg mb-8">
                We shape the future of commerce by delivering cohesive & captivating omnichannel experiences that connect to convert—powered by Formula 1 precision, late-night caffeine protocols, and suspenseful thriller narratives.
              </p>
            </div>

            {/* Action Buttons with High-Contrast Primary Black Button */}
            <div className="pt-6 border-t border-black/10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="px-7 py-3.5 rounded-full border-2 border-black bg-black text-white hover:bg-transparent hover:text-black font-mono text-xs uppercase tracking-widest font-extrabold transition-all duration-300 shadow-xl cursor-pointer flex items-center gap-2"
              >
                OUR WORK <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full border border-black/20 text-black hover:border-black font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Graphical Video Reel Modal Player Overlay */}
      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-md"
            />

            <div className="fixed inset-0 z-[210] flex items-center justify-center p-4 md:p-8 pointer-events-none">
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="w-full max-w-4xl bg-[#08080a] text-white border border-white/15 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative pointer-events-auto overflow-hidden grid gap-6 md:grid-cols-[1.4fr_1fr]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer p-2.5 rounded-full hover:bg-white/10 border border-white/10 z-30"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Left: Cinematic Graphical Video Frame with Live Canvas Overlay */}
                <div className="relative aspect-[16/10] md:aspect-auto h-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 group">
                  <img
                    src={selectedCard.image}
                    alt={selectedCard.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  {/* VHS Scanline & Darkness Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%),linear-gradient(90deg,rgba(255,0,0,0.04),rgba(0,255,0,0.01),rgba(0,0,255,0.04))] bg-[size:100%_4px,6px_100%] pointer-events-none z-10" />

                  {/* Live Canvas Telemetry / Steam Engine */}
                  <GraphicalVideoCanvas card={selectedCard} />

                  {/* Video Playhead Top Bar */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center font-mono text-[9px] uppercase tracking-widest text-white/70 z-20 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                    <span className="flex items-center gap-2 font-bold text-red-400">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      REC ● CINEMATIC HUD
                    </span>
                    <span className="font-bold text-amber-400">{selectedCard.priceOrMetric}</span>
                  </div>

                  {/* Bottom Video Controls Scrubber Bar */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 space-y-2">
                    <div className="flex justify-between items-center font-mono text-[9px] text-white/60">
                      <span>{selectedCard.imgTag}</span>
                      <span style={{ color: selectedCard.accentColor }}>LIVE GRAPHICAL REEL</span>
                    </div>
                    {/* Animated Scrubber Line */}
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 animate-pulse w-3/4 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Right: Scene Selector & Specs */}
                <div className="flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: selectedCard.accentColor }}>
                        {selectedCard.imgTag} • {selectedCard.badge}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white">
                        {selectedCard.title}
                      </h3>
                    </div>

                    <p className="text-white/70 text-xs leading-relaxed">
                      {selectedCard.desc}
                    </p>

                    <div className="border-l-2 border-amber-500/60 pl-3 py-1 space-y-1">
                      <p className="text-white/90 text-xs italic font-serif">
                        {selectedCard.quote}
                      </p>
                      <p className="text-white/40 text-[10px] font-mono">{selectedCard.author}</p>
                    </div>
                  </div>

                  {/* Scene Switcher Buttons */}
                  <div className="space-y-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 block">
                      SWITCH GRAPHICAL SCENE
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {MEDIA_WALL_CARDS.slice(0, 4).map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setSelectedCard(c)}
                          className={`p-2 rounded-xl text-[9px] font-mono uppercase tracking-wider text-left border transition-all truncate ${
                            selectedCard.id === c.id
                              ? "bg-white text-black font-extrabold border-white shadow-lg"
                              : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          ▶ {(c.title || "").split(" ")[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}



/* =====================================================================
   KONONENKO-INSPIRED SCROLL SEQUENCE (DIRECTION 2 ENHANCED)
   "Sub-Zero Monochrome Studio Vault" with Interactive Interest Filters & High-Contrast Stamp Badges
   Phase 1: 360-Degree Rotating Telemetry HUD Ring ("Refined & Bold / Essential")
   Phase 2: Precision Grid Line-by-Line Blurred Headline Reveal + Interactive Filter Pills
   Phase 3: Horizontal Filmstrip with Live Telemetry Canvas Curves, VHS Timecode & Personal Metric Stamps
   Phase 4: Holographic Glass Card Reveal with clip-path Expansion & Smooth Pin Exit
   ===================================================================== */

const HUD_TELEMETRY_CARDS = [
  { id: 1, category: "f1", title: "SF-24 Apex Telemetry", frame: "FRAME 01 / 08", metric: "351 KM/H", code: "SCUDERIA FERRARI • 1000 HP", img: "/images/kononenko_studio_1.png", accent: "#ef4444", rot: -12, yOffset: 35 },
  { id: 2, category: "coffee", title: "AeroPress Double Shot", frame: "FRAME 02 / 08", metric: "93°C BREW", code: "3:00 AM MIDNIGHT PROTOCOL", img: "/images/kononenko_studio_2.png", accent: "#f59e0b", rot: -5, yOffset: -30 },
  { id: 3, category: "thriller", title: "Hitchcock Thriller Noir", frame: "FRAME 03 / 08", metric: "9.8 RATING", code: "DARK / SEVERANCE NOIR", img: "/images/kononenko_studio_3.png", accent: "#a855f7", rot: 8, yOffset: 35 },
  { id: 4, category: "tech", title: "Next.js 15 AI Engine", frame: "FRAME 04 / 08", metric: "100ms LATENCY", code: "SYSTEM ARCHITECTURE", img: "/images/kononenko_studio_4.png", accent: "#0284c7", rot: 16, yOffset: -40 },
  { id: 5, category: "f1", title: "Monza Speed Trap", frame: "FRAME 05 / 08", metric: "5.4 G PEAK", code: "LATERAL G-FORCE // GEAR 8", img: "/images/kononenko_studio_1.png", accent: "#dc2626", rot: -10, yOffset: 25 },
  { id: 6, category: "coffee", title: "Night Shift Editor", frame: "FRAME 06 / 08", metric: "0 LINT BUGS", code: "VS CODE // CLEAN BUILD", img: "/images/kononenko_studio_2.png", accent: "#10b981", rot: 10, yOffset: -35 },
  { id: 7, category: "tech", title: "Digital Flagship Stores", frame: "FRAME 07 / 08", metric: "Y-3 CRAFT", code: "FULL-STACK FOUNDER", img: "/images/kononenko_studio_3.png", accent: "#8b5cf6", rot: -7, yOffset: 30 },
  { id: 8, category: "tech", title: "Open World Strategy", frame: "FRAME 08 / 08", metric: "LEVEL 99", code: "EXPLORER // ADVENTURE", img: "/images/kononenko_studio_4.png", accent: "#2563eb", rot: 14, yOffset: -18 },
];

/* Live Telemetry Waveform Overlay for HUD Cards */
function HUDTelemetryCanvas({ card }: { card: typeof HUD_TELEMETRY_CARDS[number] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let offset = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 360;
      canvas.height = canvas.parentElement?.clientHeight || 460;
    };
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle HUD Telemetry Sine Wave
      ctx.strokeStyle = card.accent;
      ctx.lineWidth = 2;
      ctx.shadowColor = card.accent;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 4) {
        const noise = Math.sin(x * 0.03 + offset) * 14 + Math.cos(x * 0.06 - offset * 1.4) * 6;
        const y = canvas.height * 0.72 + noise;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw HUD Coordinate Ticks & Text
      ctx.fillStyle = "rgba(255,255,255,0.75)";
      ctx.font = "9px monospace";
      ctx.fillText(`HUD TELEMETRY // ${card.code} // METRIC ${card.metric}`, 16, canvas.height - 24);

      offset += 0.05;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(animId);
  }, [card]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-20" />;
}

function KononenkoSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phase1Ref = useRef<HTMLDivElement>(null);
  const hudRingRef = useRef<HTMLDivElement>(null);
  const headlinePhase2Ref = useRef<HTMLDivElement>(null);
  const filmstripTrackRef = useRef<HTMLDivElement>(null);
  const holoCardRef = useRef<HTMLDivElement>(null);

  const [activeInterestFilter, setActiveInterestFilter] = useState<string>("all");

  // Mouse tilt tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Set initial states to prevent FOUC / render flickering
      gsap.set(phase1Ref.current, { opacity: 1, scale: 1, filter: "blur(0px)" });
      if (hudRingRef.current) gsap.set(hudRingRef.current, { rotate: 0, scale: 1, opacity: 1, transformOrigin: "50% 50%" });
      if (headlinePhase2Ref.current) gsap.set(headlinePhase2Ref.current, { opacity: 0, y: 0 });
      if (filmstripTrackRef.current) gsap.set(filmstripTrackRef.current, { opacity: 0, x: "80vw" });
      if (holoCardRef.current) gsap.set(holoCardRef.current, { opacity: 0, scale: 0.95, y: 30, pointerEvents: "none" });

      // Main Pinned ScrollTrigger Timeline with smooth scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=380%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // ----------------------------------------------------
      // PHASE 1: 360-Degree Telemetry HUD Ring Rotation & Fade Out
      // ----------------------------------------------------
      if (hudRingRef.current) {
        tl.to(hudRingRef.current, {
          rotate: 360,
          scale: 1.35,
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
        });
      }

      tl.to(phase1Ref.current, {
        scale: 1.25,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.5,
        ease: "power2.inOut",
      }, "<");

      // ----------------------------------------------------
      // PHASE 2: Precision Line-by-Line Headline Mask Reveal (Starts AFTER Circle Rotation)
      // ----------------------------------------------------
      tl.to(headlinePhase2Ref.current, {
        opacity: 1,
        duration: 0.4,
        ease: "none",
      }, ">");

      const headlineLines = headlinePhase2Ref.current?.querySelectorAll(".line-item");
      if (headlineLines) {
        tl.fromTo(
          headlineLines,
          { yPercent: 120, opacity: 0, filter: "blur(8px)" },
          {
            yPercent: 0,
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.12,
            duration: 1.2,
            ease: "expo.out",
          },
          "<"
        );
      }

      // ----------------------------------------------------
      // PHASE 3: Horizontal Photo Filmstrip (Starts AFTER Circle completes)
      // ----------------------------------------------------
      if (filmstripTrackRef.current) {
        tl.to(filmstripTrackRef.current, {
          opacity: 1,
          duration: 0.4,
          ease: "none",
        }, ">");

        tl.to(
          filmstripTrackRef.current,
          {
            x: "-185vw",
            duration: 4.5,
            ease: "none",
          },
          "<"
        );
      }

      // Headline gracefully fades out as filmstrip sweeps across
      if (headlinePhase2Ref.current) {
        tl.to(
          headlinePhase2Ref.current,
          {
            opacity: 0,
            y: -50,
            filter: "blur(10px)",
            duration: 1.2,
            ease: "power2.in",
          },
          "-=3.0"
        );
      }

      // ----------------------------------------------------
      // PHASE 4: Sub-Zero Telemetry Manifesto Reveal (Stays visible until smooth section transition)
      // ----------------------------------------------------
      if (filmstripTrackRef.current) {
        tl.to(
          filmstripTrackRef.current,
          {
            opacity: 0,
            scale: 0.92,
            filter: "blur(10px)",
            duration: 1.2,
            ease: "power2.in",
          },
          "-=1.2"
        );
      }

      if (holoCardRef.current) {
        tl.to(
          holoCardRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            pointerEvents: "auto",
            duration: 1.5,
            ease: "expo.out",
          },
          "-=0.8"
        );

        // Holds clean until section unpins seamlessly into Services
        tl.to(holoCardRef.current, {
          scale: 1,
          duration: 2.5,
          ease: "none",
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const filterTabs = [
    { id: "all", label: "ALL" },
    { id: "f1", label: "FORMULA 1" },
    { id: "coffee", label: "CAFFEINE" },
    { id: "thriller", label: "THRILLERS" },
    { id: "tech", label: "TECH & GAMING" },
  ];

  return (
    <section
      id="kononenko-sequence"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative bg-[#060608] text-white select-none overflow-hidden"
    >
      {/* Ambient Drifting Telemetry Grid & Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center relative">
        
        {/* PHASE 1: 360-Degree Rotating Telemetry HUD Ring ("Refined & Bold / Essential") */}
        <div
          ref={phase1Ref}
          className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-20"
        >
          {/* Rotating Telemetry HUD Ring Wheel */}
          <div
            ref={hudRingRef}
            className="absolute w-[500px] h-[500px] md:w-[720px] md:h-[720px] lg:w-[880px] lg:h-[880px] rounded-full border border-white/10 pointer-events-none flex items-center justify-center"
          >
            {/* Degree Ticks around the ring */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
              const rad = (deg - 90) * (Math.PI / 180);
              const x = 50 + 48 * Math.cos(rad);
              const y = 50 + 48 * Math.sin(rad);
              return (
                <span
                  key={'tick-' + deg}
                  className="absolute font-mono text-[9px] text-amber-400 font-bold bg-[#060608] px-2 py-0.5 rounded border border-white/10 shadow-lg"
                  style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  {deg}° // SYS
                </span>
              );
            })}

            {/* Inner Concentric Circle Guide Lines */}
            <div className="w-[82%] h-[82%] rounded-full border border-white/10 border-dashed" />
            <div className="w-[64%] h-[64%] rounded-full border border-white/5" />
          </div>

          {/* Central Headline Statement */}
          <div className="text-center space-y-2 z-30 px-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/60">
                KONONENKO BUREAU • SUB-ZERO TELEMETRY
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-9xl tracking-tight leading-none text-white font-normal">
              Refined & Bold
            </h2>
            <h3 className="font-serif text-4xl md:text-6xl lg:text-8xl tracking-tight leading-none text-white/60 italic font-light">
              Essential
            </h3>
          </div>
        </div>

        {/* PHASE 2: Precision Grid-Aligned Line-by-Line Blurred Headline Reveal + Filter Bar */}
        <div className="absolute top-10 inset-x-0 z-30 pointer-events-none max-w-[110rem] mx-auto px-6 md:px-16 lg:px-20">
          <div
            ref={headlinePhase2Ref}
            className="max-w-2xl pointer-events-none space-y-4"
          >
            {/* Header Badge & Interactive Interest Filter Pills */}
            <div className="flex flex-wrap items-center gap-3 pointer-events-auto">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/70 font-bold">
                  PEOPLE & PROCESS • HUD 02
                </span>
              </div>

              {/* Micro Filter Pills */}
              <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/15 shadow-lg">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveInterestFilter(tab.id)}
                    className={`px-2.5 py-0.5 rounded-full font-mono text-[8.5px] uppercase tracking-wider transition-all cursor-pointer ${
                      activeInterestFilter === tab.id
                        ? "bg-white text-black font-extrabold shadow-md"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.04] tracking-tight">
              <div className="overflow-hidden pb-1">
                <span className="line-item block">A studio shaped by</span>
              </div>
              <div className="overflow-hidden pb-1">
                <span className="line-item block">clarity, trust, and a</span>
              </div>
              <div className="overflow-hidden pb-1">
                <span className="line-item block">collective pursuit of</span>
              </div>
              <div className="overflow-hidden pb-1">
                <span className="line-item block italic text-amber-300 font-light">thoughtful design.</span>
              </div>
            </h2>
          </div>
        </div>

        {/* PHASE 3: Horizontal Photo Filmstrip with Active Highlight Deck */}
        <div
          ref={filmstripTrackRef}
          className="absolute top-[64%] -translate-y-1/2 flex items-center gap-8 md:gap-14 z-20 pointer-events-auto cursor-grab active:cursor-grabbing pl-[10vw] opacity-0"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          {HUD_TELEMETRY_CARDS.map((card, idx) => {
            const isMatch = activeInterestFilter === "all" || card.category === activeInterestFilter;
            return (
              <motion.div
                key={'hud-card-' + card.id + '-' + idx}
                style={{
                  rotateX: mousePos.y * 6,
                  rotateY: mousePos.x * 6,
                }}
                whileHover={{ scale: 1.08, z: 40 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`hud-card relative shrink-0 w-[270px] md:w-[360px] lg:w-[410px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 bg-[#0d0d10] transition-all duration-500 group ${
                  isMatch ? "opacity-100 shadow-[0_25px_60px_rgba(0,0,0,0.9)]" : "opacity-30 grayscale"
                }`}
              >
                {/* Photo Media Asset */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-115 transition-transform duration-1000 ease-out"
                />

                {/* VHS Scanlines & Dark Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%),linear-gradient(90deg,rgba(255,0,0,0.04),rgba(0,255,0,0.01),rgba(0,0,255,0.04))] bg-[size:100%_4px,6px_100%] pointer-events-none z-10 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-65 transition-opacity" />

                {/* Live Canvas Telemetry Waveform Overlay */}
                <HUDTelemetryCanvas card={card} />

                {/* Top HUD Bar with High-Contrast White/Amber Stamp Badge */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center font-mono text-[9px] uppercase tracking-widest text-white/80 z-30 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg">
                  <span className="flex items-center gap-2 font-bold text-red-400">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    {card.frame}
                  </span>
                  {/* High-Contrast White Stamp Badge */}
                  <span className="px-2.5 py-0.5 rounded bg-[#f4f4f6] text-black font-extrabold text-[9px] shadow-lg">
                    {card.metric}
                  </span>
                </div>

                {/* Bottom Card Specs & Custom Interest Tags */}
                <div className="absolute bottom-5 left-5 right-5 z-30 space-y-1">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-cyan-400 font-bold block">
                    {card.code}
                  </span>
                  <h4 className="font-display text-lg md:text-xl font-extrabold uppercase text-white tracking-tight leading-tight group-hover:text-amber-300 transition-colors">
                    {card.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* PHASE 4: Holographic Glass Card Reveal & Smooth Unpin */}
        <div
          ref={holoCardRef}
          className="absolute inset-6 md:inset-16 lg:inset-24 bg-[#0a0a0e]/90 text-white rounded-[2.5rem] border border-white/20 p-8 md:p-16 flex flex-col justify-between z-40 shadow-[0_40px_120px_rgba(0,0,0,0.95)] opacity-0 pointer-events-auto overflow-hidden backdrop-blur-xl"
        >
          {/* Background Watermark */}
          <div className="absolute -right-16 -bottom-16 font-mono text-[14rem] font-extrabold text-white/[0.03] leading-none pointer-events-none select-none">
            TELEMETRY
          </div>

          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-white/50 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              SUB-ZERO TELEMETRY • SYSTEM MANIFESTO
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] bg-white text-black font-extrabold px-3 py-1 rounded-full shadow-lg">
              04 / 04 UNPIN
            </span>
          </div>

          <div className="max-w-3xl my-auto space-y-6">
            <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-white">
              “Architecture and digital software are identical crafts — both require structural integrity, spatial rhythm, and absolute clarity.”
            </h3>
            <p className="font-mono text-sm text-cyan-400 tracking-wider uppercase font-bold">
              — KONONENKO SYSTEM DIRECTIVE
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono text-xs text-white/40">
              SCROLL DOWN TO EXPLORE SERVICES
            </span>
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold">
              <span>CONTINUE JOURNEY ↓</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
