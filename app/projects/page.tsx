'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/content';

const filters = ['All', 'Custom Home', 'Shul / Community', 'Semi-Attached', 'Multi-Family', 'Renovation'] as const;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const projectDetails = activeProject
    ? projects.find((project) => project.slug === activeProject) ?? null
    : null;

  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">Selected Work</p></Reveal>
      <Reveal><h1>Representative studies with real project logic.</h1></Reveal>
      <Reveal>
        <p>
          Images are representative visuals inspired by local architectural context, not literal photos of completed
          private projects. They show the kinds of decisions YG plan handles: proportion, layout, circulation, filing
          clarity, and a building that belongs in its setting.
        </p>
      </Reveal>

      <div className="filtersRow" aria-label="Project filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filterChip ${activeFilter === filter ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projectGrid">
        {filteredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <article className="projectCard tall">
              <button className="projectPreviewButton" type="button" onClick={() => setActiveProject(project.slug)}>
                <span className="srOnly">Open {project.title} details</span>
                <div className="projectImageWrap">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
                <div className="projectMeta">
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <span>{project.location}</span>
                  <small>{project.description}</small>
                </div>
              </button>
            </article>
          </Reveal>
        ))}
      </div>

      {projectDetails && (
        <div className="lightbox" onClick={() => setActiveProject(null)} role="dialog" aria-modal="true">
          <div className="lightboxInner" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightboxClose"
              onClick={() => setActiveProject(null)}
              aria-label="Close project preview"
            >
              x
            </button>
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
          </div>
        </div>
      )}
    </section>
  );
}
