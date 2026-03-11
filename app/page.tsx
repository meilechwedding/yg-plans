import Link from 'next/link';
import Reveal from '@/components/Reveal';
import BlueprintHero from '@/components/BlueprintHero';
import HorizontalProjects from '@/components/HorizontalProjects';
import ScrollGuide from '@/components/ScrollGuide';
import { projects, services } from '@/data/content';

export default function Home() {
  return (
    <>
      <BlueprintHero />

      <section className="section sectionIntro container">
        <Reveal>
          <p className="eyebrow">YG plan</p>
          <h2>Precision-led planning for modern homes and multi-family spaces.</h2>
        </Reveal>
      </section>

      <section className="section sectionProjects">
        <div className="container sectionHead">
          <Reveal><p className="eyebrow">Selected Work</p></Reveal>
          <Reveal><h2>Curated residential and apartment planning in Rockland County.</h2></Reveal>
        </div>
        <HorizontalProjects items={projects} />
      </section>

      <section className="section container sectionServices">
        <div className="sectionHead">
          <Reveal><p className="eyebrow">Services</p></Reveal>
          <Reveal><h2>Clear scope. Clean execution.</h2></Reveal>
        </div>
        <div className="serviceList">
          {services.map((service, i) => (
            <Reveal key={service} delay={i * 0.05}>
              <article className="serviceItem">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <h3>{service}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container sectionProcess">
        <div className="sectionHead">
          <Reveal><p className="eyebrow">Process</p></Reveal>
          <Reveal><h2>Measured from first brief to permit set.</h2></Reveal>
        </div>
        <ScrollGuide>
          <div className="processSteps">
            {['Discovery', 'Planning', 'Design Development', 'Documentation'].map((step, i) => (
              <Reveal key={step} delay={i * 0.07}><p>{step}</p></Reveal>
            ))}
          </div>
        </ScrollGuide>
      </section>

      <section className="section sectionCta">
        <div className="container ctaPanel">
          <h2>Let’s plan your next property.</h2>
          <Link href="/contact" className="ctaButton">Start Your Project</Link>
        </div>
      </section>
    </>
  );
}
