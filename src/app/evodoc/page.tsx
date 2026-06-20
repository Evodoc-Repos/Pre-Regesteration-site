'use client';

import React, { useState } from 'react';
import styles from './evodoc.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function EvoDocPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How does EvoDoc securely handle sensitive clinical data?",
      answer: "EvoDoc employs end-to-end encryption and strict access controls. All data processing occurs within isolated environments that comply with global healthcare standards, ensuring patient information never leaves the secure perimeter."
    },
    {
      question: "Can the platform accurately process messy analog records?",
      answer: "Yes, our central cortex uses advanced optical character recognition combined with medical-specific language models to decode and structure handwritten notes, crinkled prescriptions, and legacy PDFs into standardized digital formats."
    },
    {
      question: "What specific mechanisms prevent AI hallucinations?",
      answer: "Every single insight is aggressively cross-referenced against static, verified medical databases through our continuous real-time firewall. If an insight cannot be mathematically verified against accepted medical literature, it is blocked from reaching the physician's screen."
    },
    {
      question: "Does the platform make independent diagnostic decisions?",
      answer: "No. EvoDoc does not prescribe; we map. We deliver transparent, fully explainable reasoning chains and explicit confidence metrics, but absolute final authority and diagnostic judgment remain exclusively with the physician."
    }
  ];

  return (
    <div className={styles.page}>
      <Navbar />
      
      {/* Global Background Gradients */}
      <div className={styles.bgGradientPrimary}></div>
      <div className={styles.bgGradientSecondary}></div>

      <main>
        {/* HERO SECTION */}
        <section className={`${styles.hero} ${styles.animateFadeUp}`}>
          <video autoPlay loop muted playsInline className={styles.heroVideo}>
            <source src="/background_video.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroGlow}></div>
          <div className={`${styles.container} ${styles.heroContent}`}>
            <span className={styles.sectionLabel}>EVODOC</span>
            <h1 className={styles.heroTitle}>
              Intelligence for <br /> Modern Healthcare.
            </h1>
            <p className={styles.heroSubtitle}>
              Evidence-based clinical recommendations that help healthcare professionals make faster, more confident decisions.
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.primaryButton}>Try Demo Now</button>
              <button className={styles.secondaryButton}>Pre-Register Now</button>
            </div>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section className={styles.section} id="about">
          <div className={`${styles.container} ${styles.animateFadeUp}`} style={{ animationDelay: '0.2s' }}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>About us</span>
              <h2 className={styles.sectionTitle}>
                A medical record should be a story. <br />
                <span style={{ color: '#a1a1aa' }}>Not an avalanche.</span>
              </h2>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p className={styles.aboutText}>
                <span className={styles.aboutHighlight}>Medicine has a memory problem.</span> Decades of unstructured PDFs, handwritten notes, and scattered labs create a landscape of severe cognitive overload. EvoDoc synthesizes this fragmented history into a single, cohesive timeline—instantly processing crinkled paper documents, filtering out conversational noise, and organizing complex medical data.
              </p>
              <p className={styles.aboutText}>
                To protect this living narrative, our architecture unifies semantic search, real-time safety firewalls, and active drug interaction checks into a single interface. Every insight is grounded in explainable reasoning to eliminate machine hallucinations while completely respecting physician autonomy.
              </p>
              <p className={styles.aboutText} style={{ fontWeight: 600, color: '#fff', fontSize: '2rem', marginTop: '4rem' }}>
                One platform. Two unique experiences. Zero compromise.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION (BENTO GRID) */}
        <section className={styles.section} id="features">
          <div className={`${styles.container} ${styles.animateFadeUp}`} style={{ animationDelay: '0.4s' }}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Features</span>
              <h2 className={styles.sectionTitle}>
                Intelligence on the clinical line.
              </h2>
              <p className={styles.sectionSubtitle}>
                Built to protect the patient&apos;s entire narrative.
              </p>
            </div>

            <div className={styles.bentoGrid}>
              <div className={`${styles.bentoCard} ${styles.bentoCardLarge}`}>
                <div className={styles.bentoCardContent}>
                  <h3 className={styles.bentoCardTitle}>The Intake</h3>
                  <p className={styles.bentoCardDesc}>
                    Medicine has a memory problem, so we built a central cortex that instantly converts crinkled paper prescriptions, handwritten notes, and conversational noise into clean, globally standardized digital records the exact second they enter the clinic.
                  </p>
                </div>
              </div>
              <div className={styles.bentoCard}>
                <div className={styles.bentoCardContent}>
                  <h3 className={styles.bentoCardTitle}>The Brain</h3>
                  <p className={styles.bentoCardDesc}>
                    To eliminate machine hallucinations entirely, a continuous real-time firewall aggressively cross-references every single insight against static, verified medical databases.
                  </p>
                </div>
              </div>
              <div className={styles.bentoCard}>
                <div className={styles.bentoCardContent}>
                  <h3 className={styles.bentoCardTitle}>The Safety Shield</h3>
                  <p className={styles.bentoCardDesc}>
                    We do not prescribe, we map—delivering transparent, fully explainable reasoning chains and explicit confidence metrics that reduce cognitive overload.
                  </p>
                </div>
              </div>
              <div className={`${styles.bentoCard} ${styles.bentoCardLarge}`}>
                <div className={styles.bentoCardContent}>
                  <h3 className={styles.bentoCardTitle}>The Delivery</h3>
                  <p className={styles.bentoCardDesc}>
                    By mapping decades of fragmented medical history mathematically, the system unifies a patient’s entire health journey into a single, linear timeline that automatically surfaces critical diagnostic patterns and hidden metabolic risks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEMO SECTION */}
        <section className={styles.section} id="demo">
          <div className={`${styles.container} ${styles.animateFadeUp}`} style={{ textAlign: 'center', animationDelay: '0.6s' }}>
            <span className={styles.sectionLabel}>Demo</span>
            <h2 className={styles.sectionTitle}>
              See it in Action.<br />No Sign-up Required.
            </h2>
            <p className={styles.sectionSubtitle} style={{ marginBottom: '2.5rem' }}>
              See how EvoDoc prepares patient history before a consult, across different cases.
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.primaryButton}>Launch Abstract UI</button>
            </div>
            
            {/* CSS Abstract UI Mockup */}
            <div className={styles.abstractUI}>
              <div className={styles.uiHeader}>
                <div className={styles.uiDot}></div>
                <div className={styles.uiDot}></div>
                <div className={styles.uiDot}></div>
              </div>
              <div className={styles.uiBody}>
                <div className={styles.uiSidebar}>
                  <div className={styles.uiSkeletonLine} style={{ width: '80%' }}></div>
                  <div className={styles.uiSkeletonLine} style={{ width: '60%' }}></div>
                  <div className={styles.uiSkeletonLine} style={{ width: '90%' }}></div>
                  <div className={styles.uiSkeletonLine} style={{ width: '70%', marginTop: '2rem' }}></div>
                  <div className={styles.uiSkeletonLine} style={{ width: '50%' }}></div>
                </div>
                <div className={styles.uiMain}>
                  <div className={styles.uiBox} style={{ flex: 2 }}></div>
                  <div style={{ display: 'flex', gap: '1.5rem', flex: 1 }}>
                    <div className={styles.uiBox}></div>
                    <div className={styles.uiBox}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section className={styles.section} id="faqs">
          <div className={`${styles.container} ${styles.animateFadeUp}`} style={{ animationDelay: '0.8s' }}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>FAQs</span>
              <h2 className={styles.sectionTitle}>Questions. Answered.</h2>
              <p className={styles.sectionSubtitle}>
                Everything you need to know about architecture, security, and clinical integration.
              </p>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <div key={index} className={`${styles.faqItem} ${openFaq === index ? styles.faqOpen : ''}`}>
                  <button className={styles.faqQuestion} onClick={() => toggleFaq(index)} aria-expanded={openFaq === index}>
                    {faq.question}
                    <span className={styles.faqIcon}>+</span>
                  </button>
                  <div className={styles.faqAnswer}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
