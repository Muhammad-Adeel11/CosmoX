import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';
import { team } from '../../constants/team';
import styles from './AstronautTeam.module.css';

const TeamCard = ({ member, index }) => (
  <motion.div
    className={styles.card}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    animate={{ y: [0, -8, 0] }}
    style={{ animationDelay: `${index * 0.3}s` }}
    whileHover={{ y: -10 }}
  >
    <div className={styles.imageWrap}>
      <img src={member.image} alt={member.name} loading="lazy" className={styles.image} />
    </div>
    <h3 className={styles.name}>{member.name}</h3>
    <p className={styles.role}>{member.role}</p>
    <div className={styles.socials}>
      <a href="#" aria-label={`${member.name} on Twitter`}><FaTwitter size={15} /></a>
      <a href="#" aria-label={`${member.name} on LinkedIn`}><FaLinkedinIn size={15} /></a>
      <a href="#" aria-label={`${member.name} on Instagram`}><FaInstagram size={15} /></a>
    </div>
  </motion.div>
);

const AstronautTeam = () => {
  return (
    <section id="team" className={`${styles.section} container`}>
      <SectionHeading
        eyebrow="Meet The Crew"
        title="Astronaut Team"
        subtitle="The elite specialists commanding every CosmoX mission, trained across gravity, vacuum, and deep-space protocols."
      />
      <div className={styles.grid}>
        {team.map((member, i) => (
          <TeamCard key={member.id} member={member} index={i} />
        ))}
      </div>
    </section>
  );
};

export default AstronautTeam;