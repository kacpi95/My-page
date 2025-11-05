import styles from './AboutPage.module.scss';
import AboutIntro from '../../features/AboutIntro/AboutIntro';

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <AboutIntro />
        </div>
      </div>
    </section>
  );
}
