"use client";

import {
  BadgeCheck,
  BriefcaseMedical,
  Building2,
  Grid3X3,
  MapPin,
  Rocket,
  Store,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* Store data                                                          */
/* ------------------------------------------------------------------ */
/* Add real photos by setting `src` (e.g. "/images/stores/flagship.webp").
   Without `src`, the illustrated SVG placeholder is shown.             */

type StoreItem = {
  name: string;
  color: string;
  detail: string;
  src?: string;
  tall?: boolean;
};

const stores: StoreItem[] = [
  { name: "Villupuram flagship", color: "#f6d326", detail: "QnQ PHARMACY" },
  { name: "Wellness shelves", color: "#ffd921", detail: "WELLNESS" },
  { name: "Eyewear counter", color: "#f7e64b", detail: "EYE WEAR", tall: true },
  { name: "Storefront entrance", color: "#f5d01a", detail: "YOUR PHARMACY" },
  { name: "Neighborhood outlet", color: "#f3ca13", detail: "QnQ PHARMACY" },
  { name: "Pharmacy counter", color: "#f4ce14", detail: "EVERYDAY CARE" },
  { name: "Community pharmacy", color: "#f6d326", detail: "COMMUNITY CARE" },
  { name: "Aisle display", color: "#ffd921", detail: "QnQ WELLNESS" },
];

/* Each column hangs from the top; `rope` is the length of its first rope. */
const columns: { rope: number; items: number[] }[] = [
  { rope: 78, items: [0, 1] },
  { rope: 150, items: [2, 3] },
  { rope: 112, items: [4, 5] },
  { rope: 78, items: [6, 7] },
];

/* ------------------------------------------------------------------ */
/* Hooks & small helpers                                               */
/* ------------------------------------------------------------------ */

function useInView<T extends Element>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

/** Fade + rise-in, used once per block with a staggered delay. */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>(0.15);
  return (
    <div
      className={`qa-reveal ${inView ? "is-in" : ""} ${className}`}
      ref={ref}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/** Counts from 0 to `to` with an ease-out curve once `run` is true. */
function CountUp({
  to,
  suffix = "",
  run,
  duration = 1600,
}: {
  to: number;
  suffix?: string;
  run: boolean;
  duration?: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to, duration]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Store visuals                                                       */
/* ------------------------------------------------------------------ */

function StorePhoto({
  name,
  color,
  detail,
}: {
  name: string;
  color: string;
  detail: string;
}) {
  const id = `wall-${name.replaceAll(" ", "-")}`;
  return (
    <svg
      aria-label={name}
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      viewBox="0 0 220 270"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={id} x2="0" y2="1">
          <stop stopColor="#fffef2" />
          <stop offset="1" stopColor="#fff6c2" />
        </linearGradient>
      </defs>
      <rect width="220" height="270" fill={`url(#${id})`} />
      <path d="M0 0h220v33H0z" fill={color} />
      <path d="M9 33h202v14H9z" fill="#fff9de" />
      <text
        fill="#0759bd"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        fontWeight="800"
        textAnchor="middle"
        x="110"
        y="25"
      >
        {detail}
      </text>
      <path d="M16 57h188v177H16z" fill="#fffdf3" />
      {[0, 1, 2].map((row) => (
        <g key={row} transform={`translate(0 ${row * 47})`}>
          <path d="M24 72h172v4H24z" fill="#d2a82f" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
            const x = 29 + item * 21;
            const height = 20 + ((item + row) % 3) * 5;
            const productColor = [
              "#e96b4b",
              "#62a75e",
              "#f3c83d",
              "#6e9ed1",
              "#db8b44",
            ][(item + row) % 5];

            return (
              <g key={item}>
                <rect
                  fill={productColor}
                  height={height}
                  rx="2"
                  width="14"
                  x={x}
                  y={73 - height}
                />
                <path d={`M${x + 3} ${76 - height}h8v3h-8z`} fill="#fff4cc" />
              </g>
            );
          })}
        </g>
      ))}
      <path d="M10 230h200v9H10z" fill="#eacb47" />
      <path d="M0 247h220v23H0z" fill="#f3d54b" />
      <rect fill="#fffdf2" height="22" rx="3" width="70" x="75" y="235" />
      <text
        fill="#0759bd"
        fontFamily="Arial, sans-serif"
        fontSize="8"
        fontWeight="700"
        textAnchor="middle"
        x="110"
        y="249"
      >
        QnQ Pharmacy
      </text>
      <path d="M12 265h196" stroke="#fff9dd" strokeWidth="5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Hanging, swinging cards                                             */
/* ------------------------------------------------------------------ */

/**
 * One rope + card. The next card in the column hangs from the bottom of this
 * one *inside* the same swinging group, so the whole column behaves like a
 * chain: the upper card swings, and the lower card swings on top of that.
 */
function Hanger({
  items,
  rope,
  depth,
  seed,
}: {
  items: number[];
  rope: number;
  depth: number;
  seed: number;
}) {
  const [current, ...rest] = items;
  const store = stores[current];

  const style = {
    "--a": `${depth === 0 ? 1.7 : 2.6}deg`,
    animationDuration: `${5.2 + ((seed * 7) % 5) * 0.55}s`,
    animationDelay: `${-((seed * 1.37) % 5)}s`,
  } as CSSProperties;

  return (
    <div className="qa-sway flex w-full flex-col items-center" style={style}>
      <span
        aria-hidden="true"
        className="qa-rope block w-px bg-gradient-to-b from-brand-blue/20 to-brand-blue/35"
        style={{ "--r": rope } as CSSProperties}
      />
      <div
        className={`group relative w-full ${store.tall ? "aspect-[0.58]" : "aspect-[0.8]"}`}
      >
        {/* pin where the rope meets the card */}
        <span
          aria-hidden="true"
          className="absolute -top-1.5 left-1/2 z-[2] h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-brand-blue/40 shadow-sm"
        />
        <div className="qa-card qa-spot relative h-full w-full overflow-hidden rounded-2xl border-[4px] border-white bg-white shadow-[0_12px_30px_rgba(80,68,31,0.16)] sm:border-[5px]">
          {store.src ? (
            <Image
              alt={store.name}
              className="object-cover"
              fill
              sizes="(max-width: 640px) 24vw, 150px"
              src={store.src}
            />
          ) : (
            <StorePhoto {...store} />
          )}
        </div>
      </div>

      {rest.length > 0 && (
        <Hanger depth={depth + 1} items={rest} rope={34} seed={seed + 3} />
      )}
    </div>
  );
}

function FloatingChip({
  className,
  delay,
  children,
}: {
  className: string;
  delay: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`qa-float absolute z-10 flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-3.5 py-2 text-xs font-bold text-brand-blue shadow-[0_10px_30px_rgba(80,68,31,0.14)] backdrop-blur-md ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}

function HangingStores() {
  const [ref, visible] = useInView<HTMLDivElement>(0.2);

  return (
    /* The wrapper centres the gallery against the left column. */
    <div className="relative mx-auto flex w-full max-w-[640px] items-center justify-center px-3 py-12 sm:px-8 sm:py-14">
      {/* backdrop fills the wrapper, so every card stays inside it */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-[44px] border border-white/70 bg-gradient-to-br from-white/70 via-[#fff6cf]/60 to-[#ffe9b8]/50 shadow-[0_30px_80px_rgba(145,117,24,0.12)] backdrop-blur-sm"
      />

      <div
        aria-label="QnQ pharmacy and wellness store locations"
        className={`qa-stage relative mx-auto grid w-full max-w-[570px] grid-cols-4 items-start gap-x-2.5 px-1 py-6 sm:gap-x-6 sm:px-4 ${
          visible ? "is-in" : ""
        }`}
        ref={ref}
        role="group"
      >
        {columns.map((col, i) => (
          <div
            className="qa-col mx-auto w-full max-w-[150px]"
            key={i}
            style={{ animationDelay: `${i * 140}ms` }}
          >
            <Hanger depth={0} items={col.items} rope={col.rope} seed={i + 1} />
          </div>
        ))}
      </div>

      <FloatingChip className="-bottom-3 left-5 sm:left-10" delay="0s">
        <MapPin aria-hidden="true" className="text-brand-green" size={14} />
        Villupuram, since 2019
      </FloatingChip>
      <FloatingChip className="-top-3 right-5 sm:right-10" delay="-2.4s">
        <Store aria-hidden="true" className="text-brand-green" size={14} />
        80+ stores
      </FloatingChip>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Content blocks                                                      */
/* ------------------------------------------------------------------ */

function StoryPoint({
  title,
  children,
  accent,
}: {
  title: string;
  children: ReactNode;
  accent: string;
}) {
  return (
    <div
      className={`qa-card qa-spot qa-bg group/story relative mt-5 rounded-r-2xl border-l-[3px] ${accent} bg-white/75 px-5 py-4 shadow-[0_6px_20px_rgba(80,68,31,0.06)]`}
    >
      <h3 className="text-base font-extrabold text-brand-green transition-transform duration-300 group-hover/story:translate-x-1.5">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-6 text-brand-copy">{children}</p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="qa-card qa-spot qa-bg group/card relative h-full rounded-[28px] border border-[#e7e2d4] bg-white/80 px-6 pb-7 pt-10 text-center shadow-sm sm:px-9">
      <span className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-[#ffeaa0] bg-white text-[#e8b800] shadow-sm transition-all duration-500 group-hover/card:rotate-[8deg] group-hover/card:scale-110 group-hover/card:border-[#ffd51d] group-hover/card:bg-[#ffd51d] group-hover/card:text-white group-hover/card:shadow-[0_10px_24px_rgba(255,213,29,0.55)]">
        {icon}
      </span>
      <h3 className="mt-2 text-xl font-extrabold text-brand-blue transition-colors duration-300 group-hover/card:text-brand-green sm:text-2xl">
        {title}
      </h3>
      {children}
    </article>
  );
}

function Roadmap() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);

  const milestones = [
    { label: "Founded", value: "2019" },
    { label: "Active stores", value: "80+" },
    { label: "Target", value: "7,000+ by 2035" },
  ];

  return (
    <article className="qa-card qa-spot qa-bg qa-bg-warm group/road relative overflow-hidden rounded-[30px] border border-[#ffe083] bg-gradient-to-r from-[#fff9da] via-[#fff8e4] to-[#ffefd7] px-6 py-8 shadow-[0_4px_12px_rgba(145,117,24,0.08)] sm:px-10 sm:py-10 lg:px-12">
      <div className="relative z-[1] max-w-[790px]" ref={ref}>
        <p className="text-2xl font-extrabold text-brand-green sm:text-[28px]">
          7,000+ outlets by 2035
        </p>
        <p className="mt-3 text-base leading-7 text-brand-copy sm:text-lg sm:leading-8">
          We are on an ambitious roadmap to create 25,000 employment
          opportunities across South India, delivering ethical dispensing and
          world-class service through our &quot;Customer-First&quot; care
          systems.
        </p>

        {/* animated timeline */}
        <div className="relative mt-8 max-w-[600px]">
          <div className="absolute left-0 right-0 top-[7px] h-[3px] rounded-full bg-brand-blue/10" />
          <div
            className={`qa-line absolute left-0 right-0 top-[7px] h-[3px] origin-left rounded-full bg-gradient-to-r from-[#ffd51d] to-brand-green ${
              inView ? "is-in" : ""
            }`}
          />
          <ol className="relative grid grid-cols-3">
            {milestones.map((m, i) => (
              <li
                className={`qa-dot ${inView ? "is-in" : ""} ${
                  i === 0 ? "items-start text-left" : i === 2 ? "items-end text-right" : "items-center text-center"
                } flex flex-col`}
                key={m.label}
                style={{ "--d": `${300 + i * 450}ms` } as CSSProperties}
              >
                <span className="h-[17px] w-[17px] rounded-full border-[3px] border-white bg-brand-green shadow-[0_0_0_3px_rgba(255,213,29,0.55)]" />
                <span className="mt-2 text-sm font-extrabold text-brand-blue">
                  {m.value}
                </span>
                <span className="text-xs text-[#5793c9]">{m.label}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* count-up stats */}
        <div className="mt-8 grid max-w-[600px] grid-cols-3 divide-x divide-brand-blue/15">
          <div className="px-2 text-center">
            <p className="text-2xl font-extrabold tabular-nums text-brand-green sm:text-3xl">
              <CountUp run={inView} suffix="+" to={80} />
            </p>
            <p className="mt-1 text-xs text-[#5793c9] sm:text-sm">
              Active stores
            </p>
          </div>
          <div className="px-2 text-center">
            <p className="text-2xl font-extrabold tabular-nums text-brand-green sm:text-3xl">
              <CountUp run={inView} suffix="+" to={300} />
            </p>
            <p className="mt-1 text-xs text-[#5793c9] sm:text-sm">
              Professionals
            </p>
          </div>
          <div className="px-2 text-center">
            <p className="text-2xl font-extrabold tabular-nums text-brand-green sm:text-3xl">
              <CountUp run={inView} suffix=" States" to={3} />
            </p>
            <p className="mt-1 text-xs text-[#5793c9] sm:text-sm">&amp; UTs</p>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute right-[10%] top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <div className="qa-float">
          <Rocket
            className="rotate-12 fill-brand-green/15 text-brand-green/25 transition-all duration-500 group-hover/road:-translate-y-2 group-hover/road:rotate-[24deg] group-hover/road:scale-110 group-hover/road:fill-brand-green/30 group-hover/road:text-brand-green/50"
            size={104}
          />
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function AboutQnq() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let activeCard: HTMLElement | null = null;
    const resetCard = (card: HTMLElement) => {
      card.style.removeProperty("--tilt-x");
      card.style.removeProperty("--tilt-y");
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const target = event.target;
      const card =
        target instanceof Element
          ? (target.closest<HTMLElement>(".qa-card") ?? null)
          : null;

      if (activeCard && activeCard !== card) resetCard(activeCard);
      activeCard = card;
      if (!card) return;

      const bounds = card.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const horizontalPosition = Math.max(
        -1,
        Math.min(1, (x / bounds.width - 0.5) * 2),
      );
      const verticalPosition = Math.max(
        -1,
        Math.min(1, (y / bounds.height - 0.5) * 2),
      );
      card.style.setProperty("--tilt-x", `${(horizontalPosition * 4).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(verticalPosition * -4).toFixed(2)}deg`);
      /* cursor-following spotlight */
      card.style.setProperty("--mx", `${x.toFixed(0)}px`);
      card.style.setProperty("--my", `${y.toFixed(0)}px`);
    };

    const onPointerLeave = () => {
      if (activeCard) resetCard(activeCard);
      activeCard = null;
    };

    section.addEventListener("pointermove", onPointerMove);
    section.addEventListener("pointerleave", onPointerLeave);
    return () => {
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <section
      aria-labelledby="about-qnq-title"
      className="relative isolate overflow-hidden bg-[linear-gradient(to_right,rgba(255,201,57,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,201,57,0.12)_1px,transparent_1px),linear-gradient(115deg,#fffbed_0%,#fff9df_55%,#fff0df_100%)] bg-[size:60px_60px,60px_60px,auto] py-16 sm:py-20 lg:py-24"
      id="about"
      ref={sectionRef}
    >
      <style>{CSS}</style>

      {/* ambient drifting glows */}
      <div
        aria-hidden="true"
        className="qa-drift pointer-events-none absolute -right-24 top-20 -z-10 h-96 w-96 rounded-full bg-[#ffe78d]/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="qa-drift pointer-events-none absolute -left-24 bottom-10 -z-10 h-80 w-80 rounded-full bg-brand-green/10 blur-3xl [animation-delay:-6s]"
      />

      <div className="mx-auto w-[calc(100%-32px)] max-w-[1280px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
        {/* lg:items-center vertically centres the gallery on the copy */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div className="max-w-[640px]">
            <Reveal>
              <div className="qa-badge relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#ffd51d] px-4 py-2 text-xs font-bold text-brand-blue shadow-sm">
                <BadgeCheck aria-hidden="true" size={15} />
                For the People, By Doctors
              </div>
            </Reveal>

            <Reveal delay={90}>
              <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.3em] text-brand-green">
                About QnQ
              </p>
              <h2
                className="mt-3 max-w-[600px] text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-brand-blue sm:text-5xl"
                id="about-qnq-title"
              >
                Building a Quality,
                <br className="hidden sm:block" />{" "}
                <span className="qa-shine bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue bg-[length:200%_auto] bg-clip-text text-transparent">
                  Healthy Society
                </span>
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 text-sm leading-[1.75] text-brand-copy sm:text-[15px]">
                QnQ Pharmacy is a South India-focused healthcare retail chain
                under QnQ Healthcare Private Limited, headquartered in
                Villupuram, Tamil Nadu. Founded in 2019, the company
                specializes in affordable generic medicines and integrated
                healthcare services designed to improve accessibility and
                reduce healthcare costs for communities.
              </p>
              <p className="mt-3 text-sm leading-[1.75] text-brand-copy sm:text-[15px]">
                From a Tier-III city pilot, QnQ has grown into a regional
                healthcare network spanning Tamil Nadu, Karnataka, and
                Puducherry. Our FICO (Franchise Invested, Company Operated)
                model combines local entrepreneurship with centralized quality
                and service standards.
              </p>
            </Reveal>

            <Reveal delay={270}>
              <StoryPoint
                accent="border-brand-green"
                title="Addressing Rising Costs"
              >
                Our model focuses on quality-tested generic medicines at
                affordable prices, helping reduce out-of-pocket healthcare
                expenses without compromising on safety.
              </StoryPoint>
            </Reveal>
            <Reveal delay={340}>
              <StoryPoint
                accent="border-[#ffd51d]"
                title="A Regional Healthcare Network"
              >
                More than 80 outlets bring accessible care closer to
                communities across South India, with a consistent,
                customer-first experience.
              </StoryPoint>
            </Reveal>
          </div>

          <HangingStores />
        </div>

        <div className="mt-20 grid gap-x-5 gap-y-12 md:grid-cols-2">
          <Reveal>
            <FeatureCard
              icon={<Grid3X3 aria-hidden="true" size={25} />}
              title="OTC, FMCG & medicines online"
            >
              <p className="mx-auto mt-2 max-w-[540px] text-sm leading-6 text-brand-copy">
                For online orders, QnQ Pharmacy focuses on OTC and FMCG
                categories alongside quality medicines. Select Tier-I
                locations also host our broader healthcare services in person.
              </p>
              <div className="mt-4 flex justify-center gap-2">
                {["OTC", "FMCG"].map((tag) => (
                  <span
                    className="rounded-full border border-[#e5e5e5] bg-[#faf9f5] px-4 py-1.5 text-xs font-bold text-brand-blue transition-colors duration-300 group-hover/card:border-[#ffd51d] group-hover/card:bg-[#fff3b8]"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FeatureCard>
          </Reveal>

          <Reveal delay={120}>
            <FeatureCard
              icon={<BriefcaseMedical aria-hidden="true" size={25} />}
              title="Medical Leadership"
            >
              <p className="mt-2 text-sm leading-6 text-brand-copy">
                Led by experienced professionals bringing clinical insight to
                our mission.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <p className="text-sm text-[#686868]">
                  <strong className="block font-extrabold text-brand-green">
                    Dr. Kalaikovan
                  </strong>
                  MD &amp; Co-Founder
                </p>
                <p className="text-sm text-[#686868]">
                  <strong className="block font-extrabold text-brand-green">
                    Dr. Kathirvel J
                  </strong>
                  Co-Founder &amp; CEO
                </p>
              </div>
            </FeatureCard>
          </Reveal>
        </div>

        <div className="mt-10">
          <Reveal>
            <Roadmap />
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-14 max-w-[1160px] sm:mt-16">
          <p className="text-center text-3xl font-extrabold uppercase leading-tight tracking-[-0.035em] text-brand-blue sm:text-4xl lg:text-5xl">
            &quot;QnQ Pharmacy — Because everyone deserves a quality life&quot;
          </p>
        </Reveal>

        <Reveal className="mt-8" delay={120}>
          <div className="flex flex-wrap justify-center gap-5 text-xs font-semibold text-brand-copy">
            <span className="inline-flex items-center gap-2">
              <Store aria-hidden="true" className="text-brand-green" size={15} />
              Community-first care
            </span>
            <span className="inline-flex items-center gap-2">
              <Building2 aria-hidden="true" className="text-brand-green" size={15} />
              South India network
            </span>
            <span className="inline-flex items-center gap-2">
              <UsersRound aria-hidden="true" className="text-brand-green" size={15} />
              Healthcare for all
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Styles                                                              */
/* ------------------------------------------------------------------ */

const CSS = `
/* Rope length scales down on small screens */
.qa-stage { --k: 0.55; }
@media (min-width: 640px) { .qa-stage { --k: 0.8; } }
@media (min-width: 1024px) { .qa-stage { --k: 1; } }
.qa-rope { height: calc(var(--r) * 1px * var(--k)); }

/* Scroll reveal: soft rise + unblur, staggered with --d */
.qa-reveal {
  opacity: 0;
  transform: translate3d(0, 26px, 0);
  filter: blur(6px);
  transition:
    opacity 800ms cubic-bezier(0.2, 0.8, 0.2, 1) var(--d, 0ms),
    transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) var(--d, 0ms),
    filter 800ms ease var(--d, 0ms);
}
.qa-reveal.is-in { opacity: 1; transform: none; filter: none; }

/* Pointer-driven 3D tilt and pop */
.qa-card {
  transform: perspective(900px)
    rotateX(var(--tilt-y, 0deg))
    rotateY(var(--tilt-x, 0deg))
    translateY(0)
    scale(1);
  transform-style: preserve-3d;
  transition:
    transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 260ms ease,
    border-color 260ms ease;
  will-change: transform;
}
.qa-card:hover {
  transform: perspective(900px)
    rotateX(var(--tilt-y, 0deg))
    rotateY(var(--tilt-x, 0deg))
    translateY(-8px)
    scale(1.025);
  box-shadow: 0 22px 42px rgba(80, 68, 31, 0.18);
  border-color: rgba(255, 210, 29, 0.72);
}
.qa-card > * { transform: translateZ(12px); }

/* Hover background change: a warm gradient fades in under the content */
.qa-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 244, 184, 0.9) 0%,
    rgba(255, 228, 140, 0.55) 55%,
    rgba(255, 255, 255, 0.2) 100%
  );
  transition: opacity 400ms ease;
}
.qa-bg:hover::before { opacity: 1; }
/* roadmap card is already warm, so it brightens instead */
.qa-bg-warm::before {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.75) 0%,
    rgba(255, 247, 214, 0.5) 100%
  );
}

/* Cursor-following spotlight on interactive cards */
.qa-spot::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background: radial-gradient(
    240px circle at var(--mx, 50%) var(--my, 50%),
    rgba(255, 213, 29, 0.28),
    transparent 70%
  );
  transition: opacity 300ms ease;
}
.qa-spot:hover::after { opacity: 1; }

/* Gallery: drop-in when scrolled into view */
.qa-col { opacity: 0; transform: translate3d(0, -60px, 0); }
.qa-stage.is-in .qa-col {
  animation: qa-drop 1.1s cubic-bezier(0.34, 1.4, 0.5, 1) forwards;
}
@keyframes qa-drop {
  0%   { opacity: 0; transform: translate3d(0, -60px, 0); }
  40%  { opacity: 1; }
  100% { opacity: 1; transform: none; }
}

/* Pendulum swing from the top of each rope */
.qa-sway {
  transform-origin: 50% 0;
  animation-name: qa-swing;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  will-change: transform;
}
@keyframes qa-swing {
  from { transform: rotate(calc(var(--a) * -1)); }
  to   { transform: rotate(var(--a)); }
}

/* Floating chips / rocket */
.qa-float { animation: qa-bob 6s ease-in-out infinite; }
@keyframes qa-bob {
  0%, 100% { translate: 0 0; }
  50%      { translate: 0 -8px; }
}

/* Ambient background drift */
.qa-drift { animation: qa-drift 18s ease-in-out infinite alternate; }
@keyframes qa-drift {
  from { transform: translate3d(0, 0, 0) scale(1); }
  to   { transform: translate3d(-30px, 24px, 0) scale(1.08); }
}

/* Gradient heading shimmer */
.qa-shine { animation: qa-shine 6s linear infinite; }
@keyframes qa-shine { to { background-position: 200% center; } }

/* Badge light sweep */
.qa-badge::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.7) 50%, transparent 70%);
  transform: translateX(-120%);
  animation: qa-sweep 4.5s ease-in-out 1.2s infinite;
}
@keyframes qa-sweep {
  0%, 55% { transform: translateX(-120%); }
  100%    { transform: translateX(120%); }
}

/* Roadmap timeline */
.qa-line { transform: scaleX(0); transition: transform 1.6s cubic-bezier(0.22, 0.8, 0.2, 1) 200ms; }
.qa-line.is-in { transform: scaleX(1); }
.qa-dot { opacity: 0; transform: translateY(8px); transition: opacity 600ms ease var(--d), transform 600ms ease var(--d); }
.qa-dot.is-in { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  .qa-reveal { opacity: 1 !important; transform: none !important; filter: none !important; transition: none !important; }
  .qa-col { opacity: 1 !important; transform: none !important; animation: none !important; }
  .qa-sway, .qa-float, .qa-drift, .qa-shine, .qa-badge::after { animation: none !important; }
  .qa-line { transform: none !important; transition: none !important; }
  .qa-dot { opacity: 1 !important; transform: none !important; transition: none !important; }
  .qa-card {
    transform: none !important;
    transition: none !important;
    will-change: auto;
  }
  .qa-card > * { transform: none !important; }
}
`;