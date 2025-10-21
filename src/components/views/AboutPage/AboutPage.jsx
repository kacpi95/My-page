import styles from "./AboutPage.module.scss";

export default function AboutPage() {
	return (
		<section id='about' className={styles.aboutSection}>
			<div className='container'>
				<div className={styles.content}>
					<div className={styles.textCol}>
						<h2>O mnie</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
							officiis voluptates nesciunt pariatur iste provident alias rem
							debitis laudantium.
						</p>

						<div className={styles.buttonsRow}>
							<button>Portfolio</button>
							<button>Kontakt</button>
							<button>CV</button>
						</div>
					</div>

					<div className={styles.imageCol}>
						<img src='' alt='Profile' />
						<p>Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
