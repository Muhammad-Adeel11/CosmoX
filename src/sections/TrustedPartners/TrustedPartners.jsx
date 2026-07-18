import { motion } from 'framer-motion';
import { partners } from '../../constants/partners';
import styles from './TrustedPartners.module.css';

const TrustedPartners = () => {
  // Duplicate list for seamless infinite marquee
  const loopPartners = [...partners, ...partners];

  return (
    <section id="partners" className={styles.section} aria-label="Trusted partners">
      <div className="container">
        <motion.p
          className={styles.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by leading space agencies worldwide
        </motion.p>
      </div>

      <div className={styles.marqueeMask}>
        <div className={styles.marqueeTrack}>
          {loopPartners.map((partner, i) => (
            <span key={`${partner.id}-${i}`} className={styles.partnerName}>
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;