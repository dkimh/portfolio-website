import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-sans font-semibold text-[22px] leading-[1.2] tracking-[-0.01em] text-black">
      {children}
    </h2>
  );
}

interface EntryProps {
  name: string;
  role: string;
  date: string;
}

function Entry({ name, role, date }: EntryProps) {
  return (
    <div className="flex flex-col gap-1 font-sans text-base leading-[1.3]">
      <span className="font-bold text-black">{name}</span>
      <span className="text-[#8a8a8a]">{role}</span>
      <span className="text-black">{date}</span>
    </div>
  );
}

function InfoLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative font-sans text-base text-black leading-[1.3]"
    >
      {label}
      <span className="absolute inset-x-0 bottom-[-2px] h-[2px] bg-[#c9c9c9]">
        <span className="block h-full w-0 bg-black transition-[width] duration-400 group-hover:w-full" />
      </span>
    </a>
  );
}

export default function About() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />

      <main className="flex flex-col">
        <section className="pt-[180px] pb-8 px-4 md:px-12 xl:px-20">

          {/* ── Desktop: two-column grid ─────────────────────────────── */}
          <div className="hidden xl:grid grid-cols-[0.5fr_1fr] gap-8">
            {/* Left: profile photo */}
            <div className="aspect-[592/444] w-full rounded-[6px] overflow-hidden relative">
              <Image src="/about/profile-pic.png" alt="profile-pic" fill className="object-cover" sizes="(min-width: 1280px) 50vw, 100vw" />
            </div>
            
            {/* Right: content */}
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-3">
                <h1 className="font-mono font-medium text-2xl tracking-[-0.02em] leading-[1.24] text-black">
                  hi, i&apos;m danielle 👩🏻‍💻
                </h1>
                <p className="font-sans text-base leading-[1.3] text-[#8a8a8a]">
                  I&apos;m driven by a passion for blending empathetic design with
                  cutting-edge technology to cultivate meaningful connections and
                  enrich user experiences. With a multi-disciplinary approach, I
                  navigate the realms of design and development, driving innovation
                  and fostering inclusivity in all my projects.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <SectionHeading>information</SectionHeading>
                <div className="flex gap-[30px]">
                  <InfoLink href="https://docs.google.com/document/d/1vXe61rZjFaoU67SHH7bGqTfKm5sxgim1nMUf3z_ILto/edit?usp=sharing" label="resume" />
                  <InfoLink href="mailto:dkimh9@gmail.com" label="email" />
                  <InfoLink href="https://www.linkedin.com/in/danielle-h-kim" label="linkedin" />
                  <InfoLink href="https://github.com/dkimh" label="github" />
                </div>
              </div>

              <div className="flex flex-col gap-7">
                <SectionHeading>experiences</SectionHeading>
                <Entry
                  name="MorphMind AI"
                  role="Product Design Intern"
                  date="Sep 2025 - Present"
                />
                <Entry
                  name="NASA"
                  role="XR Design & Development Intern"
                  date="Jun 2025 - Aug 2025"
                />
              </div>

              <div className="flex flex-col gap-7">
                <SectionHeading>awards</SectionHeading>
                <Entry
                  name="NASA SUITS Finalists"
                  role="National Top 10 Finalist; selected among 100+ university teams nationwide"
                  date="Jun 2025 - Aug 2025"
                />
                <Entry
                  name="MIT Hacking Medicine Grand Hack: Award winner"
                  role="Lead UI/UX Designer; award winner among 500+ participants worldwide."
                  date="Oct 2022"
                />
              </div>
            </div>
          </div>

          {/* ── Tablet + Mobile: stacked ─────────────────────────────── */}
          <div className="xl:hidden flex flex-col gap-8">
            {/* Profile photo — wider on tablet, squarer on mobile */}
            <div className="aspect-[4/3] md:aspect-[704/277] w-full rounded-[6px] overflow-hidden relative">
              <Image src="/about/profile-pic.png" alt="profile-pic" fill className="object-cover"
                     sizes="(min-width: 1280px) 50vw, 100vw"/>
            </div>
            
            {/* Content */}
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-3">
                <h1 className="font-mono font-medium text-2xl tracking-[-0.02em] leading-[1.24] text-black">
                  hi, i&apos;m danielle 👩🏻‍💻
                </h1>
                <p className="font-sans text-base leading-[1.3] text-[#8a8a8a]">
                  I&apos;m driven by a passion for blending empathetic design with
                  cutting-edge technology to cultivate meaningful connections and
                  enrich user experiences. With a multi-disciplinary approach, I
                  navigate the realms of design and development, driving innovation
                  and fostering inclusivity in all my projects.
                </p>
              </div>
              
              <div className="flex flex-col gap-5">
                <SectionHeading>information</SectionHeading>
                <div className="flex gap-[22px] md:gap-[30px] flex-wrap">
                  <InfoLink href="#" label="resume"/>
                  <InfoLink href="mailto:flydanielle09@gmail.com" label="email"/>
                  <InfoLink href="https://www.linkedin.com/in/danielle-h-kim" label="linkedin"/>
                  <InfoLink href="https://github.com/daniellehkim" label="github"/>
                </div>
              </div>
              
              <div className="flex flex-col gap-7">
                <SectionHeading>experiences</SectionHeading>
                <Entry
                    name="MorphMind AI"
                    role="Product Design Intern / AI startup founded by Harvard Professors"
                    date="Sep 2025 - Present"
                />
                <Entry
                    name="NASA"
                    role="XR Development & Design Intern"
                    date="Jun 2025 - Aug 2025"
                />
              </div>
              
              <div className="flex flex-col gap-7">
                <SectionHeading>awards</SectionHeading>
                <Entry
                    name="NASA SUITS Finalists"
                    role="National Top 10 Finalist; selected among 100+ university teams nationwide"
                    date="Jun 2025 - Aug 2025"
                />
                <Entry
                    name="MIT Hacking Medicine Grand Hack: Award winner"
                    role="Lead UI/UX Designer; award winner among 500+ participants worldwide."
                    date="Oct 2022"
                />
              </div>
            </div>
          </div>
        
        </section>
        
        <Footer/>
      </main>
    </div>
  );
}