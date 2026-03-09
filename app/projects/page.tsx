'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/content';

const filters = ['All', 'Residential', 'Multi-Family', 'Modern Villa', 'Custom Home'] as const;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">Portfolio</p></Reveal>
      <Reveal><h1>A curated selection of YG plan residential and multi-family work.</h1></Reveal>
      <Reveal>
        <p className="portfolioLead">
          These projects reflect your shared portfolio direction—clear frontage composition, disciplined geometry,
          and premium material balance across custom homes and larger residential typologies.
        </p>
      </Reveal>

      <div className="filtersRow" role="tablist" aria-label="Project filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filterChip ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projectGrid">
        {filteredProjects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.05}>
            <article className="projectCard tall" onClick={() => setActiveProject(i)}>
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

      {activeProject !== null && (
        <div className="lightbox" onClick={() => setActiveProject(null)} role="dialog" aria-modal="true">
          <div className="lightboxInner" onClick={(e) => e.stopPropagation()}>
            <button className="lightboxClose" onClick={() => setActiveProject(null)} aria-label="Close project preview">×</button>
            <div className="lightboxImage">
              <Image
                src={filteredProjects[activeProject].image}
                alt={filteredProjects[activeProject].title}
                fill
                sizes="100vw"
              />
            </div>
            <div className="lightboxMeta">
              <p>{filteredProjects[activeProject].category}</p>
              <h3>{filteredProjects[activeProject].title}</h3>
              <span>{filteredProjects[activeProject].description}</span>
              <small>{filteredProjects[activeProject].scope}</small>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
