'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navLinks, site } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>
            <strong>{site.name}</strong> | Steel materials, CNC cutting, gate/fence hardware
          </span>
          <span>
            {site.phonePrimary} · {site.phoneSecondary}
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="CSK Steel Center home">
            <img src="/logos/logo-navy-horizontal.png" alt="CSK Steel Center logo" />
          </Link>

          <button
            className="mobile-toggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls="main-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            Menu
          </button>

          <nav id="main-navigation" className={`nav ${isOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(`${item.href}/`));

              return (
                <Link
                  key={item.href}
                  className={isActive ? 'active' : undefined}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <Link className="btn btn-primary" href="/quote">
              Request Quote
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
