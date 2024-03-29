import { createGlobalStyle, styled } from "styled-components";

export const Global = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
}
*{
  box-sizing: border-box;
}
`;
export const StyledButton = styled.button`
	padding: 12px 20px;
	background-color: ${props => (props.$active ? "blue" : "teal")};
	color: white;
	border: none;
	border-radius: 8px;
	box-shadow: 2px 2px 5px 1px gray;
	transition: all 0.1s ease-in;

	&:hover {
		cursor: pointer;
		background-color: darkblue;
	}
	&:active {
		box-shadow: none;
	}
	&:disabled {
		cursor: not-allowed;
		background-color: gray;
		box-shadow: none;
	}
`;
