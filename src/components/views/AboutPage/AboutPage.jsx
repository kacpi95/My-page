import styles from './AboutPage.module.scss';
import AboutIntro from '../../features/AboutIntro/AboutIntro';
import AboutImage from '../../features/AboutImage/AboutImage';
import AboutSKills from '../../features/AboutSkills/AboutSkills';

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <AboutIntro />
          <AboutImage />
        </div>
        <AboutSKills />
      </div>
    </section>
  );
}
