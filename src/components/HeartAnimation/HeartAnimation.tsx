'use client';
import styles from './HeartAnimation.module.css';

export default function HeartAnimation() {
  return (
    <div className={styles.wrapper} aria-label="Beating heart animation" role="img">
      <iframe
        src="/heart-embed.html"
        className={styles.frame}
        title="Beating heart"
        scrolling="no"
        frameBorder="0"
      />
    </div>
  );
}
