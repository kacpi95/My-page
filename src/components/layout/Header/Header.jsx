import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header} id='header'>
      <div className={styles.container}>
        <Link to={'/'} className={styles.logo}>
          kacpi.dev
        </Link>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/project'}>Projects</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
