import React from "react"
import { styled } from "styled-components"
import { StyledButton } from "../../styles/Global"
import { Product } from "../../types/types"
import { useAppDispatch } from "../../hooks/hook"
import { removeItem } from "../../Redux/Cart/slice"
import { toast } from "react-toastify"

export const CartItem = ({ id, title, price, thumbnail }: Product) => {
	const dispatch = useAppDispatch()

	const notify = () => toast(`Ви видалили товар ${title}`)
	const handleRemove = () => {
		dispatch(removeItem(id))
		notify()
	}
	return (
		<ItemCard>
			<img alt={title} src={thumbnail} />
			<span>{title}</span>
			<span>{price}$</span>
			<StyledButton onClick={handleRemove}>Delete</StyledButton>
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
