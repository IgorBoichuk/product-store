import { styled } from "styled-components";
import { StyledButton } from "../../styles/Global";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { nextBtn, prevBtn } from "../../Redux/Pagination/slice";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const { limit, skip } = useAppSelector((state) => state.pagination);

  return (
    <Paginate>
      <StyledButton
        disabled={skip < limit && true}
        onClick={() => dispatch(prevBtn(limit))}
      >
        Prev Page
      </StyledButton>
      <StyledButton onClick={() => dispatch(nextBtn(limit))}>
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
