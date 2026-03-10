import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/data/content';

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
          <p className="footerTitle">Navigate</p>
          <div className="footerLinks">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="footerTitle">Contact</p>
          <p>Team: Yidel Grunberger, Tuli Strasser</p>
          <p>845-263-6855</p>
        </div>
      </div>
      <div className="container footerBottom">© {new Date().getFullYear()} YG plan. All rights reserved.</div>
    </footer>
  );
}
