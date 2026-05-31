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
          <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
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
        Get Early Access
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 6h8M7 3l3 3-3 3"/>
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
