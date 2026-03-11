import Reveal from '@/components/Reveal';

export default function AboutPage() {
  return (
    <section className="section container pageTop studioPage">
      <Reveal><p className="eyebrow">Studio</p></Reveal>
      <Reveal><h1>A boutique planning and architecture studio in Monsey, New York.</h1></Reveal>
      <Reveal><p>We design homes, additions, apartments, and multi-family properties with disciplined layout thinking and polished documentation.</p></Reveal>

      <div className="aboutStats">
        {[
          ['Local Focus', 'Monsey + Rockland County'],
          ['Project Types', 'Home, renovation, apartment, multi-family'],
          ['Approach', 'Calm process, precise planning'],
          ['Outcome', 'Build-ready sets with design clarity']
        ].map(([label, value], i) => (
          <Reveal key={label} delay={i * 0.05}>
            <article>
              <p>{label}</p>
              <h3>{value}</h3>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
