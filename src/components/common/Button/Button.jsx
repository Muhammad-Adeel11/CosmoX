import { motion } from 'framer-motion';
import styles from './Button.module.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  icon,
  onClick,
  type = 'button',
  ...rest
}) => {
  const Component = motion[as === 'a' ? 'a' : 'button'];
  const classes = `${styles.btn} ${styles[variant]} ${styles[size]}`;

  const props =
    as === 'a'
      ? { href }
      : { type, onClick };

  return (
    <Component
      className={classes}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      {...props}
      {...rest}
    >
      <span className={styles.label}>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </Component>
  );
};

export default Button;