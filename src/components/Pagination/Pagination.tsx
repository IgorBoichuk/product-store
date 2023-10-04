import { styled } from "styled-components";
import { StyledButton } from "../../styles/Global";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { changePage, nextBtn, prevBtn } from "../../Redux/Pagination/slice";
import { current } from "@reduxjs/toolkit";

export const Pagination = () => {
	const dispatch = useAppDispatch();
	const { limit, skip, pages, currentPage } = useAppSelector(state => state.pagination);
	const newPageArr = Array(pages)
		.fill(1)
		.map((_, idx) => idx + 1);
	console.log(newPageArr);

	return (
		<Paginate>
			<StyledButton disabled={skip < limit} onClick={() => dispatch(prevBtn(limit))}>
				Prev Page
			</StyledButton>
			{/* {newPageArr.map(page => (
				<StyledButton $active={currentPage === page} onClick={() => dispatch(changePage(page))}>
					{page}
				</StyledButton>
			))} */}
			<StyledButton onClick={() => dispatch(changePage(currentPage - 2))}>{currentPage - 2}</StyledButton>
			<StyledButton onClick={() => dispatch(changePage(currentPage))}>{currentPage}</StyledButton>
			<StyledButton onClick={() => dispatch(changePage(currentPage + 2))}>{currentPage + 2}</StyledButton>
			<StyledButton disabled={currentPage === pages} onClick={() => dispatch(nextBtn(limit))}>
				Next Page
			</StyledButton>
		</Paginate>
	);
};

const Paginate = styled.nav`
	display: flex;
	padding: 20px 0;
	gap: 20px;
	justify-content: center;
	align-items: center;
`;
