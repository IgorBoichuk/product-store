import React from 'react'
import { styled } from 'styled-components'

export const EmptyCart = () => {
	return <div></div>
}
export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 60vh;
	overflow: hidden;
	flex-direction: column;

	& img {
		width: 40%;
		height: 40%;
	}
`
