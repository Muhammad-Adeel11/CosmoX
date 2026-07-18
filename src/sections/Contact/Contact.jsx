import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMapPin, HiOutlineEnvelope, HiOutlinePhone, HiCheckCircle } from 'react-icons/hi2';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';
import Button from '../../components/common/Button/Button';
import styles from './Contact.module.css';

const initialState = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm(initialState);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section id="contact" className={`${styles.section} container`}>
      <SectionHeading
        eyebrow="Get In Touch"
        title="Mission Control"
        subtitle="Have a question, proposal, or partnership idea? Reach out to our mission control team."
      />

      <div className={styles.grid}>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <HiOutlineMapPin size={22} />
            <div>
              <h4>Headquarters</h4>
              <p>Cape Canaveral, Florida, USA</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <HiOutlineEnvelope size={22} />
            <div>
              <h4>Email</h4>
              <p>missions@cosmox.space</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <HiOutlinePhone size={22} />
            <div>
              <h4>Phone</h4>
              <p>+1 (321) 555-0199</p>
            </div>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? styles.errorInput : ''}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <span id="name-error" className={styles.errorText}>{errors.name}</span>}
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? styles.errorInput : ''}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <span id="email-error" className={styles.errorText}>{errors.email}</span>}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              className={errors.subject ? styles.errorInput : ''}
              aria-invalid={!!errors.subject}
            />
            {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={errors.message ? styles.errorInput : ''}
              aria-invalid={!!errors.message}
            />
            {errors.message && <span className={styles.errorText}>{errors.message}</span>}
          </div>

          <Button type="submit" variant="primary" size="lg">
            Send Message
          </Button>

          {submitted && (
            <motion.div
              className={styles.successMsg}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <HiCheckCircle size={20} />
              Message transmitted successfully. We'll respond within 24 hours.
            </motion.div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;