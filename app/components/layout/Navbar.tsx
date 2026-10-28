"use client";

import { ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigationLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about", hasMenu: true },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Buy Medicines", href: "#medicines" },
  { label: "Franchise", href: "#franchise" },
  { label: "Contact Us", href: "#contact" },
  { label: "Career", href: "#career" },
  { label: "Newsletter", href: "#newsletter" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 1);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      className="sticky top-0 z-30 transition-[background-color,box-shadow] duration-300 lg:h-[78px]"
      style={{
        backgroundColor: isScrolled ? "#ffffff" : "transparent",
        boxShadow: isScrolled ? "0 1px 2px rgb(0 0 0 / 8%)" : "none",
      }}
    >
      <div className="mx-auto flex min-h-[76px] w-[calc(100%-32px)] flex-wrap items-center justify-between gap-2.5 py-2.5 sm:w-[calc(100%-48px)] lg:grid lg:h-full lg:w-[calc(100%-64px)] lg:max-w-[1280px] lg:grid-cols-[100px_minmax(0,1fr)_178px] lg:gap-3 lg:py-0 xl:grid-cols-[202px_minmax(0,1fr)_173px] xl:gap-5">
        <Link
          aria-label="QnQ Pharmacy home"
          className="flex w-fit flex-row items-center justify-center gap-[5px] text-brand-green lg:flex-col lg:gap-0 xl:pl-[14px]"
          href="/"
        >
          <svg
            aria-hidden="true"
            className="h-9 w-[38px] lg:h-[39px] lg:w-[43px]"
            viewBox="0 0 52 48"
            fill="none"
          >
            <path
              d="M25.8 7.3 29 1.8m-2.7 12.1h9.1m-4.5-4.5v9.1"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2.7"
            />
            <path
              d="M24.3 37.6c-8.5 0-14.7-6.1-14.7-14.2 0-7.9 6.1-14 14.2-14 7.7 0 13.6 5.4 14.1 12.7"
              stroke="currentColor"
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
            <path
              d="M36.2 24.7c.1 6.4-4.9 11.6-11.3 11.8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2.5"
            />
          </svg>
          <span className="text-[11px] font-bold tracking-[-0.02em] text-brand-blue lg:-mt-px lg:text-[9px]">
            QnQ Pharmacy
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="order-1 flex h-[45px] w-full min-w-0 items-center justify-start gap-[3px] overflow-x-auto rounded-full bg-transparent px-[11px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:order-none lg:h-[52px] lg:w-auto lg:justify-evenly lg:overflow-x-auto lg:overflow-y-hidden xl:h-[46px] xl:w-full xl:max-w-[775px] xl:justify-self-start"
        >
          {navigationLinks.map(({ label, href, active, hasMenu }) => (
            <Link
              aria-current={active ? "page" : undefined}
              className={`relative inline-flex min-h-full shrink-0 items-center justify-center gap-[5px] whitespace-nowrap px-[11px] text-[13px] font-semibold text-[#0753a8] transition-colors hover:text-brand-green lg:px-[6px] lg:text-[13px] xl:px-[10px] xl:text-[13px] ${
                active
                  ? "text-brand-green after:absolute after:inset-x-[2px] after:bottom-[3px] after:h-[3px] after:rounded-full after:bg-brand-green lg:after:bottom-[6px]"
                  : ""
              }`}
              href={href}
              key={label}
            >
              {label}
              {hasMenu ? <ChevronDown aria-hidden="true" size={15} /> : null}
            </Link>
          ))}
        </nav>

        <a
          className="inline-flex min-h-[38px] items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-brand-green px-3 text-xs font-bold text-white shadow-[0_6px_14px_rgb(52_143_53_/_19%)] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[#1d883d] lg:min-h-10 lg:px-3 lg:text-[13px] xl:min-h-10 xl:gap-[9px] xl:px-[17px] xl:text-[15px]"
          href="tel:+919597706555"
        >
          <Phone aria-hidden="true" className="h-[14px] w-[14px] xl:h-[17px] xl:w-[17px]" fill="currentColor" />
          <span>+91 95977 06555</span>
        </a>
      </div>
    </header>
  );
}
