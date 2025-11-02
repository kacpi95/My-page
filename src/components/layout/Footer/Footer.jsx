import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          © {new Date().getFullYear()} Kacper Grzywacz. All rights reserved.
        </p>
        <div className={styles.socials}>
          <a href='https://github.com/kacpi95' target='_blank'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </footer>
  );
}
