import styles from './ProjectsList.module.scss';
import projects from '../../../../data/projectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectsList() {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.githubText}>
          My GitHub:{' '}
          <a
            href='https://github.com/kacpi95'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.githubLink}
          >
            <FontAwesomeIcon icon={faGithub} /> github.com/kacpi95
          </a>
        </p>

        <ul className={styles.grid}>
          {projects.map((project, i) => (
            <li key={i} className={styles.card}>
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>

              <div className={styles.techList}>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.containerButton}>
                <button className={styles.viewButton}>View details</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
