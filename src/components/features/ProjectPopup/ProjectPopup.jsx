import styles from './ProjectPopup.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';

export default function ProjectPopup({ project, onClose }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <h2 className={styles.modalTitle}>{project.title}</h2>
        <img src={project.image} alt={project.title} className={styles.image} />

        <p className={styles.longDescription}>{project.longDescription}</p>

        <div className={styles.techList}>
          {project.technologies.map((tech, i) => (
            <span key={i} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.buttons}>
          <a href={project.link} target='_blank' rel='noopener noreferrer'>
            <button className={styles.githubButton}>
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </button>
          </a>
          <a href={project.website} target='_blank' rel='noopener noreferrer'>
            <button className={styles.liveButton}>
              <FontAwesomeIcon icon={faGlobe} />
              <span>Website</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
