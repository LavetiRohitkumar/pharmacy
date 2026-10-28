"use client";

import { useEffect, useRef, useState } from "react";

const journeySlides = [
  [
    {
      year: "2019",
      title: "The First Step",
      description:
        "It began with a 200 sq. ft. store in Villupuram, Tamil Nadu — and a conviction that people deserved access to high-quality medicines without financial burden. Our first outlet was more than a pharmacy; it was a proof of concept. We set out to understand whether communities were ready to embrace affordable, quality generic medicines — and the response told us everything we needed to know. The trust was real. The need was undeniable. And QnQ was born.",
    },
    {
      year: "2020",
      title: "Serving in Crisis",
      description:
        "When the COVID-19 pandemic brought the world to a standstill, QnQ stood firm. We ensured the uninterrupted supply of quality medicines at affordable prices and introduced clinic support services — so that patients could access both a doctor and their medicines in one place, even during the most uncertain times. When communities needed us most, we showed up.",
    },
  ],
  [
    {
      year: "2021",
      title: "Built on Community",
      description:
        "We went deeper before we went wider. Through continued on-ground research with pharmacists, doctors, and the communities we served, we refined our service model and strengthened the foundation for what was to come. This was the year we prepared QnQ not just to grow — but to grow right.",
    },
    {
      year: "2022",
      title: "A Vision Shared",
      description:
        "QnQ became a movement. We launched a sociopreneur-driven franchise model — built on the belief that expanding healthcare access and empowering local entrepreneurs could be the same mission. Through FICO, FOFO, and FOCO franchise formats, we opened the door for partners across Tamil Nadu to build purposeful, profitable healthcare businesses alongside us.",
    },
  ],
  [
    {
      year: "2023",
      title: "Growth with Purpose",
      description:
        "25+ new outlets. Tier-2 and Tier-3 cities. More communities reached. More lives touched. This was a year that proved our model worked — not just in theory, but on the ground, where it matters most. Affordable healthcare moved closer to the people who needed it most.",
    },
    {
      year: "2024",
      title: "A New Era Begins",
      description:
        "QnQ stepped into a new chapter. We established our corporate headquarters in Chennai and entered metropolitan markets with renewed ambition. Our services expanded across five integrated healthcare verticals — Medicines, Diagnostics, Wellness, Opticals, and Audiology — offering communities a truly comprehensive healthcare experience under one roof.",
    },
  ],
  [
    {
      year: "2025",
      title: "Beyond Borders",
      description:
        "Our fastest year yet. 60+ new outlets in a single year. A bold entry into Bengaluru and Karnataka. QnQ crossed state lines and carried its promise of affordable, quality healthcare into new markets across South India — reaching more people, more communities, and more lives than ever before.",
    },
    {
      year: "2026",
      title: "Expanding Responsibly",
      description:
        "Growth, for us, has always been about more than numbers. As we scale further, our focus remains where it has always been — on the people we serve. Customer-centric innovation, responsible expansion, and an unwavering commitment to making high-quality healthcare accessible to every community we enter. The journey continues — and the best is still ahead.",
    },
  ],
];

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const scrollDistance = section.offsetHeight - window.innerHeight;
        const nextProgress =
          scrollDistance > 0
            ? Math.min(
                1,
                Math.max(0, (window.scrollY - sectionTop) / scrollDistance),
              )
            : 0;

        setProgress(nextProgress);
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      aria-label="Our journey from 2019 to 2026"
      className="relative h-[400svh] bg-[#fffaf0]"
      id="journey"
      ref={sectionRef}
    >
      <div className="sticky top-0 flex h-svh flex-col items-center overflow-hidden bg-[linear-gradient(to_right,rgba(255,201,57,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,201,57,0.12)_1px,transparent_1px),linear-gradient(115deg,#fff8df_0%,#fffdf7_50%,#fff0e4_100%)] bg-[size:60px_60px,60px_60px,auto] pb-8 pt-8 sm:pt-10 lg:pb-10">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[12%] top-[20%] text-4xl font-light text-[#ffe982]/60"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-[17%] top-[34%] rotate-12 text-5xl font-light text-[#ffe982]/60"
        >
          +
        </span>

        <header className="reveal-on-scroll relative z-10 shrink-0 text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-brand-green sm:text-xs">
            Our Journey
          </p>
          <h2 className="mt-1 text-[clamp(1.7rem,4vw,2.7rem)] font-extrabold leading-tight tracking-[-0.045em] text-brand-blue">
            A Legacy of Care (2019–2026)
          </h2>
        </header>

        <div className="relative mt-5 flex min-h-0 w-[calc(100%-32px)] max-w-[1280px] flex-1 items-center sm:w-[calc(100%-48px)] sm:mt-7 lg:w-[calc(100%-64px)]">
          <div
            aria-label={`Journey slide ${Math.min(
              4,
              Math.floor(progress * 3) + 1,
            )} of 4`}
            aria-live="polite"
            className="sr-only"
            role="status"
          >
            Journey slide {Math.min(4, Math.floor(progress * 3) + 1)} of 4
          </div>

          <div className="relative h-[min(68svh,620px)] min-h-[410px] w-full rounded-t-[22px] border-[3px] border-[#414141] bg-[#fffdf8] shadow-[0_23px_35px_rgba(27,27,23,0.25)] sm:h-[min(70svh,650px)] sm:min-h-[480px]">
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-3 z-20 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#1d1d1b]"
            />
            <div className="absolute inset-x-0 bottom-0 top-7 overflow-hidden border-y border-[#c6c3b9] bg-[linear-gradient(to_right,rgba(255,201,57,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,201,57,0.12)_1px,transparent_1px),linear-gradient(115deg,#fffdf8_0%,#fffbed_100%)] bg-[size:32px_32px,32px_32px,auto]">
              <div
                className="flex h-full w-[400%] will-change-transform"
                style={{
                  transform: `translate3d(-${progress * 75}%, 0, 0)`,
                }}
              >
                {journeySlides.map((milestones, slideIndex) => (
                  <div
                    aria-label={`Journey milestones ${slideIndex * 2 + 1} and ${slideIndex * 2 + 2}`}
                    className="relative h-full w-1/4 shrink-0 px-3 py-5 sm:px-8 sm:py-8 lg:px-12 lg:py-10"
                    key={milestones[0].year}
                  >
                    <svg
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 h-full w-full"
                      preserveAspectRatio="none"
                      viewBox="0 0 1000 600"
                    >
                      <path
                        d="M 28 430 L 500 70 L 972 430"
                        fill="none"
                        stroke="#ffdb32"
                        strokeDasharray="13 12"
                        strokeLinecap="round"
                        strokeWidth="4"
                      />
                      <circle
                        cx="220"
                        cy="284"
                        fill="#ffd52a"
                        r="8"
                        stroke="white"
                        strokeWidth="4"
                      />
                      <circle
                        cx="790"
                        cy="292"
                        fill="#ffd52a"
                        r="8"
                        stroke="white"
                        strokeWidth="4"
                      />
                    </svg>

                    {milestones.map(({ year, title, description }, index) => {
                      const isLeft = index === 0;

                      return (
                        <article
                          className={`absolute z-[1] flex w-[calc(50%-20px)] flex-col rounded-xl border border-[#ffe3a0] bg-white/95 p-3 shadow-[0_10px_26px_rgba(74,66,42,0.07)] sm:w-[min(38%,360px)] sm:p-4 lg:w-[min(38%,390px)] lg:rounded-[14px] lg:p-5 ${
                            isLeft
                              ? "left-3 top-[16%] sm:left-[6%] sm:top-[17%]"
                              : "bottom-[14%] right-3 sm:bottom-[17%] sm:right-[6%]"
                          }`}
                          key={year}
                        >
                          <span className="absolute right-3 top-2 text-sm font-bold text-brand-green sm:right-4 sm:top-3 sm:text-base">
                            {String(slideIndex * 2 + index + 1).padStart(2, "0")}
                          </span>
                          <span className="w-fit rounded bg-[#fff7d1] px-1.5 py-0.5 text-[9px] font-bold text-[#e2b800] sm:text-[10px]">
                            {year}
                          </span>
                          <h3 className="mt-1 pr-7 text-[10px] font-extrabold uppercase leading-tight tracking-wide text-brand-blue sm:mt-1.5 sm:text-xs">
                            {title}
                          </h3>
                          <p className="mt-1.5 line-clamp-6 text-[9px] leading-[1.45] text-brand-copy sm:line-clamp-none sm:text-[10px] sm:leading-[1.5] lg:text-[11px]">
                            {description}
                          </p>
                        </article>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-[10px] left-[-1.2%] right-[-1.2%] z-10 h-5 rounded-b-[14px] bg-gradient-to-b from-[#252525] via-[#080808] to-black shadow-[0_18px_22px_rgba(0,0,0,0.3)] sm:-bottom-[12px] sm:h-7"
          >
            <span className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 rounded-b-md bg-[#202020] sm:w-24" />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mt-4 flex shrink-0 items-center gap-2 sm:mt-6"
        >
          {journeySlides.map((_, index) => (
            <span
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                progress >= index / 3 && progress < (index + 1) / 3
                  ? "w-7 bg-brand-green"
                  : "w-1.5 bg-brand-blue/20"
              }`}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}