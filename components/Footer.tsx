import Link from 'next/link';
import { navLinks } from '@/data/content';

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerRow">
        <p>YG plan · Monsey, NY · Serving Rockland County.</p>
        <div className="footerLinksInline">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
