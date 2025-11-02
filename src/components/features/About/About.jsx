import styles from './About.module.scss';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.name}>Kacpi</span>{' '}
          <span className={styles.role}>Developer</span>
        </h1>
        <p className={styles.text}>
          I’m a front-end developer passionate about creating modern, fast, and
          accessible web applications. I love turning creative ideas into clean,
          functional interfaces
        </p>
        <Link to={'/contact'} className={styles.link}>
          Contact me →
        </Link>
      </div>
    </section>
  );
}
