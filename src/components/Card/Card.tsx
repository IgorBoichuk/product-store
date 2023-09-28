import { styled } from "styled-components"
import { StyledButton } from "../../styles/Global"
import { ProductModal } from "../../types/types"
import { useAppDispatch } from "../../hooks/hook"
import { addToCart } from "../../Redux/Cart/slice"
import { toast } from "react-toastify"
import { useRef } from "react"

type CardProps = {
	product: ProductModal
	open: (product: ProductModal) => void
}
export const Card = ({ product, open }: CardProps) => {
	const { title, description, price, thumbnail } = product
	const dispatch = useAppDispatch()
	const notify = () => toast(`Ви додали в корзину ${title}`)

	const click = () => {
		dispatch(addToCart(product))
		notify()
	}

	const ref = useRef(null)

	const showMore = (event: React.MouseEvent<HTMLLIElement>) => {
		event.target !== ref.current && open(product)
	}

	return (
		<StyledCard onClick={showMore}>
			<img src={thumbnail} alt={title} />
			<h2>{title}</h2>
			<p>{description}</p>
			<Options>
				<span>{price}$</span>

				<StyledButton ref={ref} onClick={click}>
					Add to cart
				</StyledButton>
			</Options>
		</StyledCard>
	)
}

export const StyledCard = styled.li`
	list-style: none;
	width: 400px;
	padding: 20px 10px;
	box-shadow: 2px 2px 4px 2px gray;
	height: 480px;
	position: relative;
	transition: all 0.5s ease;
	&:hover {
		box-shadow: 0px 0px 10px 5px teal;
		transform: translateY(-10px);
	}
	& img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}
`
export const Options = styled.div`
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	bottom: 20px;
	left: 20px;
	right: 20px;
	& span {
		font-weight: bold;
		font-size: 1.5rem;
	}
`
