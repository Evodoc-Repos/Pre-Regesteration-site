'use client';
import styles from './HeroSection.module.css';
import EvoDocCard from '@/components/EvoDocCard/EvoDocCard';
import EvoCareCard from '@/components/EvoCareCard/EvoCareCard';
import HeartAnimation from '@/components/HeartAnimation/HeartAnimation';
import PulseLine from '@/components/PulseLine/PulseLine';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      {/* Deep red ambient radial glow behind heart */}
      <div className={styles.ambientGlow} aria-hidden="true" />

      {/* ── Top tagline ── */}
      <div className={styles.taglineTop}>
        <span className={styles.eyebrow}>Clinical AI CoPilot</span>
        <h1 className={styles.headline}>
          Better care starts with<br />
          <em>better tools.</em>
        </h1>
      </div>

      {/* ── Main row: Card | Heart (with full-width pulse behind) | Card ── */}
      <div className={styles.centerRow}>
        {/* Full-width pulse line sits behind everything */}
        <div className={styles.pulseLayer} aria-hidden="true">
          <PulseLine />
        </div>

        {/* Left — EvoDoc */}
        <div className={styles.leftSlot}>
          <EvoDocCard />
        </div>

        {/* Center — Heart iframe */}
        <div className={styles.centerSlot}>
          <HeartAnimation />
        </div>

        {/* Right — EvoCare */}
        <div className={styles.rightSlot}>
          <EvoCareCard />
        </div>
      </div>

      {/* ── Bottom tagline ── */}
      <div className={styles.taglineBottom}>
        <p className={styles.taglineSub}>
          One platform. Two experiences. Zero compromise.
        </p>
        <div className={styles.taglinePill}>
          <span className={styles.pillDot} />
          <span>EvoDoc for Doctors</span>
          <span className={styles.pillSep}>·</span>
          <span>EvoCare for Patients</span>
        </div>
      </div>
    </section>
  );
}
