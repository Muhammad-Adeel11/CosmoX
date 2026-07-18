import { motion } from 'framer-motion';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';
import { technology } from '../../constants/technology';
import styles from './SpaceTechnology.module.css';

const TechRow = ({ tech, index }) => {
  const reversed = index % 2 === 1;
  return (
    <div className={`${styles.row} ${reversed ? styles.reversed : ''}`}>
      <motion.div
        className={styles.imageWrap}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src={tech.image} alt={tech.name} loading="lazy" className={styles.image} />
        <div className={styles.badge}>
          <span className={styles.statValue}>{tech.stat}</span>
          <span className={styles.statLabel}>{tech.statLabel}</span>
        </div>
      </motion.div>

      <motion.div
        className={styles.textWrap}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className={styles.name}>{tech.name}</h3>
        <p className={styles.desc}>{tech.desc}</p>
      </motion.div>
    </div>
  );
};

const SpaceTechnology = () => {
  return (
    <section id="technology" className={`${styles.section} container`}>
      <SectionHeading
        eyebrow="Engineering"
        title="Space Technology"
        subtitle="The core systems powering every launch, transit, and landing across the CosmoX fleet."
      />
      <div className={styles.list}>
        {technology.map((tech, i) => (
          <TechRow key={tech.id} tech={tech} index={i} />
        ))}
      </div>
    </section>
  );
};

export default SpaceTechnology;