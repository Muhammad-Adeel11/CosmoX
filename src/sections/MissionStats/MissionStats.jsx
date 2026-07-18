import { useCountUp } from '../../Hooks/useCountUp';
import Card from '../../components/common/Card/Card';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';
import { missionStats } from '../../constants/missionStats';
import styles from './MissionStats.module.css';

const StatCard = ({ stat, index }) => {
  const { ref, value } = useCountUp(stat.value);
  const Icon = stat.icon;

  return (
    <Card glow delay={index * 0.1} className={styles.statCard}>
      <div className={styles.iconWrap}>
        <Icon size={26} />
      </div>
      <span className={styles.value} ref={ref}>
        {value}
        {stat.suffix}
      </span>
      <span className={styles.label}>{stat.label}</span>
      <p className={styles.desc}>{stat.desc}</p>
    </Card>
  );
};

const MissionStats = () => {
  return (
    <section id="stats" className={`${styles.section} container`}>
      <SectionHeading
        eyebrow="By The Numbers"
        title="Mission Statistics"
        subtitle="Real metrics from a global network of exploration, research, and deep-space engineering."
      />
      <div className={styles.grid}>
        {missionStats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
};

export default MissionStats;