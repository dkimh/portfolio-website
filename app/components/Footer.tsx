import Image from "next/image";

const R2 = process.env.NEXT_PUBLIC_R2_BASE ?? "";
const LOGO_FULL = `${R2}/work/logo-full.svg`;

export default function Footer() {
  return (
    <footer className="border-t border-[#c9c9c9]">
      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-[120px] pt-16 pb-4 px-4">
        <div className="h-[31px] w-[227px]">
          <Image src={LOGO_FULL} alt="danielle kim" width={227} height={31} className="h-full w-auto" />
        </div>
        <nav className="flex gap-6">
          <a
            href="mailto:flydanielle09@gmail.com"
            className="font-sans text-[#8a8a8a] text-base leading-[1.3] hover:text-black transition-colors"
          >
            email
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[#8a8a8a] text-base leading-[1.3] hover:text-black transition-colors"
          >
            linkedin
          </a>
        </nav>
        <div className="font-sans text-[#8a8a8a] text-[12px] tracking-[-0.005em] leading-[1.45]">
          <p>copyright © 2025 danielle h kim</p>
          <p>all rights reserved</p>
        </div>
      </div>

      {/* Tablet + Desktop — 2-col grid */}
      <div className="hidden align-content md:grid grid-cols-2 gap-10 items-center pt-32 pb-8 px-12 xl:px-20">
        {/* Col 1: logo + copyright, right-aligned */}
        <div className="flex flex-col items-end gap-3 max-w-[342px]">
          <Image src={LOGO_FULL} alt="danielle kim" width={227} height={31} className="w-full h-auto" />
          <div className="font-sans text-[#8a8a8a] text-[12px] tracking-[-0.005em] leading-[1.45] text-right">
            <p>
              Built with{" "}
              <a href="https://github.com/dkimh/portfolio-website" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200">Next.js</a>
              {" "}&amp;{" "}
              <a href="https://pikminbloom.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-hoverblue transition-colors duration-200">:pickmin-blue:</a>
              {" "}🌱
            </p>
            <p>danielle.h.kim © 2025</p>
          </div>
        </div>

        {/* Col 2: links, right-aligned */}
        <nav className="flex gap-6 justify-self-end">
          <a
            href="mailto:dkimh9@gmail.com"
            className="font-sans text-[#8a8a8a] text-base leading-[1.3] hover:text-black transition-colors"
          >
            email
          </a>
          <a
            href="https://www.linkedin.com/in/danielle-h-kim"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[#8a8a8a] text-base leading-[1.3] hover:text-black transition-colors"
          >
            linkedin
          </a>
        </nav>
      </div>
    </footer>
  );
}