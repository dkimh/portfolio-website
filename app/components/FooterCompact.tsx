export default function FooterCompact() {
  return (
    <footer className="border-t border-[#c9c9c9] flex items-center justify-between px-4 py-8 md:px-12 xl:px-20">
      <div className="font-sans text-[#8a8a8a] text-[12px] tracking-[-0.005em] leading-[1.45]">
        <p>copyright © 2025 danielle.h.kim</p>
        <p>all rights reserved</p>
      </div>
      <nav className="flex gap-6 items-center">
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
    </footer>
  );
}
