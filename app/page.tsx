import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { projects, services } from '@/data/content';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="heroOverlay" />
        <div className="container heroInner">
          <Reveal>
            <p className="eyebrow">Premium Architecture / Planning / Design</p>
            <h1>Architecture shaped by vision, precision, and timeless design.</h1>
            <p className="heroLead">
              YG plan creates luxury residential and commercial environments where spatial intelligence meets refined craft.
            </p>
            <div className="heroActions">
              <Link href="/projects" className="ctaButton">View Projects</Link>
              <Link href="/contact" className="ghostButton">Start Your Project</Link>
            </div>
          </Reveal>
        </div>
        <div className="portfolioCtaWrap">
          <Link href="/projects" className="ghostButton">Explore Full Portfolio</Link>
        </div>
      </section>

      <section className="section container introSplit">
        <Reveal>
          <h2>Designing spaces with clarity, elegance, and intention.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p>
            We are a multidisciplinary architecture studio focused on luxury residential design, interior planning, and development strategy.
            Every project is approached as a design object—structured with rigor, detailed with care, and delivered with confidence.
          </p>
        </Reveal>
      </section>

      <section className="section container">
        <Reveal><h2>Featured Projects</h2></Reveal>
        <div className="projectGrid">
          {projects.slice(0, 6).map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <article className="projectCard">
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
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <Reveal><h2>Services</h2></Reveal>
          <div className="serviceGrid">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.06}>
                <article className="serviceCard">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section container processBand">
        <Reveal>
          <h2>Our Process</h2>
          <div className="timeline">
            {['Discovery', 'Concept', 'Development', 'Delivery'].map((step) => (
              <div key={step}><span>{step}</span></div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section container testimonials">
        <Reveal><h2>Trusted by discerning clients and ambitious developers.</h2></Reveal>
        <div className="quoteGrid">
          <Reveal><blockquote>“YG plan transformed our brief into a deeply considered home with remarkable calm and presence.”</blockquote></Reveal>
          <Reveal delay={0.1}><blockquote>“Their architectural clarity and detail discipline made every decision feel intentional and assured.”</blockquote></Reveal>
        </div>
      </section>

      <section className="section ctaStrip">
        <div className="container">
          <Reveal>
            <h2>Let’s design something exceptional.</h2>
            <Link href="/contact" className="ctaButton">Book a Consultation</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
