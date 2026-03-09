import Reveal from '@/components/Reveal';
import { services } from '@/data/content';

export default function ServicesPage() {
  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">Services</p></Reveal>
      <Reveal><h1>Design services delivered with premium rigor and strategic clarity.</h1></Reveal>
      <div className="serviceGrid">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.05}>
            <article className="serviceCard">
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <small>Tailored scope, phased delivery, and detail-led project management.</small>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
