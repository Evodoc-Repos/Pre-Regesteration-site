'use client';
import styles from './EvoDocCard.module.css';

const features = [
  { icon: '🧠', text: 'Contextual patient history' },
  { icon: '📊', text: 'Visual medical timeline' },
  { icon: '⚡', text: 'Instant relevant insights' },
  { icon: '🔍', text: 'Smart lab report analysis' },
];

export default function EvoDocCard() {
  return (
    <article className={styles.card} id="evodoc-card">
      <div className={styles.topRow}>
        <div className={styles.badge}>
          <span className={styles.dot} aria-hidden="true" />
          Clinical AI
        </div>
        <div className={styles.indicator} aria-label="Active">
          <span className={styles.indicatorDot} />
        </div>
      </div>

      <h2 className={styles.heading}>
        Evo<span className={styles.headingAccent}>Doc</span>
      </h2>
      <p className={styles.sub}>For Doctors</p>

      <p className={styles.desc}>
        AI copilot that surfaces only what matters — relevant history, smart timelines, instant context at the point of care.
      </p>

      <ul className={styles.features} role="list">
        {features.map((f) => (
          <li key={f.text} className={styles.featureRow}>
            <span className={styles.featureIcon} aria-hidden="true">{f.icon}</span>
            <span className={styles.featureText}>{f.text}</span>
          </li>
        ))}
      </ul>

      <a href="/evodoc" className={styles.cta} id="evodoc-cta">
        Explore EvoDoc
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 6h8M7 3l3 3-3 3"/>
        </svg>
      </a>
    </article>
  );
}
