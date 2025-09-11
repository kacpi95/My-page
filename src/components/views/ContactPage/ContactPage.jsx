import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./ContactPage.module.scss";
import Header from "../../layout/Header/Header";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
	return (
		<>
			<Header />
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
				</div>
			</section>
		</>
	);
}
