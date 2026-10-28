"use client";

import { ArrowRight, HeartPulse, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

const HEADING_LINES = ["Everyone", "Deserves a", "Quality Life."];
const TOTAL_CHARS = HEADING_LINES.reduce((n, l) => n + l.length, 0);
const TYPE_START_DELAY = 500; // ms before typing begins
const TYPE_SPEED = 50; // ms per character

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      mediaQuery.addEventListener("change", onChange);
      return () => mediaQuery.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

function useTypewriter(total: number, reduced: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduced) return;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= total) {
            if (interval) clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, TYPE_SPEED);
    }, TYPE_START_DELAY);

    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [total, reduced]);

  return reduced ? total : count;
}

/* ------------------------------------------------------------------ */
/* Small components                                                    */
/* ------------------------------------------------------------------ */

function CountUp({
  to,
  suffix = "",
  delay = 0,
  duration = 1400,
  reduced,
}: {
  to: number;
  suffix?: string;
  delay?: number;
  duration?: number;
  reduced: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const timeout = setTimeout(() => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 4); // easeOutQuart
        setValue(Math.round(to * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [to, delay, duration, reduced]);

  return (
    <>
      {reduced ? to : value}
      {suffix}
    </>
  );
}

function TypedHeading({ count, showCaret }: { count: number; showCaret: boolean }) {
  const activeLine = HEADING_LINES.findIndex(
    (_, index) =>
      count <=
      HEADING_LINES.slice(0, index + 1).reduce((total, line) => total + line.length, 0),
  );

  return (
    <h1
      aria-label={HEADING_LINES.join(" ")}
      className="m-0 text-[clamp(2.75rem,10vw,3.75rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-blue md:text-[clamp(2.75rem,5.6vw,4rem)] xl:text-[clamp(3.25rem,4.6vw,4.25rem)]"
      id="hero-title"
    >
      {HEADING_LINES.map((line, i) => {
        const lineStart = HEADING_LINES.slice(0, i).reduce(
          (total, previousLine) => total + previousLine.length,
          0,
        );
        const typed = Math.max(0, Math.min(line.length, count - lineStart));
        const isLast = i === HEADING_LINES.length - 1;
        return (
          <span aria-hidden="true" className="block" key={line}>
            <span className={isLast ? "text-brand-green" : undefined}>
              {line.slice(0, typed)}
              {showCaret && activeLine === i && (
                <span
                  className={`qh-caret ${isLast ? "bg-brand-green" : "bg-brand-blue"}`}
                />
              )}
              {/* Untyped remainder keeps its space so the layout never shifts */}
              <span className="opacity-0">{line.slice(typed)}</span>
            </span>
          </span>
        );
      })}
    </h1>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export default function HeroSection() {
  const reduced = usePrefersReducedMotion();
  const count = useTypewriter(TOTAL_CHARS, reduced);
  const [caretVisible, setCaretVisible] = useState(true);

  const typingDone = count >= TOTAL_CHARS;

  // Hide caret shortly after typing completes
  useEffect(() => {
    if (!typingDone || reduced) return;
    const t = setTimeout(() => setCaretVisible(false), 1600);
    return () => clearTimeout(t);
  }, [typingDone, reduced]);

  // Supporting content fades in once the heading has finished typing
  const afterType = reduced ? 0 : TYPE_START_DELAY + TOTAL_CHARS * TYPE_SPEED;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative -mt-[113px] flex min-h-[100svh] items-stretch overflow-hidden bg-cover bg-center pt-[113px] lg:-mt-[78px] lg:min-h-[100svh] lg:pt-[78px]"
      id="home"
      style={{
        backgroundImage: "url('/images/w-banner-PDVZJK3I.webp')",
      }}
    >
      <style>{CSS}</style>

      {/* Left-to-right cream wash keeps the copy readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#fcf8e6_0%,#fcf8e6_24%,rgba(252,248,230,0.86)_42%,rgba(255,248,207,0.3)_64%,rgba(255,248,207,0)_84%)]"
      />

      <div className="relative z-[1] mx-auto grid w-[calc(100%-32px)] grid-cols-1 gap-0 sm:w-[calc(100%-48px)] md:grid-cols-[1.02fr_0.98fr] lg:w-[calc(100%-64px)] lg:max-w-[1280px]">
        {/* ------------------------------ Copy ------------------------------ */}
        <div className="flex max-w-[580px] flex-col items-start justify-center py-10 md:py-14">
          <div
            className="qh-reveal mb-6 inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-white/80 px-3.5 py-2 text-[13px] font-semibold text-brand-green shadow-[0_4px_14px_rgb(74_77_65_/_6%)]"
            style={{ animationDelay: "0.1s" }}
          >
            <HeartPulse aria-hidden="true" size={16} />
            Healthcare that puts people first
          </div>

          <TypedHeading count={count} showCaret={caretVisible && !reduced} />

          <p
            className="qh-reveal mt-6 max-w-[480px] text-base leading-[1.65] text-brand-copy md:mt-7 md:text-lg"
            style={{ animationDelay: `${afterType - 200}ms` }}
          >
            Empowering communities through accessible healthcare, innovation,
            and social entrepreneurship. Join the QnQ movement today.
          </p>

          <div
            className="qh-reveal mt-8 flex flex-wrap items-center gap-3 md:mt-9"
            style={{ animationDelay: `${afterType + 100}ms` }}
          >
            <Link
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-brand-green px-7 text-[15px] font-bold text-white shadow-[0_8px_18px_rgb(52_143_53_/_22%)] transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#1d883d] hover:shadow-[0_12px_24px_rgb(52_143_53_/_30%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green active:translate-y-0"
              href="#medicines"
            >
              <ShoppingCart aria-hidden="true" size={19} strokeWidth={2.4} />
              Order Now
            </Link>
            <Link
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-brand-blue/25 bg-white/60 px-6 text-[15px] font-bold text-brand-blue transition-[background-color,border-color] duration-200 hover:border-brand-blue hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              href="#franchise"
            >
              Open a franchise
              <ArrowRight
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                size={17}
                strokeWidth={2.4}
              />
            </Link>
          </div>

          <dl
            className="qh-reveal mt-10 flex items-center gap-7 border-t border-brand-blue/10 pt-6 md:mt-12"
            style={{ animationDelay: `${afterType + 250}ms` }}
          >
            <div>
              <dt className="sr-only">Community pharmacies</dt>
              <dd className="m-0 text-3xl font-extrabold leading-none tracking-tight text-brand-blue">
                <CountUp delay={afterType + 350} reduced={reduced} suffix="+" to={80} />
              </dd>
              <p className="mt-2 text-[13px] font-medium text-brand-copy" aria-hidden="true">
                community pharmacies
              </p>
            </div>
            <span aria-hidden="true" className="h-11 w-px bg-brand-blue/15" />
            <div>
              <dt className="sr-only">Lives empowered</dt>
              <dd className="m-0 text-3xl font-extrabold leading-none tracking-tight text-brand-blue">
                <CountUp delay={afterType + 450} reduced={reduced} suffix="M+" to={1} />
              </dd>
              <p className="mt-2 text-[13px] font-medium text-brand-copy" aria-hidden="true">
                lives empowered
              </p>
            </div>
          </dl>
        </div>

        {/* ------------------------------ Art ------------------------------- */}
        {/* Vertically centred so the team lines up with the copy */}
        <div className="qh-art-enter relative mx-auto flex w-full max-w-[560px] items-center self-center py-6 md:mx-0 md:max-w-none md:justify-end md:py-10">
          <div className="relative w-full max-w-[600px]">
            {/* Soft light behind the team so they lift off the yellow */}
            <div
              aria-hidden="true"
              className="qh-halo pointer-events-none absolute left-1/2 top-[52%] h-[80%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
            <div className="qh-figure relative aspect-square w-full">
              <Image
                alt="QnQ healthcare professionals"
                className="object-contain object-center"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
                src="/images/bnr_img.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Styles                                                              */
/* ------------------------------------------------------------------ */

const CSS = `
/* Typing caret */
.qh-caret {
  display: inline-block;
  width: 0.065em;
  height: 0.86em;
  margin-left: 0.06em;
  border-radius: 2px;
  vertical-align: -0.06em;
  animation: qh-blink 0.9s steps(1) infinite;
}
@keyframes qh-blink { 50% { opacity: 0; } }

/* Supporting content fades up after the heading */
.qh-reveal {
  opacity: 0;
  transform: translate3d(0, 14px, 0);
  animation: qh-reveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
@keyframes qh-reveal {
  to { opacity: 1; transform: none; }
}

/* Art entrance */
.qh-art-enter {
  opacity: 0;
  animation: qh-art-in 1s 0.2s ease-out forwards;
}
@keyframes qh-art-in { to { opacity: 1; } }

/* Team photo: the PNG has empty space above the group and hard crop
   edges on the sides and bottom. We lift it so the group lines up with
   the copy, then feather the hard edges.
     --lift   how far the photo moves up (raise it to move the group higher)
     --cut-b  where the bottom fade starts
     --cut-x  how far in from each side the photo content begins */
.qh-figure {
  --lift: -6%;
  --cut-b: 86%;
  --cut-x: 8%;
  translate: 0 var(--lift);
  -webkit-mask-image:
    linear-gradient(to bottom, #000 var(--cut-b), transparent 100%),
    linear-gradient(
      to right,
      transparent var(--cut-x),
      #000 calc(var(--cut-x) + 6%),
      #000 calc(100% - var(--cut-x) - 6%),
      transparent calc(100% - var(--cut-x))
    );
  mask-image:
    linear-gradient(to bottom, #000 var(--cut-b), transparent 100%),
    linear-gradient(
      to right,
      transparent var(--cut-x),
      #000 calc(var(--cut-x) + 6%),
      #000 calc(100% - var(--cut-x) - 6%),
      transparent calc(100% - var(--cut-x))
    );
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
}

.qh-halo {
  background: radial-gradient(
    closest-side,
    rgba(255, 255, 255, 0.7),
    rgba(255, 250, 214, 0.35) 55%,
    transparent 100%
  );
}

@media (prefers-reduced-motion: reduce) {
  .qh-reveal, .qh-art-enter {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
  .qh-caret { animation: none !important; }
}
`;