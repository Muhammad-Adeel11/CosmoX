import { motion } from 'framer-motion';
import styles from './Card.module.css';

const Card = ({ children, className = '', hoverLift = true, glow = false, delay = 0 }) => {
  return (
    <motion.div
      className={`${styles.card} ${glow ? styles.glow : ''} ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hoverLift ? { y: -8 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;