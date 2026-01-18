import styles from './AboutImage.module.scss';

export default function AboutImage() {
  return (
    <div className={styles.imageContainer}>
      <img
        src='/images/kacpiAI.jpg'
        alt='Image profile'
        className={styles.image}
      />
    </div>
  );
}
