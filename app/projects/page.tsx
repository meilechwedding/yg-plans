'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/content';

export default function ProjectsPage() {
  const [activeSlug, setActiveSlug] = useState<string>(projects[0]?.slug ?? '');

  const selectedProject = useMemo(
    () => projects.find((project) => project.slug === activeSlug) ?? projects[0],
    [activeSlug]
  );

  return (
    <section className="section container pageTop">
      <Reveal>
        <p className="eyebrow">Projects</p>
      </Reveal>
      <Reveal>
        <h1>Residential and multi-family planning work across Monsey and Rockland County.</h1>
      </Reveal>

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

        {selectedProject && (
          <Reveal>
            <article className="projectSpotlight">
              <div className="projectSpotlightImage">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                />
              </div>
              <p>{selectedProject.summary}</p>
            </article>
          </Reveal>
        )}
      </div>
    </section>
  );
}
