import type { Project } from "@/data/resume";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Phone() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <g {...stroke}>
        <path d="M78 10.5c14-.8 30-.6 44 .3 3 .2 5 2.4 5 5.4l.6 88c0 3-2.2 5.3-5.2 5.4-14 .6-30 .5-44-.2-3-.2-5.2-2.5-5.2-5.5l.2-88c0-3 2-5.2 4.6-5.4z" />
        <path d="M93 17h14" />
        <rect x="83" y="27" width="34" height="20" rx="3" className="text-accent" stroke="currentColor" />
        <path d="M83 55h30M83 62h22M83 69h27" opacity=".6" />
        <circle cx="100" cy="97" r="5" />
      </g>
      <path d="M140 40c10-4 18 2 22 10" {...stroke} strokeDasharray="3 4" opacity=".5" />
      <path d="M158 46l4 4 2-6" {...stroke} opacity=".5" />
    </svg>
  );
}

function Browser() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <g {...stroke}>
        <path d="M30 14c46-1.2 94-1 140 .4 2.6.1 4.4 2 4.4 4.6l-.4 84c0 2.6-2 4.5-4.6 4.6-46 1-94 .8-140-.3-2.5-.1-4.4-2-4.4-4.6l.6-84c0-2.5 2-4.5 4.4-4.7z" />
        <path d="M26 28h148" />
        <circle cx="36" cy="21" r="2" />
        <circle cx="44" cy="21" r="2" />
        <circle cx="52" cy="21" r="2" />
        <path d="M38 40h34v56H38z" opacity=".6" />
        <path d="M84 42h76M84 54h76M84 66h76M84 78h76M84 90h50" opacity=".6" />
        <path d="M120 42v48" opacity=".3" />
      </g>
      <path d="M84 54h28" stroke="currentColor" strokeWidth={4} className="text-accent" strokeLinecap="round" />
    </svg>
  );
}

function Api() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <g {...stroke}>
        <rect x="80" y="44" width="40" height="32" rx="4" />
        <path d="M90 56h20M90 64h14" opacity=".6" />
        <rect x="22" y="18" width="30" height="20" rx="3" />
        <rect x="22" y="82" width="30" height="20" rx="3" />
        <rect x="148" y="50" width="30" height="20" rx="3" />
        <path d="M52 28c14 2 20 12 28 22M52 92c14-2 20-12 28-22" strokeDasharray="3 4" />
        <path d="M120 60h28" strokeDasharray="3 4" />
      </g>
      <circle cx="100" cy="36" r="4" className="fill-accent" />
    </svg>
  );
}

export default function ProjectSketch({ kind }: { kind: Project["kind"] }) {
  if (kind === "mobile") return <Phone />;
  if (kind === "web") return <Browser />;
  return <Api />;
}
