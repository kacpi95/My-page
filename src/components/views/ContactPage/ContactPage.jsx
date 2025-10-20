import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDiscord,
	faLinkedin,
	faFacebook,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./ContactPage.module.scss";

export default function ContactPage() {
	return (
		<section className={styles.contactSection}>
			<h2>Wybierz rodzaj kontaktu</h2>

			<div className={styles.contactGrid}>
				<div className={styles.contactItem}>
					<FontAwesomeIcon icon={faDiscord} />
					<span>Discord</span>
				</div>
				<div className={styles.contactItem}>
					<FontAwesomeIcon icon={faLinkedin} />
					<span>LinkedIn</span>
				</div>
				<div className={styles.contactItem}>
					<FontAwesomeIcon icon={faEnvelope} />
					<span>E-mail</span>
				</div>
				<div className={styles.contactItem}>
					<FontAwesomeIcon icon={faFacebook} />
					<span>Facebook</span>
				</div>
				<div className={styles.contactItem}>
					<FontAwesomeIcon icon={faWhatsapp} />
					<span>Whatsapp</span>
				</div>
			</div>
		</section>
	);
}
