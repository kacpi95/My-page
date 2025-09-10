import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ContactPage.module.scss";
import Header from "../../layout/Header/Header";

export default function ContactPage() {
	return (
		<>
			<Header />
			<section id='contact'>
				<div>Wybierz rodzaj kotaktu</div>
				<div className={styles.contactChoose}>
					<div>
						<FontAwesomeIcon />
						<span>Discrod</span>
					</div>
					<div>
						<FontAwesomeIcon />
						<span>Linkedin</span>
					</div>
					<div>
						<FontAwesomeIcon />
						<span>E-mail</span>
					</div>
				</div>
			</section>
		</>
	);
}
