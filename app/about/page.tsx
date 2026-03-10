import Reveal from '@/components/Reveal';

export default function AboutPage() {
  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">About YG plan</p></Reveal>
      <Reveal><h1>A boutique Monsey studio focused on planning-led architecture with calm precision.</h1></Reveal>
      <Reveal>
        <p>
          YG plan is an architecture and planning practice serving homeowners, families, and developers throughout
          Monsey and Rockland County. We specialize in clear planning logic, thoughtful design development,
          and polished documentation that supports real-world building outcomes.
        </p>
      </Reveal>
      <div className="aboutGrid">
        {[
          ['Studio Focus', 'Custom homes, renovations, additions, and multi-family planning rooted in local context and long-term livability.'],
          ['Design Philosophy', 'Proportion, daylight, and circulation guide every plan so the finished space feels intuitive and enduring.'],
          ['Process Standards', 'Structured timelines, clear communication, and disciplined drawing packages at every stage.'],
          ['Local Relevance', 'We work with the realities of Monsey-area properties, neighborhood character, and municipal requirements.']
        ].map(([title, text], i) => (
          <Reveal key={title} delay={i * 0.08}>
            <article className="serviceCard"><h3>{title}</h3><p>{text}</p></article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
