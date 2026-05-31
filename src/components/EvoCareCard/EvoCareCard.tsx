'use client';
import styles from './EvoCareCard.module.css';

const features = [
  { icon: '📁', text: 'Unified medical records' },
  { icon: '🤖', text: 'AI document summaries' },
  { icon: '👨‍👩‍👧', text: 'Family health tracking' },
  { icon: '🔔', text: 'Smart medicine reminders' },
];

export default function EvoCareCard() {
  return (
    <article className={styles.card} id="evocare-card">
      <div className={styles.topRow}>
        <div className={styles.badge}>
          <span className={styles.dot} aria-hidden="true" />
          Patient Care
        </div>
        <div className={styles.indicator} aria-label="Active">
          <span className={styles.indicatorDot} />
        </div>
      </div>

      <h2 className={styles.heading}>
        Evo<span className={styles.headingAccent}>Care</span>
      </h2>
      <p className={styles.sub}>For Patients</p>

      <p className={styles.desc}>
        Your complete health companion — store records, get AI summaries, track family health and never miss a reminder.
      </p>

      <ul className={styles.features} role="list">
        {features.map((f) => (
          <li key={f.text} className={styles.featureRow}>
            <span className={styles.featureIcon} aria-hidden="true">{f.icon}</span>
            <span className={styles.featureText}>{f.text}</span>
          </li>
        ))}
      </ul>

      <a href="/evocare" className={styles.cta} id="evocare-cta">
        Explore EvoCare
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 6h8M7 3l3 3-3 3"/>
        </svg>
      </a>
    </article>
  );
}
