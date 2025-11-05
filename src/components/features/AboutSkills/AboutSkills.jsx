import styles from './AboutSkills.module.scss';
import skills from '../../../data/skillsData';

export default function AboutSKills() {
  return (
    <div className={styles.skills}>
      {Object.entries(skills).map(([group, list]) => (
        <div key={group} className={styles.skillGroup}>
          <h4 className={styles.groupTitle}>
            {group.charAt(0).toUpperCase() + group.slice(1)}
          </h4>
          <div className={styles.skillsList}>
            {list.map((skill, i) => (
              <span key={i} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
