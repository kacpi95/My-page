import {
  faDiscord,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import ContactItem from '../../common/ContactItem/ContactItem';
import styles from './ContactPage.module.scss';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactPage() {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>
        <span>Choose</span> a way to <span>contact me</span>
      </h2>

      <div className={styles.contactList}>
        <ContactItem icon={faDiscord} label='Discord' />
        <ContactItem icon={faLinkedin} label='LinkedIn' />
        <ContactItem icon={faEnvelope} label='E-mail' />
        <ContactItem icon={faWhatsapp} label='Whatsapp' />
      </div>
    </section>
  );
}
