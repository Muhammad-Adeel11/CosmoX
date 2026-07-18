import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { FaQuoteLeft } from 'react-icons/fa';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';
import { testimonials } from '../../constants/testimonials';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (newIndex, dir) => {
    setDirection(dir);
    setIndex((newIndex + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section id="testimonials" className={`${styles.section} container`}>
      <SectionHeading
        eyebrow="What Partners Say"
        title="Testimonials"
        subtitle="Trusted feedback from the researchers, engineers, and agencies who work alongside us."
      />

      <div className={styles.carousel}>
        <FaQuoteLeft className={styles.quoteIcon} size={32} />
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 40 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={styles.slide}
          >
            <p className={styles.quote}>"{current.quote}"</p>
            <div className={styles.author}>
              <img src={current.avatar} alt={current.name} className={styles.avatar} />
              <div>
                <span className={styles.name}>{current.name}</span>
                <span className={styles.role}>{current.role}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className={styles.controls}>
          <button onClick={() => goTo(index - 1, -1)} aria-label="Previous testimonial">
            <HiChevronLeft size={20} />
          </button>
          <div className={styles.dots}>
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={() => goTo(index + 1, 1)} aria-label="Next testimonial">
            <HiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;