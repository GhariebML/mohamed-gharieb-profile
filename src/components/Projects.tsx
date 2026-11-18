"use client";

import { ArrowUpRight, Check, Lock } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import type { Project, ProjectSystem } from "@/data/types";
import { ui } from "@/data/ui";
import { cn } from "@/lib/utils";

function TechList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <li
          key={tech}
          dir="ltr"
          className="rounded-md bg-navy-950/[0.05] px-2.5 py-1 text-xs font-semibold text-navy-900"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function LinkButtons({ github, demo }: { github?: string; demo?: string }) {
  const { t } = useLocale();
  if (!github && !demo) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-electric px-3.5 text-sm font-semibold text-white transition-colors hover:bg-electric-600"
        >
          {t(ui.projects.demo)}
          <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-line px-3.5 text-sm font-semibold text-navy-950 transition-colors hover:border-navy-950/30"
        >
          <GitHubIcon size={15} />
          {t(ui.projects.code)}
        </a>
      )}
    </div>
  );
}

function SystemCard({ system }: { system: ProjectSystem }) {
  const { t } = useLocale();
  return (
    <div className="flex h-full flex-col rounded-xl border border-line bg-soft/60 p-5">
      <h4 className="font-bold text-navy-950" dir="ltr">
        {system.name}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">{t(system.summary)}</p>
      <div className="mt-4">
        <TechList items={system.technologies} />
      </div>
      <div className="mt-auto pt-5">
        <LinkButtons github={system.github} demo={system.demo} />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLocale();
  const wide = Boolean(project.wide);
  const hasTech = project.technologies.length > 0;
  const capabilityLabel = hasTech ? ui.projects.capabilities : ui.projects.focus;

  return (
    <article
      data-reveal
      style={{ ["--reveal-delay" as string]: `${(index % 2) * 90}ms` }}
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow duration-300 hover:shadow-lift",
        wide && "lg:col-span-2",
      )}
    >
      <div className="h-1 bg-gradient-to-r from-electric to-cyan" aria-hidden="true" />
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-electric">{t(project.category)}</p>
          <span className="text-sm font-bold tabular-nums text-navy-950/20">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-navy-950" dir="auto">
          {project.title}
        </h3>
        {project.tagline && <p className="mt-1.5 font-medium text-navy-900">{t(project.tagline)}</p>}
        <p className="mt-4 leading-relaxed text-muted">{t(project.summary)}</p>

        {project.capabilities.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{t(capabilityLabel)}</h4>
            <ul className={cn("mt-3 grid gap-x-6 gap-y-2.5 sm:grid-cols-2", wide && "lg:grid-cols-3")}>
              {project.capabilities.map((c) => (
                <li key={c.en} className="flex items-start gap-2.5 text-sm text-navy-900">
                  <Check className="mt-0.5 size-4 shrink-0 text-electric" aria-hidden="true" />
                  {t(c)}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.systems && (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {project.systems.map((s) => (
              <SystemCard key={s.name} system={s} />
            ))}
          </div>
        )}

        {(hasTech || project.note || project.github || project.demo) && (
          <div className="mt-auto space-y-5 pt-7">
            {hasTech && (
              <div>
                <h4 className="sr-only">{t(ui.projects.stack)}</h4>
                <TechList items={project.technologies} />
              </div>
            )}
            {(project.note || project.github || project.demo) && (
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
                {project.note && (
                  <p className="flex items-center gap-2 text-xs font-medium text-muted">
                    <Lock className="size-3.5" aria-hidden="true" />
                    {t(project.note)}
                  </p>
                )}
                <LinkButtons github={project.github} demo={project.demo} />
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const { t } = useLocale();
  return (
    <Section
      id="projects"
      index="03"
      eyebrow={ui.sections.projects.eyebrow}
      title={ui.sections.projects.title}
      lead={ui.sections.projects.lead}
      tone="white"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
      <div className="mt-10 flex justify-center" data-reveal>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line bg-white px-5 text-sm font-semibold text-navy-950 transition-colors hover:border-electric/40 hover:text-electric"
        >
          <GitHubIcon size={16} />
          {t(ui.projects.allRepos)}
          <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}
