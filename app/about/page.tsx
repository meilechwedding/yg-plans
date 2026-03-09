import Reveal from '@/components/Reveal';

export default function AboutPage() {
  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">About YG plan</p></Reveal>
      <Reveal><h1>Our studio blends architectural discipline with expressive modern luxury.</h1></Reveal>
      <Reveal><p>From private residences to high-value mixed-use spaces, our work is guided by proportion, material intelligence, and contextual thinking. We design environments that are serene to inhabit and powerful to experience.</p></Reveal>
      <div className="aboutGrid">
        {[
          ['Our Philosophy', 'Thoughtful planning and timeless composition create spaces that age with dignity.'],
          ['Our Approach', 'Every brief is translated through rigorous concept exploration, technical precision, and collaborative delivery.'],
          ['Our Standards', 'From first sketch to final detail, we maintain exacting standards across structure, craft, and experience.'],
          ['What We Value', 'Clarity, restraint, and purpose-driven beauty that supports everyday life at the highest level.']
        ].map(([title, text], i) => (
          <Reveal key={title} delay={i * 0.08}>
            <article className="serviceCard"><h3>{title}</h3><p>{text}</p></article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
