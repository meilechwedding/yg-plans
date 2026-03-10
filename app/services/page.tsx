import Reveal from '@/components/Reveal';
import { services } from '@/data/content';

export default function ServicesPage() {
  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">Services</p></Reveal>
      <Reveal><h1>Focused services for residential planning in Monsey and Rockland County.</h1></Reveal>
      <div className="servicesMinimal">
        {services.map((service, i) => (
          <Reveal key={service} delay={i * 0.04}><div className="serviceLine">{service}</div></Reveal>
        ))}
      </div>
    </section>
  );
}
