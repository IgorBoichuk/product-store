import React from 'react'
import { styled } from 'styled-components'
import { StyledButton } from '../../styles/Global'
export const CartItem = ({ id, title, price, thumbnail }) => {
	return (
		<ItemCard>
			<img alt={title} src={thumbnail} />
			<span>{title}</span>
			<span>{price}$</span>
			<StyledButton>Delete</StyledButton>
		</ItemCard>
	)
}
export const ItemCard = styled.li`
	display: flex;
	gap: 20px;
	align-items: center;
	justify-content: space-between;
	width: 80%;
	margin: 0 auto;
	border: 2px solid gray;
	padding: 10px 20px;
	border-radius: 8px;

	& img {
		width: 100px;
		aspect-ratio: 16/9;
		object-fit: cover;
	}
`
