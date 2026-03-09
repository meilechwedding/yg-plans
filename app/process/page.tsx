import Reveal from '@/components/Reveal';

export default function ProcessPage() {
  const steps = [
    ['01', 'Discovery', 'We define goals, context, and constraints through a focused strategic brief.'],
    ['02', 'Concept', 'Spatial narratives and form studies establish the architectural direction.'],
    ['03', 'Development', 'Design intent is translated into technical detail, materials, and documentation.'],
    ['04', 'Delivery', 'We support implementation to ensure the built result reflects the original vision.']
  ];

  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">Process</p></Reveal>
      <Reveal><h1>A clear, composed journey from first conversation to final execution.</h1></Reveal>
      <div className="processList">
        {steps.map(([num, title, text], i) => (
          <Reveal key={title} delay={i * 0.08}>
            <article>
              <p>{num}</p>
              <h3>{title}</h3>
              <span>{text}</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
