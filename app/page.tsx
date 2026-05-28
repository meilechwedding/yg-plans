import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import SplitText from '@/components/SplitText';
import PlanLines from '@/components/PlanLines';
import HorizontalProjects from '@/components/HorizontalProjects';
import { projects, services } from '@/data/content';

export default function Home() {
  return (
    <>
      <section className="hero">
        <PlanLines />
        <div className="heroMedia">
          <Image
            src="/yg-architecture-set.png"
            alt="YG plan architectural home and community building studies"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="heroOverlay" />
        <div className="container heroInner">
          <p className="eyebrow">Monsey, NY - Homes - Shuls - Filing</p>
          <SplitText text="Beautiful plans that build." />
          <Reveal delay={0.35}>
            <p className="heroLead">
              YG plan creates clean, buildable architectural plans for families, builders, developers, and community
              projects across Monsey and Rockland County. The work is polished, practical, and clear enough to move
              from first conversation to filing and builder handoff.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="heroActions">
              <Link href="/contact" className="ctaButton">Start an Inquiry</Link>
              <Link href="/projects" className="ghostButton">View Selected Work</Link>
            </div>
          </Reveal>
          <Reveal delay={0.55}>
            <div className="heroProof">
              <div><strong>8+</strong><span>years planning local residential and community projects</span></div>
              <div><strong>6</strong><span>core services from homes and shuls through filing</span></div>
              <div><strong>2</strong><span>principals guiding each project directly</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section container localIntro">
        <Reveal>
          <p className="eyebrow">Local Knowledge</p>
          <h2>
            Serving Monsey and Rockland County with premium planning for homes, shuls, renovations, and multi-family
            properties.
          </h2>
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
            <h2>Let&apos;s plan your next project.</h2>
            <p>Tell us about your property, vision, or renovation goals and our studio will respond promptly.</p>
            <Link href="/contact" className="ctaButton">Start Your Project</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
