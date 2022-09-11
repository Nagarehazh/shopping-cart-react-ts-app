import { useShoppingCart } from "../../context/shoppingcartcontext";
import storeItems from "../../data/data.json";
import * as Unicons from "@iconscout/react-unicons";
import styles from "./caritem.module.css";

type CartItemProps = {
	id: number;
	quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
	const { removeFromCart } = useShoppingCart();
	const item = storeItems.find((item) => item.id === id);
	if (!item) {
		return null;
	}

	return (
		<div>
			<div className={styles.cartContainer}>
				<img style={{ width: "250px" }} src={item.imgUrl} alt={item.name} />
				<div className={styles.valueCartInfo}>
					<div className={styles.cartItemInfo}>
						<div>
							<div className={styles.cartItemName}>{item.name}</div>
							<div className={styles.cartItemPrice}>
								${item.price} x{quantity}
							</div>
						</div>
						<div>
							<button
								className={styles.cartItemRemove}
								onClick={() => removeFromCart(id)}
							>
								<Unicons.UilShoppingBasket size="20" color="black" />
							</button>
						</div>
					</div>
					<div>
						<div className={styles.cartItemTotal}>${item.price * quantity}</div>
					</div>
				</div>
			</div>
			<hr />
		</div>
	);
}
