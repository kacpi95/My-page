import styles from './NoPage.module.scss';

export default function NoPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.text}>Ups! Strona, której szukasz, nie istnieje.</p>
      <a href='/' style={styles.link}>
        Wróć na stronę główną
      </a>
    </div>
  );
}
