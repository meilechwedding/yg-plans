'use client';

import Image from 'next/image';
import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/content';

const filters = ['All', 'Custom Home', 'Renovation', 'Multi-Family', 'Interior Planning'] as const;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const selectedProject = useMemo(
    () => projects.find((project) => project.slug === activeSlug) ?? projects[0],
    [activeSlug]
  );

  const projectDetails = projects.find((project) => project.slug === activeProject);

  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">Portfolio</p></Reveal>
      <Reveal><h1>A curated portfolio of residential and multi-family planning work across Rockland County.</h1></Reveal>

      <div className="projectsSplit">
        <div className="projectList">
          {projects.map((project) => (
            <button
              key={project.slug}
              className={`projectRow ${activeSlug === project.slug ? 'active' : ''}`}
              onClick={() => setActiveSlug(project.slug)}
              type="button"
            >
              <span>{project.category}</span>
              <strong>{project.title}</strong>
              <small>{project.location}</small>
            </button>
          ))}
        </div>

      <div className="projectGrid editorialGrid">
        {filteredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <article className="projectCard tall" onClick={() => setActiveProject(project.slug)}>
              <div className="projectImageWrap">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div className="projectMeta">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <span>{project.location}</span>
              </div>
              <p>{selectedProject.summary}</p>
            </article>
          </Reveal>
        )}
      </div>

      {projectDetails && (
        <div className="lightbox" onClick={() => setActiveProject(null)} role="dialog" aria-modal="true">
          <div className="lightboxInner" onClick={(e) => e.stopPropagation()}>
            <button className="lightboxClose" onClick={() => setActiveProject(null)} aria-label="Close project preview">×</button>
            <div className="lightboxImage">
              <Image src={projectDetails.image} alt={projectDetails.title} fill sizes="100vw" />
            </div>
            <div className="lightboxMeta">
              <p>{projectDetails.category}</p>
              <h3>{projectDetails.title}</h3>
              <span>{projectDetails.location}</span>
              <small>{projectDetails.description}</small>
              <small><strong>Scope:</strong> {projectDetails.scope}</small>
              <small><strong>Design Notes:</strong> {projectDetails.designNotes}</small>
            </div>
            <p>{selected.summary}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
