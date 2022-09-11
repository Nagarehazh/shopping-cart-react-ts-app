import { StoreItem } from "../components/storeitem/storeitem";
import storeItems from "../data/data.json";
import styles from "./store.module.css";

export function Store() {
	return (
		<div className={styles.storeGrid}>
			{storeItems.map((item) => (
				<div className={styles.storeGridItem} key={item.id}>
					<StoreItem {...item} />
				</div>
			))}
		</div>
	);
}
