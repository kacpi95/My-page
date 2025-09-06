import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
	return (
		<section className={styles.header} id='header'>
			<Link to={"/"}>
				<img src='' alt='logo' className={styles.logo} />
			</Link>
			<nav className={styles.navigation}>
				<ul>
					<li>
						<Link to={"/about"}>O mnie</Link>
					</li>
					<li>
						<Link to={"/contact"}>Kontakt</Link>
					</li>
					<li>
						<Link to={"/project"}>Projekty</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
}
