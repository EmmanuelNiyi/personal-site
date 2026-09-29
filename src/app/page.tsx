import Image from "next/image";
import Link from "next/link";
import { Arrow, CV_HREF, EMAIL, Icon, ProjectCard, SectionHeader, StatusBadges } from "@/components/ui";
import { formatDate, getPosts } from "@/lib/posts";
import { ML_PROJECTS } from "@/lib/projects";
import lassaSem from "@/assets/lassa-sem.jpg";
import ctXray from "@/assets/ct-xray.jpg";
import lassaSeries from "@/assets/lassa-series.png";

const SKILLS = [
  {
    icon: "code" as const,
    title: "Programming & development",
    items: ["Python", "Django", "FastAPI", "PostgreSQL", "MySQL", "REST APIs", "Docker", "Git"],
  },
  {
    icon: "brain" as const,
    title: "Machine learning & AI",
    items: ["Scikit-learn", "FastAI", "Pandas", "NumPy", "Feature engineering", "Model evaluation"],
  },
  {
    icon: "chart" as const,
    title: "Data analysis & visualisation",
    items: ["Matplotlib", "Statistical analysis", "EDA", "Data cleaning", "Preprocessing"],
  },
  {
    icon: "pulse" as const,
    title: "Healthcare domain",
    items: ["Clinical diagnostics", "Patient management", "Medical coding", "EHR workflows", "Data privacy"],
  },
];

const HIGHLIGHTS = [
  { value: "MD", label: "Medical doctor" },
  { value: "4", label: "ML projects" },
  { value: "1", label: "Publication" },
];

export default function Home() {
  const posts = getPosts().slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <StatusBadges />
            <h1 className="hero-title">
              Data scientist working in <span className="accent-text">healthcare</span>.
            </h1>
            <p className="hero-lede">
              Medical doctor with strong software engineering experience and an applied machine learning focus.
              I work on epidemiological data engineering, time series forecasting and diagnostic classification
              with clinical datasets — building products that improve patient care.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/work">
                View my work <Arrow />
              </Link>
              <a className="btn btn-ghost" href={CV_HREF}>
                <Icon name="file" /> Download CV
              </a>
            </div>
            <dl className="stats">
              {HIGHLIGHTS.map(({ value, label }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="collage collage-a">
              <Image src={lassaSem} alt="" fill sizes="340px" priority />
            </div>
            <div className="collage collage-b">
              <Image src={ctXray} alt="" fill sizes="260px" priority />
            </div>
            <div className="collage collage-c">
              <Image src={lassaSeries} alt="" fill sizes="300px" />
            </div>
            <div className="floating-card">
              <span className="floating-label">Latest project</span>
              <span className="floating-title">Lassa fever forecasting</span>
              <span className="floating-sub">XGBoost · SHAP · Time series</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel">
            <SectionHeader eyebrow="What I do" title="Skills & expertise" />
            <div className="skill-grid">
              {SKILLS.map((skill) => (
                <div key={skill.title} className="skill-card">
                  <div className="icon-box">
                    <Icon name={skill.icon} />
                  </div>
                  <h3>{skill.title}</h3>
                  <div className="tags">
                    {skill.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Selected work"
            title="Machine learning in healthcare"
            action={{ label: "All projects", href: "/work" }}
          />
          <div className="project-grid">
            {ML_PROJECTS.slice(0, 3).map((project) => (
              <ProjectCard key={project.href} project={project} />
            ))}
          </div>
        </div>
      </section>

      {posts.length > 0 ? (
        <section className="section">
          <div className="container">
            <SectionHeader eyebrow="Writing" title="Latest posts" action={{ label: "All posts", href: "/writing" }} />
            <div className="post-grid">
              {posts.map((post) => (
                <Link key={post.slug} href={`/writing/${post.slug}`} className="post-card">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <h3>{post.title}</h3>
                  {post.description ? <p>{post.description}</p> : null}
                  <span className="project-link">
                    Read post <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Let&apos;s work together</h2>
              <p>Open to internships in 2026 and roles from 2027. Email is the fastest way to reach me.</p>
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
                <Icon name="mail" /> Email me
              </a>
              <Link className="btn btn-ghost" href="/contact">
                Other ways to connect
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
