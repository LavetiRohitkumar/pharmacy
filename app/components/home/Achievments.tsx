import { Award, MapPin, Rocket, Store, UsersRound } from "lucide-react";

const achievements = [
  {
    value: "1 Million+",
    label: "Lives Empowered & Served",
    icon: MapPin,
  },
  {
    value: "400+",
    label: "Inspired QnQians Team",
    icon: UsersRound,
  },
  {
    value: "80+",
    label: "Active Pharmacy Outlets",
    icon: Store,
  },
  {
    value: "Pioneers",
    label: "Healthcare Verticals",
    icon: Award,
  },
  {
    value: "Regions",
    label: "Across 3 States & UTs",
    icon: Rocket,
  },
];

export default function Achievments() {
  return (
    <section
      aria-labelledby="achievements-title"
      className="relative isolate overflow-hidden bg-[linear-gradient(to_right,rgba(255,201,57,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,201,57,0.12)_1px,transparent_1px),linear-gradient(115deg,#fff8df_0%,#fffdf7_50%,#fff0e4_100%)] bg-[size:60px_60px,60px_60px,auto] py-16 sm:py-20 lg:py-24"
      id="achievements"
    >
      {/* Decorative background plus signs with subtle floating float animation */}
      <span
        aria-hidden="true"
        className="absolute left-[12%] top-5 text-4xl font-light text-[#ffe982]/60 animate-pulse"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="absolute right-[17%] top-12 rotate-12 text-5xl font-light text-[#ffe982]/60 animate-pulse delay-300"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-8 left-[8%] -rotate-12 text-5xl font-light text-[#ffe982]/60 animate-pulse delay-700"
      >
        +
      </span>

      <div className="mx-auto w-[calc(100%-32px)] max-w-[1280px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
        <header className="reveal-on-scroll text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-brand-green">
            Our Achievements
          </p>
          <h2
            className="mx-auto mt-3 max-w-5xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-brand-blue sm:text-4xl lg:text-[44px]"
            id="achievements-title"
          >
            Milestones That Define Our Excellence
          </h2>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:mt-16 lg:grid-cols-5 lg:gap-6">
          {achievements.map(({ value, label, icon: Icon }, index) => (
            <article
              key={value}
              style={{ animationDelay: `${index * 120}ms` }}
              className="reveal-on-scroll group relative mt-2 flex min-h-[155px] flex-col items-center rounded-[28px] border border-[#e7e3da] bg-white/55 px-4 pb-6 pt-10 text-center shadow-[0_12px_30px_rgba(74,77,65,0.025)] 
              /* Hover & Pop Effects */
              transition-all duration-300 ease-out 
              hover:-translate-y-2 hover:scale-[1.02] hover:border-[#ffd454] 
              hover:bg-[#fff9e6]/90 hover:shadow-[0_20px_40px_rgba(255,201,57,0.22)]"
            >
              {/* Icon Badge - Pop-up animation on hover */}
              <span 
                className="absolute -top-8 flex h-[68px] w-[68px] items-center justify-center rounded-[22px] border border-[#ffecaa] bg-white text-[#d9a000] shadow-[0_8px_20px_rgba(255,210,29,0.18)] 
                transition-all duration-300 ease-out 
                group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#ffe885] group-hover:border-[#ffcb1f] group-hover:shadow-[0_12px_24px_rgba(255,201,57,0.35)]"
              >
                <Icon
                  aria-hidden="true"
                  className="fill-current transition-transform duration-300 group-hover:scale-105"
                  size={31}
                  strokeWidth={2.2}
                />
              </span>

              {/* Value Text - Animated entrance & slight glow color on hover */}
              <h3 className="mt-1 text-[22px] font-extrabold leading-tight tracking-[-0.03em] text-[#d9a000] transition-colors duration-300 group-hover:text-[#b88300] sm:text-2xl">
                {value}
              </h3>
              
              <p className="mt-2 text-sm leading-5 text-brand-copy transition-colors duration-300 group-hover:text-gray-900">
                {label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}