import Reveal from '@/components/Reveal';
import { services } from '@/data/content';

export default function ServicesPage() {
  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">Services</p></Reveal>
      <Reveal><h1>Residential planning services with clear direction and elegant execution.</h1></Reveal>
      <div className="serviceList serviceListTight">
        {services.map((service, i) => (
          <Reveal key={service} delay={i * 0.04}>
            <article className="serviceItem">
              <span>{String(i + 1).padStart(2, '0')}</span>
              <h3>{service}</h3>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
