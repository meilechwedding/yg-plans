'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/content';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`siteHeader ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navWrap">
        <Link href="/" className="brandMark" aria-label="YG plan home">
          <Image src="/yg-plan-logo.svg" alt="YG plan logo" width={150} height={52} priority />
        </Link>

        <nav className={`mainNav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={pathname === link.href ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="ctaButton" href="/contact" onClick={() => setMenuOpen(false)}>
            Start Your Project
          </Link>
        </nav>

        <button className={`menuToggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
