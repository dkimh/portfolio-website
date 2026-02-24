"use client";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Clock from "./components/Clock";
import Footer from "./components/Footer";

const R2 = process.env.NEXT_PUBLIC_R2_BASE ?? "";

const ASSETS = {
  nasaIcon: `${R2}/work/nasa-icon.svg`,
  logoMark: `${R2}/work/logo-mark.svg`,
  logoFull: `${R2}/work/logo-full.svg`,
};

interface Project {
  name: string;
  category: string;
  description: string;
  year: string;
  thumbnail?: string;
  thumbnailBg?: string;
  thumbnailLogo?: string;
  thumbnailHover?: string;
  href?: string;
  comingSoon?: boolean;
}

const projects: Project[] = [
  {
    name: "MorphMind AI",
    category: "Product Design Intern",
    description: "Visual AI workflow builder enabling researchers to automate daily tasks.",
    year: "2026",
    thumbnailBg: "#d4e7de",
    thumbnailLogo: `${R2}/morphmind/morphmind-logo.svg`,
    thumbnailHover: `${R2}/morphmind/morphmind-prototype.png`,
    comingSoon: true,
  },
  {
    name: "DGEN-XR",
    category: "NASA Intern",
    description:
      "XR platform simulates turbofan engine acoustics for research and training.",
    year: "2025",
    thumbnail: `${R2}/work/project-DGEN-XR-thumbnail.mp4`,
    href: "/works/dgen-xr",
  },
  {
    name: "RISD S.U.I.T.S",
    category: "Team Project",
    description:
      "An AR navigation system that assists astronauts during Martian surface spacewalks",
    year: "2024",
    thumbnail: `${R2}/work/project-RISD S.U.I.T.S-thumbnail.mp4`,
    href: "/works/risd-suits",
  },
  {
    name: "Veriprix",
    category: "MIT Hackathon",
    description:
      "An app that helps patients compare medication prices from local pharmacies.",
    year: "2023",
    thumbnail: `${R2}/work/project-Veriprix-thumbnail.png`,
    href: "/works/veriprix",
  },
  {
    name: "Easyaid",
    category: "Personal Project",
    description:
      "A compact first-aid dispenser for quick access to ointments and bandages.",
    year: "2023",
    thumbnail: `${R2}/work/project-Easyaid-thumbnail.gif`,
    href: "/works/easyaid",
  },
];


function ProjectCard({ name, category, description, year, thumbnail, thumbnailBg, thumbnailLogo, thumbnailHover, href, comingSoon }: Project) {
  const isVideo = thumbnail?.endsWith(".mp4");

  const handleMouseEnter = () =>
    window.dispatchEvent(new CustomEvent("cursor-mode", {
      detail: comingSoon ? "coming-soon" : "hover",
    }));
  const handleMouseLeave = () =>
    window.dispatchEvent(new CustomEvent("cursor-mode", { detail: "default" }));

  const inner = (
    <div className="flex flex-col gap-3 group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isVideo ? (
        <div className="aspect-[592/444] w-full rounded-[4px] overflow-hidden relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-[filter] duration-300 group-hover:brightness-75"
          >
            <source src={thumbnail} type="video/mp4" />
          </video>
        </div>
      ) : thumbnail ? (
        <div className="aspect-[592/444] w-full rounded-[4px] overflow-hidden relative">
          <Image src={thumbnail} alt={name} fill className="object-cover transition-[filter] duration-300 group-hover:brightness-75" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      ) : (
        <div
          className="aspect-[592/444] w-full rounded-[4px] overflow-hidden relative"
          style={{ backgroundColor: thumbnailBg ?? "#d9d9d9" }}
        >
          {/* Default logo — fades out on hover */}
          {thumbnailLogo && (
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-out group-hover:opacity-0">
              <Image
                src={thumbnailLogo}
                alt={name}
                width={380}
                height={71}
                className="w-[70%] h-auto"
              />
            </div>
          )}
          {/* Hover image — scales in and fades in, logo clears first */}
          {thumbnailHover && (
            <div className="absolute inset-0 opacity-0 scale-[1.04] group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out delay-75">
              <Image
                src={thumbnailHover}
                alt={`${name} prototype`}
                width={371}
                height={229}
                className="absolute"
                style={{ left: "16%", top: "24%", width: "69%", height: "auto" }}
                sizes="(min-width: 768px) 40vw, 70vw"
              />
            </div>
          )}
        </div>
      )}

      {/* Desktop: 3-column row (name+category | description | year) */}
      <div className="hidden xl:flex items-start justify-between font-sans text-base leading-[1.3]">
        <div className="flex flex-col gap-0.5 w-[123px] shrink-0">
          <span className="text-black">{name}</span>
          <span className="text-[#8a8a8a]">{category}</span>
        </div>
        <div className="text-[#8a8a8a] w-[217px] shrink-0">{description}</div>
        <div className="text-black text-right w-[93px] shrink-0">{year}</div>
      </div>

      {/* Tablet / Mobile: name+category row, then description */}
      <div className="xl:hidden flex flex-col gap-3 font-sans text-base leading-[1.3]">
        <div className="flex items-start justify-between">
          <div className="flex gap-3 whitespace-nowrap">
            <span className="text-black">{name}</span>
            <span className="text-[#8a8a8a]">{category}</span>
          </div>
          <span className="text-black text-right shrink-0 w-[93px]">{year}</span>
        </div>
        <p className="text-[#8a8a8a]">{description}</p>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }
  return inner;
}

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />

      <main className="flex flex-col">
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="pt-[180px] pb-[20px] px-4 md:px-12 xl:px-20 flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-5">
            {/* Heading */}
            <p className="font-mono font-medium leading-[1.24] text-2xl tracking-[-0.02em] xl:text-[28px] xl:tracking-[0.01em] max-w-[597px]">
              <span className="text-black">danielle kim </span>
              <span className="text-[#8a8a8a]">is a</span>
              <span className="text-black"> product designer </span>
              <span className="text-[#8a8a8a]">
                passionate about exploring the intersection of technology,
                design, and human experience.{" "}
              </span>
            </p>

            {/* Currently / Prev */}
            <div className="flex flex-col gap-1 md:gap-2">
              <div className="flex items-center gap-2 md:gap-4">
                <span className="font-mono font-medium text-[#8a8a8a] text-base md:text-2xl md:tracking-[-0.02em] leading-[1.24] whitespace-nowrap">
                  Currently@
                </span>
                <a
                  href="https://morphmind.ai/"
                  className="group relative font-mono font-medium text-base md:text-2xl md:tracking-[-0.02em] leading-[1.24] text-black whitespace-nowrap"
                  target="_blank"
                >
                  MorphMind AI
                  <span className="absolute inset-x-0 bottom-[-2px] h-[2px] bg-[#c9c9c9]">
                    <span className="block h-full w-0 bg-black transition-[width] duration-800 group-hover:w-full" />
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-2 md:gap-4">
                <span className="font-mono font-medium text-[#8a8a8a] text-base md:text-2xl md:tracking-[-0.02em] leading-[1.24] whitespace-nowrap">
                  Prev@
                </span>
                <div className="flex items-end gap-0.5">
                  <Image
                    src={ASSETS.nasaIcon}
                    alt="NASA"
                    width={28}
                    height={23}
                    className="object-contain mb-[2px]"
                  />
                  <a
                    href="https://www.nasa.gov/glenn/glenn-expertise-labs-and-test-facilities/graphics-and-visualization-lab/"
                    target="_blank"
                    className="group relative font-mono font-medium text-base md:text-2xl md:tracking-[-0.02em] leading-[1.24] text-black whitespace-nowrap"
                  >
                    NASA Graphics Lab
                    <span className="absolute inset-x-0 bottom-[-2px] h-[2px] bg-[#c9c9c9]">
                      <span className="block h-full w-0 bg-black transition-[width] duration-800 group-hover:w-full" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Timezone clock — tablet & desktop only */}
          <div className="hidden md:block shrink-0 mt-4 md:mt-0">
            <Clock />
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────────── */}
        <hr className="border-0 border-t border-divider my-0 mx-4 md:mx-12 xl:mx-20" />

        {/* ── Projects ─────────────────────────────────────────────── */}
        <section id="work">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-12 xl:px-20 py-8 md:pb-11">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}