import React from 'react'
import { styled } from 'styled-components'
import { StyledButton } from '../../styles/Global'

export const Header = () => {
	return (
		<StyledHeader>
			<div>Product Store</div>
			<StyledButtonCard>Cart </StyledButtonCard>
		</StyledHeader>
	)
}
export const StyledHeader = styled.header`
	padding: 20px 150px;
	background-color: teal;
	position: sticky;
	top: 0;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	color: white;
	font-weight: bold;
	font-size: 2rem;
`
const StyledButtonCard = styled(StyledButton)`
	color: black;
	position: relative;
	background-color: white;
	&:hover {
		background-color: wheat;
	}
`
export const CartCount = styled.span`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25px;
	height: 25px;
	background-color: white;
	border: none;
	box-shadow: 2px 2px 3px 1px black;
	top: -15px;
	right: -15px;
	color: green;
	border-radius: 50%;
`
