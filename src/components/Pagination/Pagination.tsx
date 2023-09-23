import { styled } from 'styled-components'
import { StyledButton } from '../../styles/Global'

export const Pagination = () => {
	return (
		<Paginate>
			<StyledButton>Prev Page</StyledButton>
			<StyledButton>Next Page</StyledButton>
		</Paginate>
	)
}

const Paginate = styled.nav`
	display: flex;
	padding: 20px 0;
	gap: 20px;
	justify-content: center;
	align-items: center;
`
