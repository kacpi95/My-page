import styles from './AboutIntro.module.scss';

export default function AboutIntor() {
  return (
    <div className={styles.intro}>
      <h1 className={styles.title}>
        Hi, I’m <span>Kacpi</span> <span>Developer</span>
      </h1>
      <p className={styles.lead}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
        molestiae quos cupiditate quo esse, fugit consequuntur delectus, iure
        adipisci eveniet rerum, consectetur voluptatum! Nulla delectus ipsa
        optio voluptate possimus. Velit cupiditate exercitationem quae.
        Reiciendis optio, vero vitae cumque facere id.
      </p>
    </div>
  );
}
