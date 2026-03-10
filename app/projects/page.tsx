'use client';

import Image from 'next/image';
import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/content';

export default function ProjectsPage() {
  const [active, setActive] = useState(projects[0].slug);
  const selected = projects.find((project) => project.slug === active) ?? projects[0];

  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">Projects</p></Reveal>
      <Reveal><h1>Residential and multi-family planning work across Monsey and Rockland County.</h1></Reveal>

      <div className="projectsSplit">
        <div className="projectList">
          {projects.map((project) => (
            <button key={project.slug} className={`projectRow ${active === project.slug ? 'active' : ''}`} onClick={() => setActive(project.slug)}>
              <span>{project.category}</span>
              <strong>{project.title}</strong>
              <small>{project.location}</small>
            </button>
          ))}
        </div>

        <Reveal>
          <article className="projectSpotlight">
            <div className="projectSpotlightImage">
              <Image src={selected.image} alt={selected.title} fill sizes="(max-width: 900px) 100vw, 55vw" />
            </div>
            <p>{selected.summary}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
