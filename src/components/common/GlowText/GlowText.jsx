import styles from './GlowText.module.css';

const GlowText = ({ children, as: Tag = 'span', gradient = 'primary' }) => {
  return <Tag className={`${styles.glowText} ${styles[gradient]}`}>{children}</Tag>;
};

export default GlowText;