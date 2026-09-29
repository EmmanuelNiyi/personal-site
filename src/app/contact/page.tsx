import type { Metadata } from "next";
import { Arrow, CV_HREF, EMAIL, GITHUB, Icon, KAGGLE, LINKEDIN, StatusBadges } from "@/components/ui";

export const metadata: Metadata = { title: "Contact" };

const LINKS = [
  { icon: "github" as const, title: "GitHub", body: "Repositories for every project on this site.", handle: "EmmanuelNiyi", href: GITHUB },
  { icon: "linkedin" as const, title: "LinkedIn", body: "Background, roles and clinical experience.", handle: "emmanuel-niyi", href: LINKEDIN },
  { icon: "database" as const, title: "Kaggle", body: "Published datasets, including the NCDC Lassa fever series.", handle: "emmanuelniyioriolowo", href: KAGGLE },
  { icon: "file" as const, title: "Curriculum vitae", body: "Full record of clinical, engineering and research work.", handle: "PDF", href: CV_HREF },
];

export default function ContactPage() {
  return (
    <section className="page-header">
      <div className="container contact-grid">
        <div>
          <div className="eyebrow">Contact</div>
          <h1 className="page-title">Let&apos;s talk.</h1>
          <p className="page-lede">Open to internships in 2026 and to roles from 2027. Email is the fastest route.</p>
          <StatusBadges />
          <a className="email-card" href={`mailto:${EMAIL}`}>
            <div className="icon-box">
              <Icon name="mail" />
            </div>
            <div>
              <span className="floating-label">Email</span>
              <span className="email-address">{EMAIL}</span>
            </div>
            <Arrow />
          </a>
        </div>

        <div className="link-grid">
          {LINKS.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <a
                key={link.title}
                className="link-card"
                href={link.href}
                {...(external ? { target: "_blank", rel: "noopener" } : {})}
              >
                <div className="icon-box">
                  <Icon name={link.icon} />
                </div>
                <h2>{link.title}</h2>
                <p>{link.body}</p>
                <span className="project-link">
                  {link.handle} <Arrow />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
