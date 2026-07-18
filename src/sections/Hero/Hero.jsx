import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { HiOutlinePlay } from 'react-icons/hi2';
import { FiChevronDown } from 'react-icons/fi';
import Earth from '../../components/Three/Earth/Earth';
import Astronaut from '../../components/Three/Astronaut/Astronaut';
import StarField from '../../components/Three/StarField/StarField';
import Button from '../../components/common/Button/Button';
import GlowText from '../../components/common/GlowText/GlowText';
import { heroStats } from '../../constants/heroStats';
import { useCountUp } from '../../Hooks/useCountUp';
import styles from './Hero.module.css';

const StatItem = ({ stat }) => {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className={styles.statItem} ref={ref}>
      <span className={styles.statValue}>
        {value}
        {stat.suffix}
      </span>
      <span className={styles.statLabel}>{stat.label}</span>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.canvasWrapper}>
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 3, 5]} intensity={1.4} color="#3B82F6" />
          <pointLight position={[-5, -3, -5]} intensity={0.8} color="#8B5CF6" />
          <Suspense fallback={null}>
            <StarField />
            <group position={[-0.6, -0.3, 0]}>
              <Earth />
            </group>
            <Astronaut position={[2.2, 0.6, 0.5]} scale={0.9} />
          </Suspense>
        </Canvas>
      </div>

      <div className={`${styles.content} container`}>
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          CosmoX Deep Space Program
        </motion.span>

        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          Explore Beyond <br />
          <GlowText as="span" gradient="cyan">The Impossible</GlowText>
        </motion.h1>

        <motion.p
          className={styles.subheadline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Humanity's next generation of deep-space exploration begins here.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <Button variant="primary" size="lg" as="a" href="#contact">
            Start Mission
          </Button>
          <Button variant="secondary" size="lg" icon={<HiOutlinePlay size={18} />}>
            Watch Launch
          </Button>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {heroStats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#partners"
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <FiChevronDown size={22} />
      </motion.a>
    </section>
  );
};

export default Hero;