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
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
