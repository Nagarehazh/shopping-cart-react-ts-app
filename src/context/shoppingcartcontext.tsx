import { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/cart/shoppingcart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
	children: React.ReactNode;
};

type CartItem = {
	id: number;
	quantity: number;
};

type ShoppingCartContext = {
	openCart: () => void;
	closeCart: () => void;
	getItemQuantity: (id: number) => number;
	increaseCartQuantity: (id: number) => void;
	decreaseCartQuantity: (id: number) => void;
	removeFromCart: (id: number) => void;
	cartQuantity: number;
	cartItems: CartItem[];
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
	return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
		"shoppingCart",
		[]
	);

	const cartQuantity = cartItems.reduce(
		(quantity, item) => item.quantity + quantity,
		0
	);

	const openCart = () => setIsOpen(true);
	const closeCart = () => setIsOpen(false);

	function getItemQuantity(id: number) {
		const item = cartItems.find((item) => item.id === id);
		return item?.quantity ?? 0;
	}

	function increaseCartQuantity(id: number) {
		const item = cartItems.find((item) => item.id === id);
		if (item) {
			item.quantity++;
		} else {
			cartItems.push({ id, quantity: 1 });
		}
		return setCartItems([...cartItems]);
	}

	function decreaseCartQuantity(id: number) {
		const item = cartItems.find((item) => item.id === id);
		if (item) {
			item.quantity--;
			if (item.quantity === 0) {
				removeFromCart(id);
			}
		}
		return setCartItems([...cartItems]);
	}

	function removeFromCart(id: number) {
		const item = cartItems.find((item) => item.id === id);
		if (item) {
			const index = cartItems.indexOf(item);
			cartItems.splice(index, 1);
		}
		return setCartItems([...cartItems]);
	}

	return (
		<ShoppingCartContext.Provider
			value={{
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
				openCart,
				closeCart,
				cartQuantity,
				cartItems,
			}}
		>
			<ShoppingCart isOpen={isOpen} />
			{children}
		</ShoppingCartContext.Provider>
	);
}
