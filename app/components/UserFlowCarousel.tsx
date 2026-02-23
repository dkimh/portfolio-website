"use client";
import { useState } from "react";
import Image from "next/image";

const R2 = "https://pub-ba89044168544435870d953548f2dc07.r2.dev";
const FLOW_IMAGES = [
  `${R2}/dgen-xr/4-ideation/user%20flow%20component/flow-1.png`,
  `${R2}/dgen-xr/4-ideation/user%20flow%20component/flow-2.png`,
  `${R2}/dgen-xr/4-ideation/user%20flow%20component/flow-3.png`,
  `${R2}/dgen-xr/4-ideation/user%20flow%20component/flow-4.png`,
  `${R2}/dgen-xr/4-ideation/user%20flow%20component/flow-5.png`,
  `${R2}/dgen-xr/4-ideation/user%20flow%20component/flow-6.png`,
];

export default function UserFlowCarousel() {
  const [current, setCurrent] = useState(0);
  const total = FLOW_IMAGES.length;
  const fillPct = ((current + 1) / total) * 100;

  return (
    <div className="flex flex-col gap-[10px] w-full">
      {/* Film strip */}
      <div className="aspect-[874/302] rounded-[6px] overflow-hidden w-full bg-[#d6dde2] relative">
        <div
          className="flex h-full"
          style={{
            width: `${total * 100}%`,
            transform: `translateX(${-(current / total) * 100}%)`,
            transition: "transform 0.7s cubic-bezier(0.46, 0.03, 0.52, 0.96)",
            willChange: "transform",
          }}
        >
          {FLOW_IMAGES.map((src, i) => (
            <div key={i} className="relative h-full" style={{ width: `${100 / total}%` }}>
              <Image
                src={src}
                alt={`User flow step ${i + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) calc(100vw - 272px), 100vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar + nav buttons */}
      <div className="flex items-center gap-[9px]">
        {/* Track */}
        <div className="flex-1 relative h-[2px] bg-[#c9c9c9] rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-[#123d67] rounded-full"
            style={{
              width: `${fillPct}%`,
              transition: "width 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96)",
            }}
          />
        </div>

        {/* Prev */}
        <button
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
            current === 0
              ? "border-[#c9c9c9] text-[#c9c9c9] cursor-default"
              : "border-[#123d67] text-[#123d67] hover:bg-[#123d67] hover:text-white cursor-pointer"
          }`}
        >
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 4H1M1 4L4.5 1M1 4L4.5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Next */}
        <button
          onClick={() => setCurrent((c) => Math.min(total - 1, c + 1))}
          disabled={current === total - 1}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
            current === total - 1
              ? "border-[#c9c9c9] text-[#c9c9c9] cursor-default"
              : "border-[#123d67] text-[#123d67] hover:bg-[#123d67] hover:text-white cursor-pointer"
          }`}
        >
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4H13M13 4L9.5 1M13 4L9.5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}