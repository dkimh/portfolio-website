import type { ReactNode } from "react";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import FooterCompact from "../../components/FooterCompact";
import StickyAside from "../../components/StickyAside";

// Thumbnail
const THUMBNAIL = "/easyaid/easyaid-thumbnail.png";

// 1 — Background
const IMG_BG = "/easyaid/1-background/background.png";
const IMG_BG_PROBLEM = "/easyaid/1-background/problem.png";
const IMG_BG_SOLUTION = "/easyaid/1-background/solution.png";
// Background section tags — no local files; Figma asset URLs
const IMG_TAG_1 = "/easyaid/1-background/tag-1.svg";
const IMG_TAG_2 = "/easyaid/1-background/tag-2.svg";
const IMG_TAG_3 = "/easyaid/1-background/tag-3.svg";

// 2 — Final Product
const IMG_FINAL_1 = "/easyaid/2-final-product/final-output-1.gif";
const IMG_FINAL_2 = "/easyaid/2-final-product/final-output-2.png";

// 3 — Research
const IMG_RESEARCH_1 = "/easyaid/3-research/research-1.png";
const IMG_RESEARCH_21 = "/easyaid/3-research/research-2.1.png";
const IMG_RESEARCH_22 = "/easyaid/3-research/research-2.2.png";
const IMG_RESEARCH_3 = "/easyaid/3-research/research-3.png";

// 4 — Problem
const IMG_PROBLEM_ICON = "/easyaid/4-problem/problem-icon.svg";

// 5 — Solution
const IMG_SOLUTION_ICON = "/easyaid/5-solution/solution-icon.svg";
const VID_SOLUTION_1 = "/easyaid/5-solution/solution-1.mp4";

// 6 — Branding
const IMG_BRANDING = "/easyaid/6-branding/branding.png";

const NAV_ITEMS = [
  { id: "overview", label: "overview" },
  { id: "background", label: "background" },
  { id: "final-product", label: "final product" },
  { id: "research", label: "research" },
  { id: "problem", label: "problem" },
  { id: "solution", label: "solution" },
  { id: "branding", label: "branding" },
  { id: "takeaways", label: "takeaways" },
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

function GreenBox({ icon, iconAlt, children }: { icon: string; iconAlt: string; children: ReactNode }) {
  return (
    <div className="border-4 border-[#3ab33a] rounded-[6px] flex gap-5 items-center px-10 py-[34px] w-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt={iconAlt} className="h-[52px] w-auto shrink-0" />
      <p className="flex-1 font-sans font-semibold text-[22px] text-[#3ab33a] tracking-[-0.01em] leading-[1.2]">
        {children}
      </p>
    </div>
  );
}

export default function EasyAid() {
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
            2023 - product design
          </p>
          <h1 className="font-sans font-medium text-[60px] leading-[1.1] tracking-[-0.01em] text-[#2c992c]">
            easyaid
          </h1>
        </section>

        {/* Full-width thumbnail */}
        <div className="w-full aspect-[1280/600] relative overflow-hidden">
          <Image src={THUMBNAIL} alt="EasyAid project thumbnail" fill className="object-cover" sizes="100vw" />
        </div>

        {/* Content: sticky sidebar + scrollable sections */}
        <div className="flex gap-5 items-start px-4 pb-16 md:px-12 xl:px-20">
          <StickyAside items={NAV_ITEMS} titleId="page-title" />

          <div className="flex-1 min-w-0 flex flex-col gap-5">

            {/* ── Overview ─────────────────────────────────────────── */}
            <section id="overview" className="flex flex-col gap-7 pt-[80px]">
              <SectionTitle>Overview</SectionTitle>
              <div className="flex flex-col gap-8">
                <p className="font-sans text-base leading-[1.3] text-black">
                  EasyAid is a compact ointment and bandage dispenser for quick, hygienic first aid. Its one-handed operation ensures cleanliness and convenient access.
                </p>
                <div className="flex gap-5 flex-wrap md:flex-nowrap">
                  <div className="flex flex-col gap-2 flex-1 min-w-[100px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">Time</span>
                    <span className="font-sans text-base text-black leading-[1.3]">April 2023</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-[120px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">Team</span>
                    <span className="font-sans text-base text-black leading-[1.3]">Individual Project</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-[80px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">Tools</span>
                    <span className="font-sans text-base text-black leading-[1.3]">Figma</span>
                    <span className="font-sans text-base text-black leading-[1.3]">Rhino</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-[120px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">My role</span>
                    <span className="font-sans text-base text-black leading-[1.3]">UI/UX Designer</span>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Background ───────────────────────────────────────── */}
            <section id="background" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Background</SectionTitle>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                  {[
                    { src: IMG_BG, alt: "Background context" },
                    { src: IMG_BG_PROBLEM, alt: "Problem context" },
                    { src: IMG_BG_SOLUTION, alt: "Solution context" },
                  ].map(({ src, alt }) => (
                    <div key={alt} className="flex-1 aspect-[280/261] relative rounded-[6px] overflow-hidden">
                      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                    </div>
                  ))}
                </div>
                {/* Category tags — Figma assets */}
                <div className="flex gap-1">
                  {[IMG_TAG_1, IMG_TAG_2, IMG_TAG_3].map((tag, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={i} src={tag} alt="" className="flex-1 w-0" />
                  ))}
                </div>
                <div className="flex gap-4">
                  <p className="flex-1 font-sans text-base leading-[1.3] text-black">
                    Injuries can happen anywhere, and applying a bandage can be challenging.
                  </p>
                  <p className="flex-1 font-sans text-base leading-[1.3] text-black">
                    Applying a bandage one-handed is tough due to multiple steps: ointment, packaging, and securing.
                  </p>
                  <p className="flex-1 font-sans text-base leading-[1.3] text-black">
                    Our product simplifies applying ointment and a bandage with one hand.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Final Product ────────────────────────────────────── */}
            <section id="final-product" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Final Product</SectionTitle>
              <div className="flex flex-col gap-5">
                {/* GIF — use <img> to preserve animation */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMG_FINAL_1}
                  alt="EasyAid final product animated"
                  className="w-full rounded-[6px]"
                />
                <Image
                  src={IMG_FINAL_2}
                  alt="EasyAid final product"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto rounded-[6px]"
                />
              </div>
            </section>

            {/* ── Research ─────────────────────────────────────────── */}
            <section id="research" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Research</SectionTitle>
              <div className="flex flex-col gap-24">

                {/* Behavior Mapping */}
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <p className="font-sans font-bold text-base text-black leading-[1.3] md:w-[200px] shrink-0">
                    Behavior Mapping
                  </p>
                  <div className="flex flex-col gap-5 flex-1 min-w-0">
                    <p className="font-sans text-base text-black leading-[1.3]">
                      To identify the challenges of using a bandage, I conducted behavioral mapping to observe how users apply bandages. The research revealed that it is particularly difficult to apply a bandage with one hand when hand movement is limited due to injury.
                    </p>
                    <Image
                      src={IMG_RESEARCH_1}
                      alt="Behavior mapping research"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto rounded-[6px]"
                    />
                  </div>
                </div>

                {/* Interview */}
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <p className="font-sans font-bold text-base text-black leading-[1.3] md:w-[200px] shrink-0">
                    Interview
                  </p>
                  <div className="flex flex-col gap-3 flex-1 min-w-0">
                    <Image
                      src={IMG_RESEARCH_21}
                      alt="Interview research responses"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto rounded-[6px]"
                    />
                    <div className="flex flex-col md:flex-row gap-3 items-start">
                      <div className="relative md:w-[231px] shrink-0 aspect-square rounded-[6px] overflow-hidden">
                        <Image
                          src={IMG_RESEARCH_22}
                          alt="Interview affinity map"
                          fill
                          className="object-cover"
                          sizes="(min-width: 768px) 231px, 100vw"
                        />
                      </div>
                      <div className="flex flex-col gap-3 flex-1 min-w-0">
                        <p className="font-sans text-base text-black leading-[1.3]">
                          I interviewed potential users and analyzed responses, identifying three themes: applying antiseptic, bandage packaging, and ease of carrying.
                        </p>
                        <p className="font-sans text-base text-black leading-[1.3]">
                          I prioritized problems from each theme, identifying core issues and key findings.
                        </p>
                        <ul className="list-disc ml-6 flex flex-col gap-1">
                          <li className="font-sans text-base text-[#31b731] leading-[1.3]">It is difficult to keep the bandage clean when carrying it.</li>
                          <li className="font-sans text-base text-[#31b731] leading-[1.3]">Users desire a smoother, more efficient process for applying both the ointment and the bandage.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Market Research */}
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <p className="font-sans font-bold text-base text-black leading-[1.3] md:w-[200px] shrink-0">
                    Market Research
                  </p>
                  <div className="flex flex-col gap-3 flex-1 min-w-0">
                    <p className="font-sans text-base text-black leading-[1.3]">
                      I conducted market research to understand current product trends and analyze the limitations of existing products in the market. This research aimed to help establish a unique selling point and develop a distinguishable solution that stands out in the current market.
                    </p>
                    <div className="border-[1px] border-[#c9c9c9] rounded-[6px] overflow-hidden">
                      <Image
                        src={IMG_RESEARCH_3}
                        alt="Market research competitive analysis"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="font-sans text-base text-black leading-[1.3]">
                      Key findings from the market research include:
                    </p>
                    <ul className="list-disc ml-6 flex flex-col gap-1">
                      <li className="font-sans text-base text-[#31b731] leading-[1.3]">A lack of products simplifies the bandage application process.</li>
                      <li className="font-sans text-base text-[#31b731] leading-[1.3]">Insufficient consideration for users who need to apply bandages when one hand is unavailable.</li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>

            {/* ── Problem ──────────────────────────────────────────── */}
            <section id="problem" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Problem</SectionTitle>
              <p className="font-sans text-base text-black leading-[1.3]">
                Through behavioral mapping, interviews, and market research, this is the problem I identified.
              </p>
              <GreenBox icon={IMG_PROBLEM_ICON} iconAlt="Problem icon">
                The bandage packaging is hard to open one-handed, difficult to keep clean, and lacks a clear application process.
              </GreenBox>
            </section>

            {/* ── Solution ─────────────────────────────────────────── */}
            <section id="solution" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Solution</SectionTitle>
              <div className="flex flex-col gap-10">
                <GreenBox icon={IMG_SOLUTION_ICON} iconAlt="Solution icon">
                  Develop innovative bandage packaging that streamlines the application, ensuring ease of use and hygiene.
                </GreenBox>
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <p className="font-sans font-bold text-base text-black leading-[1.3] md:w-[200px] shrink-0">
                    End User Journey
                  </p>
                  <div className="flex-1 min-w-0 border-[1px] border-[#c9c9c9] rounded-[6px] overflow-hidden ">
                    <video autoPlay muted loop playsInline className="w-full h-auto">
                      <source src={VID_SOLUTION_1} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Branding ─────────────────────────────────────────── */}
            <section id="branding" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Branding</SectionTitle>
              <div className="border-[1px] border-[#c9c9c9] rounded-[6px] overflow-hidden">
                <Image
                  src={IMG_BRANDING}
                  alt="EasyAid branding"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
            </section>

            {/* ── Takeaways ────────────────────────────────────────── */}
            <section id="takeaways" className="flex flex-col gap-7 pt-[120px] pb-16">
              <SectionTitle>Takeaways</SectionTitle>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-[rgba(199,224,183,0.4)] rounded-[12px] px-8 py-6 flex flex-col gap-3 flex-1">
                  <p className="font-sans text-[#8a8a8a] text-base leading-[1.3]">01/</p>
                  <p className="font-sans font-bold text-base text-[#237f23] leading-[1.3]">Rapid Prototyping</p>
                  <p className="font-sans text-base text-black leading-[1.3] min-h-[100px]">
                    We successfully developed a functional app prototype within a tight timeframe, demonstrating the team&apos;s efficiency and adaptability.
                  </p>
                </div>
                <div className="bg-[rgba(199,224,183,0.4)] rounded-[12px] px-8 py-6 flex flex-col gap-3 flex-1">
                  <p className="font-sans text-[#8a8a8a] text-base leading-[1.3]">02/</p>
                  <p className="font-sans font-bold text-base text-[#237f23] leading-[1.3]">User-Centric Design</p>
                  <p className="font-sans text-base text-black leading-[1.3] min-h-[100px]">
                    We developed a user-focused tool for transparent drug pricing, quickly integrating complex data and algorithms for real-time, accurate results.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>

        <FooterCompact />
      </main>
    </div>
  );
}