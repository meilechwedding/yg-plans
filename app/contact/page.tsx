'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';

const fields = [
  'Name',
  'Email',
  'Phone',
  'Project Type',
  'Property Location',
  'Estimated Budget'
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section container pageTop">
      <Reveal><p className="eyebrow">Contact</p></Reveal>
      <Reveal><h1>Tell us about your project, property, or renovation goals.</h1></Reveal>
      <Reveal><p>We’ll review your inquiry and get back to you promptly with next steps.</p></Reveal>
      <div className="contactGrid">
        <Reveal>
          <form className="contactForm" onSubmit={onSubmit}>
            {fields.map((f) => (
              <label key={f}>{f}<input required={f === 'Name' || f === 'Email'} /></label>
            ))}
            <label>Message<textarea rows={5} required /></label>
            <button className="ctaButton" type="submit">Submit Inquiry</button>
            {sent && <p className="successMsg">Thank you. Our Monsey studio will be in touch shortly.</p>}
          </form>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="contactCard">
            <h3>Studio Contact</h3>
            <p>hello@ygplanny.com</p>
            <p>(845) 000-1948</p>
            <p>Monsey, NY</p>
            <p>Serving Rockland County and nearby communities.</p>
            <p>Team: Yidel Grunberger, Tuli Strasser</p>
            <p>845-263-6855</p>
            <p>Consultation appointments available Monday–Friday.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
