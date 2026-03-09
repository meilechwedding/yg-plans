import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/data/content';

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div>
          <Image src="/yg-plan-logo.svg" alt="YG plan logo" width={140} height={50} />
          <p className="footerLead">Architecture, planning, and design shaped with precision, calm, and timeless intent.</p>
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
          <p>hello@ygplan.studio</p>
          <p>+971 (0) 4 000 0000</p>
          <p>Dubai Design District</p>
        </div>
      </div>
      <div className="container footerBottom">© {new Date().getFullYear()} YG plan. All rights reserved.</div>
    </footer>
  );
}
