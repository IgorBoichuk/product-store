import React from "react"
import { StyledButton } from "../../styles/Global"
import styled from "styled-components"
import { Product } from "../../types/types"
import { useAppDispatch } from "../../hooks/hook"
import { changeCountPLus } from "../../Redux/Cart/slice"

export const CartItemCount = ({ id, count }: Product) => {
	const dispatch = useAppDispatch()
	return (
		<div>
			<StyledButton>-</StyledButton>
			<StyledCount>{count}</StyledCount>
			<StyledButton onClick={() => dispatch(changeCountPLus(id))}>+</StyledButton>
		</div>
	)
}

export const StyledCount = styled.span`
	display: inline-block;
	margin: 0 15px;
`
