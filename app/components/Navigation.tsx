import Link from "next/link";
import LogoMark from "./LogoMark";

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="group relative font-sans text-base text-black leading-[1.3]">
      {label}
      <span className="absolute inset-x-0 bottom-[-2px] h-[2px] bg-[#c9c9c9]">
        <span className="block h-full w-0 bg-black transition-[width] duration-400 group-hover:w-full" />
      </span>
    </Link>
  );
}

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-12 md:py-7 xl:px-20">
      <LogoMark />
      <div className="flex items-center gap-6">
        <NavLink href="/" label="work" />
        <NavLink href="/about" label="about" />
      </div>
    </nav>
  );
}