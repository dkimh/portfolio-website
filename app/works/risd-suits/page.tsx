import Image from "next/image";
import Navigation from "../../components/Navigation";
import FooterCompact from "../../components/FooterCompact";
import StickyAside from "../../components/StickyAside";

// CDN assets from Cloudflare R2
const R2 = process.env.NEXT_PUBLIC_R2_BASE ?? "";
const THUMBNAIL = `${R2}/suits/SUITS%20thumbnail.png`;
const VID_ADAPTIVE = `${R2}/suits/2-solution/1.%20Adaptive%20Visibility.mp4`;
const VID_LOW_COGNITIVE = `${R2}/suits/2-solution/2.%20Low-Cognitive%20Load%20Interface.mp4`;
const VID_GESTURE = `${R2}/suits/2-solution/3.%20Gesture-Based%20Control.mp4`;
const ICON_FINDING_1 = `${R2}/suits/3-research/icon_finding_1.svg`;
const ICON_FINDING_2 = `${R2}/suits/3-research/icon_finding_2.svg`;
const ICON_FINDING_3 = `${R2}/suits/3-research/icon_finding_3.svg`;
const IMG_IDEATION_SKETCH = `${R2}/suits/4-ideation/ideation-sketch.png`;
const IMG_COLLAB_1 = `${R2}/suits/4-ideation/Collaboration%201.png`;
const IMG_COLLAB_2 = `${R2}/suits/4-ideation/Collaboration%202.png`;
const IMG_COLLAB_3 = `${R2}/suits/4-ideation/Collaboration%203.png`;
const IMG_USABILITY_1 = `${R2}/suits/5-testing/Usability%20Testing%201.png`;
const IMG_USABILITY_2 = `${R2}/suits/5-testing/Usability%20Testing%202.png`;
const IMG_JSC_1 = `${R2}/suits/5-testing/JSC%20Testing%201.png`;
const IMG_JSC_2 = `${R2}/suits/5-testing/JSC%20Testing%202.png`;

const NAV_ITEMS = [
  { id: "overview", label: "overview" },
  { id: "problem", label: "problem" },
  { id: "solution", label: "solution" },
  { id: "research", label: "research" },
  { id: "ideation", label: "ideation" },
  { id: "exit-pitch", label: "exit pitch" },
  { id: "takeaways", label: "takeaways" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-5 w-full">
      <span className="font-sans font-semibold text-[22px] text-[#8a8a8a] tracking-[-0.01em] leading-[1.2] whitespace-nowrap">
        {children}
      </span>
      <hr className="flex-1 border-0 border-t border-[#c9c9c9]" />
    </div>
  );
}

export default function RisdSuits() {
  return (
    <div className="bg-[#f1f3f2] min-h-screen">
      <Navigation />

      <main className="flex flex-col">
        {/* Page Title */}
        <section id="page-title" className="relative md:sticky md:top-0 z-10 pt-[160px] pb-8 px-4 md:px-12 xl:px-20 md:w-[269px] xl:w-full">
          <p className="font-sans text-base leading-[1.3] text-black">
            2024 - design and software development
          </p>
          <h1 className="font-sans font-medium text-[60px] leading-[1.1] tracking-[-0.01em] text-[#13729a]">
            risd suits
          </h1>
        </section>

        {/* Full-width thumbnail */}
        <div className="w-full aspect-video relative overflow-hidden">
          <Image
            src={THUMBNAIL}
            alt="RISD S.U.I.T.S project thumbnail"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Content: sticky sidebar + scrollable sections */}
        <div className="flex gap-5 items-start px-4 pb-16 md:px-12 xl:px-20">
          {/* Sticky sidebar — tablet and desktop only */}
          <StickyAside items={NAV_ITEMS} titleId="page-title" />

          {/* Main content */}
          <div className="flex-1 min-w-0 flex flex-col gap-5">

            {/* ── Overview ─────────────────────────────────────────── */}
            <section id="overview" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Overview</SectionTitle>
              <div className="flex flex-col gap-8">
                <p className="font-sans text-base leading-[1.3] text-black">
                  An AR navigation program to assist astronauts in traversing the Martian surface during spacewalks. The project was selected as a top 10 national finalist for its innovative approach.
                </p>
                <div className="flex gap-5 flex-wrap md:flex-nowrap">
                  <div className="flex flex-col gap-2 flex-1 min-w-[120px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">Time</span>
                    <span className="font-sans text-base text-black leading-[1.3]">Sep 2023 - May 2024</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-[140px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">Team</span>
                    <span className="font-sans text-base text-black leading-[1.3]">RISD Astro</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-[100px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">Tools</span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-sans text-base text-black leading-[1.3]">Unity</span>
                      <span className="font-sans text-base text-black leading-[1.3]">Magic Leap 2</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-[120px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">My role</span>
                    <span className="font-sans text-base text-black leading-[1.3]">Dev Team Lead</span>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Problem ──────────────────────────────────────────── */}
            <section id="problem" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Problem</SectionTitle>
              <div className="bg-[#13729a] rounded-[12px] p-8">
                <p className="font-sans font-semibold text-[22px] text-white tracking-[-0.01em] leading-[1.2]">
                  How can AR interfaces help astronauts efficiently complete Mars missions when facing harsh lighting conditions, cognitive overload, and severe mobility restrictions in bulky spacesuits?
                </p>
              </div>
            </section>

            {/* ── Solution ─────────────────────────────────────────── */}
            <section id="solution" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Solution</SectionTitle>
              <div className="flex flex-col gap-24">
                {[
                  {
                    n: 1,
                    title: "Adaptive Visibility",
                    body: "A navy-to-teal gradient optimized for Mars's orange, harsh lighting environment, providing high contrast and clear visibility under extreme conditions.",
                    video: VID_ADAPTIVE,
                  },
                  {
                    n: 2,
                    title: "Low-Cognitive Load Interface",
                    body: "A hand-tracking menu provides instant access to a simplified map UI that displays only essential information and controls, reducing cognitive overload and keeping primary features easily accessible.",
                    video: VID_LOW_COGNITIVE,
                  },
                  {
                    n: 3,
                    title: "Gesture-Based Control",
                    body: "Auto-checking progress bars and auto-initiated camera functions reduce manual interactions and unnecessary movements, addressing mobility restrictions.",
                    video: VID_GESTURE,
                  },
                ].map(({ n, title, body, video }) => (
                  <div key={n} className="flex flex-col gap-4">
                    <h3 className="font-sans font-semibold text-[22px] text-black tracking-[-0.01em] leading-[1.2]">
                      <ol start={n} className="list-decimal ml-8">
                        <li>{title}</li>
                      </ol>
                    </h3>
                    <p className="font-sans text-base text-black leading-[1.3]">{body}</p>
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="aspect-[874/490] rounded-[12px] w-full object-cover"
                    >
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Ideation ─────────────────────────────────────────── */}
            <section id="ideation" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Ideation</SectionTitle>
              <div className="flex flex-col gap-24">

                <div className="flex flex-col gap-4">
                  <h3 className="font-sans font-semibold text-[22px] text-black tracking-[-0.01em] leading-[1.2]">Ideation &amp; Concept Development</h3>
                  <p className="font-sans text-base text-black leading-[1.3]">
                    After identifying key pain points and goals, the team held a focused brainstorming session to generate initial solution ideas.
                  </p>
                  <div className="w-full aspect-video relative rounded-[12px] overflow-hidden">
                    <Image src={IMG_IDEATION_SKETCH} alt="Ideation sketch" fill className="object-cover" sizes="100vw" />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-sans font-semibold text-[22px] text-black tracking-[-0.01em] leading-[1.2]">Design &amp; Dev Collaboration</h3>
                  <p className="font-sans text-base text-black leading-[1.3]">
                    As a designer with a development background and serving as dev team lead, I helped bridge gaps between design and engineering by accommodating conflicts and aligning both teams around cohesive goals.
                  </p>
                  <div className="flex gap-3" style={{ aspectRatio: "874/348" }}>
                    <div className="flex-1 relative rounded-[12px] overflow-hidden">
                      <Image src={IMG_COLLAB_1} alt="Team collaboration" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                      <div className="flex-1 relative rounded-[12px] overflow-hidden">
                        <Image src={IMG_COLLAB_2} alt="Team collaboration" fill className="object-cover" sizes="(min-width: 768px) 30vw, 50vw" />
                      </div>
                      <div className="flex-1 relative rounded-[12px] overflow-hidden">
                        <Image src={IMG_COLLAB_3} alt="Team collaboration" fill className="object-cover" sizes="(min-width: 768px) 30vw, 50vw" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
            
            {/* ── Testing ─────────────────────────────────────────── */}
            <section id="testing" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>User Testing</SectionTitle>
              <div className="flex flex-col gap-24">
                
                {/* Field Usability Testing */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-sans font-semibold text-[22px] text-black tracking-[-0.01em] leading-[1.2]">Field Usability Testing</h3>
                  <p className="font-sans text-base text-black leading-[1.3]">
                    Testing was conducted at Roger Williams Park in daylight and open terrain, involving both design and development team members.
                  </p>
                  <div className="flex gap-4">
                    <div className="flex-1 aspect-[429/279] relative rounded-[6px] overflow-hidden">
                      <Image src={IMG_USABILITY_1} alt="Field usability testing" fill className="object-cover" sizes="(min-width: 768px) 40vw, 50vw" />
                    </div>
                    <div className="flex-1 aspect-[429/279] relative rounded-[6px] overflow-hidden">
                      <Image src={IMG_USABILITY_2} alt="Field usability testing" fill className="object-cover" sizes="(min-width: 768px) 40vw, 50vw" />
                    </div>
                  </div>
                  <div className="bg-[rgba(183,208,224,0.4)] rounded-[6px] p-6 flex flex-col gap-5">
                    {[
                      {
                        title: "Improve hand-tracking input",
                        body: "In harsh lighting and challenging conditions, increased hand-tracking precision was necessary.",
                      },
                      {
                        title: "Optimize UI Distance",
                        body: "Position the UI closer to improve comfort and reduce head movement in physically constrained conditions.",
                      },
                      {
                        title: "Refine head-tracking",
                        body: "Precise head tracking was required to ensure the UI followed without latency during time-sensitive missions.",
                      },
                    ].map(({ title, body }) => (
                        <div key={title} className="flex flex-col gap-3">
                          <span className="font-sans font-bold text-base text-[#00167f] leading-[1.3]">{title}</span>
                          <p className="font-sans text-base text-black leading-[1.3]">{body}</p>
                        </div>
                    ))}
                  </div>
                </div>
                
                {/* JSC Test Week */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-sans font-semibold text-[22px] text-black tracking-[-0.01em] leading-[1.2]">Test Week at NASA Johnson Space Center (JSC)</h3>
                  <p className="font-sans text-base text-black leading-[1.3]">
                    As challenge finalists, our RISD Astro team traveled to Houston, TX, to present our work and conduct final product testing at the Johnson Space Center (JSC) facilities. I was one of the four team members selected for the on-site testing.
                  </p>
                  <div className="flex gap-4">
                    <div className="flex-1 aspect-[429/317] relative rounded-[6px] overflow-hidden">
                      <Image src={IMG_JSC_1} alt="JSC testing" fill className="object-cover" sizes="(min-width: 768px) 40vw, 50vw" />
                    </div>
                    <div className="flex-1 aspect-[429/317] relative rounded-[6px] overflow-hidden">
                      <Image src={IMG_JSC_2} alt="JSC testing" fill className="object-cover" sizes="(min-width: 768px) 40vw, 50vw" />
                    </div>
                  </div>
                  <div className="bg-[rgba(183,208,224,0.4)] rounded-[6px] p-6 flex flex-col gap-5">
                    <span className="font-sans font-semibold text-[22px] text-[#00167f] tracking-[-0.01em] leading-[1.2]">Key Findings:</span>
                    {[
                      {
                        icon: ICON_FINDING_1,
                        title: "Acronym Clarification",
                        body: "Add tooltips or brief explanations for acronyms to improve accessibility and comprehension.",
                      },
                      {
                        icon: ICON_FINDING_2,
                        title: "Map Panel Toggle",
                        body: "Enable easy toggling of the map panel to improve navigation and obstacle awareness.",
                      },
                      {
                        icon: ICON_FINDING_3,
                        title: "Color Accessibility",
                        body: "Replace orange hazard pins in the map with accessible colors or visual alternatives.",
                      },
                    ].map(({ icon, title, body }) => (
                        <div key={title} className="flex flex-col gap-3">
                          <div className="flex items-center gap-2">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={icon} alt="" className="w-5 h-5 shrink-0" />
                            <span className="font-sans font-bold text-base text-[#00167f] leading-[1.3]">{title}</span>
                          </div>
                          <p className="font-sans text-base text-black leading-[1.3]">{body}</p>
                        </div>
                    ))}
                  </div>
                </div>
              
              </div>
            </section>

            {/* ── Exit Pitch ───────────────────────────────────────── */}
            <section id="exit-pitch" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Exit Pitch</SectionTitle>
              <div className="aspect-[16/9] w-full rounded-[12px] overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/79T2riu6UrY"
                  title="RISD S.U.I.T.S Exit Pitch"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </section>

            {/* ── Takeaways ────────────────────────────────────────── */}
            <section id="takeaways" className="flex flex-col gap-7 pt-[120px] pb-16">
              <SectionTitle>Takeaways</SectionTitle>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-[rgba(183,208,224,0.4)] rounded-[12px] px-8 py-6 flex flex-col gap-3 flex-1">
                  <p className="font-sans text-[#8a8a8a] text-base leading-[1.3]">01/</p>
                  <p className="font-sans font-bold text-base text-[#00167f] leading-[1.3]">Research Over Assumptions</p>
                  <p className="font-sans text-base text-black leading-[1.3]">
                    Lacking prior experience with the Mars environment, I relied on stakeholder interviews over assumptions, strengthening my ability to make objective, research-driven design decisions.
                  </p>
                </div>
                <div className="bg-[rgba(183,208,224,0.4)] rounded-[12px] px-8 py-6 flex flex-col gap-3 flex-1">
                  <p className="font-sans text-[#8a8a8a] text-base leading-[1.3]">02/</p>
                  <p className="font-sans font-bold text-base text-[#00167f] leading-[1.3]">Effective Cross-Functional Collaboration</p>
                  <p className="font-sans text-base text-black leading-[1.3]">
                    Working closely with designers and developers reinforced the importance of shared goals, continuous communication, and balancing design vision with technical constraints.
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