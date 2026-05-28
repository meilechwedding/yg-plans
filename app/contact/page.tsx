import Reveal from '@/components/Reveal';

const projectTypes = [
  'Custom home',
  'Shul / community building',
  'Semi-attached / townhome',
  'Apartment building',
  'Renovation / addition',
  'Permits / filing',
  'Not sure yet'
];

export default function ContactPage() {
  return (
    <section className="section container pageTop contactPage">
      <Reveal><p className="eyebrow">Inquiry</p></Reveal>
      <Reveal><h1>Tell us what you are planning.</h1></Reveal>
      <Reveal>
        <p>
          A short message is enough to begin. Share the project type, location, timing, and anything already known about
          the lot, home, shul, or filing stage.
        </p>
      </Reveal>
      <div className="contactGrid">
        <Reveal>
          <form className="contactForm" action="https://formsubmit.co/tuli@ygplans.com" method="POST">
            <input type="hidden" name="_subject" value="New YG plan website inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://ygplans.com/contact" />
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="honeyField" />

            <label htmlFor="name">Name<input id="name" name="name" autoComplete="name" required /></label>
            <label htmlFor="email">Email<input id="email" name="email" type="email" autoComplete="email" required /></label>
            <label htmlFor="phone">Phone<input id="phone" name="phone" type="tel" autoComplete="tel" required /></label>
            <label htmlFor="projectType">
              Project type
              <select id="projectType" name="project_type" required defaultValue="">
                <option value="" disabled>Choose one</option>
                {projectTypes.map((type) => <option key={type}>{type}</option>)}
              </select>
            </label>
            <label htmlFor="location">
              Project location
              <input id="location" name="location" placeholder="Monsey, Ramapo, Spring Valley..." />
            </label>
            <label htmlFor="timeline">
              Timeline
              <input id="timeline" name="timeline" placeholder="Now, 3 months, next year..." />
            </label>
            <label className="fullField" htmlFor="message">
              Project notes
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Tell us about the lot, building type, family/community needs, filing stage, or anything useful."
              />
            </label>
            <div className="submitRow">
              <button className="ctaButton" type="submit">Send inquiry</button>
              <p id="formStatus" aria-live="polite">
                Submits securely through FormSubmit to tuli@ygplans.com. First submission may require email verification.
              </p>
            </div>
          </form>
        </Reveal>
        <Reveal delay={0.1}>
          <aside className="contactCard">
            <h3>A direct studio conversation.</h3>
            <div className="contactLinks">
              <p><span>Phone</span><a href="tel:18452636855">845-263-6855</a></p>
              <p><span>Email</span><a href="mailto:tuli@ygplans.com">tuli@ygplans.com</a></p>
              <p><span>Studio</span>Monsey, New York</p>
              <p><span>Principals</span>Yidel Grunberger and Tuli Strasser</p>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
