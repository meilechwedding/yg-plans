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

      <section className="section brandLine container">
        <p>Planning modern living with clarity and precision.</p>
      </section>

      <section className="section sectionTight">
        <div className="container rowHead">
          <Reveal><p className="eyebrow">Featured Work</p></Reveal>
          <Reveal><h2>Homes. Apartments. Multi-family.</h2></Reveal>
        </div>
        <HorizontalProjects items={projects} />
      </section>

      <section className="section container servicesMinimal">
        <Reveal><p className="eyebrow">Services</p></Reveal>
        <div>
          {services.map((service, i) => (
            <Reveal key={service} delay={i * 0.05}>
              <div className="serviceLine">{service}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container">
        <ScrollGuide>
          <div className="processMinimal">
            {['01 Discovery', '02 Planning', '03 Design Development', '04 Documentation'].map((step, i) => (
              <Reveal key={step} delay={i * 0.06}><p>{step}</p></Reveal>
            ))}
          </div>
        </ScrollGuide>
      </section>

      <section className="section ctaMinimal">
        <div className="container">
          <h2>Let’s plan your next project.</h2>
          <Link href="/contact" className="ctaButton">Start Your Project</Link>
        </div>
      </section>
    </>
  );
}
