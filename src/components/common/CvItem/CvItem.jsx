import { faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from './CvItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CvItem() {
  return (
    <div className={styles.cvContainer}>
      <h3>Download my CV</h3>
      <a
        href='../../../public/files/cv-kacper.pdf'
        download
        className={styles.downloadButton}
      >
        <FontAwesomeIcon icon={faDownload} />
        <span>Download CV</span>
      </a>
    </div>
  );
}
