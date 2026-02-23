"use client";
import { useEffect, useState } from "react";
import CaseStudyNav from "./CaseStudyNav";

interface NavItem { id: string; label: string; }

interface StickyAsideProps {
  items: NavItem[];
  titleId: string;
}

export default function StickyAside({ items, titleId }: StickyAsideProps) {
  const [titleHeight, setTitleHeight] = useState(0);
  const [isXl, setIsXl] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const update = () => setIsXl(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isXl) return;
    const titleEl = document.getElementById(titleId);
    if (!titleEl) return;
    const observer = new ResizeObserver(() => setTitleHeight(titleEl.offsetHeight));
    observer.observe(titleEl);
    setTitleHeight(titleEl.offsetHeight);
    return () => observer.disconnect();
  }, [isXl, titleId]);

  // xl: sticks at 160px (below nav bar), nav items have 120px breathing room
  // md: sticks at titleHeight (just below the page title), nav items start immediately
  const top = isXl ? 160 : titleHeight;
  const paddingTop = isXl ? 120 : 0;

  return (
    <aside
      className="hidden md:flex flex-col gap-8 shrink-0 sticky md:w-[224px] xl:w-[310px]"
      style={{ top, paddingTop }}
    >
      <CaseStudyNav items={items} />
    </aside>
  );
}