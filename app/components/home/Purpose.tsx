"use client";

import { Eye, HeartPulse, Rocket } from "lucide-react";
import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* Illustrations (unchanged)                                           */
/* ------------------------------------------------------------------ */

function StorefrontIllustration() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      fill="none"
      viewBox="0 0 360 260"
    >
      <defs>
        <linearGradient id="store-sky" x1="180" x2="180" y1="0" y2="260">
          <stop stopColor="#FFF8D6" />
          <stop offset="1" stopColor="#E7F5E5" />
        </linearGradient>
        <linearGradient id="storefront" x1="65" x2="300" y1="70" y2="215">
          <stop stopColor="#FFD42A" />
          <stop offset="1" stopColor="#F4B900" />
        </linearGradient>
      </defs>
      <rect width="360" height="260" fill="url(#store-sky)" />
      <circle cx="298" cy="48" r="25" fill="#FFF1A5" />
      <path d="M0 198h360v62H0z" fill="#B7D791" />
      <path d="m47 105 40-48h187l42 48v111H47V105Z" fill="#FFFDF4" />
      <path d="M62 105h238v20H62z" fill="url(#storefront)" />
      <path d="M73 80h217v25H73z" fill="#FFE03B" />
      <text
        fill="#0759BD"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontWeight="800"
        textAnchor="middle"
        x="181"
        y="98"
      >
        QnQ Pharmacy
      </text>
      <path d="M71 125h218v89H71z" fill="#F9F5E6" />
      <path d="M81 135h64v79H81z" fill="#C5E5E8" />
      <path d="M153 135h125v13H153z" fill="#E8C33C" />
      <path d="M153 151h125v4H153z" fill="#B78925" />
      {[0, 1, 2, 3].map((item) => (
        <g key={item}>
          <rect
            fill={["#5C9B65", "#E77A54", "#6698C3", "#E3B443"][item]}
            height={20 + (item % 2) * 5}
            rx="3"
            width="17"
            x={160 + item * 27}
            y="156"
          />
          <rect
            fill={["#E77A54", "#E3B443", "#5C9B65", "#6698C3"][item]}
            height="21"
            rx="3"
            width="17"
            x={160 + item * 27}
            y="183"
          />
        </g>
      ))}
      <path d="M47 215h267v9H47z" fill="#D6B338" />
      <path d="M0 225h360v35H0z" fill="#D6E4B8" />
      <path d="M107 225v-42h37v42m66 0v-42h37v42" fill="#FFD4B3" />
      <circle cx="126" cy="175" r="8" fill="#AC6849" />
      <path d="M118 184h17l8 40h-31l6-40Z" fill="#248C55" />
      <circle cx="228" cy="175" r="8" fill="#D49A6C" />
      <path d="M220 184h17l8 40h-31l6-40Z" fill="#0759BD" />
      <path d="M18 224h49m236 0h38" stroke="#88B96E" strokeWidth="4" />
    </svg>
  );
}

function CommunityIllustration() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      fill="none"
      viewBox="0 0 360 260"
    >
      <defs>
        <linearGradient id="city-sky" x1="180" x2="180" y1="0" y2="260">
          <stop stopColor="#FFE98F" />
          <stop offset=".48" stopColor="#F5D17A" />
          <stop offset="1" stopColor="#E9B56F" />
        </linearGradient>
      </defs>
      <rect width="360" height="260" fill="url(#city-sky)" />
      <circle cx="285" cy="46" r="28" fill="#FFF4C7" fillOpacity=".75" />
      <path d="M0 145 38 114l35 25 45-52 47 43 48-58 43 60 39-41 65 51v75H0v-72Z" fill="#D1B47B" />
      <path d="M0 173h360v87H0z" fill="#D5C7A1" />
      <g fill="#EDE5C8">
        <path d="M12 136h35v58H12zm53-21h41v75H65zm52 18h35v57h-35zm66-37h43v94h-43zm56 23h35v71h-35zm48-19h39v90h-39z" />
      </g>
      <g fill="#7E9AB0">
        <path d="M19 146h8v9h-8zm15 0h8v9h-8zm-15 17h8v9h-8zm58-19h9v10h-9zm16 0h9v10h-9zm-16 18h9v10h-9zm-1-37h8v10h-8zm15 0h8v10h-8zm74 9h9v10h-9zm16 0h9v10h-9zm-16 19h9v10h-9zm0-40h9v10h-9zm16 0h9v10h-9zm60 24h8v10h-8zm15 0h8v10h-8zm-15 18h8v10h-8zm48-25h8v10h-8zm15 0h8v10h-8zm-15 18h8v10h-8z" />
      </g>
      <path d="M0 202h360v58H0z" fill="#D8C8A1" />
      <path d="M25 181h72v48H25zm103-9h76v57h-76zm113 11h81v46h-81z" fill="#FFF9DF" />
      <path d="M20 180h82v12H20zm102-10h88v13h-88zm114 10h89v12h-89z" fill="#FFD329" />
      <path d="M31 198h60v31H31zm102 3h69v26h-69zm113 1h72v27h-72z" fill="#F1C32A" />
      <text
        fill="#0759BD"
        fontFamily="Arial, sans-serif"
        fontSize="7"
        fontWeight="800"
        textAnchor="middle"
        x="61"
        y="189"
      >
        QnQ PHARMACY
      </text>
      <text
        fill="#0759BD"
        fontFamily="Arial, sans-serif"
        fontSize="7"
        fontWeight="800"
        textAnchor="middle"
        x="166"
        y="181"
      >
        QnQ PHARMACY
      </text>
      <text
        fill="#0759BD"
        fontFamily="Arial, sans-serif"
        fontSize="7"
        fontWeight="800"
        textAnchor="middle"
        x="277"
        y="189"
      >
        QnQ PHARMACY
      </text>
      <path d="M0 237h360v23H0z" fill="#A8B997" />
      <path d="m165 260 19-44 20 44m-79 0 15-30 14 30m82 0 18-36 19 36" fill="#788B6C" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Motion primitives                                                   */
/* ------------------------------------------------------------------ */

/** Adds `is-in` once the element scrolls into view; CSS does the rest. */
function InView({
  children,
  className = "",
  style,
  threshold = 0.2,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div
      className={`${className} ${visible ? "is-in" : ""}`}
      ref={ref}
      style={style}
    >
      {children}
    </div>
  );
}

/** Pointer-driven 3D tilt. Children can use `translate: 0 0 Npx` for depth. */
function Tilt({
  children,
  className = "",
  max = 6,
  base = 0,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  base?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--ry", `${((x - 0.5) * 2 * max).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${((0.5 - y) * 2 * max).toFixed(2)}deg`);
    el.style.setProperty("--gx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${(y * 100).toFixed(1)}%`);
    el.dataset.active = "1";
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
    delete el.dataset.active;
  };

  return (
    <div
      className={`qp-tilt ${className}`}
      onPointerLeave={onLeave}
      onPointerMove={onMove}
      ref={ref}
      style={{ "--bry": `${base}deg` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/** Spotlight that follows the pointer inside a card. */
function useSpotlight() {
  return {
    onPointerMove: (e: PointerEvent<HTMLElement>) => {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--sx", `${e.clientX - r.left}px`);
      el.style.setProperty("--sy", `${e.clientY - r.top}px`);
    },
  };
}

function CountUp({
  to,
  suffix = "",
  separator = false,
  duration = 1900,
}: {
  to: number;
  suffix?: string;
  separator?: boolean;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(to);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          setValue(Math.round(to * (1 - Math.pow(1 - p, 4))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {separator ? value.toLocaleString("en-US") : value}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Floating image cards (3D)                                           */
/* ------------------------------------------------------------------ */

function PurposeImage({
  children,
  accent,
  floating,
  label,
  side,
  parallax,
}: {
  children: ReactNode;
  accent: string;
  floating: ReactNode;
  label: string;
  side: "left" | "right";
  parallax: number;
}) {
  const isLeft = side === "left";
  return (
    <div
      className="qp-parallax"
      style={{ "--par": `${parallax}px` } as CSSProperties}
    >
      <InView
        className={isLeft ? "qp-enter-left" : "qp-enter-right"}
        threshold={0.15}
      >
        <div className="qp-persp">
          <Tilt
            base={isLeft ? 12 : -12}
            className="relative mx-auto w-full max-w-[330px] pb-12"
            max={9}
          >
            {/* depth layers behind the photo */}
            <span
              aria-hidden="true"
              className={`qp-back absolute inset-x-2 top-3 aspect-[1.25] rounded-[24px] border-[3px] ${accent} bg-white/40`}
              style={{ translate: "0 0 -60px", rotate: isLeft ? "-5deg" : "5deg" }}
            />
            <span
              aria-hidden="true"
              className="absolute inset-x-8 bottom-6 h-10 rounded-full bg-brand-green/15 blur-xl"
              style={{ translate: "0 0 -90px" }}
            />

            <div className="qp-photo relative aspect-[1.25] overflow-hidden rounded-[24px] border-[5px] border-white bg-white shadow-[0_28px_60px_rgba(54,58,43,0.2)]">
              {children}
              <span aria-hidden="true" className="qp-shine" />
              <span aria-hidden="true" className="qp-glare" />
            </div>

            <div
              className={`qp-badge absolute -bottom-1 right-0 flex h-[112px] w-[142px] items-center justify-center rounded-[24px] border-[4px] ${accent} bg-white text-brand-green shadow-[0_22px_44px_rgba(54,58,43,0.2)] sm:right-[-12px] sm:h-[126px] sm:w-[158px]`}
            >
              <span className="sr-only">{label}</span>
              {floating}
            </div>
          </Tilt>
        </div>
      </InView>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Background ornaments                                                */
/* ------------------------------------------------------------------ */

const PLUSES = [
  { left: "12%", top: "2rem", size: "text-4xl", par: 34, rot: 0, delay: 0 },
  { left: "78%", top: "4rem", size: "text-5xl", par: -52, rot: 12, delay: 1.2 },
  { left: "4%", top: "58%", size: "text-3xl", par: 70, rot: -8, delay: 2.1 },
  { left: "93%", top: "72%", size: "text-4xl", par: -30, rot: 20, delay: 0.6 },
  { left: "46%", top: "90%", size: "text-3xl", par: 46, rot: 6, delay: 1.8 },
];

function Ornaments() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Soft depth orbs */}
      <span
        className="qp-orb absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#ffe78d]/45 blur-3xl"
        style={{ "--z": 60, "--m": 34 } as CSSProperties}
      />
      <span
        className="qp-orb absolute -right-28 bottom-10 h-[26rem] w-[26rem] rounded-full bg-brand-green/10 blur-3xl"
        style={{ "--z": -80, "--m": -28 } as CSSProperties}
      />
      <span
        className="qp-orb absolute left-[38%] top-[34%] h-56 w-56 rounded-full bg-[#fff1a8]/50 blur-3xl"
        style={{ "--z": 30, "--m": 16 } as CSSProperties}
      />

      {/* Plus signs, parallaxed at different depths */}
      {PLUSES.map((p, i) => (
        <span
          className="qp-orb absolute"
          key={i}
          style={{ left: p.left, top: p.top, "--z": p.par, "--m": p.par / 2 } as CSSProperties}
        >
          <span
            className={`qp-drift block font-light text-[#ffe982]/70 ${p.size}`}
            style={{ rotate: `${p.rot}deg`, animationDelay: `${-p.delay * 2}s` }}
          >
            +
          </span>
        </span>
      ))}

      {/* Rings and dots */}
      <span
        className="qp-orb absolute bottom-[8%] left-[30%]"
        style={{ "--z": -44, "--m": 22 } as CSSProperties}
      >
        <span className="qp-drift block h-20 w-20 rounded-full border-2 border-[#ffe982]/70" />
      </span>
      <span
        className="qp-orb absolute right-[38%] top-[14%]"
        style={{ "--z": 56, "--m": -18 } as CSSProperties}
      >
        <span className="qp-drift block h-9 w-9 rounded-full bg-[#ffe982]/60" style={{ animationDelay: "-3s" }} />
      </span>
      <span
        className="qp-orb absolute right-[8%] top-[40%]"
        style={{ "--z": -36, "--m": -12 } as CSSProperties}
      >
        <span className="qp-drift block h-14 w-14 rounded-full border-2 border-brand-green/25" style={{ animationDelay: "-5s" }} />
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

const HEADING_WORDS = ["Vision", "&", "Mission"];

export default function Purpose() {
  const sectionRef = useRef<HTMLElement>(null);
  const spot = useSpotlight();

  // Scroll progress (-1…1) + pointer position drive all parallax via CSS vars
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
      el.style.setProperty("--sp", Math.max(-1, Math.min(1, p)).toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onPointer = (e: globalThis.PointerEvent) => {
      if (e.pointerType === "touch") return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
      el.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    el.addEventListener("pointermove", onPointer);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      el.removeEventListener("pointermove", onPointer);
    };
  }, []);

  const leftFloating = (
    <div className="flex flex-col items-center gap-2">
      <HeartPulse aria-hidden="true" className="qp-beat" size={40} strokeWidth={2.2} />
      <span className="text-xs font-bold text-brand-blue">Care for everyone</span>
    </div>
  );
  const rightFloating = (
    <div className="flex flex-col items-center gap-2">
      <Rocket
        aria-hidden="true"
        className="qp-launch fill-brand-green/20 text-brand-green"
        size={40}
      />
      <span className="text-xs font-bold text-brand-blue">A healthier future</span>
    </div>
  );

  return (
    <section
      aria-labelledby="purpose-title"
      className="qp-root relative isolate overflow-hidden bg-[linear-gradient(to_right,rgba(255,201,57,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,201,57,0.12)_1px,transparent_1px),linear-gradient(115deg,#fff8df_0%,#fffdf3_50%,#fff0dc_100%)] bg-[size:60px_60px,60px_60px,auto] py-16 sm:py-20 lg:py-24"
      id="purpose"
      ref={sectionRef}
    >
      <style>{CSS}</style>
      <Ornaments />

      <div className="mx-auto w-[calc(100%-32px)] max-w-[1280px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
        {/* ------------------------------ Header ------------------------------ */}
        <InView className="qp-header text-center" threshold={0.4}>
          <div className="flex items-center justify-center gap-4">
            <span aria-hidden="true" className="qp-line h-px w-10 origin-right bg-brand-green/50 sm:w-16" />
            <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-brand-green">
              Our Purpose
            </p>
            <span aria-hidden="true" className="qp-line h-px w-10 origin-left bg-brand-green/50 sm:w-16" />
          </div>
          <h2
            className="qp-persp mt-2 text-4xl font-extrabold tracking-[-0.045em] text-brand-blue sm:text-5xl"
            id="purpose-title"
          >
            {HEADING_WORDS.map((word, i) => (
              <span
                className={`qp-word inline-block ${i === 1 ? "mx-[0.18em] text-brand-green" : ""}`}
                key={word}
                style={{ "--i": i } as CSSProperties}
              >
                {word}
              </span>
            ))}
          </h2>
          <span
            aria-hidden="true"
            className="qp-underline mx-auto mt-4 block h-1 w-24 origin-center rounded-full bg-gradient-to-r from-[#ffd51d] via-brand-green to-[#ffd51d]"
          />
        </InView>

        <div className="mt-12 grid items-center gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(500px,1.9fr)_minmax(0,1fr)] lg:gap-8">
          <div className="hidden lg:block">
            <PurposeImage
              accent="border-[#ffd51d]"
              floating={leftFloating}
              label="Accessible healthcare for every community"
              parallax={46}
              side="left"
            >
              <StorefrontIllustration />
            </PurposeImage>
          </div>

          {/* --------------------------- Centre card --------------------------- */}
          <InView className="qp-enter-up" threshold={0.15}>
            <div className="qp-persp qp-persp-lg">
              <Tilt className="relative rounded-[32px]" max={3.5}>
                {/* glass panel + depth shadow */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-10 -bottom-5 h-12 rounded-full bg-brand-green/10 blur-2xl"
                  style={{ translate: "0 0 -70px" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-[32px] border border-white/80 bg-white/75 shadow-[0_30px_80px_rgba(131,105,47,0.12)] backdrop-blur-sm"
                />
                <span aria-hidden="true" className="qp-glare qp-glare-card rounded-[32px]" />

                <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-8 xl:px-12">
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                    <article
                      className="qp-card qp-pop group relative overflow-hidden rounded-[25px] border border-[#e9e6de] bg-white/70 px-6 py-7 sm:px-7"
                      style={{ "--d": 250 } as CSSProperties}
                      {...spot}
                    >
                      <span aria-hidden="true" className="qp-spot" />
                      <span aria-hidden="true" className="qp-bar bg-brand-green" />
                      <span className="qp-icon relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                        <Eye
                          aria-hidden="true"
                          fill="currentColor"
                          size={34}
                          strokeWidth={1.7}
                        />
                      </span>
                      <h3 className="relative mt-4 text-2xl font-extrabold text-brand-blue">
                        Our Vision
                      </h3>
                      <p className="relative mt-2 text-sm leading-6 text-brand-copy">
                        To make quality healthcare accessible and affordable for
                        every human life.
                      </p>
                    </article>

                    <article
                      className="qp-card qp-pop group relative overflow-hidden rounded-[25px] border border-[#e9e6de] bg-white/70 px-6 py-7 sm:px-7"
                      style={{ "--d": 420 } as CSSProperties}
                      {...spot}
                    >
                      <span aria-hidden="true" className="qp-spot" />
                      <span aria-hidden="true" className="qp-bar bg-[#ffd51d]" />
                      <span className="qp-icon relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                        <Rocket
                          aria-hidden="true"
                          className="fill-brand-green"
                          size={34}
                          strokeWidth={1.7}
                        />
                      </span>
                      <h3 className="relative mt-4 text-2xl font-extrabold text-brand-blue">
                        Our Mission
                      </h3>
                      <p className="relative mt-2 text-sm leading-6 text-brand-copy">
                        Build a community of 25,000+ QnQians united to inspire,
                        empower, and succeed.
                      </p>
                    </article>
                  </div>

                  <div
                    className="qp-pop qp-stats mx-auto mt-8 grid max-w-[500px] grid-cols-2 divide-x divide-[#e4e0d5]"
                    style={{ "--d": 600 } as CSSProperties}
                  >
                    <div className="px-3 text-center">
                      <p className="qp-stat text-3xl font-extrabold text-[#f5bd00] sm:text-4xl">
                        <CountUp separator suffix="+" to={7000} />
                      </p>
                      <p className="mt-1 text-sm text-brand-copy">Stores by 2035</p>
                    </div>
                    <div className="px-3 text-center">
                      <p className="qp-stat text-3xl font-extrabold text-[#f5bd00] sm:text-4xl">
                        <CountUp suffix="M+" to={100} />
                      </p>
                      <p className="mt-1 text-sm text-brand-copy">Lives impacted</p>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          </InView>

          <div className="hidden lg:block">
            <PurposeImage
              accent="border-brand-green"
              floating={rightFloating}
              label="Growing a network of community pharmacies"
              parallax={-38}
              side="right"
            >
              <CommunityIllustration />
            </PurposeImage>
          </div>
        </div>

        {/* ------------------------- Mobile / tablet images ------------------------- */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:hidden">
          <PurposeImage
            accent="border-[#ffd51d]"
            floating={leftFloating}
            label="Accessible healthcare for every community"
            parallax={24}
            side="left"
          >
            <StorefrontIllustration />
          </PurposeImage>
          <PurposeImage
            accent="border-brand-green"
            floating={rightFloating}
            label="Growing a network of community pharmacies"
            parallax={-20}
            side="right"
          >
            <CommunityIllustration />
          </PurposeImage>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Styles                                                              */
/* ------------------------------------------------------------------ */

const CSS = `
.qp-root {
  --sp: 0; --mx: 0; --my: 0;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}

/* ---------- Background parallax ---------- */
.qp-orb {
  transform: translate3d(
    calc(var(--mx) * var(--m) * 1px),
    calc(var(--sp) * var(--z) * -1px + var(--my) * var(--m) * 0.6px),
    0
  );
  will-change: transform;
}
.qp-drift { animation: qp-drift 11s ease-in-out infinite; }
@keyframes qp-drift {
  0%, 100% { translate: 0 0; scale: 1; }
  50% { translate: 8px -16px; scale: 1.1; }
}

/* ---------- Perspective helpers ---------- */
.qp-persp { perspective: 1100px; }
.qp-persp-lg { perspective: 1600px; }
.qp-parallax {
  transform: translate3d(0, calc(var(--sp) * var(--par)), 0);
  will-change: transform;
}

/* ---------- Tilt ---------- */
.qp-tilt {
  transform-style: preserve-3d;
  transform: rotateX(var(--rx, 0deg)) rotateY(calc(var(--ry, 0deg) + var(--bry, 0deg)));
  transition: transform 0.7s var(--ease);
}
.qp-tilt[data-active] { transition: transform 0.12s ease-out; }

/* ---------- Glare ---------- */
.qp-glare {
  pointer-events: none;
  position: absolute;
  inset: 0;
  opacity: 0;
  background: radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,0.55), transparent 55%);
  transition: opacity 0.4s;
}
.qp-tilt[data-active] .qp-glare { opacity: 1; }
.qp-glare-card {
  background: radial-gradient(520px circle at var(--gx, 50%) var(--gy, 50%), rgba(255,249,201,0.55), transparent 60%);
}

/* ---------- Header ---------- */
.qp-line { transform: scaleX(0); }
.is-in .qp-line { animation: qp-line 1s var(--ease) 0.1s forwards; }
@keyframes qp-line { to { transform: scaleX(1); } }

.qp-word {
  opacity: 0;
  transform: translateY(40px) rotateX(-75deg);
  transform-origin: 50% 100%;
}
.is-in .qp-word { animation: qp-word 1s var(--ease) calc(var(--i) * 140ms + 150ms) forwards; }
@keyframes qp-word { to { opacity: 1; transform: none; } }

.qp-underline { transform: scaleX(0); }
.is-in .qp-underline { animation: qp-line 1.1s var(--ease) 0.7s forwards; }

/* ---------- Entrances ---------- */
.qp-enter-left, .qp-enter-right, .qp-enter-up { opacity: 0; }
.qp-enter-left  { transform: translate3d(-70px, 20px, 0) rotate(-3deg); }
.qp-enter-right { transform: translate3d(70px, 20px, 0) rotate(3deg); }
.qp-enter-up    { transform: translate3d(0, 60px, 0) scale(0.96); }
.qp-enter-left.is-in, .qp-enter-right.is-in, .qp-enter-up.is-in {
  animation: qp-enter 1.2s var(--ease) forwards;
}
.qp-enter-right.is-in { animation-delay: 0.15s; }
@keyframes qp-enter { to { opacity: 1; transform: none; } }

/* Items popping up inside the centre card */
.qp-pop { opacity: 0; transform: translateY(34px) scale(0.94); }
.is-in .qp-pop { animation: qp-pop 0.9s var(--ease) calc(var(--d, 0) * 1ms + 250ms) forwards; }
@keyframes qp-pop { to { opacity: 1; transform: none; } }

/* ---------- Floating photo ---------- */
.qp-photo { animation: qp-bob 7s ease-in-out infinite; }
.qp-back { opacity: 0.9; }
@keyframes qp-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-9px); }
}

.qp-badge {
  translate: 0 0 80px;
  animation: qp-bob-b 5.5s ease-in-out -1.5s infinite;
}
@keyframes qp-bob-b {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-13px) rotate(1.5deg); }
}

/* Light sweep across the photo */
.qp-shine {
  pointer-events: none;
  position: absolute;
  inset-block: -10%;
  left: 0;
  width: 34%;
  background: linear-gradient(100deg, transparent, rgba(255,255,255,0.55), transparent);
  transform: translateX(-160%) skewX(-14deg);
  animation: qp-shine 6.5s ease-in-out 1.5s infinite;
}
@keyframes qp-shine {
  0% { transform: translateX(-160%) skewX(-14deg); }
  40%, 100% { transform: translateX(420%) skewX(-14deg); }
}

/* Icon micro-animations */
.qp-beat { animation: qp-beat 1.8s ease-in-out infinite; transform-origin: center; }
@keyframes qp-beat {
  0%, 40%, 100% { transform: scale(1); }
  15% { transform: scale(1.18); }
  28% { transform: scale(1.05); }
}
.qp-launch { animation: qp-launch 3.2s ease-in-out infinite; }
@keyframes qp-launch {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(3px, -5px) rotate(4deg); }
}

/* ---------- Vision / Mission cards ---------- */
.qp-card {
  translate: 0 0 36px;
  box-shadow: 0 10px 26px rgba(80, 68, 31, 0.07);
  transition: translate 0.5s var(--ease), box-shadow 0.5s var(--ease), border-color 0.3s;
}
.qp-card:hover {
  translate: 0 -6px 66px;
  border-color: rgba(52, 143, 53, 0.35);
  box-shadow: 0 26px 50px rgba(80, 68, 31, 0.16);
}
.qp-spot {
  pointer-events: none;
  position: absolute;
  inset: 0;
  opacity: 0;
  background: radial-gradient(260px circle at var(--sx, 50%) var(--sy, 50%), rgba(255, 224, 59, 0.28), transparent 70%);
  transition: opacity 0.3s;
}
.qp-card:hover .qp-spot { opacity: 1; }

.qp-bar {
  position: absolute;
  inset-inline: 0;
  top: 0;
  height: 3px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s var(--ease);
}
.qp-card:hover .qp-bar { transform: scaleX(1); }

.qp-icon { transition: transform 0.5s var(--ease), background-color 0.3s; }
.qp-icon::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid rgba(52, 143, 53, 0.4);
  animation: qp-ping 2.8s cubic-bezier(0, 0, 0.2, 1) infinite;
}
@keyframes qp-ping {
  0% { transform: scale(1); opacity: 0.6; }
  80%, 100% { transform: scale(1.55); opacity: 0; }
}
.qp-card:hover .qp-icon { transform: rotate(-8deg) scale(1.1); background-color: rgba(52, 143, 53, 0.18); }

/* Stats */
.qp-stats { translate: 0 0 24px; }
.qp-stat { background: linear-gradient(100deg, #f5bd00 30%, #ffe66d 50%, #f5bd00 70%); background-size: 250% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: qp-text 5s linear infinite; }
@keyframes qp-text { to { background-position: -250% 0; } }

/* ---------- Mobile: calmer depth ---------- */
@media (max-width: 1023px) {
  .qp-card { translate: 0 0 0; }
  .qp-card:hover { translate: 0 -4px 0; }
  .qp-stats { translate: 0 0 0; }
}

/* ---------- Reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  .qp-word, .qp-pop, .qp-enter-left, .qp-enter-right, .qp-enter-up {
    opacity: 1 !important; transform: none !important; animation: none !important;
  }
  .qp-line, .qp-underline { transform: none !important; animation: none !important; }
  .qp-orb, .qp-parallax, .qp-tilt { transform: none !important; }
  .qp-photo, .qp-badge, .qp-shine, .qp-drift, .qp-beat, .qp-launch,
  .qp-stat, .qp-icon::after { animation: none !important; }
  .qp-stat { color: #f5bd00; background: none; }
}
`;


