import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Project } from "@/lib/projects";

export const CV_HREF = "/Emmanuel-Niyi-Oriolowo-CV.pdf";
export const EMAIL = "emmanuelniyioriolowo@gmail.com";
export const GITHUB = "https://github.com/EmmanuelNiyi";
export const LINKEDIN = "https://www.linkedin.com/in/emmanuel-niyi-229ab6176/";
export const KAGGLE = "https://www.kaggle.com/emmanuelniyioriolowo";

export function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>;
}

export function StatusBadges() {
  return (
    <div className="badges">
      <span className="badge badge-live">
        <span className="pulse" aria-hidden="true" />
        Open to internships · 2026
      </span>
      <span className="badge">Open to work · 2027</span>
      <span className="badge">Newcastle, UK</span>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: { label: string; href: string; external?: boolean };
}) {
  return (
    <div className="section-header">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
      </div>
      {action ? (
        action.external ? (
          <a className="text-link" href={action.href} target="_blank" rel="noopener">
            {action.label} <Arrow />
          </a>
        ) : (
          <Link className="text-link" href={action.href}>
            {action.label} <Arrow />
          </Link>
        )
      ) : null}
    </div>
  );
}

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="page-header">
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="page-title">{title}</h1>
        {children}
      </div>
    </section>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="project-card" href={project.href} target="_blank" rel="noopener">
      <div className={project.fit === "contain" ? "project-media project-media-contain" : "project-media"}>
        <Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 400px" />
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-text">{project.body}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <span className="project-link">
          {project.linkLabel} <Arrow />
        </span>
      </div>
    </a>
  );
}

export type Row = { title: string; meta: string; href: string; action: string };

/** Filled, borderless rows. Used in a narrower column to vary the page's rhythm. */
export function RowList({ rows }: { rows: Row[] }) {
  return (
    <div className="row-list">
      {rows.map((row) => {
        const content = (
          <>
            <span className="row-text">
              <span className="row-title">{row.title}</span>
              <span className="row-meta">{row.meta}</span>
            </span>
            <span className="btn btn-outline btn-sm">{row.action}</span>
          </>
        );
        return row.href.startsWith("/") ? (
          <Link key={row.title} href={row.href} className="row-item">
            {content}
          </Link>
        ) : (
          <a key={row.title} href={row.href} className="row-item" target="_blank" rel="noopener">
            {content}
          </a>
        );
      })}
    </div>
  );
}

export function Arrow() {
  return (
    <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ICONS = {
  code: "M8 6 2 12l6 6M16 6l6 6-6 6",
  brain:
    "M12 4a3 3 0 0 0-5.8 1A3 3 0 0 0 4 10a3 3 0 0 0 1 5 3 3 0 0 0 5 3.5V4.5A3 3 0 0 0 12 4Zm0 0a3 3 0 0 1 5.8 1A3 3 0 0 1 20 10a3 3 0 0 1-1 5 3 3 0 0 1-5 3.5",
  chart: "M3 3v18h18M7 15l4-4 3 3 5-6",
  pulse: "M3 12h4l3-8 4 16 3-8h4",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  file: "M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6",
  github:
    "M9 19c-4 1.5-4-2-6-2.5m12 5V18a3.4 3.4 0 0 0-1-2.6c3.2-.4 6.5-1.6 6.5-7a5.4 5.4 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.3.4 5.1.8 5.1.8A5 5 0 0 0 5 4.6a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.5 7A3.4 3.4 0 0 0 9 18v4",
  linkedin: "M4 9h4v11H4zM6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM11 9h4v2c.6-1.2 2-2.2 4-2.2 3 0 4 2 4 5.2v6h-4v-5.5c0-1.5-.5-2.5-2-2.5s-2 1.1-2 2.5V20h-4z",
  database: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
};

export function Icon({ name }: { name: keyof typeof ICONS }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={ICONS[name]} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
