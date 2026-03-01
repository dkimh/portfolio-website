import { type ReactNode } from "react";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import FooterCompact from "../../components/FooterCompact";
import StickyAside from "../../components/StickyAside";

const R2 = process.env.NEXT_PUBLIC_R2_BASE ?? "";
const IMG_HERO          = `${R2}/typography/thumbnail.png`;
const IMG_ALPHABET      = `${R2}/typography/alphabet.png`;
const IMG_ALPHABET_OG   = `${R2}/typography/alphabet-orange.png`;
const IMG_PANGRAM       = `${R2}/typography/pangram.png`;
const IMG_PANGRAM_OG    = `${R2}/typography/pangram-orange.png`;
const IMG_NAME_LOGO     = `${R2}/typography/name-logo.png`;
const IMG_MOODBOARD     = `${R2}/typography/moodboard.png`;

const NAV_ITEMS = [
  { id: "overview",   label: "overview"   },
  { id: "typography", label: "typography" },
  { id: "moodboard",  label: "moodboard"  },
];

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-5 w-full">
      <span className="font-sans font-semibold text-[22px] text-[#8a8a8a] tracking-[-0.01em] leading-[1.2] whitespace-nowrap">
        {children}
      </span>
      <hr className="flex-1 border-0 border-t border-[#c9c9c9]" />
    </div>
  );
}

export default function Typography() {
  return (
    <div className="bg-[#f1f3f2] min-h-screen">
      <Navigation />

      <main className="flex flex-col">
        {/* Page Title */}
        <section
          id="page-title"
          className="relative md:sticky md:top-0 z-10 pt-[160px] pb-8 px-4 md:px-12 xl:px-20 md:w-[269px] xl:w-full"
        >
          <p className="font-sans text-base leading-[1.3] text-black">
            2024 - typography
          </p>
          <h1 className="font-sans font-medium text-[60px] leading-[1.1] tracking-[-0.01em] text-[#EA4F24]">
            blocktype
          </h1>
        </section>

        {/* Full-width hero */}
        <div className="w-full aspect-[5/3] relative overflow-hidden">
          <Image
            src={IMG_HERO}
            alt="Modular alphabet pangram"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Content: sticky sidebar + scrollable sections */}
        <div className="flex gap-5 items-start px-4 pb-16 md:px-12 xl:px-20">
          <StickyAside items={NAV_ITEMS} titleId="page-title" />

          <div className="flex-1 min-w-0 flex flex-col gap-5">

            {/* ── Overview ─────────────────────────────────────────── */}
            <section id="overview" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Overview</SectionTitle>
              <div className="flex flex-col gap-8">
                <p className="font-sans text-base leading-[1.3] text-black">
                  This project presents a modular typography system in which the entire alphabet is constructed using only five core components. Through repetition, rotation, and recombination of these limited elements, each letterform maintains visual consistency while achieving clarity and variation.
                </p>
                <div className="flex gap-5 flex-wrap md:flex-nowrap">
                  <div className="flex flex-col gap-2 flex-1 min-w-[100px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">Time</span>
                    <span className="font-sans text-base text-black leading-[1.3]">Sep 2024</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-[120px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">Team</span>
                    <span className="font-sans text-base text-black leading-[1.3]">Course Project</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-[100px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">Tools</span>
                    <span className="font-sans text-base text-black leading-[1.3]">Adobe Illustrator</span>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Typography ───────────────────────────────────────── */}
            <section id="typography" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Typography</SectionTitle>
              <div className="flex flex-col gap-4">
                {/* Alphabet — side by side */}
                <div className="flex gap-4">
                  <div className="flex-1 relative rounded-[8px] overflow-hidden aspect-[391/506]">
                    <Image
                      src={IMG_ALPHABET}
                      alt="Modular alphabet"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 40vw, 50vw"
                    />
                  </div>
                  <div className="flex-1 relative rounded-[8px] overflow-hidden aspect-[391/506]">
                    <Image
                      src={IMG_ALPHABET_OG}
                      alt="Modular alphabet — orange"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 40vw, 50vw"
                    />
                  </div>
                </div>

                {/* Pangram — full width */}
                <div className="relative rounded-[8px] overflow-hidden aspect-[790/511]">
                  <Image
                    src={IMG_PANGRAM}
                    alt="Pangram"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 100vw"
                  />
                </div>
                <div className="relative rounded-[8px] overflow-hidden aspect-[790/511]">
                  <Image
                    src={IMG_PANGRAM_OG}
                    alt="Pangram — orange"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 100vw"
                  />
                </div>

                {/* Name logo — full width */}
                <div className="relative rounded-[8px] overflow-hidden aspect-[790/611]">
                  <Image
                    src={IMG_NAME_LOGO}
                    alt="Name logo"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 100vw"
                  />
                </div>
              </div>
            </section>

            {/* ── Moodboard ────────────────────────────────────────── */}
            <section id="moodboard" className="flex flex-col gap-7 pt-[120px] pb-16">
              <SectionTitle>Moodboard</SectionTitle>
              <div className="relative rounded-[8px] overflow-hidden aspect-[790/511]">
                <Image
                  src={IMG_MOODBOARD}
                  alt="Moodboard"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 100vw"
                />
              </div>
            </section>

          </div>
        </div>

        <FooterCompact />
      </main>
    </div>
  );
}