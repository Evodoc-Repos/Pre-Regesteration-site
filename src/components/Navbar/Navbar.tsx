'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav} id="navbar">
      {/* Logo */}
      <Link href="/" className={styles.logo} aria-label="EvoDoc Home">
        <div className={styles.logoIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21s-7.5-4.9-10-9.3C.5 8.6 2 5 5.4 5c2 0 3.3 1.1 4.1 2.3.4.6.5.9.5.9s.1-.3.5-.9C11.3 6.1 12.6 5 14.6 5 18 5 19.5 8.6 22 11.7 19.5 16.1 12 21 12 21z"/>
          </svg>
        </div>
        <span className={styles.logoText}>EvoDoc</span>
      </Link>

      {/* Desktop Nav Links */}
      <ul className={styles.links} role="list">
        <li><Link href="/blog"    className={styles.link}>Blogs</Link></li>
        <li><Link href="/about"   className={styles.link}>About Us</Link></li>
        <li><Link href="/contact" className={styles.link}>Contact Us</Link></li>
      </ul>

      {/* Desktop CTA */}
      <Link href="/early-access" className={styles.cta} id="nav-early-access">
        <span>Get Early Access</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={styles.arrow}>
          <line x1="4" y1="12" x2="20" y2="12"/>
          <polyline points="14 6 20 12 14 18"/>
        </svg>
      </Link>

      {/* Mobile hamburger */}
      <button
        className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`} aria-hidden={!open}>
        <ul role="list">
          <li><Link href="/blog"    className={styles.drawerLink} onClick={() => setOpen(false)}>Blogs</Link></li>
          <li><Link href="/about"   className={styles.drawerLink} onClick={() => setOpen(false)}>About Us</Link></li>
          <li><Link href="/contact" className={styles.drawerLink} onClick={() => setOpen(false)}>Contact Us</Link></li>
        </ul>
        <Link href="/early-access" className={styles.drawerCta} onClick={() => setOpen(false)}>
          Get Early Access →
        </Link>
      </div>
    </nav>
  );
}
