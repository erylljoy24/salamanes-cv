import { profile } from "@/data/resume";

type Props = {
  variant?: "primary" | "outline";
  className?: string;
};

export default function DownloadCvButton({ variant = "primary", className = "" }: Props) {
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:opacity-90 dark:text-bg"
      : "border border-line bg-surface hover:border-accent hover:text-accent";

  return (
    <a
      href={profile.cvPath}
      download={profile.cvFileName}
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${styles} ${className}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" />
      </svg>
      Download CV
    </a>
  );
}
