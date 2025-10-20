import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDiscord,
	faLinkedin,
	faFacebook,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./ContactPage.module.scss";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
	return (
		<>
			<section id='contact'>
				<div>Wybierz rodzaj kotaktu</div>
				<div className={styles.contactChoose}>
					<div>
						<FontAwesomeIcon icon={faDiscord} />
						<span>Discrod</span>
					</div>
					<div>
						<FontAwesomeIcon icon={faLinkedin} />
						<span>Linkedin</span>
					</div>
					<div>
						<FontAwesomeIcon icon={faEnvelope} />
						<span>E-mail</span>
					</div>
					<div>
						<FontAwesomeIcon icon={faFacebook} />
						<span>Facebook</span>
					</div>
					<div>
						<FontAwesomeIcon icon={faWhatsapp} />
						<span>Whatsapp</span>
					</div>
				</div>
			</section>
		</>
	);
}
