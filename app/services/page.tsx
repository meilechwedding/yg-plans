import Reveal from '@/components/Reveal';
import { services } from '@/data/content';

export default function ServicesPage() {
  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">Services</p></Reveal>
      <Reveal><h1>Architecture and planning services tailored to Monsey and Rockland County projects.</h1></Reveal>
      <div className="serviceRows">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.05}>
            <article className="serviceRow">
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
