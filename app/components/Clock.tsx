"use client";

import { useEffect, useState, useMemo } from "react";

const EST_ZONE = "America/New_York";
const KST_ZONE = "Asia/Seoul";

/* ---------- time formatters ---------- */

function time12WithSeconds(zone: string): string {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: zone,
  });
}

function time24WithSeconds(zone: string): string {
  return new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: zone,
  });
}

function meridiem(zone: string): string {
  const s = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: zone,
  });
  return s.endsWith("AM") ? "AM" : "PM";
}

/* ---------- helpers ---------- */

function minutesInZone(zone: string): number {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: zone,
  });
  const parts = fmt.formatToParts(new Date());
  const h = Number(parts.find((p) => p.type === "hour")?.value || 0);
  const m = Number(parts.find((p) => p.type === "minute")?.value || 0);
  return h * 60 + m;
}

type Phase = "day" | "night" | "sunrise" | "sunset";

function getPhase(zone: string): Phase {
  const t = minutesInZone(zone);
  const sunrise = 6 * 60;
  const sunset = 18 * 60;
  const windowM = 30;

  if (Math.abs(t - sunrise) <= windowM) return "sunrise";
  if (Math.abs(t - sunset) <= windowM) return "sunset";
  if (t > sunrise + windowM && t < sunset - windowM) return "day";
  return "night";
}

/* ---------- minimal icons ---------- */

function Icon({ phase }: { phase: Phase }) {
  const common = {
    stroke: "currentColor",
    strokeWidth: 1.5,
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (phase) {
    case "day":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="3.5" fill="currentColor" />
          <path {...common} d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.2 3.2l1.4 1.4M11.4 11.4l1.4 1.4M12.8 3.2l-1.4 1.4M3.2 12.8l1.4-1.4" />
        </svg>
      );
    case "night":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16">
          <path fill="currentColor" d="M10.8 12.8a5 5 0 1 1-4.6-9c-.6 3 .7 6.6 4.6 9z" />
        </svg>
      );
    case "sunrise":
      return (
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path {...common} d="M2 12.5h12" />
            <path fill="currentColor" d="M4.5 12a3.5 3.5 0 0 1 7 0z" />
            <path {...common} d="M8 3.5v2M4.2 5.2l1.2 1.2M11.8 5.2l-1.2 1.2M2.5 9h1.5M12 9h1.5" />
          </svg>
      );
    case "sunset":
      return (
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path {...common} d="M2 12.5h12" />
            <path fill="currentColor" d="M4.5 12a3.5 3.5 0 0 1 7 0z" />
            <path {...common} d="M8 3.5v2M4.2 5.2l1.2 1.2M11.8 5.2l-1.2 1.2M2.5 9h1.5M12 9h1.5" />
          </svg>
      );
    default:
      return null;
  }
}

/* ---------- component ---------- */

export default function Clock() {
  const [mounted, setMounted] = useState(false);
  const [est12, setEst12] = useState("");
  const [kst24, setKst24] = useState("");
  const [kstMeridiem, setKstMeridiem] = useState("");
  const [estPhase, setEstPhase] = useState<Phase>("day");
  const [kstPhase, setKstPhase] = useState<Phase>("day");

  useEffect(() => {
    const tick = () => {
      setEst12(time12WithSeconds(EST_ZONE));
      setKst24(time24WithSeconds(KST_ZONE));
      setKstMeridiem(meridiem(KST_ZONE));
      setEstPhase(getPhase(EST_ZONE));
      setKstPhase(getPhase(KST_ZONE));
    };
    tick();
    setMounted(true);
    const id = setInterval(tick, 500);
    return () => clearInterval(id);
  }, []);

  const baseFont = useMemo(
    () => ({
      fontFamily: "'Rethink Sans', sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "120%",
      letterSpacing: "0em",
      color: "#000000",
    }),
    []
  );

  const rowStyle: React.CSSProperties = { display: "flex", alignItems: "center" };
  const colCity: React.CSSProperties = { width: "30px", textAlign: "right", marginRight: "4px" };
  const colTZ: React.CSSProperties = { width: "35px", textAlign: "right", marginRight: "12px" };
  const colIcon: React.CSSProperties = { width: "20px", display: "flex", justifyContent: "center", marginRight: "0px", marginLeft: "4px" };
  const colTime: React.CSSProperties = { minWidth: "80px", textAlign: "right" };

  if (!mounted) return null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", ...baseFont }}>
      {/* Row 1: BOS / EST / icon / time */}
      <div style={rowStyle}>
        <span style={colCity}>BOS</span>
        <span style={colTZ}>EST</span>
        <span style={colIcon}><Icon phase={estPhase} /></span>
        <span style={colTime}>{est12}</span>
      </div>

      {/* Row 2: 서울 / KST / icon / time */}
      <div style={rowStyle}>
        <span style={colCity}>서울</span>
        <span style={colTZ}>KST</span>
        <span style={colIcon}><Icon phase={kstPhase} /></span>
        <span style={colTime}>{kst24} {kstMeridiem}</span>
      </div>
    </div>
  );
}