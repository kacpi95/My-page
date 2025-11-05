import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ContactItem.module.scss';

export default function ContactItem({ icon, label }) {
  return (
    <div className={styles.contactItem}>
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
    </div>
  );
}
