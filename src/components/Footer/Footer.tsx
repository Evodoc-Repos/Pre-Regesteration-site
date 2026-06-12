'use client';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top divider glow */}
      <div className={styles.topGlow} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ── Brand column ── */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <span className={styles.logoText}>
              <span className={styles.logoEvo}>Evo</span>Health
            </span>
          </div>

          <p className={styles.tagline}>
            Smarter tools for doctors.<br />
            Better care for patients.
          </p>

          <div className={styles.products}>
            <span className={styles.productBadge} data-variant="doc">EvoDoc</span>
            <span className={styles.productBadge} data-variant="care">EvoCare</span>
          </div>

          <div className={styles.socials}>
            {/* Twitter/X */}
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            {/* GitHub */}
            <a href="#" className={styles.socialLink} aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
          </div>
        </div>

        {/* ── Nav columns ── */}
        <nav className={styles.nav} aria-label="Footer navigation">
          <div className={styles.column}>
            <h4 className={styles.colHead}>Platform</h4>
            <ul>
              <li><a href="#">EvoDoc</a></li>
              <li><a href="#">EvoCare</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">API Access</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colHead}>For Providers</h4>
            <ul>
              <li><a href="#">Clinical Documentation</a></li>
              <li><a href="#">Smart Summaries</a></li>
              <li><a href="#">Lab Insights</a></li>
              <li><a href="#">Scheduling</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colHead}>For Patients</h4>
            <ul>
              <li><a href="#">Health Records</a></li>
              <li><a href="#">Reminders</a></li>
              <li><a href="#">Family Tracking</a></li>
              <li><a href="#">AI Summaries</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colHead}>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottomBar}>
        <span className={styles.copy}>© {new Date().getFullYear()} EvoHealth Technologies. All rights reserved.</span>
        <div className={styles.bottomLinks}>
          <a href="#">Terms</a>
          <span className={styles.sep}>·</span>
          <a href="#">Privacy</a>
          <span className={styles.sep}>·</span>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
