import Reveal from '@/components/Reveal';

export default function AboutPage() {
  return (
    <section className="section container pageTop studioPage">
      <Reveal><p className="eyebrow">Studio</p></Reveal>
      <Reveal><h1>YG plan is a Monsey-based architecture and planning studio.</h1></Reveal>
      <Reveal><p>We design homes, apartments, and multi-family spaces with clear layouts and build-ready documentation.</p></Reveal>
      <div className="miniGrid">
        {['Precise planning', 'Clean composition', 'Local process knowledge', 'Calm communication'].map((item, i) => (
          <Reveal key={item} delay={i * 0.05}><div>{item}</div></Reveal>
        ))}
      </div>
    </section>
  );
}
