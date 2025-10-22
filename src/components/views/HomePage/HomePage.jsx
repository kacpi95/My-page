import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./HomePage.module.scss";

export default function HomePage() {
	return (
		<main className={styles.home}>
			<section className={styles.hero}>
				<div className='container'>
					<div className={styles.heroInner}>
						<div className={styles.heroLeft}>
							<h1 className={styles.title}>Hi, I’m Kacper Grzywacz.</h1>
							<p className={styles.lead}>
								I build accessible and performant web interfaces. I focus on
								clean code and thoughtful UX.
							</p>

							<div className={styles.ctaRow}>
								<a href='/contact' className={styles.ctaButton}>
									Contact
								</a>
								<a href='/about' className={styles.secondaryButton}>
									About
								</a>
								<a href='/portfolio' className={styles.secondaryButton}>
									Portfolio
								</a>
							</div>

							<div className={styles.socialRow} aria-label='Social links'>
								<a href='#' aria-label='GitHub' className={styles.socialLink}>
									<FontAwesomeIcon icon={faGithub} />
								</a>
								<a href='#' aria-label='LinkedIn' className={styles.socialLink}>
									<FontAwesomeIcon icon={faLinkedin} />
								</a>
								<a href='#' aria-label='Twitter' className={styles.socialLink}>
									<FontAwesomeIcon icon={faTwitter} />
								</a>
							</div>
						</div>

						<div className={styles.heroRight}>
							<img src='' alt='Profile' className={styles.heroImage} />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
