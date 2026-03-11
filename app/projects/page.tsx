'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/content';

const filters = ['All', 'Home', 'Apartment', 'Multi-Family', 'Renovation'] as const;

type Filter = (typeof filters)[number];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const leadProject = filteredProjects[0];

  const projectDetails = useMemo(() => {
    if (!activeSlug) return null;
    return projects.find((project) => project.slug === activeSlug) ?? null;
  }, [activeSlug]);

  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">Projects</p></Reveal>
      <Reveal><h1>Curated homes, apartments, and multi-family planning projects.</h1></Reveal>

      <div className="filtersRow" role="tablist" aria-label="Project filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filterChip ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {leadProject && (
        <Reveal>
          <article className="projectLead" onClick={() => setActiveSlug(leadProject.slug)}>
            <div className="projectLeadImage">
              <Image src={leadProject.image} alt={leadProject.title} fill sizes="100vw" />
            </div>
            <div className="projectLeadMeta">
              <p>{leadProject.category}</p>
              <h3>{leadProject.title}</h3>
              <span>{leadProject.location}</span>
              <small>{leadProject.summary}</small>
            </div>
          </article>
        </Reveal>
      )}

      <div className="projectEditorialGrid">
        {filteredProjects.slice(1).map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <article className="projectCard" onClick={() => setActiveSlug(project.slug)}>
              <div className="projectImageWrap">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div className="projectMeta">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <span>{project.location}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {projectDetails && (
        <div className="lightbox" onClick={() => setActiveSlug(null)} role="dialog" aria-modal="true">
          <div className="lightboxInner" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="lightboxClose" onClick={() => setActiveSlug(null)} aria-label="Close project preview">×</button>
            <div className="lightboxImage">
              <Image src={projectDetails.image} alt={projectDetails.title} fill sizes="100vw" />
            </div>
            <div className="lightboxMeta">
              <p>{projectDetails.category}</p>
              <h3>{projectDetails.title}</h3>
              <span>{projectDetails.location}</span>
              <small>{projectDetails.summary}</small>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
