import React from "react"
import { StyledButton } from "../../styles/Global"
import styled from "styled-components"
import { Product } from "../../types/types"

export const CartItemCount = ({ count }: Product) => {
	return (
		<div>
			<StyledButton>-</StyledButton>
			<StyledCount>{count}</StyledCount>
			<StyledButton>+</StyledButton>
		</div>
	)
}

export const StyledCount = styled.span`
	display: inline-block;
	margin: 0 15px;
`
