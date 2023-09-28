import { styled } from "styled-components"
import { useAppSelector } from "../../hooks/hook"
import { Product } from "../../types/types"
import { Card } from "../Card/Card"
import { Modal } from "../Modal/Modal"
import { useToggle } from "../../hooks/toggle"

export const ProductList = () => {
	const products: Product[] = useAppSelector(state => state.productsList.products)
	const { close, open, isOpen, currentItem } = useToggle()

	return (
		<div>
			<StyledList>
				{products.map(product => (
					<Card key={product.id} product={product} open={open} />
				))}
				{isOpen && (
					<Modal close={close}>
						<h2>{currentItem?.title}</h2>
						<p>{currentItem?.brand}</p>
						<p>{currentItem?.category}</p>
					</Modal>
				)}
			</StyledList>
		</div>
	)
}

export const StyledList = styled.ul`
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
	max-width: 90vw;
	padding: 30px 0;
`
