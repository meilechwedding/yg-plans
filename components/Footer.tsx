import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div>
          <p className="footerBrand">YG plan</p>
          <p>Monsey-based planning and architecture studio for residential and multi-family projects.</p>
        </div>
        <div>
          <p className="footerTitle">Studio</p>
          <p>Monsey, NY</p>
          <p>Serving Rockland County and surrounding areas</p>
        </div>
        <div>
          <p className="footerTitle">Contact</p>
          <p>hello@ygplanny.com</p>
          <p>(845) 000-1948</p>
          <Link href="/contact">Start an inquiry</Link>
        </div>
      </div>
    </footer>
  );
}
