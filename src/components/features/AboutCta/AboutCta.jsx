import styles from "./AboutCta.module.scss";
import { Link } from "react-router-dom";

export default function AboutCta() {
	return (
		<section className={styles.cta}>
			<h2 className={styles.title}>Want to see more?</h2>
			<p className={styles.text}>
				Check out my projects or contact me, I'd be happy to tell you more.
			</p>

			<div className={styles.buttons}>
				<Link to='/projects' className={styles.primary}>
					View projects
				</Link>

				<a
					className={styles.secondary}
					href='/files/cv-kacper.pdf'
					target='_blank'
					rel='noreferrer'
				>
					download cv
				</a>

				<Link to='/contact' className={styles.link}>
					Contact →
				</Link>
			</div>
		</section>
	);
}
