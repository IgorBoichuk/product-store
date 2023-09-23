import React from "react";
import { styled } from "styled-components";

export const ProductList = () => {
  return (
    <div>
      <StyledList></StyledList>
    </div>
  );
};

export const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 90vw;
  padding: 30px 0;
`;
