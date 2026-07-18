import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';
import { missions } from '../../constants/missions';
import styles from './FeaturedMissions.module.css';

const statusColor = {
  Active: styles.statusActive,
  'In Transit': styles.statusTransit,
  Scheduled: styles.statusScheduled,
  Completed: styles.statusCompleted,
};

const MissionCard = ({ mission, index }) => (
  <motion.article
    className={styles.card}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -8 }}
  >
    <div className={styles.imageWrap}>
      <img src={mission.image} alt={mission.name} loading="lazy" className={styles.image} />
      <span className={`${styles.status} ${statusColor[mission.status]}`}>{mission.status}</span>
    </div>
    <div className={styles.body}>
      <h3 className={styles.name}>{mission.name}</h3>
      <p className={styles.desc}>{mission.description}</p>
      <div className={styles.footer}>
        <span className={styles.date}>{mission.launchDate}</span>
        <button className={styles.link} aria-label={`View details for ${mission.name}`}>
          Details <HiArrowUpRight size={16} />
        </button>
      </div>
    </div>
  </motion.article>
);

const FeaturedMissions = () => {
  return (
    <section id="missions" className={`${styles.section} container`}>
      <SectionHeading
        eyebrow="Active Programs"
        title="Featured Missions"
        subtitle="A snapshot of the missions currently reshaping humanity's presence beyond Earth."
      />
      <div className={styles.grid}>
        {missions.map((mission, i) => (
          <MissionCard key={mission.id} mission={mission} index={i} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedMissions;