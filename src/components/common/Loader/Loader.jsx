import { motion, AnimatePresence } from 'framer-motion';
import styles from './Loader.module.css';

const Loader = ({ progress }) => {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.loader}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.center}>
          <motion.div
            className={styles.logo}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Cosmo<span>X</span>
          </motion.div>

          <div className={styles.barTrack}>
            <motion.div
              className={styles.barFill}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span className={styles.percent}>{Math.min(progress, 100)}%</span>
        </div>

        <div className={styles.stars} aria-hidden="true">
          {Array.from({ length: 60 }).map((_, i) => (
            <span
              key={i}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;