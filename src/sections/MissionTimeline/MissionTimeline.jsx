import { motion } from 'framer-motion';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';
import { timeline } from '../../constants/timeline';
import styles from './MissionTimeline.module.css';

const MissionTimeline = () => {
  return (
    <section id="timeline" className={`${styles.section} container`}>
      <SectionHeading
        eyebrow="Roadmap"
        title="Mission Timeline"
        subtitle="From launch pad to deep space — the phased journey of every CosmoX mission."
      />

      <div className={styles.timeline}>
        <div className={styles.line} />
        {timeline.map((item, i) => {
          const Icon = item.icon;
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={item.id}
              className={`${styles.item} ${isEven ? styles.itemLeft : styles.itemRight}`}
              initial={{ opacity: 0, x: isEven ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.content}>
                <span className={styles.year}>{item.year}</span>
                <h3 className={styles.phase}>{item.phase}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
              <div className={styles.node}>
                <Icon size={20} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MissionTimeline;