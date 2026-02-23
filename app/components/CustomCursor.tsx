"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const GLASS_DARK = {
  background: "rgba(0, 0, 0, 0.09)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
  border: "1px solid rgba(0, 0, 0, 0.17)",
} as const;

const GLASS_LIGHT = {
  background: "rgba(255, 255, 255, 0.3)",
  boxShadow: "0 4px 30px rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  border: "1px solid rgba(255, 255, 255, 0.17)",
} as const;

type CursorMode = "default" | "hover" | "coming-soon";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [mode, setMode] = useState<CursorMode>("default");
  const pathname = usePathname();

  // Reset to default whenever the route changes
  useEffect(() => {
    const t = setTimeout(() => setMode("default"), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onMode = (e: Event) => setMode((e as CustomEvent<CursorMode>).detail);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("cursor-mode", onMode);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("cursor-mode", onMode);
    };
  }, []);

  if (mode === "coming-soon") {
    return (
      <div
        className="fixed pointer-events-none z-[9999] px-3 py-2 flex items-center justify-center"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          borderRadius: 2,
          ...GLASS_LIGHT,
        }}
      >
        <span className="font-mono font-regular text-base leading-[1.3] text-black whitespace-nowrap">
          Coming Soon
        </span>
      </div>
    );
  }

  const glassStyle = mode === "hover" ? GLASS_LIGHT : GLASS_DARK;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
        ...glassStyle,
      }}
    />
  );
}