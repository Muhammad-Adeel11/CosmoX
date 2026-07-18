import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus } from 'react-icons/hi2';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';
import { faqs } from '../../constants/faqs';
import styles from './FAQ.module.css';

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className={styles.item}>
    <button
      className={styles.question}
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`faq-panel-${faq.id}`}
    >
      <span>{faq.question}</span>
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.25 }}
        className={styles.iconWrap}
      >
        <HiPlus size={18} />
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          id={`faq-panel-${faq.id}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={styles.answerWrap}
        >
          <p className={styles.answer}>{faq.answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openId, setOpenId] = useState(faqs[0].id);

  return (
    <section id="faq" className={`${styles.section} container`}>
      <SectionHeading
        eyebrow="Questions & Answers"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about missions, collaboration, and safety at CosmoX."
      />
      <div className={styles.list}>
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openId === faq.id}
            onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;