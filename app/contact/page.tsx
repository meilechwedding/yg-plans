'use client';

import { FormEvent, useState } from 'react';
import Reveal from '@/components/Reveal';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">Contact</p></Reveal>
      <Reveal><h1>Tell us about your vision.</h1></Reveal>
      <div className="contactGrid">
        <Reveal>
          <form className="contactForm" onSubmit={onSubmit}>
            {['Name', 'Email', 'Phone', 'Project Type', 'Budget Range'].map((f) => (
              <label key={f}>{f}<input required={f === 'Name' || f === 'Email'} /></label>
            ))}
            <label>Message<textarea rows={5} required /></label>
            <button className="ctaButton" type="submit">Submit Inquiry</button>
            {sent && <p className="successMsg">Thank you. We will contact you within one business day.</p>}
          </form>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="contactCard">
            <h3>Studio Contact</h3>
            <p>hello@ygplan.studio</p>
            <p>+971 (0) 4 000 0000</p>
            <p>Dubai Design District</p>
            <p>Consultation appointments available Monday–Friday.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
