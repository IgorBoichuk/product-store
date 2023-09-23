import { styled } from 'styled-components'

export const Cart = () => {
	return (
		<>
			<TotalPrice>Total Price: {0}$</TotalPrice>
			<CartList>
				<hr />
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
