import styles from "./storeitem.module.css";
import { formatCurrency } from "../../utils/formatCurrency";
import { useShoppingCart } from "../../context/shoppingcartcontext";

type StoreItemProps = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
	const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
		useShoppingCart();

	const quantity = getItemQuantity(id);

	return (
		<div className={styles.cardItem}>
			<img className={styles.imgItem} src={imgUrl} alt={name} />
			<div className={styles.descriptionContainer}>
				<div className={styles.descriptionItem}>
					<span className={styles.nameItem}>{name}</span>
					<span className={styles.priceItem}>{formatCurrency(price)}</span>
				</div>
				<div>
					{quantity === 0 ? (
						<button
							className={styles.btnAddCart}
							onClick={() => increaseCartQuantity(id)}
						>
							Add to cart
						</button>
					) : (
						<div className={styles.quantityItem}>
							<div>
								<button
									className={styles.changeQuantityItem}
									onClick={() => decreaseCartQuantity(id)}
								>
									-
								</button>
								<span className={styles.quantityValue}>{quantity}</span>
								<button
									className={styles.changeQuantityItem}
									onClick={() => increaseCartQuantity(id)}
								>
									+
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
