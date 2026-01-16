import styles from "./AboutPage.module.scss";
import AboutIntro from "../../features/AboutIntro/AboutIntro";
import AboutImage from "../../features/AboutImage/AboutImage";
import AboutSkills from "../../features/AboutSkills/AboutSkills";
import AboutCta from "../../features/AboutCta/AboutCta";

export default function AboutPage() {
	return (
		<section className={styles.about}>
			<div className={styles.container}>
				<div className={styles.inner}>
					<AboutIntro />
					<AboutImage />
				</div>
				<AboutSkills />
				<AboutCta />
			</div>
		</section>
	);
}
