import Reveal from '@/components/Reveal';
import ScrollGuide from '@/components/ScrollGuide';

export default function ProcessPage() {
  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">Process</p></Reveal>
      <Reveal><h1>A clear path from first sketch to permit set.</h1></Reveal>
      <ScrollGuide>
        <div className="processMinimal">
          {[
            'Discovery — goals, property, timeline.',
            'Planning — layout logic and massing.',
            'Design Development — form, material, and detail.',
            'Documentation — permit and coordination sets.'
          ].map((text, i) => (
            <Reveal key={text} delay={i * 0.05}><p>{text}</p></Reveal>
          ))}
        </div>
      </ScrollGuide>
    </section>
  );
}
