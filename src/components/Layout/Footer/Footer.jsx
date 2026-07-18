import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import { useState } from 'react';
import { navLinks } from '../../../constants/navLinks';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.stars} aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className={`${styles.inner} container`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>Cosmo<span>X</span></span>
            <p className={styles.tagline}>
              Advancing humanity's presence across the solar system through
              precision engineering and global collaboration.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Twitter"><FaTwitter size={16} /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={16} /></a>
              <a href="#" aria-label="Instagram"><FaInstagram size={16} /></a>
              <a href="#" aria-label="GitHub"><FaGithub size={16} /></a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4>Navigate</h4>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </div>

          <div className={styles.linksCol}>
            <h4>Company</h4>
            <a href="#why-us">About</a>
            <a href="#technology">Technology</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>

          <div className={styles.newsletter}>
            <h4>Mission Updates</h4>
            <p>Subscribe for launch alerts and mission reports.</p>
            <form onSubmit={handleSubscribe} className={styles.form}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button type="submit" aria-label="Subscribe">
                <HiOutlinePaperAirplane size={18} />
              </button>
            </form>
            {subscribed && <span className={styles.subscribed}>Subscribed successfully ✓</span>}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} CosmoX. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;