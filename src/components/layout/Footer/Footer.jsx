import styles from "./Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				© {new Date().getFullYear()} MyPage. Kacper Grzywacz.
			</div>
		</footer>
	);
}
