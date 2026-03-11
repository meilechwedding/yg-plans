import Reveal from '@/components/Reveal';
import ScrollGuide from '@/components/ScrollGuide';

export default function ProcessPage() {
  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">Process</p></Reveal>
      <Reveal><h1>A composed process built for confidence.</h1></Reveal>
      <ScrollGuide>
        <div className="processDetailed">
          {[
            ['01 Discovery', 'Property review, goals, and constraints.'],
            ['02 Planning', 'Spatial strategy and layout structure.'],
            ['03 Design Development', 'Refined elevations, materials, and flow.'],
            ['04 Documentation', 'Permit and coordination-ready drawing sets.']
          ].map(([title, text], i) => (
            <Reveal key={title} delay={i * 0.06}>
              <article>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </ScrollGuide>
    </section>
  );
}
