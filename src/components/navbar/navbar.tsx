import { Link } from "react-router-dom";
import * as Unicons from "@iconscout/react-unicons";
import styles from "./navbar.module.css";
import { useShoppingCart } from "../../context/shoppingcartcontext";

export function Navbar() {
	const { openCart, cartQuantity } = useShoppingCart();
	return (
		<div className={styles.mainCointainerNavbar}>
			<nav>
				<ul className={styles.navbarListContainer}>
					<li>
						<Link
							className={styles.navItems}
							style={{ textDecoration: "none" }}
							to="/"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className={styles.navItems}
							style={{ textDecoration: "none" }}
							to="/store"
						>
							Store
						</Link>
					</li>
					<li>
						<Link
							className={styles.navItems}
							style={{ textDecoration: "none" }}
							to="/about"
						>
							About
						</Link>
					</li>
				</ul>
			</nav>

			<button className={styles.navbarButton} onClick={openCart}>
				<Unicons.UilShoppingCart size="35" color="black" />
				<div className={styles.countCartBtn}>{cartQuantity}</div>
			</button>
		</div>
	);
}
