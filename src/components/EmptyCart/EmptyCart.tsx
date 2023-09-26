import { styled } from "styled-components";
import { Modal } from "../Modal/Modal";

export const EmptyCart = () => {
  return (
    <div>
      <Wrapper>
        <Modal>Whoooops! Empty Cart</Modal>
      </Wrapper>
    </div>
  );
};
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
`;
