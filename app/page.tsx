import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SplitText from '@/components/SplitText';
import PlanLines from '@/components/PlanLines';
import { projects, services } from '@/data/content';

export default function Home() {
  return (
    <>
      <section className="hero">
        <PlanLines />
        <div className="heroMedia">
          <Image
            src="https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=2200&q=80"
            alt="Modern architectural residence"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="heroOverlay" />
        <div className="container heroInner">
          <p className="eyebrow">Monsey, NY · Architecture & Planning Studio</p>
          <SplitText text="Architectural planning with precision, clarity, and timeless intent." />
          <Reveal delay={0.35}>
            <p className="heroLead">
              YG plan partners with homeowners and developers across Monsey and Rockland County to shape custom homes,
              renovations, and multi-family projects with refined process and design confidence.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="heroActions">
              <Link href="/projects" className="ctaButton">View Projects</Link>
              <Link href="/contact" className="ghostButton">Start Your Project</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section container localIntro">
        <Reveal>
          <p className="eyebrow">Local Trust</p>
          <h2>Serving Monsey and Rockland County with premium planning for homes, renovations, and multi-family properties.</h2>
        </Reveal>
      </section>

      <section className="section container">
        <Reveal><h2>Featured Projects</h2></Reveal>
        <div className="featuredStack">
          {projects.slice(0, 3).map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.09} axis={i % 2 ? 'x' : 'y'}>
              <article className="featuredProject">
                <div className="projectImageWrap">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 55vw" />
                </div>
                <div className="projectMeta">
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <span>{project.location}</span>
                  <small>{project.description}</small>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <HorizontalProjects items={projects} />
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <Reveal><h2>Studio Services</h2></Reveal>
          <div className="serviceRows">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.06}>
                <article className="serviceRow">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section container processBand">
        <Reveal><h2>A measured process from first brief to final set.</h2></Reveal>
        <div className="timeline">
          {['Discovery', 'Planning', 'Design Development', 'Documentation / Delivery'].map((step, i) => (
            <Reveal key={step} delay={i * 0.06}>
              <div><span>{step}</span></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section ctaMinimal">
        <div className="container">
          <Reveal>
            <h2>Let’s plan your next project.</h2>
            <p>Tell us about your property, vision, or renovation goals and our studio will respond promptly.</p>
            <Link href="/contact" className="ctaButton">Start Your Project</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
