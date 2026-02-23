import type { ReactNode } from "react";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import FooterCompact from "../../components/FooterCompact";
import StickyAside from "../../components/StickyAside";

// Thumbnail — no local file; using Figma asset URL
const THUMBNAIL = "/veriprix/veriprix-thumbnail.png"

// 1 — Background
const IMG_BG_1 = "/veriprix/1-background/1-background.png";
const IMG_BG_1_TAG = "/veriprix/1-background/1-background-tag.svg";
const IMG_BG_2 = "/veriprix/1-background/2-problem.png";
const IMG_BG_2_TAG = "/veriprix/1-background/2-problem-tag.svg";
const IMG_BG_3 = "/veriprix/1-background/3-solution.png";
const IMG_BG_3_TAG = "/veriprix/1-background/3-solution-tag.svg";

// 2 — Final Product
const VID_FINAL_1 = "/veriprix/2-final-product/1.1-final-product.mp4";
const IMG_FINAL_1 = "/veriprix/2-final-product/1.2-final-product.png";
const VID_FINAL_2 = "/veriprix/2-final-product/2.1-final-product.mp4";
const IMG_FINAL_2 = "/veriprix/2-final-product/2.2-final-product.png";
const VID_FINAL_3 = "/veriprix/2-final-product/3.1-final-product.mp4";
const IMG_FINAL_3 = "/veriprix/2-final-product/3.2-final-product.png";

// 3 — Research
const VID_RESEARCH_1 = "/veriprix/3-research/research-1.mp4";
const VID_RESEARCH_2 = "/veriprix/3-research/research-2.mp4";
const IMG_RESEARCH_3 = "/veriprix/3-research/research-3.png";

// 4 — Problem
const IMG_PROBLEM_FRAME = "/veriprix/4-problem/problem-frame.png";

// 5 — Solution
const IMG_SOLUTION_FRAME = "/veriprix/5-solution/solution.png";
const IMG_SOLUTION_1 = "/veriprix/5-solution/solution-1.png";
const IMG_SOLUTION_2 = "/veriprix/5-solution/solution-2.png";
const IMG_SOLUTION_3 = "/veriprix/5-solution/solution-3.png";
const IMG_SOLUTION_4 = "/veriprix/5-solution/solution-4.png";
const IMG_SOLUTION_5 = "/veriprix/5-solution/solution-5.png";

// 6 — Business Plan
const IMG_BPLAN_1 = "/veriprix/6-business-plan/business-plan-1.png";
const IMG_BPLAN_2 = "/veriprix/6-business-plan/business-plan-2.svg";
const IMG_BPLAN_3 = "/veriprix/6-business-plan/business-plan-3.png";

const NAV_ITEMS = [
  { id: "overview", label: "overview" },
  { id: "background", label: "background" },
  { id: "final-product", label: "final product" },
  { id: "research", label: "research" },
  { id: "problem", label: "problem" },
  { id: "solution", label: "solution" },
  { id: "business-plan", label: "business plan" },
  { id: "takeaways", label: "takeaways" },
];

const FINAL_PRODUCTS = [
  {
    title: "Insurance-Based Pricing",
    body: "Patients can enter their insurance information to accurately display the differences in medication coverage for each plan. This enables them to see the exact medication prices in real-time.",
    video: VID_FINAL_1,
    img: IMG_FINAL_1,
  },
  {
    title: "Medication Search & Comparison",
    body: "Patients can search for specific medications and instantly compare prices across nearby pharmacies. Results are sorted by cost so patients can make confident, informed choices.",
    video: VID_FINAL_2,
    img: IMG_FINAL_2,
  },
  {
    title: "Pharmacy Locator",
    body: "The app maps local pharmacies and their pricing, so patients can find the most affordable option near them with just one touch.",
    video: VID_FINAL_3,
    img: IMG_FINAL_3,
  },
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

export default function Veriprix() {
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
            2023 - app design
          </p>
          <h1 className="font-sans font-medium text-[60px] leading-[1.1] tracking-[-0.01em] text-[#347ff0]">
            veriprix
          </h1>
        </section>

        {/* Full-width thumbnail */}
        <div className="w-full aspect-[1280/600] relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={THUMBNAIL}
            alt="VeriPrix project thumbnail"
            className="w-full h-full object-cover"
          />
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
                  Veriprix is a mobile app that provides patients with reliable, transparent drug pricing from local pharmacies, enabling patients to find the best medication prices with confidence.
                </p>
                <div className="flex gap-5 flex-wrap md:flex-nowrap">
                  <div className="flex flex-col gap-2 flex-1 min-w-[100px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">Time</span>
                    <span className="font-sans text-base text-black leading-[1.3]">April 2023</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-[120px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">Team</span>
                    <span className="font-sans text-base text-black leading-[1.3]">MIT Hackathon</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-[80px]">
                    <span className="font-sans font-bold text-base text-black leading-[1.3]">Tools</span>
                    <span className="font-sans text-base text-black leading-[1.3]">Figma</span>
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
                <div className="flex gap-2 md:gap-4">
                  {[
                    { img: IMG_BG_1, tag: IMG_BG_1_TAG, alt: "Cost variation between pharmacies" },
                    { img: IMG_BG_2, tag: IMG_BG_2_TAG, alt: "Insurance complexity" },
                    { img: IMG_BG_3, tag: IMG_BG_3_TAG, alt: "Transparent pricing solution" },
                  ].map(({ img, tag, alt }) => (
                    <div key={alt} className="flex-1 flex flex-col gap-1">
                      <div className="aspect-[280/261] relative bg-[#3b3b3c] rounded-[8px] overflow-hidden">
                        <Image src={img} alt={alt} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={tag} alt="" className="w-full" />
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <p className="flex-1 font-sans text-base leading-[1.3] text-black">
                    The cost of the same medication varies among different pharmacies.
                  </p>
                  <p className="flex-1 font-sans text-base leading-[1.3] text-black">
                    Insurance costs become convoluted due to intermediaries such as Pharmacy Benefit Managers (PBM) and wholesalers.
                  </p>
                  <p className="flex-1 font-sans text-base leading-[1.3] text-black">
                    Provide accurate and transparent drug pricing using data analytics.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Final Product ────────────────────────────────────── */}
            <section id="final-product" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Final Product</SectionTitle>
              <div className="flex flex-col gap-24">
                {FINAL_PRODUCTS.map(({ title, body, video, img }) => (
                  <div key={title} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                      <p className="font-sans font-bold text-base text-[#347ff0] leading-[1.3]">{title}</p>
                      <p className="font-sans text-base text-black leading-[1.3]">{body}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 items-center justify-items-center">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-auto max-h-[790px] rounded-[40px] object-cover"
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                      <Image
                        src={img}
                        alt={title}
                        width={400}
                        height={800}
                        className="w-auto max-h-[790px] rounded-[40px] object-cover"
                        sizes="(min-width: 768px) 45vw, 50vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Research ─────────────────────────────────────────── */}
            <section id="research" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Research</SectionTitle>
              <div className="flex flex-col gap-24">

                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <p className="font-sans font-bold text-base text-black leading-[1.3] md:w-[200px] shrink-0">
                    Why does such a significant price difference occur?
                  </p>
                  <div className="flex flex-col gap-3 flex-1 min-w-0">
                    <p className="font-sans text-base text-black leading-[1.3]">
                      Insurance pricing is complex and unclear due to intermediaries like Pharmacy Benefits Managers (PBMs) and wholesalers. Their behind-the-scenes negotiations obscure true costs, leading to significant price variations. This lack of transparency makes it difficult for consumers to understand the pricing, contributing to extreme price differences in healthcare.
                    </p>
                    <div className="aspect-video relative border border-[#3b3b3c] rounded-[15px] overflow-hidden">
                      <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                        <source src={VID_RESEARCH_1} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <p className="font-sans font-bold text-base text-black leading-[1.3] md:w-[200px] shrink-0">
                    Hidden disparities in medication pricing
                  </p>
                  <div className="flex flex-col md:flex-row gap-3 flex-1 min-w-0">
                    <div className="flex-1 aspect-video relative border border-[#babbbf] rounded-[15px] overflow-hidden">
                      <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                        <source src={VID_RESEARCH_2} type="video/mp4" />
                      </video>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <p className="font-sans text-base text-black leading-[1.3]">
                        The cost of the same medication can vary depending on the pharmacy.
                      </p>
                      <p className="font-sans font-bold text-base text-[#3b7ad9] leading-[1.3]">
                        Price variations between pharmacies can range from 170% to 330%.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <p className="font-sans font-bold text-base text-black leading-[1.3] md:w-[200px] shrink-0">
                    Why does opaque drug pricing matter so much?
                  </p>
                  <div className="flex flex-col gap-5 flex-1 min-w-0">
                    <p className="font-sans text-base text-black leading-[1.3]">
                      Opaque pricing disrupts the entire healthcare ecosystem, harming patients, doctors, and payors. It creates confusion, restricts access to affordable care, and drives up costs. Patients struggle with rising expenses, doctors find it challenging to prescribe cost-effective treatments, and payors face difficulties managing expenses, leading to higher premiums.
                    </p>
                    <Image
                      src={IMG_RESEARCH_3}
                      alt="Healthcare ecosystem impact diagram"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto rounded-[8px]"
                    />
                  </div>
                </div>

              </div>
            </section>

            {/* ── Problem ──────────────────────────────────────────── */}
            <section id="problem" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Problem</SectionTitle>
              <div className="relative rounded-[12px] overflow-hidden px-10 py-7">
                <div className="absolute inset-0">
                  <Image src={IMG_PROBLEM_FRAME} alt="" fill className="object-cover" sizes="100vw"/>
                </div>
                <p className="relative font-sans font-bold text-base text-white leading-[1.3]">
                  No platform offers transparent access to insured drug pricing, leaving consumers in the dark about their
                  actual medication costs.
                </p>
              </div>
            </section>
            
            {/* ── Solution ─────────────────────────────────────────── */}
            <section id="solution" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Solution</SectionTitle>
              <div className="flex flex-col gap-24">
                
                <div className="relative rounded-[12px] overflow-hidden px-10 py-7">
                  <div className="absolute inset-0">
                    <Image src={IMG_SOLUTION_FRAME} alt="" fill className="object-cover" sizes="100vw"/>
                  </div>
                  <p className="relative font-sans font-bold text-base text-white leading-[1.3]">
                    A platform where patients can effortlessly compare medication prices across different pharmacies, all
                    available with just one touch.
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <p className="font-sans font-bold text-base text-black leading-[1.3] md:w-[200px] shrink-0">
                    How can it be beneficial?
                  </p>
                  <div className="flex flex-col gap-5 flex-1 min-w-0">
                    <p className="font-sans text-base text-black leading-[1.3]">
                      The &apos;VeriPrix&apos; application empowers patients with clear drug pricing, leading to
                      out-of-pocket savings. It enables doctors to prescribe cost-effective treatments, improving
                      outcomes, and benefits payors through higher revenue by reducing overall healthcare costs.
                      VeriPrix enhances transparency, eliminating the need for intermediaries that often obscure true
                      costs.
                    </p>
                    <Image
                        src={IMG_SOLUTION_1}
                        alt="VeriPrix stakeholder benefits diagram"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto rounded-[8px]"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <p className="font-sans font-bold text-base text-black leading-[1.3] md:w-[200px] shrink-0">
                    How can accurate drug pricing be made accessible?
                  </p>
                  <div className="flex-1 min-w-0">
                    <Image
                        src={IMG_SOLUTION_2}
                        alt="Accurate drug pricing accessibility diagram"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto rounded-[8px]"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <p className="font-sans font-bold text-base text-black leading-[1.3] md:w-[200px] shrink-0">
                    Process
                  </p>
                  <div className="flex gap-3 md:gap-4 flex-1 min-w-0 items-center">
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <p className="font-sans text-base text-black leading-[1.3]">Sketches</p>
                      <div className="aspect-[631/466] relative border border-[#8a8a8a] rounded-[6px] overflow-hidden">
                        <Image src={IMG_SOLUTION_3} alt="Design sketches" fill className="object-cover"
                               sizes="(min-width: 768px) 40vw, 50vw"/>
                      </div>
                    </div>
                    <span className="font-sans text-black shrink-0">→</span>
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <p className="font-sans text-base text-black leading-[1.3]">Low-fidelity</p>
                      <div className="aspect-[631/466] relative border border-[#8a8a8a] rounded-[6px] overflow-hidden">
                        <Image src={IMG_SOLUTION_4} alt="Low-fidelity wireframes" fill className="object-cover"
                               sizes="(min-width: 768px) 40vw, 50vw"/>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <p className="font-sans font-bold text-base text-black leading-[1.3] md:w-[200px] shrink-0">
                    Branding
                  </p>
                  <div className="flex-1 min-w-0 border border-[#8a8a8a] rounded-[12px] overflow-hidden">
                    <Image
                        src={IMG_SOLUTION_5}
                        alt="VeriPrix branding"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                  </div>
                </div>
              
              </div>
            </section>
            
            {/* ── Business Plan ────────────────────────────────────── */}
            <section id="business-plan" className="flex flex-col gap-7 pt-[120px]">
              <SectionTitle>Business Plan</SectionTitle>
              <div className="flex flex-col gap-24">
                
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <p className="font-sans font-bold text-base text-black leading-[1.3] md:w-[200px] shrink-0">
                    Marketing Strategy
                  </p>
                  <div className="flex flex-col gap-5 flex-1 min-w-0">
                    <Image
                      src={IMG_BPLAN_1}
                      alt="Marketing strategy diagram"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto rounded-[8px]"
                    />
                    <div className="flex flex-col gap-2 font-sans text-base text-black">
                      <p className="leading-[1.3]">
                        The unique advantage of VeriPrix compared to other applications, which can be a key selling point for potential users, includes:
                      </p>
                      <ol className="list-decimal ml-6 flex flex-col gap-1">
                        <li className="leading-[1.3]">
                          <strong>Insurance Integration</strong>: Users can seamlessly apply their own insurance, allowing for deductibles to be considered and access to specialty medications at up to 50% lower prices.
                        </li>
                        <li className="leading-[1.3]">
                          <strong>Expanded Medication Choices</strong>: VeriPrix offers a wider range of medication options, providing users with more flexibility and access to the best treatments available.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-10">
                  <p className="font-sans font-bold text-base text-black leading-[1.3] md:w-[200px] shrink-0">
                    Business Model
                  </p>
                  <div className="flex-1 min-w-0">
                    <Image
                      src={IMG_BPLAN_2}
                      alt="Business model: VeriPrix App – Patients – Pharmacy"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto rounded-[8px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <p className="font-sans font-bold text-base text-black leading-[1.3] md:w-[200px] shrink-0">
                    Revenue
                  </p>
                  <div className="flex flex-col gap-5 flex-1 min-w-0">
                    <Image
                      src={IMG_BPLAN_3}
                      alt="Revenue model chart"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto rounded-[8px]"
                    />
                    <p className="font-sans text-base text-black leading-[1.3]">
                      VeriPrix will initially target local employer-sponsored health plans to build a solid customer base. From there, the business will gradually expand to include larger insurance companies. The primary revenue streams will come from three key areas.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* ── Takeaways ────────────────────────────────────────── */}
            <section id="takeaways" className="flex flex-col gap-7 pt-[120px] pb-16">
              <SectionTitle>Takeaways</SectionTitle>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-[rgba(183,208,224,0.4)] rounded-[16px] px-8 py-6 flex flex-col gap-3 flex-1">
                  <p className="font-sans text-[#8a8a8a] text-base leading-[1.3]">01/</p>
                  <p className="font-sans font-bold text-base text-[#1b5bbc] leading-[1.3]">Rapid Prototyping</p>
                  <p className="font-sans text-base text-black leading-[1.3] min-h-[100px]">
                    We successfully developed a functional app prototype within a tight timeframe, demonstrating the team&apos;s efficiency and adaptability.
                  </p>
                </div>
                <div className="bg-[rgba(183,208,224,0.4)] rounded-[16px] px-8 py-6 flex flex-col gap-3 flex-1">
                  <p className="font-sans text-[#8a8a8a] text-base leading-[1.3]">02/</p>
                  <p className="font-sans font-bold text-base text-[#1b5bbc] leading-[1.3]">User-Centric Design</p>
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