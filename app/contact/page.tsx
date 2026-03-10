'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section pageTop container">
      <p className="eyebrow">Contact</p>
      <h1>Start your project.</h1>
      <div className="contactSplit">
        <div className="contactVisual">
          <Image src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1400&q=80" alt="Architectural material and planning desk" fill sizes="(max-width: 900px) 100vw, 45vw" />
        </div>
        <form className="contactModern" onSubmit={onSubmit}>
          <label>Name<input required /></label>
          <label>Email<input type="email" required /></label>
          <label>Phone<input /></label>
          <label>Project Type<input /></label>
          <label>Property Location<input /></label>
          <label>Estimated Budget<input /></label>
          <label>Message<textarea rows={4} required /></label>
          <button className="ctaButton" type="submit">Submit Inquiry</button>
          {sent && <p className="successMsg">Thanks. We’ll get back to you shortly.</p>}
        </form>
      </div>
    </section>
  );
}
