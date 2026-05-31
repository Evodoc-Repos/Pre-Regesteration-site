'use client';
import styles from './HeartAnimation.module.css';
import { HEART_SVG } from './heartSvg';

/**
 * Injects the low-poly SVG directly into the DOM.
 * No iframe — works everywhere including Vercel's edge CDN.
 * Animation CSS is loaded globally via heart-animations.css.
 */
export default function HeartAnimation() {
  return (
    <div
      className={`${styles.wrapper} heartWrap`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: HEART_SVG }}
      aria-label="Beating heart animation"
      role="img"
    />
  );
}
