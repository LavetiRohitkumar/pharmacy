import { useId } from "react";

function CircularHealthMark() {
  const textPathId = `life-ticker-${useId().replaceAll(":", "")}`;

  return (
    <svg
      aria-hidden="true"
      className="ticker-mark-motion h-[76px] w-[76px] shrink-0 text-brand-green md:h-[92px] md:w-[92px]"
      fill="none"
      viewBox="0 0 92 92"
    >
      <defs>
        <path
          d="M 46,46 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
          id={textPathId}
        />
      </defs>
      <circle cx="46" cy="46" r="41.5" stroke="currentColor" strokeWidth="1.5" />
      <text
        fill="currentColor"
        fontFamily="Arial, sans-serif"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="1.3"
      >
        <textPath href={`#${textPathId}`} textLength="205" lengthAdjust="spacing">
          QNQ • HEALTH FOR ALL • QNQ • HEALTH FOR ALL •
        </textPath>
      </text>
      <path
        d="M46 30v32M30 46h32"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <circle cx="46" cy="46" r="4" fill="white" />
    </svg>
  );
}

function TickerMessage({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate ? true : undefined}
      className="flex shrink-0 items-center gap-8 px-4 md:gap-14 md:px-7"
    >
      <span className="bg-gradient-to-r from-[#26a9c5] to-[#0784e8] bg-clip-text text-[clamp(2.7rem,8vw,6rem)] font-extrabold leading-none tracking-[-0.055em] text-transparent">
        EVERYBODY DESERVES A HEALTHY LIFE
      </span>
      <CircularHealthMark />
      <span className="bg-gradient-to-r from-[#00c45a] to-[#00a98d] bg-clip-text text-[clamp(2.7rem,8vw,6rem)] font-extrabold leading-none tracking-[-0.055em] text-transparent">
        EVERYBODY DESERVES A HEALTHY LIFE
      </span>
      <CircularHealthMark />
    </div>
  );
}

export default function LifeTicker() {
  return (
    <section
      aria-label="Everybody deserves a healthy life"
      className="relative flex h-36 items-center overflow-hidden border-y border-[#f4eab5] bg-white bg-[linear-gradient(to_right,rgba(255,201,57,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,201,57,0.12)_1px,transparent_1px)] bg-[size:60px_60px] md:h-44"
    >
      <div className="flex w-max animate-[ticker-scroll_34s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none">
        <TickerMessage />
        <TickerMessage duplicate />
      </div>
    </section>
  );
}
