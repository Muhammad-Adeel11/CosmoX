import { motion } from 'framer-motion';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';
import { useTilt } from '../../Hooks/useTilt';
import { planets } from '../../constants/planets';
import styles from './PlanetGallery.module.css';

const PlanetCard = ({ planet, index }) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(8);

  return (
    <motion.div
      className={styles.card}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ '--planet-color': planet.color }}
    >
      <div className={styles.imageWrap}>
        <img src={planet.image} alt={planet.name} loading="lazy" className={styles.image} />
        <div className={styles.glow} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{planet.name}</h3>
        <p className={styles.tagline}>{planet.tagline}</p>
      </div>
    </motion.div>
  );
};

const PlanetGallery = () => {
  return (
    <section id="planets" className={`${styles.section} container`}>
      <SectionHeading
        eyebrow="Explore The Cosmos"
        title="Planet Gallery"
        subtitle="A curated view into the celestial bodies at the heart of every CosmoX expedition."
      />
      <div className={styles.grid}>
        {planets.map((planet, i) => (
          <PlanetCard key={planet.id} planet={planet} index={i} />
        ))}
      </div>
    </section>
  );
};

export default PlanetGallery;