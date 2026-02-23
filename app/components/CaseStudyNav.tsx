"use client";

interface NavItem {
  id: string;
  label: string;
}

interface CaseStudyNavProps {
  items: NavItem[];
}

// Evaluates a CSS cubic-bezier(x1,y1,x2,y2) at a given progress [0,1]
function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  const bx = (t: number) => 3 * x1 * t * (1 - t) ** 2 + 3 * x2 * t ** 2 * (1 - t) + t ** 3;
  const by = (t: number) => 3 * y1 * t * (1 - t) ** 2 + 3 * y2 * t ** 2 * (1 - t) + t ** 3;
  return (progress: number) => {
    let lo = 0, hi = 1, t = progress;
    for (let i = 0; i < 30; i++) {
      const x = bx(t);
      if (Math.abs(x - progress) < 1e-6) break;
      if (x < progress) lo = t; else hi = t;
      t = (lo + hi) / 2;
    }
    return by(t);
  };
}

const ease = cubicBezier(0.77, 0, 0.18, 1);

function animateScrollTo(targetY: number, duration = 1000) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start: number | null = null;

  function step(timestamp: number) {
    if (start === null) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * ease(progress));
    if (elapsed < duration) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function CaseStudyNav({ items }: CaseStudyNavProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      animateScrollTo(target.getBoundingClientRect().top + window.scrollY);
    }
  };

  return (
    <nav className="flex flex-col gap-[12px]">
      {items.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => handleClick(e, id)}
          className="font-sans text-base text-black leading-[1.3] [font-variation-settings:'wght'_400] transition-all duration-300 hover:[font-variation-settings:'wght'_600]"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}