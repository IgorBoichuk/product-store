import { styled } from "styled-components"
import { useAppSelector } from "../hooks/hook"
import { CartItem } from "../components/CartItem/CartItem"
import { EmptyCart } from "../components/EmptyCart/EmptyCart"

export const Cart = () => {
	const { list, totalPrice } = useAppSelector(state => state.cartList)

	return (
		<>
			{list.length ? <TotalPrice>Total Price: {totalPrice} $</TotalPrice> : <EmptyCart />}
			<CartList>
				<hr />
				{list.length && list.map(item => <CartItem {...item} key={item.id} />)}
			</CartList>
		</>
	)
}

export const CartList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 20px;
	overflow-y: scroll;
	max-height: 400px;
	overflow: hidden;
`

export const TotalPrice = styled.h1`
	text-align: center;
`
