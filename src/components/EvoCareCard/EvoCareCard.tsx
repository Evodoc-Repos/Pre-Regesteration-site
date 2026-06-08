'use client';
import Image from 'next/image';
import styles from './EvoCareCard.module.css';

export default function EvoCareCard() {
  return (
    <article className={`${styles.card} ${styles.cardRight}`}>
      <div className={styles.illo}>
        <Image
          src="/evocare-heart.png"
          alt="Patient care"
          fill
          className={styles.illoImg}
          priority
        />
      </div>

      <h2 className={styles.cardTitle}>
        <span className={styles.a}>Evo</span><span className={styles.b}>Care</span>
      </h2>
      <p className={styles.cardSub}>Your health companion</p>
      <p className={styles.featureDesc}>
        Store records, get reminders, track health — all in one place.
      </p>

      <ul className={styles.features} role="list">
        <li className={styles.feature}>
          <span className={styles.glassIcon}>
            <svg viewBox="0 0 24 24">
              <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
          </span>
          Unified medical records
        </li>
        <li className={styles.feature}>
          <span className={styles.glassIcon}>
            <svg viewBox="0 0 24 24">
              <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
              <polyline points="14 3 14 8 19 8" />
              <line x1="9" y1="13" x2="15" y2="13" />
              <line x1="9" y1="17" x2="13" y2="17" />
            </svg>
          </span>
          AI document summaries
        </li>
        <li className={styles.feature}>
          <span className={styles.glassIcon}>
            <svg viewBox="0 0 24 24">
              <circle cx="9" cy="8" r="3" />
              <circle cx="17" cy="9" r="2.4" />
              <path d="M3 20v-1a5 5 0 0 1 10 0v1" />
              <path d="M14.5 20v-1a4 4 0 0 1 6.5-3.1" />
            </svg>
          </span>
          Family health tracking
        </li>
        <li className={styles.feature}>
          <span className={styles.glassIcon}>
            <svg viewBox="0 0 24 24">
              <path d="M6 9a6 6 0 0 1 12 0c0 6 2.5 7 2.5 7H3.5S6 15 6 9z" />
              <path d="M10 20a2 2 0 0 0 4 0" />
            </svg>
          </span>
          Smart reminders
        </li>
      </ul>

      <button className={styles.cardCta}>
        Explore EvoCare
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="4" y1="12" x2="20" y2="12" />
          <polyline points="14 6 20 12 14 18" />
        </svg>
      </button>
    </article>
  );
}
