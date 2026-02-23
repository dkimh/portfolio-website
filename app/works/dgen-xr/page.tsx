import { cookies } from "next/headers";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import FooterCompact from "../../components/FooterCompact";
import UserFlowCarousel from "../../components/UserFlowCarousel";
import StickyAside from "../../components/StickyAside";
import PasswordGate from "../../components/PasswordGate";

// CDN assets from Cloudflare R2
const R2 = process.env.NEXT_PUBLIC_R2_BASE ?? "";
const THUMBNAIL = `${R2}/dgen-xr/DGEN%20thumbnail.png`;
const IMG_DART = `${R2}/dgen-xr/3-research/DART%201.png`;
const IMG_DGEN380 = `${R2}/dgen-xr/3-research/DGEN%20380%201.png`;
const IMG_COSTLY_SETUP = `${R2}/dgen-xr/3-research/Costly%20Setup.png`;
const IMG_LOW_VISIBILITY = `${R2}/dgen-xr/3-research/Low%20Visibility.png`;
const IMG_IDEATION_SKETCH = `${R2}/dgen-xr/4-ideation/Ideation%20sketch.png`;
const IMG_UNITY_PROTO = `${R2}/dgen-xr/4-ideation/Unity%20prototyping.png`;
const IMG_CLASS_1 = `${R2}/dgen-xr/5-testing/DGEN%20Class%201.png`;
const IMG_CLASS_2 = `${R2}/dgen-xr/5-testing/DGEN%20Class%202.png`;
const IMG_CLASS_3 = `${R2}/dgen-xr/5-testing/DGEN%20Class%203.png`;
const IMG_ITER_BEFORE = `${R2}/dgen-xr/5-testing/Iteration_1_Before.png`;
const IMG_ITER_AFTER = `${R2}/dgen-xr/5-testing/Iteration_1_After.png`;
const VID_SPATIAL_AUDIO = `${R2}/dgen-xr/2-solution/1.%20Spatial%20Audio.mp4`;
const VID_MODULAR_ENGINE = `${R2}/dgen-xr/2-solution/2.%20Modular%20Engine%20Config.mp4`;
const VID_PAST_DATA = `${R2}/dgen-xr/2-solution/3.%20Past%20data.mp4`;
const IMG_ICON_COSTLY = `${R2}/dgen-xr/3-research/costly-icon.svg`;
const IMG_ICON_LOW = `${R2}/dgen-xr/3-research/low-icon.svg`;
const IMG_OBJECTIVES_ICON1 = `${R2}/dgen-xr/3-research/objectives-1.svg`;
const IMG_OBJECTIVES_ICON2 = `${R2}/dgen-xr/3-research/objectives-2.svg`;

const NAV_ITEMS = [
  { id: "overview", label: "overview" },
  { id: "problem", label: "problem" },
  { id: "solution", label: "solution" },
  { id: "research", label: "research" },
  { id: "ideation", label: "ideation" },
  { id: "testing", label: "testing" },
  { id: "impact", label: "impact" },
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

export default async function DgenXR() {
  const jar = await cookies();
  const isAuthenticated = jar.get("dgen-auth")?.value === "1";

  if (!isAuthenticated) {
    return (
      <div className="bg-[#f1f3f2] min-h-screen">
        <Navigation />
        <main className="flex flex-col">
          <section className="pt-[160px] pb-8 px-4 md:px-12 xl:px-20">
            <p className="font-sans text-base leading-[1.3] text-black">
              2025 - design and software development
            </p>
            <h1 className="font-sans font-medium text-[60px] leading-[1.1] tracking-[-0.01em] text-[#b42533]">
              nasa intern
            </h1>
          </section>
          <div className="px-4 pb-16 md:px-12 xl:px-20">
            <PasswordGate />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-[#f1f3f2] min-h-screen">
      <Navigation />

      <main className="flex flex-col">
        {/* Page Title */}
        <section id="page-title" className="relative md:sticky md:top-0 z-10  pt-[160px] pb-8 px-4 md:px-12 xl:px-20 md:w-[269px] xl:w-full">
          <p className="font-sans text-base leading-[1.3] text-black">
            2025 - design and software development
          </p>
          <h1 className="font-sans font-medium text-[60px] leading-[1.1] tracking-[-0.01em] text-[#b42533]">
            nasa intern
          </h1>
        </section>

        {/* Full-width thumbnail */}
        <div className="w-full aspect-video relative overflow-hidden">
          <Image src={THUMBNAIL} alt="DGEN-XR project thumbnail" fill className="object-cover" sizes="100vw" />
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
                  DGEN-XR is an XR platform to simulate the acoustic behavior of the DGEN turbofan engine. Users can explore engine configurations and see how design changes affect acoustic outcomes in real time, enhancing research and training without costly tests.
                </p>
                <div className="flex gap-5 flex-wrap md:flex-nowrap">
                  <div className="flex flex-col gap-2 flex-1 min-w-[120px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">Time</span>
                    <span className="font-sans text-base text-black leading-[1.3]">Jun 2025 - Aug 2025</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-[140px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">Team</span>
                    <span className="font-sans text-base text-black leading-[1.3]">NASA Graphics and Visualization Lab</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-[100px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">Tools</span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-sans text-base text-black leading-[1.3]">Figma</span>
                      <span className="font-sans text-base text-black leading-[1.3]">Unity</span>
                      <span className="font-sans text-base text-black leading-[1.3]">Meta Quest</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-[120px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">My role</span>
                    <span className="font-sans text-base text-black leading-[1.3]">XR Designer &amp; Developer</span>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Problem ──────────────────────────────────────────── */}
            <section id="problem" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Problem</SectionTitle>
              <div className="bg-[#123d67] rounded-[12px] p-8">
                <p className="font-sans font-semibold text-[22px] text-white tracking-[-0.01em] leading-[1.2]">
                  The DGEN engine&apos;s complexity, limited visibility, and high testing costs make hands-on learning &amp; testing difficult for engineers. This VR/AR app offers an accessible, immersive way for them to explore and understand the engine.
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
                    title: "Spatial Audio Simulation",
                    body: "In DGEN-XR, users move the virtual scene with a controller and hear realistic sound. The simulation mimics the DART facility with a 30-microphone array, allowing users to hear engine sound changes based on their position.",
                    video: VID_SPATIAL_AUDIO,
                  },
                  {
                    n: 2,
                    title: "Modular Engine Configuration",
                    body: "Users can modify engine components and hear how changes affect sound. The demo shows how adding an acoustic liner reduces noise levels, enabling quick design experimentation and helping engineers evaluate acoustic solutions.",
                    video: VID_MODULAR_ENGINE,
                  },
                  {
                    n: 3,
                    title: "Past Test Data Simulation",
                    body: "DGEN-XR uses past DGEN engine tests data to replay scenarios and experience acoustic changes at various thrust levels. This aids in efficient test reviews and future planning.",
                    video: VID_PAST_DATA,
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

            {/* ── Research ─────────────────────────────────────────── */}
            <section id="research" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Research</SectionTitle>
              <div className="flex flex-col gap-24">

                {/* Background */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-sans font-semibold text-[22px] text-black tracking-[-0.01em] leading-[1.2]">Background</h3>
                  <p className="font-sans text-base text-black leading-[1.3]">
                    At NASA&apos;s Glenn Research Center, the DART acoustic dome helps engineers assess engine noise levels, while the DGEN 380 turbofan is designed for evaluating acoustic performance. Enhancing physical testing, the <strong>DGEN-XR</strong> extended reality app enhances these tests by enabling engineers to simulate and analyze results in a virtual setting.
                  </p>
                  <div className="flex gap-4 items-start">
                    <div className="flex flex-col gap-0.5 flex-1">
                      <div className="aspect-[429/279] relative rounded-[6px] overflow-hidden w-full">
                        <Image src={IMG_DART} alt="DART facility" fill className="object-cover" sizes="(min-width: 768px) 40vw, 50vw" />
                      </div>
                      <p className="font-sans text-[12px] text-black tracking-[-0.005em] leading-[1.45]">→ DGEN Aero-Propulsion Research Turbofan (DART)</p>
                    </div>
                    <div className="flex flex-col gap-0.5 flex-1">
                      <div className="aspect-[1406/916] relative rounded-[6px] overflow-hidden w-full">
                        <Image src={IMG_DGEN380} alt="DGEN 380 engine" fill className="object-cover" sizes="(min-width: 768px) 40vw, 50vw" />
                      </div>
                      <p className="font-sans text-[12px] text-black tracking-[-0.005em] leading-[1.45]">→ DGEN 380 Turbofan Engine</p>
                    </div>
                  </div>
                </div>

                {/* User Interview */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-sans font-semibold text-[22px] text-black tracking-[-0.01em] leading-[1.2]">User Interview</h3>
                  <p className="font-sans text-base text-black leading-[1.3]">
                    Through interviews with <strong className="text-[#123d67]">5 NASA engineers in the Engine Acoustics Branch</strong>, I identified two key pain points that highlight the challenges in engine acoustics research and the need for a new solution.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="bg-[rgba(172,187,202,0.4)] rounded-[12px] p-6 flex flex-col gap-5 flex-1">
                      <div className="flex items-center gap-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={IMG_ICON_COSTLY} alt="" className="w-7 h-7" />
                        <span className="font-sans font-semibold text-[22px] text-[#123d67] tracking-[-0.01em] leading-[1.2]">Costly Setup</span>
                      </div>
                      <p className="font-sans text-base text-black leading-[1.3]">
                        Running the DGEN engine is complex and costly, which makes frequent testing, large-scale data collection, and rapid iteration impractical.
                      </p>
                      <div className="flex-1 rounded-[6px] overflow-hidden min-h-[160px] relative">
                        <Image src={IMG_COSTLY_SETUP} alt="Costly setup" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
                      </div>
                    </div>
                    <div className="bg-[rgba(172,187,202,0.4)] rounded-[12px] p-6 flex flex-col gap-5 flex-1">
                      <div className="flex items-center gap-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={IMG_ICON_LOW} alt="" className="w-7 h-7" />
                        <span className="font-sans font-semibold text-[22px] text-[#123d67] tracking-[-0.01em] leading-[1.2]">Low Visibility</span>
                      </div>
                      <p className="font-sans text-base text-black leading-[1.3]">
                        Within NASA, limited awareness of the facility drives underutilization, emphasizing the need for internal education and outreach.
                      </p>
                      <div className="aspect-[397/228] rounded-[6px] overflow-hidden relative">
                        <Image src={IMG_LOW_VISIBILITY} alt="Low visibility" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Objectives */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-sans font-semibold text-[22px] text-black tracking-[-0.01em] leading-[1.2]">Product Objectives</h3>
                  <p className="font-sans text-base text-black leading-[1.3]">
                    Based on the interview and identified pain points, I broke down the key objectives of the DGEN-XR program to better understand users&apos; goals and priorities.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#123d67] rounded-[12px] px-6 py-7 flex gap-4 items-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={IMG_OBJECTIVES_ICON1} alt="" className="w-10 h-10 shrink-0" />
                      <p className="font-sans font-semibold text-[22px] text-white tracking-[-0.01em] leading-[1.2]">
                        Serve as a supportive R&amp;D tool for engine configuration experimentation
                      </p>
                    </div>
                    <div className="bg-[#123d67] rounded-[12px] px-6 py-7 flex gap-4 items-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={IMG_OBJECTIVES_ICON2} alt="" className="w-10 h-10 shrink-0" />
                      <p className="font-sans font-semibold text-[22px] text-white tracking-[-0.01em] leading-[1.2]">
                        Enhance understanding of engine acoustics through immersive learning
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* ── Ideation ─────────────────────────────────────────── */}
            <section id="ideation" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Ideation</SectionTitle>
              <div className="flex flex-col gap-24">

                <div className="flex flex-col gap-4">
                  <h3 className="font-sans font-semibold text-[22px] text-black tracking-[-0.01em] leading-[1.2]">Ideation &amp; Concept Development</h3>
                  <p className="font-sans text-base text-black leading-[1.3]">After defining key pain points and user journeys, I collaborated with the acoustic engineering team to brainstorm and sketch potential solutions.</p>
                  <div className="aspect-[874/500] relative rounded-[12px] overflow-hidden">
                    <Image src={IMG_IDEATION_SKETCH} alt="Ideation sketch" fill className="object-cover" sizes="100vw" />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-sans font-semibold text-[22px] text-black tracking-[-0.01em] leading-[1.2]">Rapid Prototyping in Unity</h3>
                  <p className="font-sans text-base text-black leading-[1.3]">I built the application in Unity with C# alongside design, using in-XR prototyping to test:</p>
                  <ul className="list-disc ml-6 flex flex-col gap-1">
                    {[
                      "Test spatial UI placement and readability in real 3D space",
                      "Validate controller interactions and hand-tracking ergonomics",
                      "Experience spatial audio positioning accurately rather than approximating it on 2D screens",
                      "Iterate quickly with acoustic engineers testing live builds",
                    ].map((item) => (
                      <li key={item} className="font-sans text-base text-black leading-[1.3]">{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-0.5">
                    <div className="aspect-[3416/2024] w-full relative">
                      <Image src={IMG_UNITY_PROTO} alt="Unity prototype" fill className="object-cover" sizes="100vw" />
                    </div>
                    <p className="font-sans text-[12px] text-black tracking-[-0.005em] leading-[1.45]">→ This early Unity prototype showcases the DGEN 380 engine model, built for geometric accuracy and modularity.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-sans font-semibold text-[22px] text-black tracking-[-0.01em] leading-[1.2]">User Flow</h3>
                  <p className="font-sans text-base text-black leading-[1.3]">Once aligned with the acoustic engineering team, I created detailed user-flow maps to show the end-to-end experience and feature navigation.</p>
                  <UserFlowCarousel />
                </div>

              </div>
            </section>

            {/* ── User Testing ─────────────────────────────────────── */}
            <section id="testing" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>User Testing</SectionTitle>
              <div className="flex flex-col gap-24">

                <div className="flex flex-col gap-4">
                  <h3 className="font-sans font-semibold text-[22px] text-black tracking-[-0.01em] leading-[1.2]">DGEN 380 Class</h3>
                  <div className="flex flex-col gap-1">
                    <p className="font-sans text-base text-black leading-[1.3]">GRC hosted a two-week DGEN 380 training combining XR-based instruction and hands-on engine disassembly.</p>
                    <p className="font-sans font-bold text-base text-black leading-[1.3]">32 engineers participated in the study, including branch chiefs and senior technical leads.</p>
                  </div>
                  <div className="flex gap-3 w-full" style={{ aspectRatio: "874/469" }}>
                    <div className="flex-1 relative rounded-[6px] overflow-hidden">
                      <Image src={IMG_CLASS_1} alt="DGEN class" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                      <div className="flex-1 relative rounded-[6px] overflow-hidden">
                        <Image src={IMG_CLASS_2} alt="DGEN class" fill className="object-cover" sizes="(min-width: 768px) 30vw, 50vw" />
                      </div>
                      <div className="flex-1 relative rounded-[6px] overflow-hidden">
                        <Image src={IMG_CLASS_3} alt="DGEN class" fill className="object-cover" sizes="(min-width: 768px) 30vw, 50vw" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-sans font-semibold text-[22px] text-black tracking-[-0.01em] leading-[1.2]">Iterations</h3>
                  <div className="flex flex-col gap-4">
                    <div className="bg-[rgba(172,187,202,0.4)] rounded-[12px] px-8 py-6 flex flex-col gap-3">
                      <p className="font-sans text-[#8a8a8a] text-base leading-[1.3]">01/</p>
                      <p className="font-sans font-bold text-base text-[#123d67] leading-[1.3]">Ergonomic Height Optimization</p>
                      <div className="flex gap-3 items-center">
                        <div className="flex-1 aspect-[381/219] relative rounded-[6px] overflow-hidden">
                          <Image src={IMG_ITER_BEFORE} alt="Before" fill className="object-cover" sizes="(min-width: 768px) 40vw, 50vw" />
                        </div>
                        <span className="font-sans text-black text-base shrink-0">→</span>
                        <div className="flex-1 aspect-[381/219] relative rounded-[6px] overflow-hidden">
                          <Image src={IMG_ITER_AFTER} alt="After" fill className="object-cover" sizes="(min-width: 768px) 40vw, 50vw" />
                        </div>
                      </div>
                      <p className="font-sans text-base text-black leading-[1.3]">Early testing revealed users had to bend forward to view the engine. Camera, UI, and model heights were adjusted to support comfortable, upright viewing.</p>
                    </div>
                    <div className="bg-[rgba(172,187,202,0.4)] rounded-[12px] px-8 py-6 flex flex-col gap-3">
                      <p className="font-sans text-[#8a8a8a] text-base leading-[1.3]">02/</p>
                      <p className="font-sans font-bold text-base text-[#123d67] leading-[1.3]">Optimized Main Menu Layout</p>
                      <p className="font-sans text-base text-black leading-[1.3]">Reorganized the main menu to surface core features within one click, reducing exploration time and lowering the learning curve for new users.</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* ── Impact ───────────────────────────────────────────── */}
            <section id="impact" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Impact</SectionTitle>

              {/* Desktop: outcome summary left, stat cards right */}
              <div className="hidden xl:grid grid-cols-[0.75fr_1fr] gap-4">
                <div className="flex flex-col gap-4 justify-center">
                  <h3 className="font-sans font-bold text-[30px] text-[#123d67] tracking-[-0.04em] leading-[1.2]">Outcome Summary</h3>
                  <p className="font-sans text-base text-black leading-[1.3]">DGEN-XR improved how NASA engineers conduct acoustic research and training, demonstrating its potential as both an educational and R&amp;D tool.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-[#123d67] rounded-[16px] px-8 py-10 flex flex-col gap-3">
                    <p className="font-sans font-medium text-[36px] text-[#f1f3f2] tracking-[-0.02em] leading-[1.2]">30+</p>
                    <p className="font-sans text-base text-[#f1f3f2] leading-[1.3]">Trained over 30 engineers via DGEN-XR, gaining platform use and leadership support.</p>
                  </div>
                  <div className="bg-[#123d67] rounded-[16px] px-8 py-10 flex flex-col gap-3">
                    <p className="font-sans font-medium text-[36px] text-[#f1f3f2] tracking-[-0.02em] leading-[1.2]">40%+</p>
                    <p className="font-sans text-base text-[#f1f3f2] leading-[1.3]">Over 40% of users rated the tool as highly useful in real workflows.</p>
                  </div>
                </div>
              </div>

              {/* Tablet + Mobile: stacked */}
              <div className="xl:hidden flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <h3 className="font-sans font-bold text-[30px] text-[#123d67] tracking-[-0.04em] leading-[1.2]">Outcome Summary</h3>
                  <p className="font-sans text-base text-black leading-[1.3]">DGEN-XR improved how NASA engineers conduct acoustic research and training, demonstrating its potential as both an educational and R&amp;D tool.</p>
                </div>
                <div className="bg-[#123d67] rounded-[12px] px-8 py-10 flex flex-col gap-3">
                  <p className="font-sans font-medium text-[36px] text-[#f1f3f2] tracking-[-0.02em] leading-[1.2]">30+</p>
                  <p className="font-sans text-base text-[#f1f3f2] leading-[1.3]">Trained over 30 engineers via DGEN-XR, gaining platform use and leadership support.</p>
                </div>
                <div className="bg-[#123d67] rounded-[12px] px-8 py-10 flex flex-col gap-3">
                  <p className="font-sans font-medium text-[36px] text-[#f1f3f2] tracking-[-0.02em] leading-[1.2]">40%+</p>
                  <p className="font-sans text-base text-[#f1f3f2] leading-[1.3]">Over 40% of users rated the tool as highly useful in real workflows.</p>
                </div>
              </div>
            </section>

            {/* ── Takeaways ────────────────────────────────────────── */}
            <section id="takeaways" className="flex flex-col gap-7 pt-[120px] pb-16">
              <SectionTitle>Takeaways</SectionTitle>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-[rgba(172,187,202,0.4)] rounded-[16px] px-8 py-6 flex flex-col gap-3 flex-1">
                  <p className="font-sans text-[#8a8a8a] text-base leading-[1.3]">01/</p>
                  <p className="font-sans font-bold text-base text-[#123d67] leading-[1.3]">Spatial Awareness</p>
                  <p className="font-sans text-base text-black leading-[1.3]">Building directly in 3D space highlighted the importance of scale, ergonomics, and spatial clarity—elements impossible to judge accurately in 2D tools.</p>
                </div>
                <div className="bg-[rgba(172,187,202,0.4)] rounded-[16px] px-8 py-6 flex flex-col gap-3 flex-1">
                  <p className="font-sans text-[#8a8a8a] text-base leading-[1.3]">02/</p>
                  <p className="font-sans font-bold text-base text-[#123d67] leading-[1.3]">Cross-Team Alignment</p>
                  <p className="font-sans text-base text-black leading-[1.3]">Collaborating with acoustic team helped clarify their needs and expectations, ensuring the product delivered the right value and met all stakeholder goals.</p>
                </div>
              </div>

              {/* Lab promo video */}
              <div className="flex flex-col md:flex-row gap-6 items-top">
                <p className="font-sans text-[#8a8a8a] text-base leading-[1.3] md:w-1/2">
                  As part of my internship, I was interviewed for a promotional video introducing the NASA Graphics &amp; Visualization Lab — the team behind DGEN-XR. 🎬
                </p>
                <div className="w-full md:w-1/2 aspect-video rounded-[8px] overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/4g1Uif8nbAs"
                    title="NASA Graphics & Visualization Lab — Lab Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
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