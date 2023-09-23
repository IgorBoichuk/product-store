import React from 'react'
import { styled } from 'styled-components'
import { StyledButton } from '../../styles/Global'

export const Modal = ({ children }) => {
	return (
		<Wrapper>
			<Content>
				<Header>
					<h1>Cart</h1>
					<StyledButton>Close</StyledButton>
				</Header>
				<hr />
				<Childrens>{children}</Childrens>
			</Content>
		</Wrapper>
	)
}

export const Wrapper = styled.div`
	background-color: rgba(0, 0, 0, 0.4);
	position: fixed;
	inset: 0;
	z-index: 20;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const Content = styled.div`
	background-color: white;
	width: 90vw;
	height: 90vh;
`
export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 30px;
`
export const Childrens = styled.div`
	display: flex;
	flex-direction: column;

	padding: 10px 30px;
`
