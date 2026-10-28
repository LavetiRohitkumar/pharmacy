import {
  Droplet,
  Heart,
  HeartPulse,
  Network,
  Pill,
  UsersRound,
} from "lucide-react";

const coreValues = [
  { title: "Social Responsibility", icon: HeartPulse, tone: "orange" },
  { title: "Life Touch Services", icon: Heart, tone: "gold" },
  { title: "Quality Assured Medicines", icon: Pill, tone: "orange" },
  { title: "Employee & Customer Centric", icon: UsersRound, tone: "gold" },
  { title: "Transparent Business", icon: Droplet, tone: "orange" },
  { title: "Innovation & Technology", icon: Network, tone: "gold" },
];

export default function Dna() {
  return (
    <section
      aria-labelledby="dna-title"
      className="relative isolate overflow-hidden bg-[linear-gradient(to_right,rgba(255,201,57,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,201,57,0.12)_1px,transparent_1px),linear-gradient(115deg,#fff8df_0%,#fffdf7_50%,#fff0e4_100%)] bg-[size:60px_60px,60px_60px,auto] py-16 sm:py-20 lg:py-24"
      id="dna"
    >
      <span
        aria-hidden="true"
        className="absolute left-[12%] top-8 text-4xl font-light text-[#ffe982]/60"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="absolute right-[18%] top-16 rotate-12 text-5xl font-light text-[#ffe982]/60"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-10 right-[8%] -rotate-12 text-5xl font-light text-[#ffe982]/60"
      >
        +
      </span>

      <div className="mx-auto w-[calc(100%-32px)] max-w-[1280px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
        <header className="reveal-on-scroll text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-brand-green">
            Our DNA
          </p>
          <h2
            className="mt-2 text-4xl font-extrabold tracking-[-0.045em] text-brand-blue sm:text-5xl"
            id="dna-title"
          >
            Core Values that Define QnQ
          </h2>
        </header>

        <div className="relative mx-auto mt-12 max-w-[1150px] lg:mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-1/2 hidden h-[3px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#ffe99a] via-[#ffc34d] to-[#ffe99a] lg:block"
          />

          <ol className="relative grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-5 lg:gap-y-0">
            {coreValues.map(({ title, icon: Icon, tone }, index) => {
              const isOrange = tone === "orange";
              const isUpper = index % 2 === 0;

              return (
                <li
                  className="reveal-on-scroll relative flex flex-col items-center gap-5 lg:block lg:min-h-[320px]"
                  key={title}
                >
                  <div
                    className={`relative z-[1] flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-full border-[2px] bg-[#fffdf8] lg:absolute lg:left-1/2 lg:-translate-x-1/2 ${
                      isOrange
                        ? "border-[#ff6a0a] text-[#ff6810]"
                        : "border-[#f2b900] text-[#f2b900]"
                    } ${
                      isUpper
                        ? "lg:top-[calc(50%+66px)]"
                        : "lg:top-[calc(50%-148px)]"
                    } shadow-[0_0_0_7px_rgba(255,255,255,0.78),0_0_0_9px_rgba(255,207,104,0.4)]`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -inset-[13px] rounded-full border border-dashed border-[#ffd68d]/75"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute -inset-[21px] rounded-full border border-[#ffe3b4]/60"
                    />
                    <Icon
                      aria-hidden="true"
                      className="relative z-[1] fill-current"
                      size={29}
                      strokeWidth={2}
                    />
                    <span
                      aria-hidden="true"
                      className={`absolute left-1/2 hidden h-[52px] w-[2px] -translate-x-1/2 lg:block ${
                        isUpper ? "-top-[52px]" : "-bottom-[52px]"
                      } ${isOrange ? "bg-[#ff7015]" : "bg-[#f3b900]"}`}
                    />
                  </div>

                  <div
                    className={`relative z-[2] flex min-h-[126px] w-full max-w-[156px] flex-col items-center justify-center rounded-[20px] border border-[#f4ead7] bg-white px-4 py-5 text-center shadow-[0_12px_30px_rgba(91,70,37,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(91,70,37,0.14)] lg:absolute lg:left-1/2 lg:w-full lg:-translate-x-1/2 ${
                      isUpper
                        ? "lg:bottom-[calc(50%+15px)]"
                        : "lg:top-[calc(50%+15px)]"
                    }`}
                  >
                    <span
                      className={`mb-3 inline-flex h-8 min-w-8 items-center justify-center rounded-xl px-2 text-xs font-extrabold text-white shadow-[0_4px_12px_rgba(255,111,12,0.22)] ${
                        isOrange
                          ? "bg-gradient-to-br from-[#ff8c17] to-[#f04c00]"
                          : "bg-gradient-to-br from-[#ffbc13] to-[#ed7d00]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-extrabold leading-[1.35] text-[#151515]">
                      {title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="absolute right-3 top-3 text-xs font-light text-[#ffd79a]"
                    >
                      +
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}