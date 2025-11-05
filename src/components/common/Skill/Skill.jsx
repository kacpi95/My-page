import styles from './Skill.module.scss';

export default function Skill({ name, level }) {
  return (
    <div className={styles.skill}>
      {name}
      <div className={`${styles.level} ${styles[level]}`}></div>
    </div>
  );
}
