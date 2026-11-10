import Image from "next/image";
import DownloadCvButton from "@/components/DownloadCvButton";
import ProjectSketch from "@/components/ProjectSketch";
import { education, experience, languages, profile, projects, skillGroups } from "@/data/resume";
import type { Project } from "@/data/resume";

const kindLabel: Record<Project["kind"], string> = {
  mobile: "Mobile app",
  web: "Web app",
  api: "Backend / API",
};

const nav = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-line py-16 sm:py-20 ${className}`}>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-12">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">{children}</li>
  );
}

const projectGroups: { title: string; kinds: Project["kind"][] }[] = [
  { title: "Mobile apps", kinds: ["mobile"] },
  { title: "Web & backend", kinds: ["web", "api"] },
];

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <li className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/5">
      <div
        className="relative h-36 border-b border-line bg-accent-soft/60 text-muted"
        style={{
          backgroundImage: "radial-gradient(var(--line) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      >
        {p.logo ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={p.logo}
              alt={`${p.name} logo`}
              width={80}
              height={80}
              className="h-20 w-20 rounded-2xl object-cover shadow-md ring-1 ring-line transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ) : (
          <div className="absolute inset-0 p-4 transition-transform duration-500 group-hover:scale-105 group-hover:text-ink">
            <ProjectSketch kind={p.kind} />
          </div>
        )}
        <span className="absolute top-3 left-3 rounded-full border border-line bg-surface/90 px-2 py-0.5 font-mono text-[10px] tracking-wider text-muted uppercase backdrop-blur">
          {kindLabel[p.kind]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="font-semibold">{p.name}</h4>
          <span className="shrink-0 font-mono text-xs text-muted">{p.year}</span>
        </div>
        <p className="text-sm text-accent">{p.client}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.blurb}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </ul>
        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 self-start rounded-lg border border-line px-3 py-1.5 text-xs font-medium transition hover:border-accent hover:text-accent"
          >
            {p.link.includes("apps.apple.com") ? "View on App Store" : "View on Google Play"}
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </li>
  );
}

function Job({ job, current = false }: { job: (typeof experience)[number]; current?: boolean }) {
  return (
    <li className="relative pb-10 pl-7 last:pb-0">
      <span
        aria-hidden="true"
        className={`absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full ring-4 ring-bg ${
          current ? "bg-accent" : "bg-line"
        }`}
      />
      <p className="font-mono text-xs text-muted">{job.period}</p>
      <h3 className="mt-1 font-semibold">
        {job.role} <span className="font-normal text-muted">at</span> {job.company}
      </h3>
      <ul className="mt-3 space-y-1.5 text-[15px] leading-relaxed text-muted">
        {job.highlights.map((h) => (
          <li key={h} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-muted/50">
            {h}
          </li>
        ))}
      </ul>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {job.tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </ul>
    </li>
  );
}

export default function Home() {
  const current = experience[0];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5 font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-xs font-bold text-white dark:text-bg">
              ES
            </span>
            <span className="hidden sm:inline">{profile.shortName}</span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <DownloadCvButton variant="outline" className="px-3! py-1.5!" />
        </div>
      </header>

      <main id="top" className="flex-1">
        <section className="mx-auto grid max-w-5xl items-center gap-10 px-4 pt-20 pb-24 sm:px-6 sm:pt-28 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12">
          <div className="relative order-first w-fit md:order-last">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-full border border-dashed border-accent/40"
            />
            <Image
              src="/profile.png"
              alt={`Photo of ${profile.shortName}`}
              width={288}
              height={288}
              priority
              className="relative h-28 w-28 rounded-full object-cover shadow-lg ring-4 ring-surface sm:h-36 sm:w-36 md:h-64 md:w-64 lg:h-72 lg:w-72"
            />
          </div>
          <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open to new work
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            Hi, I&apos;m {profile.shortName.split(" ")[0]}.
            <span className="block text-muted">I build mobile apps and the APIs behind them.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.role} based in {profile.location}, working mostly with Flutter, Laravel, React and Next.js.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <DownloadCvButton />
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-lg border border-line bg-surface px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent"
            >
              Email me
            </a>
          </div>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="max-w-2xl space-y-4 text-[17px] leading-relaxed">
            {profile.summary.map((p, i) => (
              <p key={p} className={i > 0 ? "text-muted" : undefined}>
                {p}
              </p>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Currently <span className="text-ink">{current.role}</span> at{" "}
            <span className="text-ink">{current.company}</span>.
          </p>
        </Section>

        <Section id="work" title="Selected work" className="bg-band/60">
          <div className="space-y-12">
            {projectGroups.map((group) => {
              const items = projects.filter((p) => group.kinds.includes(p.kind));
              if (items.length === 0) return null;
              return (
                <div key={group.title}>
                  <div className="mb-5 flex items-center gap-3">
                    <h3 className="text-sm font-semibold">{group.title}</h3>
                    <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent">
                      {items.length}
                    </span>
                    <span aria-hidden="true" className="h-px flex-1 bg-line" />
                  </div>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {items.map((p) => (
                      <ProjectCard key={p.name} project={p} />
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-sm text-muted">
            Most of this was client or internal work, so I can&apos;t share the code or screenshots.
          </p>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="ml-1 border-l border-line">
            {experience.map((job, i) => (
              <Job key={`${job.company}-${job.period}`} job={job} current={i === 0} />
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills" className="bg-band/60">
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-medium">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.school} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div>
                  <h3 className="font-semibold">{e.school}</h3>
                  <p className="text-sm text-muted">{e.detail}</p>
                </div>
                <span className="font-mono text-xs text-muted">{e.period}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Languages: <span className="text-ink">{languages.join(", ")}</span>
          </p>
        </Section>

        <section id="contact" className="scroll-mt-20 px-4 pb-20 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-2xl bg-accent-soft px-6 py-12 sm:px-12 sm:py-14">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Get in touch</h2>
            <p className="mt-3 max-w-lg leading-relaxed text-muted">
              I&apos;m open to mobile and full-stack work, full-time or project-based. Email is the quickest way to
              reach me.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block break-all text-lg font-medium text-accent hover:underline sm:text-2xl"
            >
              {profile.email}
            </a>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
              {profile.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-ink">
                  {p}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-sm text-muted sm:px-6">
          <span>
            © {new Date().getFullYear()} {profile.shortName}
          </span>
          <a href="#top" className="hover:text-ink">
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
