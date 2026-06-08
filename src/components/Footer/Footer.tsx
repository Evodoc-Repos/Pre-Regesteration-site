import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bgShape}></div>
      <div className={styles.content}>
        
        <div className={styles.leftColumn}>
          <div className={styles.logo}>
            EVO
            <span className={styles.logoDoctor}>👨‍⚕️</span>
            DOC
          </div>
          <p className={styles.desc}>
            High level experience in web design and development knowledge, producing quality work.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.icon}>f</a>
            <a href="#" className={styles.icon}>gh</a>
            <a href="#" className={styles.icon}>fig</a>
            <a href="#" className={styles.icon}>tg</a>
          </div>
          <a href="#" className={styles.getStartedBtn}>
            Get started
          </a>
        </div>

        <div className={styles.linksContainer}>
          <div className={styles.column}>
            <h4>Product</h4>
            <ul>
              <li><a href="#">Landing Page</a></li>
              <li><a href="#">Popup Builder</a></li>
              <li><a href="#">Web-design</a></li>
              <li><a href="#">Content</a></li>
              <li><a href="#">Integrations</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Use Cases</h4>
            <ul>
              <li><a href="#">Web-designers</a></li>
              <li><a href="#">Marketers</a></li>
              <li><a href="#">Small Business</a></li>
              <li><a href="#">Website Builder</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Academy</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Themes</a></li>
              <li><a href="#">Hosting</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Teams</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
