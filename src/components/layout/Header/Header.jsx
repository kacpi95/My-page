import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
	return (
		<section className={styles.header}>
			<Link to={"/"}>
				<img src='' alt='logo' />
			</Link>
			<nav className={styles.navigation}>
				<Link to={"/about"}>O mnie</Link>
				<Link to={"/contact"}>Kontakt</Link>
				<Link to={"/project"}>Projekty</Link>
			</nav>
		</section>
	);
}
