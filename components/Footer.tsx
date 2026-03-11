import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div>
          <Image src="/yg-plan-logo.svg" alt="YG plan logo" width={140} height={50} />
          <p className="footerLead">
            A Monsey-based architecture and planning studio designing thoughtful homes, renovations, and multi-family spaces across Rockland County.
          </p>
        </div>
        <div>
          <p className="footerTitle">Studio</p>
          <p>Monsey, NY</p>
          <p>Serving Rockland County and surrounding areas</p>
        </div>
        <div>
          <p className="footerTitle">Contact</p>
          <p>Team: Yidel Grunberger, Tuli Strasser</p>
          <p>845-263-6855</p>
        </div>
      </div>
    </footer>
  );
}
