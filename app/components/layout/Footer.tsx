import { ArrowUp, Mail, MapPin, Phone, Send } from "lucide-react";
import type { ReactNode } from "react";

const socialLinks = [
  { label: "X", href: "https://x.com", mark: "X" },
  { label: "Facebook", href: "https://facebook.com", mark: "f" },
  { label: "Instagram", href: "https://instagram.com", mark: "◎" },
  { label: "YouTube", href: "https://youtube.com", mark: "▶" },
  { label: "LinkedIn", href: "https://linkedin.com", mark: "in" },
];

// Match these hrefs to the ids/routes used by your header navigation.
const company = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Career", href: "#career" },
];

const explore = [
  { label: "Buy Medicines", href: "#medicines" },
  { label: "Franchise", href: "#franchise" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Contact Us", href: "#contact" },
];

const inputClass =
  "h-12 w-full min-w-0 rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white outline-none transition placeholder:text-white/55 focus:border-white/70 focus:bg-white/15 focus:ring-2 focus:ring-white/20";

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <a
        className="inline-block py-1 text-[15px] text-[#3d3a2c] transition-colors hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        href={href}
      >
        {children}
      </a>
    </li>
  );
}

function ContactRow({
  href,
  icon: Icon,
  label,
  children,
}: {
  href: string;
  icon: typeof MapPin;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      className="group flex items-start gap-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
      href={href}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
        <Icon aria-hidden="true" size={18} strokeWidth={2.2} />
      </span>
      <span className="block pt-0.5 text-[15px] leading-snug text-[#3d3a2c]">
        <span className="block text-[13px] font-semibold text-brand-blue">{label}</span>
        {children}
      </span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#ffdf13] bg-cover bg-center pb-6 pt-14 text-[#171717] sm:pt-20"
      id="contact"
      style={{
        backgroundImage:
          "linear-gradient(110deg, rgba(255,223,19,0.18) 0%, rgba(255,230,37,0.12) 52%, rgba(255,217,20,0.18) 100%), url('/images/w-banner-PDVZJK3I.webp')",
      }}
    >
      <div className="relative mx-auto w-[calc(100%-32px)] max-w-[1200px] sm:w-[calc(100%-64px)]">
        {/* Main panel: cream information side + deep-blue enquiry side */}
        <div className="grid overflow-hidden rounded-[28px] shadow-[0_30px_70px_rgba(90,70,0,0.22)] lg:grid-cols-[1.25fr_0.75fr]">
          {/* ------------------------- Information -------------------------- */}
          <div className="bg-[#fffaea] p-7 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3">
              <svg
                aria-hidden="true"
                className="h-11 w-11 shrink-0 text-brand-green"
                fill="none"
                viewBox="0 0 52 48"
              >
                <path
                  d="M25.8 7.3 29 1.8m-2.7 12.1h9.1m-4.5-4.5v9.1"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.7"
                />
                <path
                  d="M24.3 37.6c-8.5 0-14.7-6.1-14.7-14.2 0-7.9 6.1-14 14.2-14 7.7 0 13.6 5.4 14.1 12.7"
                  stroke="#0759bd"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <path
                  d="m19.4 22.8 5.1 5.2 15.9-14.3"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3.6"
                />
              </svg>
              <h2 className="m-0 text-[26px] font-extrabold tracking-[-0.02em] text-brand-blue">
                QnQ Healthcare
              </h2>
            </div>

            <p className="mt-4 max-w-[440px] text-base leading-relaxed text-[#4a4636]">
              Accessible healthcare, quality-tested generics and a growing network of
              community pharmacies, built so everyone can afford to be well.
            </p>

            <div className="mt-9 grid gap-9 sm:grid-cols-2">
              <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="m-0 text-sm font-bold text-[#171717]">Company</h3>
                  <ul className="m-0 mt-2.5 list-none p-0">
                    {company.map((l) => (
                      <FooterLink href={l.href} key={l.label}>
                        {l.label}
                      </FooterLink>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="m-0 text-sm font-bold text-[#171717]">Explore</h3>
                  <ul className="m-0 mt-2.5 list-none p-0">
                    {explore.map((l) => (
                      <FooterLink href={l.href} key={l.label}>
                        {l.label}
                      </FooterLink>
                    ))}
                  </ul>
                </div>
              </nav>

              <div className="space-y-4">
                <ContactRow
                  href="https://maps.google.com/?q=Villupuram+Tamil+Nadu"
                  icon={MapPin}
                  label="Head office"
                >
                  No 51, DR Building, Opposite to Aavin Factory, Villupuram - 605 602
                </ContactRow>
                <ContactRow href="tel:+919597706555" icon={Phone} label="Call us">
                  +91 95977 06555
                </ContactRow>
                <ContactRow
                  href="mailto:customercare@qnqhealthcare.in"
                  icon={Mail}
                  label="Email us"
                >
                  <span className="break-all">customercare@qnqhealthcare.in</span>
                </ContactRow>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[#171717]/10 pt-6">
              <p className="m-0 text-sm font-bold">Follow us</p>
              <div className="flex gap-2">
                {socialLinks.map(({ label, href, mark }) => (
                  <a
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/20 text-brand-blue transition-colors duration-200 hover:border-brand-blue hover:bg-brand-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                    href={href}
                    key={label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="text-sm font-extrabold leading-none">
                      {mark}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --------------------------- Enquiry ----------------------------- */}
          <div className="bg-brand-blue p-7 text-white sm:p-10 lg:p-12">
            <h2 className="m-0 text-2xl font-extrabold tracking-[-0.02em]">Quick enquiry</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-white/75">
              Reach a certified pharmacist instantly. Send your question or prescription
              and we will get back to you.
            </p>

            <form
              action="mailto:customercare@qnqhealthcare.in"
              className="mt-7 space-y-3"
              encType="text/plain"
              method="post"
            >
              <label className="sr-only" htmlFor="enquiry-name">
                Your name
              </label>
              <input
                autoComplete="name"
                className={inputClass}
                id="enquiry-name"
                name="Name"
                placeholder="Your name"
                required
              />
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <label className="sr-only" htmlFor="enquiry-phone">
                  Phone number
                </label>
                <input
                  autoComplete="tel"
                  className={inputClass}
                  id="enquiry-phone"
                  name="Phone"
                  placeholder="Phone number"
                  required
                  type="tel"
                />
                <label className="sr-only" htmlFor="enquiry-email">
                  Email address
                </label>
                <input
                  autoComplete="email"
                  className={inputClass}
                  id="enquiry-email"
                  name="Email"
                  placeholder="Email address"
                  required
                  type="email"
                />
              </div>
              <label className="sr-only" htmlFor="enquiry-message">
                Message or prescription
              </label>
              <textarea
                className={`${inputClass} h-28 resize-y py-3`}
                id="enquiry-message"
                name="Message"
                placeholder="Message or prescription details"
                required
              />
              <button
                className="flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-brand-green text-[15px] font-bold text-white shadow-[0_10px_22px_rgba(0,0,0,0.22)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0"
                type="submit"
              >
                Submit enquiry
                <Send aria-hidden="true" fill="currentColor" size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* ----------------------------- Bottom bar ---------------------------- */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-[#2b2710]">
          <p className="m-0">QnQ Healthcare ©2026. All rights reserved.</p>
          <a
            className="inline-flex items-center gap-2.5 font-semibold transition-colors hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            href="#home"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-brand-blue shadow-sm">
              <ArrowUp aria-hidden="true" size={16} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}