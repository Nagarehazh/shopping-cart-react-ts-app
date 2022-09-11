import { useShoppingCart } from "../../context/shoppingcartcontext";
import { formatCurrency } from "../../utils/formatCurrency";
import { CartItem } from "./caritem";
import storeItems from "../../data/data.json";
import styles from "./shoppingcart.module.css";

type ShoppingCartProps = {
	isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
	const { closeCart, cartItems } = useShoppingCart();

	const getStyles = () => {
		if (isOpen) {
			return styles.shoppingCartContainer;
		} else {
			return styles.shoppingCartContainerHidden;
		}
	};

	const getHiddenBtnClose = () => {
		if (isOpen) {
			return styles.btnCloseCart;
		} else {
			return styles.btnCloseHidden;
		}
	};

	const getHiddenTotal = () => {
		if (isOpen) {
			return styles.totalCart;
		} else {
			return styles.totalHidden;
		}
	};

	return (
		<div>
			<button className={getHiddenBtnClose()} onClick={closeCart}>
				x
			</button>

			<div className={styles.containerMainUbicationCart}>
				<div className={getStyles()}>
					{cartItems.map((item) => (
						<CartItem key={item.id} {...item} />
					))}
				</div>
			</div>
			<div className={getHiddenTotal()}>
				Total:{" "}
				{formatCurrency(
					cartItems.reduce((total, cartItem) => {
						const item = storeItems.find((item) => item.id === cartItem.id);
						return total + (item?.price || 0) * cartItem.quantity;
					}, 0)
				)}
			</div>
		</div>
	);
}
