import type { Metadata } from "next";
import { GITHUB, PageHeader, ProjectCard, RowList, SectionHeader } from "@/components/ui";
import { ML_PROJECTS, OTHER_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Work">
        <p className="page-lede">
          Forecasting, medical imaging, public datasets and deployed software — mostly at the point where clinical
          practice meets data.
        </p>
      </PageHeader>

      <section className="section section-tight">
        <div className="container">
          <SectionHeader
            eyebrow="Machine learning & data science"
            title="Research projects"
            action={{ label: "All repositories", href: GITHUB, external: true }}
          />
          <div className="project-grid project-grid-2">
            {ML_PROJECTS.map((project) => (
              <ProjectCard key={project.href} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Software" title="Other work" />
          <div className="project-grid project-grid-2">
            {OTHER_PROJECTS.map((project) => (
              <ProjectCard key={project.href} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="publication" className="section">
        <div className="container container-narrow">
          <SectionHeader eyebrow="Research" title="Publication" />
          <RowList
            rows={[
              {
                title: "Polygenic risk scores for cardiovascular disease: clinical utility and limitations",
                meta: "The Egyptian Heart Journal · 2026 · Adejumo, Obielodan, Egwu, et al.",
                href: "https://doi.org/10.1186/s43044-026-00746-3",
                action: "Read paper",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
