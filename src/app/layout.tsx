import type { Metadata } from 'next';
import './globals.css';
import './heart-animations.css';

export const metadata: Metadata = {
  title: 'EvoDoc — Clinical AI CoPilot for Modern Medicine',
  description: 'EvoDoc provides doctors with an AI-powered clinical copilot that surfaces relevant patient history, smart timelines and instant insights. EvoCare gives patients a complete health companion to manage records, family health and medicine reminders.',
  keywords: 'EvoDoc, EvoCare, clinical AI, medical platform, doctor tools, patient care, health records',
  openGraph: {
    title: 'EvoDoc — Clinical AI CoPilot',
    description: 'AI-powered clinical tools for doctors and complete patient care for everyone.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
