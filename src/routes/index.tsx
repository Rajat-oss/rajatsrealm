import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Code2,
  Layers,
  Rocket,
  Palette,
  Database,
  Globe,
  ArrowRight,
  Menu,
  X,
  Star,
} from "lucide-react";

import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";

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

const STACK_GROUPS = [
  {
    label: "Frontend",
    items: ["TypeScript", "React", "Next.js", "TanStack", "Tailwind", "Motion", "GSAP"],
  },
  {
    label: "Backend",
    items: ["Node.js", "tRPC", "PostgreSQL", "Prisma", "Supabase", "Edge Functions"],
  },
  {
    label: "Platform",
    items: ["AWS", "Docker", "Vercel", "Cloudflare", "Git", "CI/CD"],
  },
];

const PROJECTS = [
  {
    id: "01",
    year: "2026",
    title: "Vintvate Studio",
    tag: "Web Studio · Founding",
    desc: "A modern web studio building fast, conversion-focused websites and full-stack products for startups, creators, and growing businesses.",
    stack: ["Next.js", "TypeScript", "Postgres", "Motion"],
    href: "https://www.linkedin.com/company/vintvate",
    palette: ["#23395D", "#3B82F6", "#2F8F83"],
  },
  {
    id: "02",
    year: "2025",
    title: "Barket — Community Layer",
    tag: "Marketplace · Contribution",
    desc: "Contributing engineering & community efforts to Barket, an internet marketplace platform based in India. Focused on velocity and reliability.",
    stack: ["React", "Node", "REST", "AWS"],
    href: "https://www.linkedin.com/company/bark-et",
    palette: ["#E86A33", "#F5B85E", "#2B2B2B"],
  },
  {
    id: "03",
    year: "2025",
    title: "Product Engineering Sandbox",
    tag: "Full-stack Playground",
    desc: "A rotating lab of shipped experiments — SaaS starters, AI interfaces, and micro-tools built to sharpen product intuition and engineering craft.",
    stack: ["TypeScript", "Supabase", "AI SDK", "Edge"],
    href: "#",
    palette: ["#2F8F83", "#3B82F6", "#23395D"],
  },
];

const EXPERIENCE = [
  {
    when: "2026 — Now",
    role: "Founder & Engineer",
    org: "Vintvate",
    where: "Bhopal, India",
    text: "Building Vintvate — a studio for startups and creators. Product thinking, clean engineering, outcomes over output.",
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
  { icon: Rocket, title: "MVPs, fast", text: "Zero-to-one products, wired end-to-end in weeks — not quarters." },
  { icon: Layers, title: "Full-stack builds", text: "Type-safe React / Next.js frontends on scalable Node & Postgres." },
  { icon: Palette, title: "Interfaces that sell", text: "Editorial, motion-forward marketing sites that convert." },
  { icon: Code2, title: "AI features", text: "LLM interfaces, agents and RAG plumbing embedded in real products." },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <SmoothScroll />
      <CustomCursor />
      <BackgroundFX />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Services />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- Background FX (abstract, no imagery of people) ---------- */
function BackgroundFX() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: "var(--gradient-mesh)" }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 grid-lines opacity-[0.35]" />
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage: "url('/grain-overlay.svg')",
          backgroundSize: "180px 180px",
        }}
      />
    </>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const items = [
    ["Work", "#work"],
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Stack", "#stack"],
    ["Contact", "#contact"],
  ];
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all duration-500 ${
          scrolled ? "pt-3" : "pt-6"
        }`}
      >
        <nav
          className={`glass-light flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-500 ${
            scrolled ? "shadow-[var(--shadow-lift)]" : "shadow-[var(--shadow-soft)]"
          }`}
        >
          <a
            href="#top"
            data-cursor="Home"
            className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            <span className="font-grotesk font-semibold tracking-tight">Rajat<span className="text-emerald">.</span></span>
          </a>
          <span className="mx-1 hidden h-4 w-px bg-ink/10 md:block" />
          <ul className="hidden items-center md:flex">
            {items.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  data-cursor="Go"
                  className="rounded-full px-3.5 py-1.5 text-sm text-graphite transition hover:bg-ink/5 hover:text-ink"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            data-cursor="Let's talk"
            className="ml-1 hidden items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-sm font-medium text-bone transition hover:bg-navy sm:inline-flex"
          >
            Hire me <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-bone md:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </nav>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute inset-x-4 top-4 rounded-3xl bg-card p-6 shadow-[var(--shadow-lift)] transition-transform duration-500 ${
            open ? "translate-y-0" : "-translate-y-8"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-grotesk text-lg font-semibold">Rajat<span className="text-emerald">.</span></span>
            <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full bg-muted">
              <X className="h-4 w-4" />
            </button>
          </div>
          <ul className="mt-8 space-y-1">
            {items.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-4 font-display text-3xl text-ink transition hover:bg-muted"
                >
                  {label}
                  <ArrowUpRight className="h-5 w-5 text-graphite" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-ember px-4 py-3.5 text-sm font-medium text-white"
          >
            Hire me <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
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
  const tx = useTransform(sx, (v) => v * 30);
  const ty = useTransform(sy, (v) => v * 30);
  const tx2 = useTransform(sx, (v) => v * -18);
  const ty2 = useTransform(sy, (v) => v * -18);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32"
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      {/* Abstract composition — right side */}
      <motion.div
        style={{ x: tx, y: ty }}
        className="pointer-events-none absolute right-[-6%] top-[8%] hidden h-[520px] w-[520px] md:block"
      >
        <div className="absolute inset-0 animate-blob bg-gradient-to-br from-navy/25 via-azure/20 to-emerald/25 opacity-90 blur-[2px]" />
        <div className="absolute inset-8 animate-blob bg-gradient-to-tr from-ember/30 to-transparent" style={{ animationDelay: "-4s" }} />
      </motion.div>

      <motion.div
        style={{ x: tx2, y: ty2 }}
        className="pointer-events-none absolute right-[8%] top-[22%] hidden md:block"
      >
        <div className="hairline flex h-40 w-40 items-center justify-center rounded-3xl bg-card/70 backdrop-blur-md shadow-[var(--shadow-soft)] animate-float">
          <Code2 className="h-10 w-10 text-navy" />
        </div>
      </motion.div>
      <motion.div
        style={{ x: useTransform(sx, (v) => v * 22), y: useTransform(sy, (v) => v * 22) }}
        className="pointer-events-none absolute bottom-[18%] right-[26%] hidden md:block"
      >
        <div className="hairline grid h-24 w-24 place-items-center rounded-full bg-card shadow-[var(--shadow-soft)] animate-float" style={{ animationDelay: "-2s" }}>
          <Sparkles className="h-7 w-7 text-ember" />
        </div>
      </motion.div>

      {/* small dot grid patch */}
      <div className="pointer-events-none absolute left-6 top-40 hidden h-40 w-40 dot-grid md:block" />

      <div className="relative mx-auto grid w-full max-w-[110rem] gap-14 px-6 md:grid-cols-[1.4fr_0.9fr] md:px-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 shadow-[var(--shadow-soft)] hairline"
          >
            <span className="inline-flex h-1.5 w-1.5 animate-pulse-glow rounded-full bg-emerald" />
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-graphite">
              Available for select projects · 2026
            </span>
          </motion.div>

          <h1 className="font-display text-[clamp(3.4rem,11vw,12rem)] font-normal leading-[0.9] tracking-tighter text-ink">
            <RevealLine delay={0.05}>
              <span>Rajat</span>{" "}
              <span className="italic text-navy">Jhade</span>
            </RevealLine>
            <RevealLine delay={0.2}>
              <span className="text-graphite">building the</span>
            </RevealLine>
            <RevealLine delay={0.32}>
              <span className="text-gradient">quiet web.</span>
            </RevealLine>
          </h1>

          <div className="mt-10 grid max-w-2xl gap-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="text-lg leading-relaxed text-graphite md:text-xl"
            >
              I'm a{" "}
              <span className="relative inline-block h-[1.2em] w-[14ch] overflow-hidden align-bottom font-medium text-ink">
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
              </span>{" "}
              building <span className="font-medium text-ink">Vintvate</span> from
              Bhopal — shipping fast, conversion-focused products and interfaces
              that feel expensive on purpose.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="flex flex-wrap items-center gap-3"
            >
              <MagneticButton href="#work" variant="primary" data-cursor="See work">
                See selected work <ArrowRight className="ml-1 h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="#contact" data-cursor="Contact">
                Start a project
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Right-hand info card stack */}
        <div className="relative hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="glass-light relative mt-24 rounded-3xl p-6 shadow-[var(--shadow-lift)]"
          >
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-graphite">
              <span>// currently</span>
              <span className="flex items-center gap-1"><Star className="h-3 w-3 text-ember" /> Founding</span>
            </div>
            <div className="mt-5 font-display text-3xl leading-tight text-ink">
              Building <span className="italic text-emerald">Vintvate</span> —
              a studio for startups & creators.
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Product", "Web", "AI", "Motion"].map((t) => (
                <span key={t} className="rounded-full bg-ink/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-graphite">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom hero strip */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-[110rem] items-end justify-between gap-6 px-6 pb-10 md:px-12">
          <div className="grid grid-cols-3 gap-8 text-sm md:gap-16">
            <Stat k="1+" v="Years shipping" />
            <Stat k="15+" v="Products built" />
            <Stat k="100%" v="Async-ready" />
          </div>
          <div className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-graphite md:flex">
            <span>Scroll</span>
            <span className="relative flex h-8 w-4 items-start justify-center rounded-full border border-ink/20 p-1">
              <span className="h-1.5 w-0.5 animate-pulse-glow rounded-full bg-ink" />
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
      <div className="font-display text-4xl leading-none tracking-tight text-ink md:text-5xl">
        {k}
      </div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.24em] text-graphite">{v}</div>
    </div>
  );
}

function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ delay, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
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
  variant = "ghost",
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "ghost" | "ember";
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
      el.style.transform = `translate(${x * 0.22}px, ${y * 0.3}px)`;
    };
    const onLeave = () => (el.style.transform = "translate(0,0)");
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  const styles =
    variant === "primary"
      ? "bg-ink text-bone hover:bg-navy"
      : variant === "ember"
        ? "bg-ember text-white hover:brightness-110"
        : "bg-card text-ink hairline hover:bg-muted";
  return (
    <a
      ref={ref}
      href={href}
      {...rest}
      className={`inline-flex items-center rounded-full px-5 py-3 text-sm font-medium shadow-[var(--shadow-soft)] transition-[background,transform,box-shadow] duration-300 will-change-transform ${styles}`}
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
    <section aria-hidden className="relative border-y hairline bg-card/40 py-8">
      <div className="flex animate-marquee whitespace-nowrap">
        {line.map((w, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8 font-display text-4xl text-graphite md:text-6xl">
            {w}
            <span className="text-ember">✦</span>
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
          <div className="space-y-6 text-lg leading-relaxed text-graphite md:text-xl">
            <p>
              I'm <span className="text-ink">Rajat Jhade</span> — a full-stack developer
              based in Bhopal, currently building <span className="text-ink">Vintvate</span>,
              a studio helping startups and creators turn ideas into scalable digital products.
            </p>
            <p>
              My approach blends product thinking, clean engineering, and pragmatic business
              outcomes — not just code delivery. I care about interfaces that feel considered,
              backends that don't wake you up at 3AM, and MVPs that ship in weeks.
            </p>
            <p className="font-display text-3xl italic text-navy md:text-4xl">
              I move fast. I care about the details. I ship.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-3xl bg-card p-8 shadow-[var(--shadow-lift)] hairline">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald/15 blur-3xl" />
            <ul className="relative space-y-5">
              {[
                ["Based in", "Bhopal, MP · India"],
                ["Focus", "Product engineering · Web platforms"],
                ["Currently", "Building Vintvate"],
                ["Open to", "Founding roles · High-agency teams"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline justify-between gap-6 border-b border-ink/8 pb-4 last:border-0 last:pb-0">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-graphite">{k}</span>
                  <span className="text-right font-display text-xl text-ink">{v}</span>
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
    <Section id="experience" eyebrow="Trajectory" title="A short, honest timeline.">
      <div className="relative">
        <div className="absolute left-3 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-navy/40 via-emerald/30 to-transparent md:left-1/2" />
        <div className="space-y-16">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className={`relative grid gap-6 md:grid-cols-2 md:gap-14 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="pl-10 md:pl-0 md:pr-14 md:text-right">
                  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-graphite">{e.when}</div>
                  <div className="mt-2 font-display text-3xl leading-[1.05] text-ink md:text-5xl">
                    {e.role}
                  </div>
                  <div className="mt-1 text-emerald">{e.org}</div>
                  <div className="mt-1 text-sm text-graphite">{e.where}</div>
                </div>
                <div className="pl-10 md:pl-14">
                  <p className="text-graphite md:text-lg">{e.text}</p>
                </div>
                <span className="absolute left-0.5 top-2 h-6 w-6 rounded-full border-2 border-navy bg-background md:left-1/2 md:-translate-x-1/2">
                  <span className="absolute inset-1.5 rounded-full bg-emerald" />
                </span>
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
      <div className="grid gap-6 md:grid-cols-3">
        {STACK_GROUPS.map((g, gi) => (
          <Reveal key={g.label} delay={gi * 0.08}>
            <div className="group h-full rounded-3xl bg-card p-7 shadow-[var(--shadow-soft)] hairline transition-transform duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-graphite">
                  0{gi + 1} · {g.label}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    data-cursor={s}
                    className="rounded-full border border-ink/8 bg-background px-3 py-1.5 text-sm text-ink transition hover:border-navy hover:bg-navy hover:text-bone"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { icon: Code2, title: "Frontend", text: "React, Next.js, TanStack Start, Tailwind, GSAP, Motion." },
          { icon: Database, title: "Backend", text: "Node, tRPC, Postgres, Prisma, Supabase, Edge functions." },
          { icon: Globe, title: "Craft", text: "Type-safety, DX, motion design, performance budgets, SEO." },
        ].map(({ icon: Icon, title, text }) => (
          <Reveal key={title}>
            <div className="rounded-3xl bg-navy p-8 text-bone shadow-[var(--shadow-lift)]">
              <Icon className="h-6 w-6 text-emerald" />
              <div className="mt-6 font-display text-3xl">{title}</div>
              <p className="mt-2 text-sm text-bone/70">{text}</p>
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
      <div className="space-y-28 md:space-y-40">
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
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  return (
    <div
      ref={ref}
      className={`grid gap-10 md:grid-cols-12 md:items-center md:gap-14 ${
        idx % 2 ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Reveal>
        <a
          href={p.href}
          target="_blank"
          rel="noreferrer"
          data-cursor="View"
          className="group relative col-span-7 block"
        >
          <motion.div
            style={{ y }}
            className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-lift)] hairline"
          >
            <AbstractProject palette={p.palette} idx={idx} />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6 text-xs uppercase tracking-widest text-ink/80">
              <span className="rounded-full bg-white/70 px-3 py-1 font-mono backdrop-blur">{p.tag}</span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-bone transition group-hover:bg-ember">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </motion.div>
        </a>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-graphite">
            <span>{p.id}</span>
            <span className="h-px w-8 bg-ink/20" />
            <span>{p.year}</span>
          </div>
          <h3 className="mt-4 font-display text-4xl leading-[1] tracking-tight text-ink md:text-6xl">
            {p.title}
          </h3>
          <p className="mt-5 max-w-lg text-graphite md:text-lg">{p.desc}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-ink/10 bg-background px-3 py-1 text-xs font-medium text-graphite"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              data-cursor="Live"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-bone transition hover:bg-navy"
            >
              Live preview <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              data-cursor="Code"
              className="inline-flex items-center gap-1.5 rounded-full bg-card px-4 py-2 text-sm font-medium text-ink hairline transition hover:bg-muted"
            >
              <Github className="h-3.5 w-3.5" /> Code
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/* Abstract project visual — geometric composition, no photos */
function AbstractProject({ palette, idx }: { palette: string[]; idx: number }) {
  const [a, b, c] = palette;
  return (
    <div className="absolute inset-0">
      {/* base wash */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 90% at 20% 20%, ${a}22, transparent 60%), radial-gradient(120% 90% at 80% 80%, ${b}22, transparent 60%), linear-gradient(180deg, #FFFFFF, #F0EFEC)`,
        }}
      />
      {/* dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {idx === 0 && (
        <>
          <div className="absolute left-[14%] top-[16%] h-[54%] w-[50%] rounded-2xl bg-card shadow-[var(--shadow-lift)] hairline">
            <div className="flex items-center gap-1.5 border-b border-ink/8 px-3 py-2">
              <span className="h-2 w-2 rounded-full" style={{ background: c }} />
              <span className="h-2 w-2 rounded-full" style={{ background: b }} />
              <span className="h-2 w-2 rounded-full" style={{ background: a }} />
            </div>
            <div className="space-y-2 p-4">
              <div className="h-2 w-3/4 rounded bg-ink/10" />
              <div className="h-2 w-2/3 rounded bg-ink/10" />
              <div className="mt-4 h-16 rounded-lg" style={{ background: `linear-gradient(135deg, ${a}, ${b})` }} />
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="h-8 rounded bg-ink/5" />
                <div className="h-8 rounded bg-ink/5" />
                <div className="h-8 rounded" style={{ background: c }} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[14%] right-[10%] grid h-24 w-24 place-items-center rounded-2xl shadow-[var(--shadow-lift)]" style={{ background: a }}>
            <span className="font-display text-3xl text-white">V</span>
          </div>
          <div className="absolute right-[26%] top-[12%] h-16 w-16 rounded-full" style={{ background: b, opacity: 0.85 }} />
        </>
      )}
      {idx === 1 && (
        <>
          <div className="absolute inset-x-[12%] top-[18%] flex gap-3">
            {[a, b, c, a].map((col, i) => (
              <div
                key={i}
                className="flex-1 rounded-2xl shadow-[var(--shadow-soft)]"
                style={{
                  background: `linear-gradient(180deg, ${col}, ${col}CC)`,
                  height: `${140 + i * 20}px`,
                }}
              />
            ))}
          </div>
          <div className="absolute bottom-[16%] left-[14%] right-[14%] rounded-2xl bg-card p-4 shadow-[var(--shadow-lift)] hairline">
            <div className="flex items-center justify-between">
              <div className="h-3 w-32 rounded bg-ink/15" />
              <div className="h-6 w-16 rounded-full" style={{ background: a }} />
            </div>
            <div className="mt-3 h-2 w-full rounded bg-ink/8" />
            <div className="mt-2 h-2 w-2/3 rounded bg-ink/8" />
          </div>
        </>
      )}
      {idx === 2 && (
        <>
          <div className="absolute inset-[10%] rounded-2xl bg-ink p-5 font-mono text-[11px] leading-relaxed text-bone/80 shadow-[var(--shadow-lift)]">
            <div className="mb-3 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
            </div>
            <div><span style={{ color: c }}>const</span> <span style={{ color: b }}>engineer</span> = &#123;</div>
            <div className="pl-4">craft: <span style={{ color: a }}>'obsessive'</span>,</div>
            <div className="pl-4">stack: [<span style={{ color: a }}>'ts'</span>, <span style={{ color: a }}>'react'</span>],</div>
            <div className="pl-4">ship: <span style={{ color: b }}>() =&gt;</span> <span style={{ color: a }}>'always'</span>,</div>
            <div>&#125;;</div>
            <div className="mt-3 h-1 w-24 rounded" style={{ background: `linear-gradient(90deg, ${a}, ${b})` }} />
          </div>
          <div className="absolute right-[6%] top-[8%] h-24 w-24 rounded-full blur-2xl" style={{ background: a, opacity: 0.5 }} />
        </>
      )}
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
              className="group relative h-full overflow-hidden rounded-3xl bg-card p-7 shadow-[var(--shadow-soft)] hairline transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-bone transition-colors group-hover:bg-emerald">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-8 font-display text-2xl leading-tight text-ink md:text-3xl">{title}</div>
              <p className="mt-3 text-sm text-graphite">{text}</p>
              <ArrowUpRight className="mt-6 h-4 w-4 text-graphite opacity-60 transition-transform duration-500 group-hover:translate-x-1 group-hover:opacity-100" />
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
        <blockquote className="mx-auto max-w-5xl font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-7xl">
          <span className="text-ember">"</span>
          Great software is <span className="italic text-navy">felt</span> before it's understood.
          I build products people trust in the first three seconds.
          <span className="text-ember">"</span>
        </blockquote>
        <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-graphite">
          <span className="h-px w-10 bg-ink/20" />
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
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-90" style={{ background: "var(--gradient-mesh)" }} />
      <div className="mx-auto max-w-[100rem] px-6 md:px-12">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 shadow-[var(--shadow-soft)] hairline">
            <span className="inline-flex h-1.5 w-1.5 animate-pulse-glow rounded-full bg-ember" />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-graphite">Let's build</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(3rem,12vw,12rem)] font-normal leading-[0.9] tracking-tighter text-ink">
            Have an idea?
            <br />
            <span className="italic text-navy">Let's ship it.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <Reveal delay={0.1}>
            <p className="max-w-xl text-lg text-graphite md:text-xl">
              I take on a small number of founder-led projects each quarter. If you're
              building something you care about, I'd love to hear about it.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <MagneticButton
                href="mailto:hello@vintvate.com"
                variant="ember"
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

        <div className="mt-14 grid gap-4 border-t border-ink/8 pt-10 md:grid-cols-3">
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
    <div className="rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)] hairline">
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-graphite">
        <Icon className="h-3 w-3 text-emerald" /> {k}
      </div>
      <div className="mt-3 font-display text-xl text-ink">{v}</div>
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-card/60 py-10">
      <div className="mx-auto flex max-w-[100rem] flex-col items-center justify-between gap-4 px-6 text-xs text-graphite md:flex-row md:px-12">
        <div className="font-mono uppercase tracking-widest">© 2026 Rajat Jhade — Built with intent.</div>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/in/rajat-jhade-5b928730a" data-cursor="LinkedIn" className="hover:text-ink">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" data-cursor="GitHub" className="hover:text-ink">
            <Github className="h-4 w-4" />
          </a>
          <a href="mailto:hello@vintvate.com" data-cursor="Email" className="hover:text-ink">
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
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">
              <span className="h-px w-8 bg-ink/20" />
              {eyebrow}
            </div>
          </Reveal>
          {title && (
            <Reveal delay={0.05}>
              <h2 className="max-w-3xl font-display text-4xl leading-[1] tracking-tight text-ink md:text-7xl">
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
