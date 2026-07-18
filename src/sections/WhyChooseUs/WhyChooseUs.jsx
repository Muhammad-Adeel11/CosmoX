import Card from '../../components/common/Card/Card';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';
import { features } from '../../constants/features';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  return (
    <section id="why-us" className={`${styles.section} container`}>
      <SectionHeading
        eyebrow="Why CosmoX"
        title="Engineered For The Unknown"
        subtitle="A precision-built platform combining decades of aerospace expertise with next-generation technology."
      />
      <div className={styles.grid}>
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title} glow delay={i * 0.08} className={styles.featureCard}>
              <div className={styles.iconWrap}>
                <Icon size={24} />
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.desc}>{feature.desc}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;