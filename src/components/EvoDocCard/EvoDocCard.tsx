'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './EvoDocCard.module.css';

export default function EvoDocCard() {
  return (
    <article className={`${styles.card} ${styles.cardLeft}`}>
      <div className={styles.illo}>
        <Image
          src="/stethoscope.png"
          alt="Stethoscope"
          fill
          className={styles.illoImg}
          priority
        />
      </div>

      <h2 className={styles.cardTitle}>
        <span className={styles.a}>Evo</span><span className={styles.b}>Doc</span>
      </h2>
      <p className={styles.cardSub}>
        Real-time insights, smarter documentation, better decisions.
      </p>

      <ul className={styles.features} role="list">
        <li className={styles.feature}>
          <span className={styles.glassIcon}>
            <svg viewBox="0 0 24 24">
              <rect x="4" y="3" width="16" height="18" rx="2" />
              <line x1="8" y1="8" x2="16" y2="8" />
              <line x1="8" y1="12" x2="16" y2="12" />
              <line x1="8" y1="16" x2="13" y2="16" />
            </svg>
          </span>
          Patient context at a glance
        </li>
        <li className={styles.feature}>
          <span className={styles.glassIcon}>
            <svg viewBox="0 0 24 24">
              <line x1="6" y1="20" x2="6" y2="13" />
              <line x1="12" y1="20" x2="12" y2="8" />
              <line x1="18" y1="20" x2="18" y2="11" />
              <line x1="3" y1="20" x2="21" y2="20" />
            </svg>
          </span>
          Smart timeline &amp; summaries
        </li>
        <li className={styles.feature}>
          <span className={styles.glassIcon}>
            <svg viewBox="0 0 24 24">
              <polygon points="13 2 4 14 11 14 10 22 20 9 13 9 13 2" />
            </svg>
          </span>
          Instant insights
        </li>
        <li className={styles.feature}>
          <span className={styles.glassIcon}>
            <svg viewBox="0 0 24 24">
              <path d="M9 3v6l-5 9a2 2 0 0 0 1.8 3h12.4a2 2 0 0 0 1.8-3l-5-9V3" />
              <line x1="8" y1="3" x2="16" y2="3" />
              <line x1="7" y1="15" x2="17" y2="15" />
            </svg>
          </span>
          Lab report analysis
        </li>
      </ul>

      <Link href="/evodoc" className={styles.cardCta} style={{ textDecoration: 'none' }}>
        Explore EvoDoc
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="4" y1="12" x2="20" y2="12" />
          <polyline points="14 6 20 12 14 18" />
        </svg>
      </Link>
    </article>
  );
}
