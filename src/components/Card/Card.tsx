import React from 'react'
import { styled } from 'styled-components'
import { StyledButton } from '../../styles/Global'
export const Card = ({ addToCart, id, title, description, price, thumbnail }) => {
	return (
		<StyledCard>
			<img src={thumbnail} alt={title} />
			<h2>{title}</h2>
			<p>{description}</p>
			<Options>
				<span>{price}$</span>
				<StyledButton>Add to cart</StyledButton>
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
