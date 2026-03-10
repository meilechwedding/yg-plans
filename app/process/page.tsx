import Reveal from '@/components/Reveal';

export default function ProcessPage() {
  const steps = [
    ['01', 'Discovery', 'We review property context, goals, budget priorities, and timeline expectations.'],
    ['02', 'Planning', 'We organize the spatial framework, massing logic, and municipal considerations.'],
    ['03', 'Design Development', 'We resolve materials, elevations, and interior flow with detailed iterative review.'],
    ['04', 'Documentation / Delivery', 'We prepare clean drawing packages for permits and construction coordination.']
  ];

  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">Process</p></Reveal>
      <Reveal><h1>A refined workflow built for clarity, confidence, and build-ready outcomes.</h1></Reveal>
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
