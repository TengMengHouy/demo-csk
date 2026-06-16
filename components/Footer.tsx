import Link from 'next/link';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img src="/logos/logo-white-horizontal.png" alt="CSK Steel Center white logo" />
            <p>{site.description}</p>
          </div>

          <div>
            <h3>Contact</h3>
            <div className="footer-links">
              <a href="tel:078288883">{site.phonePrimary}</a>
              <a href="tel:086960606">{site.phoneSecondary}</a>
              <Link href="/contact">Shop location</Link>
            </div>
          </div>

          <div>
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link href="/services">Services</Link>
              <Link href="/products">Products</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/quote">Quote</Link>
            </div>
          </div>

          <div>
            <h3>Launch note</h3>
            <p>Replace placeholders with real address, photos, map, and final Telegram contact before publishing.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 CSK Steel Center. Demo website.</span>
          <span>Built with Next.js App Router.</span>
        </div>
      </div>
    </footer>
  );
}
